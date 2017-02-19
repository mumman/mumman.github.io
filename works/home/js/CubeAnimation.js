/**
 * Created by Administrator on 2017/2/6.
 */

define (function(){
    function CubeAnimation(){
        var promise=GOT.jsonAnimationPromise("models/cube.animation.js");
        this.promise=promise;

    }
    CubeAnimation.prototype={
        constructor:CubeAnimation,
        asyncJson: function(scene){
            this.promise.then(function(value){
                scene.add(value.mesh);
            });
        },
        cubeAnimationAnimation:function(delta){
            this.promise.then(function(value){
                value.mixer.update(delta);
            });
        }

    };
    return {
        CubeAnimation: CubeAnimation
    };
});















