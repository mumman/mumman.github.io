/**
 * Created by Administrator on 2017/2/18.
 */
/**
 *
 * Created by Administrator on 2017/2/18.
 */
define (function(){
    function WardrobeDoor(){
        var promise=GOT.objPromise("models/wardrobedoor.mtl","models/wardrobedoor.obj");
        this.promise=promise;
        this.open=false;
        this.open1=false;
        this.close=true;

        this.changeObject={
            lock:false,
            currentPick:null,
            tipsInfo: new GOT.TipsInfo("按E开关")
        };

    }
    WardrobeDoor.prototype={
        constructor:WardrobeDoor,
        asyncObj:function(scene){
            this.promise.then(function(value){

                for(var i=0;i<value.children.length;i++){
                    var box=new THREE.Box3();
                    box.setFromObject(value.children[i]);
                    value.children[i].geometry.center();
                    value.children[i].position.copy(box.getCenter());
                }

                scene.add(value);
            })
        },
        wardrobeDoorPick: function(raycaster,changeObject){
            this.promise.then(function(value){
                var intersects=raycaster.intersectObjects(value.children);
                if(intersects.length>0){

                    changeObject.currentPick=intersects[0];
                    changeObject.lock=true;
                    changeObject.tipsInfo.showInfo();
                  // console.log(changeObject.currentPick.object);
                }else{
                    changeObject.lock=false;

                    changeObject.tipsInfo.hideInfo();
                }
            });
        },
        wardrobeDoorEvent: function(event){
            if(event.keyCode===69&&this.changeObject.lock){
                if(this.changeObject.currentPick.object.name==="Door_1_002"){
                    if(!this.open){
                        new TWEEN.Tween(this.changeObject.currentPick.object.position)
                        .to({x:-170},1000)
                        .start();
                        this.open=true;

                    }else{
                        new TWEEN.Tween(this.changeObject.currentPick.object.position)
                        .to({x:-231.46},1000)
                        .start();
                        this.open=false;
                    }
                }

                if(this.changeObject.currentPick.object.name==="Door_1_001"){
                    if(!this.open1){
                        new TWEEN.Tween(this.changeObject.currentPick.object.position)
                        .to({z:48},1000)
                        .start();
                        this.open1=true;
                    }else{
                        new TWEEN.Tween(this.changeObject.currentPick.object.position)
                        .to({z:-12.64},1000)
                        .start();
                        this.open1=false;
                    }
                }





            }
        }



    };
    return {
        WardrobeDoor: WardrobeDoor
    };
});