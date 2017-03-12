/**
 * Created by Administrator on 2017/2/17.
 */
//three.js部分的全局对象
var GOT={
    gameStart:false,
	/*
		manager : function(){
			var manager = new THREE.LoadingManager();
			manager.onLoad = function ( ) {
			 console.log( 'Loading complete!zzzzzzzzzzzzzzz');
			 };
			return manager;

		}(),
	*/

    objPromise: function(mtlPath,objPath,manager){
     var promise= new Promise(function(resolve,reject){
                  function onProgress(xhr){
                      if ( xhr.lengthComputable ) {
                         // var percentComplete = xhr.loaded / xhr.total * 100;
                          //  console.log( Math.round(percentComplete, 2) + '% 门牌模型 downloaded' );
                      }
                  }
                  function onError(xhr){}
                  THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

                  var mtlLoader = new THREE.MTLLoader(manager);
                  mtlLoader.load( mtlPath, function( materials ) {
                      materials.preload();
                      var objLoader = new THREE.OBJLoader(manager);
                      objLoader.setMaterials( materials );
                      objLoader.load( objPath, function ( object ) {
                          resolve(object);
                      }, onProgress, onError );
                  });
              });

        return promise;
    },

    jsonPromise:function(jsonPath,manager){
        var promise=new Promise(function(resolve,reject){
            var loader = new THREE.JSONLoader(manager);
            loader.load(
                // resource URL
                jsonPath,
                // Function when resource is loaded
                function ( geometry, materials ) {
                    var material = new THREE.MultiMaterial( materials );
                    var object = new THREE.Mesh( geometry, material );
                    resolve(object);
                },
                function ( xhr ) {
                    // console.log( (xhr.loaded / xhr.total * 100) + '% 音乐播放器loaded' );
                },
                // Function called when download errors
                function ( xhr ) {
                    console.error( 'An error happened' );
                }
            );
        });
        return promise;
    },

    jsonAnimationPromise:function(jsonPath,manager){
        var promise= new Promise(function(resolve,reject){
            var loader = new THREE.JSONLoader(manager);
            loader.load( jsonPath, function( geometry,materials ) {
                var animationObject={
                    mesh: null,
                    mixer: null
                };
                var originalMaterial = materials[ 0 ];
                originalMaterial.morphTargets=true;
                animationObject.mesh = new THREE.Mesh( geometry,originalMaterial );
                animationObject.mesh.scale.set( 1, 1, 1 );
                animationObject.mixer = new THREE.AnimationMixer( animationObject.mesh );
                var clip = THREE.AnimationClip.CreateFromMorphTargetSequence( 'clipname', geometry.morphTargets, 30 );
                animationObject.mixer.clipAction( clip ).play();
                resolve(animationObject);

            } );

        });
        return promise;
    },


    //立即运行一次返回构造函数
    TipsInfo: function(){
        function TipsInfo(info){
            function canvasDraw(){
                var canvas=document.createElement('canvas');
                canvas.width=100;
                canvas.height=50;
                var ctx=canvas.getContext('2d');
                ctx.fillStyle="#FFF";
                ctx.font='24px serif';
                //ctx.textAlign="center";
                ctx.fillText(info, 16, 30);
                return canvas;
            }
            var moveCanvasInfo=canvasDraw();
            document.body.appendChild(moveCanvasInfo);
            moveCanvasInfo.style.position="fixed";
            moveCanvasInfo.style.left="50%";
            moveCanvasInfo.style.top="40%";
            moveCanvasInfo.style.transform=" translate(-50%,-50%)";
            moveCanvasInfo.style.visibility="hidden";

            this.canvasInfo=moveCanvasInfo;
        }
        TipsInfo.prototype={
            constructor: TipsInfo,
            showInfo: function(){
                this.canvasInfo.style.visibility="visible";
            },
            hideInfo: function(){
                this.canvasInfo.style.visibility="hidden";
            }
        };
        return  TipsInfo;
    }()


};
