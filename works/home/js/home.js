/**
 * Created by Administrator on 2017/1/30.
 */
require.config({
    paths: {
        "PersonalControl": "PersonalControl",
        "WallWindow": "WallWindow",
        "CubeAnimation": "CubeAnimation",
        "GunWeapon":"GunWeapon",
        "PanoramaCube":"PanoramaCube",
        "FlashLight":"FlashLight",
        "MoveFunction":"MoveFunction",
        "DoorPlate":"DoorPlate",
        "WoodenDoor":"WoodenDoor",
        "MusicPlayer":"MusicPlayer",
        "LightSystem":"LightSystem",
        "TelevisionMachine":"TelevisionMachine",
        "CurveAnimation":"CurveAnimation",
        "FixedObjects":"FixedObjects",
        "CupboardDoor":"CupboardDoor",
        "WardrobeDoor":"WardrobeDoor",
        "MoveObjects":"MoveObjects",
        "Helper":"Helper"
    }
});

require(['PersonalControl','WallWindow','CubeAnimation','GunWeapon','PanoramaCube','FlashLight','MoveFunction','DoorPlate',
            'WoodenDoor','MusicPlayer','LightSystem','TelevisionMachine','CurveAnimation','FixedObjects','CupboardDoor',
            'WardrobeDoor','MoveObjects','Helper'],
    function (PersonalControl, WallWindow, CubeAnimation,GunWeapon ,PanoramaCube,FlashLight,MoveFunction,DoorPlate,
            WoodenDoor,MusicPlayer,LightSystem,TelevisionMachine,CurveAnimation,FixedObjects,CupboardDoor,
              WardrobeDoor,MoveObjects,Helper){

    var container;
    var stats;
    var scene, renderer;

    var personalControl;
    var wallWindow;
    var cubeAnimation;
    var gunWeapon;
    var panoramaCube;
    var flashLight;
    var moveFunction;
    var doorPlate;
    var woodenDoor;
    var musicPlayer;
    var lightSystem;
    var televisionMachine;
    var curveAnimation;
    var fixedObjects;
    var cupboardDoor;
    var wardrobeDoor;
    var moveObjects;
    var helper;

    var prevTime = performance.now();

    //全局的资源管理器
       var warp=document.getElementById('warp');
        var loading=document.getElementById('loading');
    THREE.DefaultLoadingManager.onStart = function ( ) {
        //console.log( 'Loaded 开始' );
    };
    THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
        //console.log( 'Loaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
        document.getElementById('number_message').innerHTML=itemsLoaded;
        document.getElementById('total_message').innerHTML=itemsTotal;
        document.getElementById('bar').style.width= itemsLoaded/itemsTotal*100+"%";
    };
    THREE.DefaultLoadingManager.onLoad = function ( ) {
        console.log( 'Loading Complete!');
        warp.style.visibility='visible';
        loading.style.display='none';

    };
    THREE.DefaultLoadingManager.onError = function ( url ) {
        console.log( 'There was an error loading ' + url );
		warp.style.visibility='visible';
        loading.style.display='none';
    };



    init();
    animate();



    function onWindowResize() {
        personalControl.camera.aspect = window.innerWidth / window.innerHeight;
        personalControl.camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
        //personalControl.controls.handleResize();
        render();

    }

    function init() {

        // scene
        scene = new THREE.Scene();
        //scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );


        //controls
        personalControl=new PersonalControl.PersonalControl();
        scene.add( personalControl.controls.getObject() );

        //  house of model
        wallWindow=new WallWindow.WallWindow();
        wallWindow.asyncObj(scene);

        // cubeAnimation of object
        cubeAnimation=new CubeAnimation.CubeAnimation();
       // cubeAnimation.asyncJson(scene);

        //枪
        gunWeapon=new GunWeapon.GunWeapon();
        document.addEventListener( 'click',function(event){
            gunWeapon.gunFire(personalControl.controls.getObject().position, personalControl.camera.getWorldDirection(),scene);
        }, false );

        //全景图
        panoramaCube=new PanoramaCube.PanoramaCube();
        //scene.add(panoramaCube.cubeMesh);
        scene.add(panoramaCube.sphereMesh);

        //手电筒
        flashLight=new FlashLight.FlashLight();
        scene.add(flashLight.spotLight);
        scene.add(flashLight.targetObject);
        document.addEventListener( 'keydown', function(event){
            flashLight.lightSwitch(event);

        }, false );

        //拖放功能
        moveFunction=new MoveFunction.MoveFunction();
        document.addEventListener('keydown',function(event){
            moveFunction.moveSwitch(event);
        },false);

        //拖放测试物体
        for(var i=0;i<40;i++){
            var moveMesh=new THREE.Mesh(new THREE.BoxGeometry(20,20,20), new THREE.MeshBasicMaterial({
                color: 0x051A07,
                //transparent:true,
                //opacity:0.7,
               // depthTest:false
            }));
            moveMesh.position.x=Math.floor(Math.random()*2000-1000);
            moveMesh.position.z=Math.floor(Math.random()*2000-1000);
            scene.add(moveMesh);
            moveFunction.moveArray.push(moveMesh);

        }

        //拖放物体
        moveObjects=new MoveObjects.MoveObjects();
        moveObjects.asyncObj(scene);


        //门牌
        doorPlate=new DoorPlate.DoorPlate();
        doorPlate.asyncObj(scene);
        scene.add(doorPlate.signalGroup);
        scene.add(doorPlate.weiboButton);
        //门牌 微博 功能
        document.addEventListener('keydown',function(event){
            doorPlate.doorPlateEvent(event);
        },false);

        //木门
       woodenDoor= new WoodenDoor.WoodenDoor();
        woodenDoor.asyncObj(scene);
        document.addEventListener('keydown',function(event){
            woodenDoor.woodenDoorEvent(event);
        },false);

        //音乐播放器
        musicPlayer=new MusicPlayer.MusicPlayer();
        personalControl.camera.add(musicPlayer.listener);
        musicPlayer.asyncObj(scene,musicPlayer.changeObject);
        document.addEventListener('keydown',function(event){
            musicPlayer.musicPlayerEvent(event);
        });

        //灯光系统
        lightSystem=new LightSystem.LightSystem();
        scene.add(lightSystem.ambient);
        scene.add(lightSystem.directionalLight);
        scene.add(lightSystem.directionalLight1);

        lightSystem.asyncObj(scene);
        document.addEventListener('keydown',function(event){
            lightSystem.lightSystemEvent(event);
        },false);

        scene.add( lightSystem.lights.light1);
        scene.add( lightSystem.lights.light2);
        scene.add( lightSystem.lights.light3);
        scene.add( lightSystem.lights.light4);
        scene.add( lightSystem.lights.light5);
        scene.add( lightSystem.lights.light6);
        scene.add( lightSystem.lights.light7);
        scene.add( lightSystem.lights.light8);
        scene.add( lightSystem.lights.light9);

        //电视
        televisionMachine=new TelevisionMachine.TelevisionMachine();
        televisionMachine.asyncObj(scene,televisionMachine.changeObject);
        scene.add(televisionMachine.changeObject.mesh);
        document.addEventListener('keydown',function(event){
            televisionMachine.televisionMachineEvent(event);

        },false);

        //曲线
        curveAnimation=new CurveAnimation.CurveAnimation();
        scene.add(curveAnimation.curveObject);
        scene.add(curveAnimation.pathMesh);

        //静止物体
        fixedObjects=new FixedObjects.FixedObjects();
        fixedObjects.asyncObj(scene);

        //橱柜门
        cupboardDoor=new CupboardDoor.CupboardDoor();
        cupboardDoor.asyncObj(scene);
        document.addEventListener("keydown",function(event){
            cupboardDoor.cupboardDoorEvent(event);
        },false);
        //衣柜门
        wardrobeDoor=new WardrobeDoor.WardrobeDoor();
        wardrobeDoor.asyncObj(scene);
        document.addEventListener('keydown',function(event){

            wardrobeDoor.wardrobeDoorEvent(event);
        },false);



        //helper
        helper=new Helper.Helper();
        scene.add(helper.arrowHelper);
        //scene.add(helper.axisHelper);
        scene.add(helper.gridHelper);


        //renderer
        renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setClearColor( 0xcccccc );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container = document.createElement( 'div' );

        container.appendChild( renderer.domElement );
        warp.appendChild(container);
        //document.body.appendChild( container );



        //stats
        stats = new Stats();
        container.appendChild( stats.dom );

        //event
        window.addEventListener( 'resize', onWindowResize, false );
        //personalControl.controls.addEventListener( 'change', render );
    }

    //animate

    function animate() {
        requestAnimationFrame( animate );
        TWEEN.update();
        render();
        stats.update();

    }
    function render() {
        var time = performance.now();
        var delta = ( time - prevTime ) / 1000;
        //console.log(delta);
        renderer.render( scene, personalControl.camera );


        //碰撞最好把所有需要碰撞的物体都加载一起,然后进行碰撞计算,效果才比较好.
        wallWindow.promise.then(function(value){
            return value.children;
        }).then(function(valueArray){
            woodenDoor.promise.then(function(value1){
                personalControl.controlsAnimation(value1.children.concat(valueArray));
            });

        });
        //实现变形动画
        cubeAnimation.cubeAnimationAnimation(delta);
        //子弹运行中
        gunWeapon.fireIng(scene,delta);
        //手电筒跟随
        flashLight.flashLightMove(personalControl.camera.getWorldDirection(),personalControl.controls.getObject().position);
        //更新选择射线
        personalControl.pickRaycasterUpdate();
        //拖放动画
        moveFunction.dragIng(personalControl.pickRaycaster,personalControl.controls.getObject().position,personalControl.camera.getWorldDirection());
        moveFunction.dropIng(delta);
        //门牌标志动画
        doorPlate.doorPlateAnimation();
        //门牌选中
        doorPlate.doorPlatePick(personalControl.pickRaycaster,doorPlate.changeObject);
        //木门选中
        woodenDoor.woodenDoorPick(personalControl.pickRaycaster,woodenDoor.changeObject);
        //播放器特效
        musicPlayer.soundAnalyser(musicPlayer.changeObject);
        //播放器选中
        musicPlayer.musicPlayerPick(personalControl.pickRaycaster,musicPlayer.changeObject);
        //室内灯选中
        lightSystem.lightSystemPick(personalControl.pickRaycaster,lightSystem.changeObject);
        //电视选中
        televisionMachine.televisionMachinePick(personalControl.pickRaycaster);
        //橱柜门选中
        cupboardDoor.cupboardDoorPick(personalControl.pickRaycaster,cupboardDoor.changeObject);
        //衣柜门选中
        wardrobeDoor.wardrobeDoorPick(personalControl.pickRaycaster,wardrobeDoor.changeObject);
        //曲线动画
        curveAnimation.curevAnimationAnimation(time);
        //准心开始游戏显示
        if(GOT.gameStart){
            gunWeapon.crossHairCanvas.style.visibility="visible";

        }else{
            gunWeapon.crossHairCanvas.style.visibility="hidden";

        }

        prevTime=time;


    }






});



























































