/**
 * Created by Administrator on 2017/2/9.
 */
define(function(){


    function PanoramaCube(){

        //spheremap 方式全局图
        var sphereGeometry = new THREE.SphereGeometry( 1500, 60, 40 );
        //翻转几何体
        sphereGeometry.scale( - 1, 1, 1 );

        var sphereMaterial = new THREE.MeshBasicMaterial( {
            map: new THREE.TextureLoader().load( 'img/cube/1.jpg' )
        } );
        //等尖角,等效矩形?
        var equirectangular = new THREE.Mesh( sphereGeometry, sphereMaterial );




        //cubemap 方式全局
        var texture_placeholder = document.createElement('canvas');
        texture_placeholder.width = 128;
        texture_placeholder.height = 128;

        var context = texture_placeholder.getContext('2d');
        context.fillStyle = 'rgb( 200, 200, 200 )';
        context.fillRect(0, 0, texture_placeholder.width, texture_placeholder.height);

        var materials = [
            loadTexture('img/cube/px.jpg'), // right
            loadTexture('img/cube/nx.jpg'), // left
            loadTexture('img/cube/py.jpg'), // top
            loadTexture('img/cube/ny.jpg'), // bottom
            loadTexture('img/cube/pz.jpg'), // back
            loadTexture('img/cube/nz.jpg') // front
        ];
        var skyBox = new THREE.Mesh(new THREE.BoxGeometry(2500, 2500, 2500, 1, 1, 1), new THREE.MultiMaterial(materials));
        //翻转网格体
        skyBox.scale.x = -1;


        function loadTexture(path) {
            var texture = new THREE.Texture(texture_placeholder);
            var material = new THREE.MeshBasicMaterial({
                map: texture,
                overdraw: 0.5
            });
            var image = new Image();
            image.onload = function() {
                texture.image = this;
                texture.needsUpdate = true;
            };
            image.src = path;
            return material;
        }
        this.cubeMesh=skyBox;
        this.sphereMesh=equirectangular;


    }
    PanoramaCube.prototype={
      constructor: PanoramaCube,

    };


    return {
        PanoramaCube: PanoramaCube

    };
});