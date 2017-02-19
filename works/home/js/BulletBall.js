/**
 * Created by Administrator on 2017/2/8.
 */
define(function(){

    function BulletBall(origin,direction){
        this.mesh=null;
        this.origin=origin;
        this.direction=direction;
        this._gunpoint=30;

    }
    BulletBall.prototype={
        constructor: BulletBall,
        createMesh: function(){
            var geometry = new THREE.SphereBufferGeometry( 5, 8, 5 );
            var material = new THREE.MeshBasicMaterial( {
                color: 0x138C2F,
                wireframe: true
            } );
            this.mesh= new THREE.Mesh(geometry,material);
            this.mesh.position.copy(this.origin).addScaledVector(this.direction,this._gunpoint);
            return this.mesh;
        }
    };



    return {
        BulletBall: BulletBall

    };
});
