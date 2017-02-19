/**
 * Created by Administrator on 2017/2/11.
 */
define(function(){
    function DoorPlate(){
        var promise=GOT.objPromise('models/doorplate.mtl','models/doorplate.obj');

        //提醒标记
        var cube = new THREE.Mesh( new THREE.BoxGeometry( 5, 10, 5 ), new THREE.MeshBasicMaterial( {
            color: 0x00ff00,
            wireframe:true
        } ) );
        var cone = new THREE.Mesh( new THREE.ConeGeometry( 5, 10, 4 ), new THREE.MeshBasicMaterial( {
            color: 0xffff00,
            wireframe:true
        } ) );
        cone.position.y=-10;
        cone.rotateX(Math.PI);
        cone.rotateY(Math.PI/4);

        var group=new THREE.Group();
        group.add(cube,cone);
        group.position.set(-520,115,540);

        //按钮
        function canvasDraw(){
            var canvas=document.createElement('canvas');
            canvas.width=512;
            canvas.height=512;
            var ctx=canvas.getContext('2d');
            ctx.fillStyle="#FFF";
            ctx.font='240px serif';
            //ctx.textAlign="center";
            ctx.fillText('E', 200, 300);
            return canvas;
        }

        var texture=new THREE.CanvasTexture(canvasDraw());
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 1, 1 );

        weiboButton=new THREE.Mesh(new THREE.BoxGeometry(18,5,2),new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            //wireframe:true,
            map: texture
            //blending:  THREE.AdditiveBlending,

        }));
        weiboButton.position.set(-520,68,554);
        weiboButton.rotateX(-50/180*Math.PI);

        this._promise=promise;
        this.signalGroup=group;
        this.weiboButton=weiboButton;
        this._step=0;
        //因为是promise操作,我们在异步运行中修改对象,用对象进行值的传递,因为对象是引用传递,所以后面可以取回,但感觉不合理,如果程序运行太慢了,就会不灵.
        this.changeObject={
            lock: false
        };
    }
    DoorPlate.prototype={
        constructor: DoorPlate,
        asyncObj:function(scene){
            this._promise.then(function(value){
                scene.add(value);
                //console.log(value);
            });
        },
        doorPlateAnimation: function(){
            this._step+=0.1;
            this.signalGroup.rotation.y +=0.1;
            this.signalGroup.children[0].position.y = 10*Math.sin(this._step);
            this.signalGroup.children[1].position.y = -12+12*Math.sin(this._step);
        },
        doorPlatePick: function(raycaster,changeObject){
            this._promise.then(function(value){
                var intersects=raycaster.intersectObjects(value.children);
                if(intersects.length>0){
                   // console.log("选择门牌");

                    changeObject.lock=true;
                    value.children[0].material.materials[1].color=new THREE.Color(0xff0000);
                    //this.weiboButton.position.z=558;

                    new TWEEN.Tween( weiboButton.position )
                    .to( {z:558,y: 68}, 400 )
                    .start();


                }else{
                    value.children[0].material.materials[1].color=new THREE.Color(0x051A07);
                   // this.weiboButton.position.z=554;
                    new TWEEN.Tween( weiboButton.position )
                    .to( {z:554, y:67}, 400 )
                    .start();
                    changeObject.lock=false;
                }

            });

        },
        doorPlateEvent:function(event){
            if(event.keyCode===69){
                if(this.changeObject.lock){
                    console.log("微博打开");
                   // window.open ('http://weibo.com/u/1295998082', '', 'height=512, width=1024, top=0,left=0, toolbar=yes, menubar=yes, scrollbars=yes, resizable=no,location=yes, status=yes')
                    window.open('http://weibo.com/u/1295998082','','height=512,width=1024,scrollbars=yes,status=yes,menubar=yes');
                }
            }
        }


    };

    return {
        DoorPlate: DoorPlate
    };
});


