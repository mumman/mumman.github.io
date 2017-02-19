/**
 * Created by Administrator on 2017/2/9.
 */
define(function(){
    function FlashLight(){
        var spotLight=new THREE.SpotLight(0xffffff);
        spotLight.angle = Math.PI / 10;
        spotLight.intensity=0;
        spotLight.penumbra = 0.2;
        spotLight.decay = 2;
        spotLight.distance = 1000;

        //spotLight.castShadow = true;
        //修改投影贴图代替产生阴影
      /*  spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;*/
       // spotLight.shadow.camera.near = 1;
       // spotLight.shadow.camera.far = 100;

        var targetObject = new THREE.Object3D();

        this.spotLight=spotLight;
        this.targetObject=targetObject;

    }

    FlashLight.prototype={
        constructor: FlashLight,
        flashLightMove: function(direction,position){

           this.targetObject.position.copy(direction);
           this.targetObject.position.add(position);

           this.spotLight.target=this.targetObject;
           this.spotLight.position.copy( position );

        },
        lightSwitch: function(event){
            if(event.keyCode === 70){
                if(this.spotLight.intensity>0){
                    this.spotLight.intensity=0;
                }else{
                    this.spotLight.intensity=3;
                }
            }
        }

    };

   return {
       FlashLight: FlashLight

   };
});

