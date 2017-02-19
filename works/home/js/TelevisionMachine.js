/**
 * Created by Administrator on 2017/2/14.
 */
define (function(){
    function TelevisionMachine(){

        //obj模型
        var promise=GOT.objPromise('models/televisionmachine.mtl','models/televisionmachine.obj');

        var video = document.getElementById( 'video' );
        var texture = new THREE.VideoTexture( video );
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
        var geometry=new THREE.PlaneGeometry(134.48,49.48);
        var material=new THREE.MeshLambertMaterial({
            color: 0xffffff,
            map:texture

        });
        var mesh=new THREE.Mesh(geometry,material);

        this.promise=promise;
        this.lock=false;
        this.open=false;
        this.video=video;
        this.changeObject={
            mesh:mesh,
            tipsInfo: new GOT.TipsInfo("按E开关")
        }

    }
    TelevisionMachine.prototype={
        constructor:TelevisionMachine,

        asyncObj: function(scene,changeObject){
            this.promise.then(function(value){
                //console.log(value);
                //重置几何中心
               // value.add(changeObject.mesh);
                var box=new THREE.Box3();
                box.setFromObject(value.children[0]);
                value.children[0].geometry.center();
               value.position.copy(box.getCenter());
                changeObject.mesh.position.copy(value.position);
                changeObject.mesh.position.z+=5.5;
                changeObject.mesh.position.y+=2;
                scene.add(value);
               // value.position.set(-224,-95,225);
            });
        },

        televisionMachinePick: function(raycaster){
            var intersects=raycaster.intersectObjects([this.changeObject.mesh]);
            if(intersects.length>0){
               // console.log("选中");
                this.lock=true;
                this.changeObject.tipsInfo.showInfo();
            }else{
                this.lock=false;
                this.changeObject.tipsInfo.hideInfo();
            }
        },

        televisionMachineEvent: function(event){
            if(event.keyCode===69){
                if(this.lock){
                    if(this.open){
                        this.open=false;
                        this.video.pause();
                        this.video.load();
                       // console.log("关闭");
                    }else{
                        this.open=true;
                        this.video.play();
                       // console.log("打开");
                    }
                }
            }
        }
    };
    return {
        TelevisionMachine: TelevisionMachine
    };
});