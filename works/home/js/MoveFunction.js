/**
 * Created by Administrator on 2017/2/10.
 */
define(function(){

    function MoveFunction(){
        this.moveArray=[];
        this._isDrag=false;
        // this._velocity=new THREE.Vector3(0,0,0);
        //锁定当前选择,防止镜头移动太快,就没有选中物体,物体则不能跟随
        this.currentPick=null;
        //锁定状态

        this._lock=false;
        //this._currentColor;
        this._moveInfo=new GOT.TipsInfo("按E拾取");


    }

    MoveFunction.prototype={
        constructor: MoveFunction,
        //键盘事件
        moveSwitch: function(event){
            if(event.keyCode===69){
                //可以拖动
                if(!this._isDrag && this._lock){
                    this._isDrag=true;

                }else{
                    this._isDrag=false;

                }
            }
        },
        dragIng: function(raycaster, origin, direction){

            var intersectsMove=raycaster.intersectObjects(this.moveArray);
            if(intersectsMove.length>0){
                //  console.log("拖放物体可以被选中");
                this.currentPick=intersectsMove[0];
                this._lock=true;
                //this._currentColor=this.currentPick.object.material.color;
                this.currentPick.object.material.color.copy(new THREE.Color(0xff0000));
                this._moveInfo.showInfo();

            }else{
                if(this.currentPick){
                    this.currentPick.object.material.color.copy(new THREE.Color(0x051A07));
                }
                this._lock=false;
                this._moveInfo.hideInfo();
            }
            if(this._isDrag && !(this.currentPick===null)){
                this.currentPick.object.position.copy(direction.multiplyScalar(100));
                this.currentPick.object.position.add(origin);
                this._moveInfo.hideInfo();
                //console.log("拖放中");
            }

        },
        //所有物体一直在下降
        dropIng: function(delta){
            for(var i=0; i<this.moveArray.length; i++){
                this.moveArray[i].position.y-=delta*100;
                if(this.moveArray[i].position.y< 0){
                    this.moveArray[i].position.y= 0;
                    //this._isDrop=false;

                }
            }
        }
    };

    return {
        MoveFunction: MoveFunction


    };
});
