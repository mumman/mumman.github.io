/**
 * Created by Administrator on 2017/2/12.
 */
define(function(){
    function WoodenDoor(){
        var promise=GOT.objPromise('models/woodendoor.mtl','models/woodendoor.obj');

        this.promise=promise;
        this.open=false;
        this.close=true;
        this.changeObject={
            lock:false,
            currentPick:null,
            tipsInfo: new GOT.TipsInfo("按E开关")
        };

    }
    WoodenDoor.prototype={
        constructor: WoodenDoor,
        asyncObj: function(scene){
           this.promise.then(function(value){

                //对外部导入的模型,重新设置几何中心,并对门模型锚点修改
               for(var i=0;i<value.children.length;i++){
                   var box=new THREE.Box3();
                   box.setFromObject(value.children[i]);
                   value.children[i].geometry.center();

                   //偏移所有几何点位置的方式改变锚点位置
                   //由于门把手的存在box.getSize()计算可能不准确,需要调整下
                   value.children[i].geometry.applyMatrix( new THREE.Matrix4().makeTranslation( -box.getSize().x/2-1, 0, -box.getSize().z/2+6 ) );
                   value.children[i].position.copy(box.getCenter()).x +=box.getSize().x/2+1;
                   value.children[i].position.z += box.getSize().z/2-6;
               }
               //因为有些门方向不一样

             // console.log(value.children[0]);
              // console.log(box.getCenter());
               //console.log(box.getSize());
              scene.add(value);
           });
        },
        woodenDoorPick: function(raycaster,changeObject){
            this.promise.then(function(value){
               var intersects=raycaster.intersectObjects(value.children);
                if(intersects.length>0){
                   // console.log("选中木门");
                    changeObject.currentPick=intersects[0];
                    changeObject.lock=true;
                    changeObject.tipsInfo.showInfo();
                }else{
                    changeObject.lock=false;
                    //
                    //changeObject.currentPick=null;
                    changeObject.tipsInfo.hideInfo();
                }
            });
        },
        woodenDoorEvent: function(event){
            if(event.keyCode===69){
                //console.log(this.lockObject.lock);
                if(this.changeObject.lock&&this.close){
                    new TWEEN.Tween(this.changeObject.currentPick.object.rotation)
                    .to({y:-Math.PI/2},2000)
                    .start();
                    this.open=true;
                    //this.close=false;
                   // console.log("开门");
                }
                if(this.changeObject.lock&&this.open){
                    //如果门是关闭就不能再关.
                    if(!(this.changeObject.currentPick.object.rotation.y===0)){
                        new TWEEN.Tween(this.changeObject.currentPick.object.rotation)
                        .to({y:0},2000)
                        .start();
                        this.open=false;
                        this.close=true;
                       // console.log("关门");
                    }
                }
            }
        }
    };

    return {
        WoodenDoor: WoodenDoor

    };
});

