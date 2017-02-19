/**
 * Created by Administrator on 2017/2/18.
 */
define (function(){
    function MoveObjects(){
        var promise=GOT.objPromise("models/moveobjects.mtl","models/moveobjects.obj");
        this.promise=promise;
    }
    MoveObjects.prototype={
        constructor:MoveObjects,
        asyncObj: function(scene){
            this.promise.then(function(value){
                scene.add(value);

            })

        }
    };
    return {
        MoveObjects: MoveObjects
    };
});
