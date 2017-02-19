/**
 * Created by Administrator on 2017/2/17.
 */
define (function(){
    function FixedObjects(){
        var promise=GOT.objPromise("models/fixedobjects.mtl","models/fixedobjects.obj");
        this.promise=promise;
    }
    FixedObjects.prototype={
        constructor:FixedObjects,
        asyncObj:function(scene){
            this.promise.then(function(value){
                scene.add(value);
            })

        }
    };
    return {
        FixedObjects: FixedObjects
    };
});