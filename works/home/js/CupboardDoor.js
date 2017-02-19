/**
 *
 * Created by Administrator on 2017/2/18.
 */
define (function(){
    function CupboardDoor(){
        var promise=GOT.objPromise("models/door.mtl","models/door.obj");

        this.promise=promise;
        this.open=false;
        this.close=true;
        this.changeObject={
            lock:false,
            currentPick:null,
            tipsInfo: new GOT.TipsInfo("按E开关")
        };



    }
    CupboardDoor.prototype={
        constructor:CupboardDoor,
        asyncObj:function(scene){
            this.promise.then(function(value){

                for(var i=0;i<value.children.length;i++){
                    var box=new THREE.Box3();
                    box.setFromObject(value.children[i]);
                    value.children[i].geometry.center();
                    value.children[i].geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -box.getSize().x/2, 0, -box.getSize().z/2+6 ) );
                    value.children[i].position.copy(box.getCenter()).x +=box.getSize().x/2;
                    value.children[i].position.z += box.getSize().z/2;
                }
                scene.add(value);
            })
        },
        cupboardDoorPick: function(raycaster,changeObject){
            this.promise.then(function(value){
                var intersects=raycaster.intersectObjects(value.children);
                if(intersects.length>0){

                    changeObject.currentPick=intersects[0];
                    changeObject.lock=true;
                    changeObject.tipsInfo.showInfo();
                }else{
                    changeObject.lock=false;

                    changeObject.tipsInfo.hideInfo();
                }
            });
        },
        cupboardDoorEvent: function(event){
            if(event.keyCode===69){
                if(this.changeObject.lock&&this.close){
                    new TWEEN.Tween(this.changeObject.currentPick.object.rotation)
                    .to({y:-Math.PI/2},1000)
                    .start();
                    this.open=true;
                }
                if(this.changeObject.lock&&this.open){
                    if(!(this.changeObject.currentPick.object.rotation.y===0)){
                        new TWEEN.Tween(this.changeObject.currentPick.object.rotation)
                        .to({y:0},1000)
                        .start();
                        this.open=false;
                        this.close=true;
                    }
                }
            }
        }



    };
    return {
        CupboardDoor: CupboardDoor
    };
});