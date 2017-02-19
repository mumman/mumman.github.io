/**
 * Created by Administrator on 2017/2/14.
 */
define(function(){
    function LightSystem(){

        //环境光
        var ambient = new THREE.AmbientLight(0x816852,1);

        var directionalLight = new THREE.DirectionalLight( 0xffeedd,0.3 );
        directionalLight.position.set( 0, 0, 5000 );


        var directionalLight1 = new THREE.DirectionalLight( 0xffffff,0.3 );
        directionalLight1.position.set( 5000, 5000, 5000 );


        //obj模型

        var promise=GOT.objPromise('models/lightsystem.mtl','models/lightsystem.obj');

        //灯泡
        var lights={};

        function createLight(position,power){
            var material = new THREE.MeshStandardMaterial( {
                emissive: 0xffffee,
                emissiveIntensity: 1,
                color: 0x000000
            });
            var geometry=new THREE.SphereGeometry(3,8,8);

           var light=new THREE.PointLight( 0xFAE897, 0, 250,2 );
            light.power=power;
            light.add( new THREE.Mesh( geometry,material ));
            light.position.copy(position);
            // lights.light1.castShadow = true;
            return light;
        }

        lights.light1=createLight(new THREE.Vector3(-365.742, 269.95, 278.06),200);
        lights.light2=createLight(new THREE.Vector3(85.15, 269.95, 339.6),50);
        lights.light3=createLight(new THREE.Vector3(141.68, 269.95, 71.59),50);
        lights.light4=createLight(new THREE.Vector3(-188.91, 269.95, -75.55),50);
        lights.light5=createLight(new THREE.Vector3(-412.68, 216, -72.62),50);
        lights.light6=createLight(new THREE.Vector3(-593.20, 216, -218.84),40);

        lights.light7=createLight(new THREE.Vector3(-354, 269.95, -318),40);
        lights.light8=createLight(new THREE.Vector3(-622, 195, 205),10);
        lights.light9=createLight(new THREE.Vector3(-225, 101, 353.5),30);


        this.ambient=ambient;
        this.directionalLight=directionalLight;
        this.directionalLight1=directionalLight1;

        this.promise=promise;
        this.lights=lights;
        this.changeObject={
            lock:false,
            currentPick:null,
            tipsInfo:new GOT.TipsInfo("按E开关")

        };

    }

    LightSystem.prototype={
        constructor: LightSystem,

        asyncObj: function(scene){
            this.promise.then(function(value){
               // console.log(value);
                scene.add(value);
            });
        },

        lightSystemPick: function(raycaster,changeObject){
            this.promise.then(function(value){
                var intersects=raycaster.intersectObjects(value.children);
                if(intersects.length>0){
                    //console.log(intersects[0].object.name);
                    changeObject.currentPick=intersects[0].object;
                    changeObject.lock=true;
                    changeObject.tipsInfo.showInfo();
                }else{
                    changeObject.lock=false;
                    changeObject.currentPick=null;
                    changeObject.tipsInfo.hideInfo();
                }
            });
        },

        lightSystemEvent: function(event){
                if(event.keyCode===69){
                    if(this.changeObject.lock){
                        //console.log(this.changeObject.currentPick.name);
                        var lightname=this.changeObject.currentPick.name;

                        if(this.lights[lightname].power){
                            this.lights[lightname].power=0;
                            if(!(lightname==="light8"||lightname==="light9")){
                                this.changeObject.currentPick.material.materials[0].color.copy(new THREE.Color(0xFF0000));
                            }


                        }else{
                            //this.lights[lightname].power=120;
                            if(!(lightname==="light8"||lightname==="light9")){
                                this.changeObject.currentPick.material.materials[0].color.copy(new THREE.Color(0x000000));
                            }

                            switch (lightname){
                                case "light1":
                                    this.lights[lightname].power=200;
                                    break;
                                case "light2":
                                    this.lights[lightname].power=50;
                                    break;
                                case "light3":
                                    this.lights[lightname].power=50;
                                    break;
                                case "light4":
                                    this.lights[lightname].power=50;
                                    break;
                                case "light5":
                                    this.lights[lightname].power=50;
                                    break;
                                case "light6":
                                    this.lights[lightname].power=40;
                                    break;
                                case "light7":
                                    this.lights[lightname].power=40;
                                    break;
                                case "light8":
                                    this.lights[lightname].power=10;
                                    break;
                                case "light9":
                                    this.lights[lightname].power=30;
                                    break;
                            }

                        }
                    }
                }
        }

    };

    return {
        LightSystem: LightSystem

    }
});