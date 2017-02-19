/**
 * Created by Administrator on 2017/1/30.
 */
//trackball
/*define(function (){
    function CameraControl(){
        this.camera=null;
        this.controls=null;

    }
    CameraControl.prototype={
        constructor: CameraControl,
            Init: function() {
            this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 8000 );
            this.camera.position.z = 3000;
            this.controls = new THREE.TrackballControls( this.camera );
            this.controls.rotateSpeed = 2.0;
            this.controls.zoomSpeed = 2.2;
            this.controls.panSpeed = 1.6;
            this.controls.noZoom = false;
            this.controls.noPan = false;
            this.controls.staticMoving = true;
            this.controls.dynamicDampingFactor = 0.3;
            this.controls.keys = [ 65, 83, 68 ];
        }
    };


    return {
        CameraControl: CameraControl
    };
});*/


//pointerlock
define(function(){
    var controls;
    var velocity=new THREE.Vector3();
    var camera;

    var blocker = document.getElementById( 'blocker' );
    var instructions = document.getElementById( 'instructions' );

    var mouse=new THREE.Vector2();
    var movement=new THREE.Vector2();
    var raycaster=new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(), 0, 1000);

    //
    var prevTime = performance.now();

    // http://www.html5rocks.com/en/tutorials/pointerlock/intro/ 第一人称初始化
    var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
    if ( havePointerLock ) {
        var element = document.body;
        var pointerlockchange = function ( event ) {
            if ( document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element ) {
                controlsEnabled = true;
                controls.enabled = true;
                blocker.style.display = 'none';
                GOT.gameStart=true;
                console.log("游戏开始"+GOT.gameStart);
            } else {
                controls.enabled = false;
                blocker.style.display = '-webkit-box';
                blocker.style.display = '-moz-box';
                blocker.style.display = 'box';
                instructions.style.display = '';
                GOT.gameStart=false;
                console.log("游戏暂停"+GOT.gameStart);
            }
        };

        var pointerlockerror = function ( event ) {
            instructions.style.display = '';
        };

        // Hook pointer lock state change events
        document.addEventListener( 'pointerlockchange', pointerlockchange, false );
        document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
        document.addEventListener( 'pointerlockerror', pointerlockerror, false );
        document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
        document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

        instructions.addEventListener( 'click', function ( event ) {
            instructions.style.display = 'none';
            // Ask the browser to lock the pointer
            element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
            element.requestPointerLock();
        }, false );
    } else {
        instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';
        //document.removeEventListener('mousemove',moveCallback,false);
    }

    //第一人称控制实现
    var controlsEnabled = false;
    var moveForward = false;
    var moveBackward = false;
    var moveLeft = false;
    var moveRight = false;
    var canJump = false;

    velocity = new THREE.Vector3();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
    controls = new THREE.PointerLockControls( camera );

    //初始位置
    controls.getObject().position.set(-700,120,800);


        var onKeyDown = function ( event ) {
            switch ( event.keyCode ) {

                case 38: // up
                case 87: // w
                    moveForward = true;
                    break;

                case 37: // left
                case 65: // a
                    moveLeft = true; break;

                case 40: // down
                case 83: // s
                    moveBackward = true;
                    break;

                case 39: // right
                case 68: // d
                    moveRight = true;
                    break;

                case 32: // space
                    if ( canJump === true ) velocity.y += 500;
                    canJump = false;
                    break;
            }
        };

        var onKeyUp = function ( event ) {

            switch( event.keyCode ) {
                case 38: // up
                case 87: // w
                    moveForward = false;
                    break;
                case 37: // left
                case 65: // a
                    moveLeft = false;
                    break;

                case 40: // down
                case 83: // s
                    moveBackward = false;
                    break;

                case 39: // right
                case 68: // d
                    moveRight = false;
                    break;
            }
        };
        //在第一人称下客户端mouse不起作用,只有退出第一人称才起作用
        function onMouseMove(event){
            event.preventDefault();
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y =  ( event.clientY / window.innerHeight ) * 2 + 1;
          //  console.log(mouse.x);

        }
        //在第一人人称下鼠标点移动的相对距离
        function moveCallback(e) {
          movement.x += e.movementX ||
                e.mozMovementX          ||
                e.webkitMovementX       ||
                0;
          movement.y += e.movementY ||
                e.mozMovementY      ||
                e.webkitMovementY   ||
                0;
           // console.log("movment: "+movement.x);
         }

        document.addEventListener( 'keydown', onKeyDown, false );
        document.addEventListener( 'keyup', onKeyUp, false );
        document.addEventListener('mousemove',moveCallback,false);
        document.addEventListener('mousemove',onMouseMove,false);


    //创建构造器
    var raycaster= new THREE.Raycaster();
    var velocity = new THREE.Vector3();
    var direction= new THREE.Vector3();
    var pickRaycaster= new THREE.Raycaster();

    pickRaycaster.near=0;
    pickRaycaster.far=150;

    //object
    function PersonalControl(){
        this.camera= camera;
        this.controls= controls;
        this.velocity= velocity;
        this.pickRaycaster=pickRaycaster;
        this.movement=movement;

    }

    PersonalControl.prototype={
        constructor: PersonalControl,
        //碰撞检测
        controlsAnimation : function(objectarray){
            if ( controlsEnabled ) {
                var time = performance.now();
                var delta = ( time - prevTime ) / 1000;

                // 碰撞检测
                raycaster.near=0;
                raycaster.far=10;

                var axis=new THREE.Vector3(0,1,0);
                for(var i=0; i<4; i++){
                    //获得摄像机的方向在水平面的锤子投影,标准化,然后逆时针分别旋转90度
                    raycaster.set( this.controls.getObject().position, this.camera.getWorldDirection().setY(0).normalize().applyAxisAngle ( axis, Math.PI/2*i));
                    var intersects=raycaster.intersectObjects(objectarray);
                    if(intersects.length>0){
                        if(i===0){
                            //console.log("正面碰撞");
                            moveForward=false;
                            this.velocity.z =0;
                        }else if(i===2 ){
                            //console.log("背面碰撞");
                            moveBackward=false;
                            this.velocity.z=0;
                        }else if(i===1){
                            //console.log("左侧碰撞");
                            moveLeft=false;
                            this.velocity.x=0;
                        }else if(i===3){
                            //console.log("右侧碰撞");
                            moveRight=false;
                            this.velocity.x=0;
                        }
                    }
                }
                //移动
                this.velocity.x -= this.velocity.x * 10.0 * delta;
                this.velocity.z -= this.velocity.z * 10.0 * delta;

                this.velocity.y -= 9.8 * 130.0 * delta; // 100.0 = mass

                if ( moveForward ) this.velocity.z -= 3000.0 * delta;
                if ( moveBackward ) this.velocity.z += 3000.0 * delta;
                if ( moveLeft ) this.velocity.x -= 3000.0 * delta;
                if ( moveRight ) this.velocity.x += 3000.0 * delta;

                //通过相对距离来移动,相对距离不变就不会移动,所以用速度这个词不合适?
                this.controls.getObject().translateX( this.velocity.x * delta );
                this.controls.getObject().translateY( this.velocity.y * delta );
                this.controls.getObject().translateZ( this.velocity.z * delta );

                if ( this.controls.getObject().position.y < 120 ) {
                    this.velocity.y = 0;
                    this.controls.getObject().position.y = 120;
                    canJump = true;
                }
                prevTime = time;

            }
        },
        //选择射线更新
        pickRaycasterUpdate: function(){
            this.pickRaycaster.set(controls.getObject().position,camera.getWorldDirection());
        }
    };

   return {
      PersonalControl: PersonalControl

   } ;
});










