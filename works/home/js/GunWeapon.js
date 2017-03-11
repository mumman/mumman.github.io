/**
 * Created by Administrator on 2017/2/9.
 */
/**
 * Created by Administrator on 2017/2/8.
 */
define(['BulletBall'],function(BulletBall){
    //准心实现


    //pointer
    function canvasDraw() {
        var canvas = document.createElement('canvas');
        canvas.width = 50;
        canvas.height = 50;
        var ctx=canvas.getContext('2d');
        ctx.strokeStyle="#00FF00";
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(25,0);
        ctx.lineTo(25,20);

        ctx.moveTo(0,25);
        ctx.lineTo(20,25);

        ctx.moveTo(25,50);
        ctx.lineTo(25,30);

        ctx.moveTo(50,25);
        ctx.lineTo(30,25);

        ctx.stroke();

        return canvas;
    }

    var crossHairCanvas=canvasDraw();
    document.body.appendChild(crossHairCanvas);
    crossHairCanvas.style.position="fixed";
    crossHairCanvas.style.left="50%";
    crossHairCanvas.style.top="50%";
    crossHairCanvas.style.transform=" translate(-50%,-50%)";


    //对象
    function GunWeapon(){
        this.crossHairCanvas=crossHairCanvas;
        this.isFire=false;
        this.bulletArray=[];
        this.speed=100;
        this.range=1000;
    }
    GunWeapon.prototype={
        constructor: GunWeapon,
        gunFire: function(origin,direction,scene){
            this.isFire=true;
            var bulletBall=new BulletBall.BulletBall(origin,direction);
            bulletBall.createMesh();
            this.bulletArray.push(bulletBall);
            scene.add(bulletBall.mesh);
            //console.log("发射!!!");
            //console.log("子弹数组:"+this.bulletArray.length);
            //console.log("scene:"+scene.children.length);

        },
        fireIng: function(scene,delta){
            if(this.isFire&&this.bulletArray.length>0){
                for(var i=0; i<this.bulletArray.length; i++){
                    this.bulletArray[i].mesh.position.addScaledVector(this.bulletArray[i].direction, delta*this.speed);
                    var distance=this.bulletArray[i].origin.distanceTo(this.bulletArray[i].mesh.position);
                    if(distance>this.range){
                        //shift()	删除并返回数组的第一个元素。
                      scene.remove(this.bulletArray.shift().mesh);
                    }

                    if(this.bulletArray.length===0){
                        this.isFire=false;
                       // console.log("子弹消失");
                    }
                }
            }
        }





    };


    return {
        GunWeapon: GunWeapon

    };
});
