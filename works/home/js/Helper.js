/**
 * Created by Administrator on 2017/2/18.
 */
define (function(){
    function Helper(){


        var dir = new THREE.Vector3( 0, 1, 0 );
        dir.normalize();
        var origin = new THREE.Vector3( 0, 0, 0 );
        var length = 500;
        var hex = 0xFF002F;

        var arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
        var axisHelper = new THREE.AxisHelper( 500 );

        var size = 2000;
        var divisions = 20;

        var gridHelper = new THREE.GridHelper( size, divisions );


        this.arrowHelper=arrowHelper;
        this.axisHelper=axisHelper;
        this.gridHelper=gridHelper;
    }
    Helper.prototype={
        constructor:Helper,

    };
    return {
        Helper: Helper
    };
});
