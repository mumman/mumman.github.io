/**
 * Created by Administrator on 2017/2/13.
 */
define(function(){
    function MusicPlayer(){
        var promise=GOT.jsonPromise('models/musicplayer.js');
        var listener= new THREE.AudioListener();
        var sound=new THREE.PositionalAudio(listener);
        var audioLoader=new THREE.AudioLoader();
        audioLoader.load('models/gaobai.mp3',function(buffer){
           sound.setBuffer(buffer);
            sound.setRefDistance(40);
            sound.setLoop(true);
            sound.setVolume(1);
            //sound.play();

        });

        var analyser = new THREE.AudioAnalyser( sound, 2048 );
        this.promise=promise;
        this.listener=listener;
        this.open=false;
        this.close=false;
        this.changeObject={
            sound: sound,
            tipsInfo:new GOT.TipsInfo("按E开关"),
            lock: false,
            analyser: analyser
        };
    }

    MusicPlayer.prototype={
        constructor: MusicPlayer,
        asyncObj:function(scene,changeObject){
            this.promise.then(function(value){
                //重新设置几何中心
                var box=new THREE.Box3();
                box.setFromObject(value);
                value.geometry.center();
                value.position.copy(box.getCenter());
                //console.log(value);
                value.add(changeObject.sound);
                scene.add(value);
            });
        },

        musicPlayerPick: function(raycaster,changeObject){
            this.promise.then(function(value){
                var intersects=raycaster.intersectObjects([value]);
                    if(intersects.length>0){
                        //console.log("选中");
                        changeObject.tipsInfo.showInfo();
                        changeObject.lock=true;
                    }else{
                        changeObject.tipsInfo.hideInfo();
                        changeObject.lock=false;
                    }
            });

        },
        musicPlayerEvent: function(event){
            if(event.keyCode===69){
                if(this.changeObject.lock){
                    if(this.open){
                        //this.changeObject.sound.stop();
                        this.changeObject.sound.pause();
                        this.open=false;
                    }else{
                        this.changeObject.sound.play();
                        this.open=true;
                    }
                }
            }
        },

        soundAnalyser: function(changeObject){
            this.promise.then(function(value){
                //value.material.materials[2].color.r=changeObject.analyser.getAverageFrequency() / 256;
               value.material.materials[2].color.g=changeObject.analyser.getAverageFrequency() / 256;
                value.material.materials[2].color.b=changeObject.analyser.getAverageFrequency() / 128;
            });
        }

    };

    return {
        MusicPlayer: MusicPlayer

    };
});