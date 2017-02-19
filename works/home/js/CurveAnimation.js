/*
 Created by Administrator on 2017/2/15.
 */
define (function(){
    function CurveAnimation(){
        //子弹曲线路径
        var pointArray=[new THREE.Vector3(300.911335992231, -32.47027561994936, 522.3787240943477),
            new THREE.Vector3(594.1078507120283, 102.25559390778596, -416.5810666193364),
            new THREE.Vector3(-435.6672491811551, 24.150909387354744, -658.3508529107951),
            new THREE.Vector3(-1048.9404053568564, 78.26730863143524, 26.834361764496876),
            new THREE.Vector3(-516.4421032976745, 567.5880913469664, 735.4584045685269),
            new THREE.Vector3(-449, -55, 529)];

        var curve = new THREE.CatmullRomCurve3(pointArray);
        curve.closed=true;
        var geometry = new THREE.Geometry();
        geometry.vertices = curve.getPoints( 50 );

        var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

        // Create the final object to add to the scene
        var curveObject = new THREE.Line( geometry, material );


         var boxGeometry11 = new THREE.BoxGeometry( 10, 10, 40 );
         var boxmaterial11 = new THREE.MeshBasicMaterial( {color: 0x31CC16} );
         var pathMesh = new THREE.Mesh( boxGeometry11, boxmaterial11 );
        pathMesh.rotateY(Math.PI/6);
         pathMesh.position.copy(new THREE.Vector3(580.3183759597987, 295.75946774238145, 76.55052571661247));


        this.curveObject=curveObject;
        this.pathMesh=pathMesh;
        this.curve=curve;
        this.looptime = 10 * 1000; //10秒

    }
    CurveAnimation.prototype={
        constructor:CurveAnimation,

        curevAnimationAnimation: function(time){

            var t = ( time % this.looptime ) / this.looptime;
            //console.log(t);
            var pos = this.curve.getPointAt( t );
            this.pathMesh.position.copy(pos);
        }

    };
    return {
        CurveAnimation: CurveAnimation
    };
});

