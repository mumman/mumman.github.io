/**
 * Created by Administrator on 2017/1/31.
 */
//house of model
define (function(){
    function WallWindow(){
        var promise=GOT.objPromise("models/house.mtl","models/house.obj");
       // var promise=GOT.jsonPromise("models/house.js");
        this.promise=promise;
    }
    WallWindow.prototype={
        constructor:WallWindow,
        asyncObj:function(scene){
           this.promise.then(function(value){
              scene.add(value);
           });
        }
    };

    return {
        WallWindow: WallWindow
    };
});

















