//============================firstPage=========================================
(function() {
	//基本
	var camera, scene, renderer, firstPage;
	//后期
	var sunPosition = new THREE.Vector3(0, 0, -1000);
	var screenSpacePosition = new THREE.Vector3();
	var materialDepth;
	var postprocessing = {
		enabled: true
	};
	var orbitRadius = 200;
	var bgColor = 0x000000;
	var sunColor = 0xFFFFFF;
	//小方片
	var plane;
	var groupPlane = [];
	//文字
	var mesh;
	var meshText;
	//交互
	var mouse = new THREE.Vector2();
	var raycaster = new THREE.Raycaster();
	var mouseX = 0, mouseY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	//文字加载
	var loader = new THREE.FontLoader();
	loader.load('three/fonts/LiSu_Regular.typeface.js', function(font) {
		init(font);
		animate();
	});

	function init(font) {
		firstPage = document.getElementById('firstPage');
		materialDepth = new THREE.MeshDepthMaterial();
		camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.set(0, 0, 500);

		scene = new THREE.Scene();

		//创建文字
		var theText = "欢 迎";
		var geometry = new THREE.TextGeometry(theText, {
			font: font,
			size: 80,
			height: 20,
			curveSegments: 2
		});
		geometry.center();
		var material = new THREE.MeshBasicMaterial({
			color: 0xffffff,
			overdraw: 0.5
		});
		mesh = new THREE.Mesh(geometry, material);

		mesh.position.x = 0;
		mesh.position.y = 0;
		mesh.position.z = 0;
		mesh.rotation.y = Math.PI * 2;
		scene.add(mesh);
		//
		var theText = "@mumman";
		var geometry = new THREE.TextGeometry(theText, {
			font: font,
			size: 15,
			height: 1,
			curveSegments: 2
		});
		geometry.center();
		meshText = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
			color: 0xffffff,
			overdraw: 0.5
		}));

		meshText.position.x = 0;
		meshText.position.y = -100;
		meshText.position.z = 0;
		meshText.rotation.x = 0;
		meshText.rotation.y = Math.PI * 2;
		scene.add(meshText);

		//创建小方片
		for (var i = 0; i < 100; i++) {
			var geometry = new THREE.PlaneGeometry(20, 20);
			var material = new THREE.MeshBasicMaterial({
				color: 0x000000,
				side: THREE.DoubleSide
			});
			plane = new THREE.Mesh(geometry, material);
			plane.position.x = Math.random() * 200 - 100;
			plane.position.y = Math.random() * 200 - 100;
			plane.position.z = Math.random() * 2000 - 1000;

			plane.rotation.x = Math.random() * 2 * Math.PI;
			plane.rotation.y = Math.random() * 2 * Math.PI;
			plane.rotation.z = Math.random() * 2 * Math.PI;

			groupPlane.push(plane);
			scene.add(plane);
		}

		//创建粒子
		var material = new THREE.SpriteMaterial({
			map: new THREE.CanvasTexture(generateSprite()),
			blending: THREE.AdditiveBlending
		});

		for (var i = 0; i < 500; i++) {
			particle = new THREE.Sprite(material);
			initParticle(particle, i * 10);
			scene.add(particle);
		}

		//渲染器
		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0x000000);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		firstPage.appendChild(renderer.domElement);
		renderer.autoClear = false;
		renderer.sortObjects = false;

		//事件监听
		firstPage.addEventListener('mousemove', onDocumentMouseMove, false);
		firstPage.addEventListener('touchstart', onDocumentTouchStart, false);
		firstPage.addEventListener('touchmove', onDocumentTouchMove, false);
		//
		window.addEventListener('resize', onWindowResize, false);

		//后期初始
		initPostprocessing();
	}
	//事件函数
	function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	function onDocumentMouseMove(event) {
		//计算标准鼠标位置点
		event.preventDefault();
		mouseX = (event.clientX - windowHalfX) * 0.5;
		mouseY = (event.clientY - windowHalfY) * 0.5;

		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

	}

	function onDocumentTouchStart(event) {
		if (event.touches.length === 1) {
			event.preventDefault();
			mouseX = (event.touches[0].pageX - windowHalfX) * 0.5;
			mouseY = (event.touches[0].pageY - windowHalfY) * 0.5;
		}
	}

	function onDocumentTouchMove(event) {
		if (event.touches.length === 1) {
			event.preventDefault();
			mouseX = (event.touches[0].pageX - windowHalfX) * 0.5;
			mouseY = (event.touches[0].pageY - windowHalfY) * 0.5;
		}

	}

	//粒子
	function generateSprite() {
		var canvas = document.createElement('canvas');
		canvas.width = 16;
		canvas.height = 16;

		var context = canvas.getContext('2d');
		var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
		gradient.addColorStop(0, 'rgba(255,255,255,1)');
		gradient.addColorStop(0.2, 'rgba(0,64,17,1)');
		gradient.addColorStop(1, 'rgba(0,0,0,1)');
		context.fillStyle = gradient;
		context.fillRect(0, 0, canvas.width, canvas.height);

		return canvas;

	}

	function initParticle(particle, delay) {
		particle.position.set(0, 0, -1500);
		particle.scale.x = particle.scale.y = Math.random() * 32 + 16;

		new TWEEN.Tween(particle.position)
			.delay(delay)
			.to({
				x: Math.random() * 3000 - 1500,
				y: Math.random() * 1000 - 500,
				z: Math.random() * 1500
			}, 5000)
			.repeat(Infinity)
			.start();

		new TWEEN.Tween(particle.scale)
			.delay(delay)
			.to({
				x: 0.0001,
				y: 0.0001
			}, 5000)
			.repeat(Infinity)
			.start();
	}

	//后期
	function initPostprocessing() {

		postprocessing.scene = new THREE.Scene();

		postprocessing.camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -10000, 10000);
		postprocessing.camera.position.z = 100;

		postprocessing.scene.add(postprocessing.camera);

		var pars = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBFormat
		};
		postprocessing.rtTextureColors = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, pars);

		// Switching the depth formats to luminance from rgb doesn't seem to work. I didn't
		// investigate further for now.
		// pars.format = THREE.LuminanceFormat;

		// I would have this quarter size and use it as one of the ping-pong render
		// targets but the aliasing causes some temporal flickering

		postprocessing.rtTextureDepth = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, pars);

		// Aggressive downsize god-ray ping-pong render targets to minimize cost

		var w = window.innerWidth / 4.0;
		var h = window.innerHeight / 4.0;
		postprocessing.rtTextureGodRays1 = new THREE.WebGLRenderTarget(w, h, pars);
		postprocessing.rtTextureGodRays2 = new THREE.WebGLRenderTarget(w, h, pars);

		// god-ray shaders

		var godraysGenShader = THREE.ShaderGodRays["godrays_generate"];
		postprocessing.godrayGenUniforms = THREE.UniformsUtils.clone(godraysGenShader.uniforms);
		postprocessing.materialGodraysGenerate = new THREE.ShaderMaterial({

			uniforms: postprocessing.godrayGenUniforms,
			vertexShader: godraysGenShader.vertexShader,
			fragmentShader: godraysGenShader.fragmentShader

		});

		var godraysCombineShader = THREE.ShaderGodRays["godrays_combine"];
		postprocessing.godrayCombineUniforms = THREE.UniformsUtils.clone(godraysCombineShader.uniforms);
		postprocessing.materialGodraysCombine = new THREE.ShaderMaterial({

			uniforms: postprocessing.godrayCombineUniforms,
			vertexShader: godraysCombineShader.vertexShader,
			fragmentShader: godraysCombineShader.fragmentShader

		});

		var godraysFakeSunShader = THREE.ShaderGodRays["godrays_fake_sun"];
		postprocessing.godraysFakeSunUniforms = THREE.UniformsUtils.clone(godraysFakeSunShader.uniforms);
		postprocessing.materialGodraysFakeSun = new THREE.ShaderMaterial({

			uniforms: postprocessing.godraysFakeSunUniforms,
			vertexShader: godraysFakeSunShader.vertexShader,
			fragmentShader: godraysFakeSunShader.fragmentShader

		});

		postprocessing.godraysFakeSunUniforms.bgColor.value.setHex(bgColor);
		postprocessing.godraysFakeSunUniforms.sunColor.value.setHex(sunColor);

		postprocessing.godrayCombineUniforms.fGodRayIntensity.value = 0.75;

		postprocessing.quad = new THREE.Mesh(
			new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight),
			postprocessing.materialGodraysGenerate
		);
		postprocessing.quad.position.z = -9900;
		postprocessing.scene.add(postprocessing.quad);

	}

	function animate() {
		requestAnimationFrame(animate);
		TWEEN.update();
		render();
	}

	function render() {
		//摄像机交互
		camera.position.x += (mouseX - camera.position.x) * 0.05;
		camera.position.y += (-mouseY - camera.position.y) * 0.05;
		camera.lookAt(scene.position);
		
		//@mumman大小动画
		var timer = Date.now() * 0.001;
		meshText.scale.y = Math.sin(timer) * .5 + 1;
		meshText.scale.x = Math.sin(timer) * .5 + 1;

		//小方片动画
		for (var i = 0; i < groupPlane.length; i++) {
			groupPlane[i].rotation.x += 0.05;
			groupPlane[i].rotation.y += 0.01;
			groupPlane[i].position.z += 3;
			
			if (groupPlane[i].position.z > 500) {
				groupPlane[i].position.z = -100;
			}
		}

		//小方片交互
		raycaster.setFromCamera(mouse, camera);
		var intersects = raycaster.intersectObjects(groupPlane);
		if (intersects.length > 0) {
			for (var i = 0; i < groupPlane.length; i++) {
				if (intersects[0].object == groupPlane[i]) {
					groupPlane[i].material.color.set(Math.random() * 0xffffff);
				}
			}
		}

		//后期,搞不懂
		if (postprocessing.enabled) {

			// Find the screenspace position of the sun
			//sunPosition.x+=Math.sin(timer)*0.5;	
			screenSpacePosition.copy(sunPosition).project(camera);

			screenSpacePosition.x = (screenSpacePosition.x + 1) / 2;
			screenSpacePosition.y = (screenSpacePosition.y + 1) / 2;

			// Give it to the god-ray and sun shaders

			postprocessing.godrayGenUniforms["vSunPositionScreenSpace"].value.x = screenSpacePosition.x;
			postprocessing.godrayGenUniforms["vSunPositionScreenSpace"].value.y = screenSpacePosition.y;

			postprocessing.godraysFakeSunUniforms["vSunPositionScreenSpace"].value.x = screenSpacePosition.x;
			postprocessing.godraysFakeSunUniforms["vSunPositionScreenSpace"].value.y = screenSpacePosition.y;

			// -- Draw sky and sun --

			// Clear colors and depths, will clear to sky color

			renderer.clearTarget(postprocessing.rtTextureColors, true, true, false);

			// Sun render. Runs a shader that gives a brightness based on the screen
			// space distance to the sun. Not very efficient, so i make a scissor
			// rectangle around the suns position to avoid rendering surrounding pixels.

			var sunsqH = 0.74 * window.innerHeight; // 0.74 depends on extent of sun from shader
			var sunsqW = 0.74 * window.innerHeight; // both depend on height because sun is aspect-corrected

			screenSpacePosition.x *= window.innerWidth;
			screenSpacePosition.y *= window.innerHeight;

			renderer.setScissor(screenSpacePosition.x - sunsqW / 2, screenSpacePosition.y - sunsqH / 2, sunsqW, sunsqH);
			renderer.setScissorTest(true);

			postprocessing.godraysFakeSunUniforms["fAspect"].value = window.innerWidth / window.innerHeight;

			postprocessing.scene.overrideMaterial = postprocessing.materialGodraysFakeSun;
			renderer.render(postprocessing.scene, postprocessing.camera, postprocessing.rtTextureColors);

			renderer.setScissorTest(false);

			// -- Draw scene objects --

			// Colors

			scene.overrideMaterial = null;
			renderer.render(scene, camera, postprocessing.rtTextureColors);

			// Depth

			scene.overrideMaterial = materialDepth;
			renderer.render(scene, camera, postprocessing.rtTextureDepth, true);

			// -- Render god-rays --

			// Maximum length of god-rays (in texture space [0,1]X[0,1])

			var filterLen = 1.0;

			// Samples taken by filter

			var TAPS_PER_PASS = 6.0;

			// Pass order could equivalently be 3,2,1 (instead of 1,2,3), which
			// would start with a small filter support and grow to large. however
			// the large-to-small order produces less objectionable aliasing artifacts that
			// appear as a glimmer along the length of the beams

			// pass 1 - render into first ping-pong target

			var pass = 1.0;
			var stepLen = filterLen * Math.pow(TAPS_PER_PASS, -pass);

			postprocessing.godrayGenUniforms["fStepSize"].value = stepLen;
			postprocessing.godrayGenUniforms["tInput"].value = postprocessing.rtTextureDepth;

			postprocessing.scene.overrideMaterial = postprocessing.materialGodraysGenerate;

			renderer.render(postprocessing.scene, postprocessing.camera, postprocessing.rtTextureGodRays2);

			// pass 2 - render into second ping-pong target

			pass = 2.0;
			stepLen = filterLen * Math.pow(TAPS_PER_PASS, -pass);

			postprocessing.godrayGenUniforms["fStepSize"].value = stepLen;
			postprocessing.godrayGenUniforms["tInput"].value = postprocessing.rtTextureGodRays2;

			renderer.render(postprocessing.scene, postprocessing.camera, postprocessing.rtTextureGodRays1);

			// pass 3 - 1st RT

			pass = 3.0;
			stepLen = filterLen * Math.pow(TAPS_PER_PASS, -pass);

			postprocessing.godrayGenUniforms["fStepSize"].value = stepLen;
			postprocessing.godrayGenUniforms["tInput"].value = postprocessing.rtTextureGodRays1;

			renderer.render(postprocessing.scene, postprocessing.camera, postprocessing.rtTextureGodRays2);

			// final pass - composite god-rays onto colors

			postprocessing.godrayCombineUniforms["tColors"].value = postprocessing.rtTextureColors;
			postprocessing.godrayCombineUniforms["tGodRays"].value = postprocessing.rtTextureGodRays2;

			postprocessing.scene.overrideMaterial = postprocessing.materialGodraysCombine;

			renderer.render(postprocessing.scene, postprocessing.camera);
			postprocessing.scene.overrideMaterial = null;
		} else {
			renderer.clear();
			renderer.render(scene, camera);
		}
	}
})();


//============================secondPage========================================
(function() {
	//基本
	var camera, scene, renderer, secondPage;
	//文字
	var textMesh;
	//灯
	var pointLight, pointLight2, pointLight3, pointLight4;
	//背景箱
	var mesh;
	//计数器
	var timeCounter = 0;
	//圆柱
	var cylinderArray = new THREE.Object3D();

	//加载字体
	var loader = new THREE.FontLoader();
	loader.load('three/fonts/LiSu_Regular.typeface.js', function(font) {
		init(font);
		animate();
	});
	function init(font) {
		secondPage = document.getElementById('secondPage');
		camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.set(0, 0, 40);
		scene = new THREE.Scene();

		//文字
		var theText = "张 平";
		var geometry = new THREE.TextGeometry(theText, {
			font: font,
			size: 5,
			height: 1,
			curveSegments: 2

		});
		geometry.center();
		geometry.computeBoundingBox();
		var material = new THREE.MeshPhongMaterial({
			color: 0xff0000,
			shininess: 100,
			specular: 0x222222
		});
		textMesh = new THREE.Mesh(geometry, material);
		textMesh.position.x = 0;
		textMesh.position.y = 10;
		textMesh.position.z = 0;
		textMesh.rotation.x = 0;
		textMesh.rotation.y = Math.PI * 2;
		textMesh.castShadow = true;
		textMesh.receiveShadow = true;
		scene.add(textMesh);

		//灯
		scene.add(new THREE.AmbientLight(0x222233));

		function createLight(color) {
			var pointLight = new THREE.PointLight(color, 1, 30);
			pointLight.castShadow = true;
			pointLight.shadow.camera.near = 1;
			pointLight.shadow.camera.far = 30;
			// pointLight.shadowCameraVisible = true;
			pointLight.shadow.bias = 0.01;

			var geometry = new THREE.SphereGeometry(0.3, 12, 6);
			var material = new THREE.MeshBasicMaterial({
				color: color
			});
			var sphere = new THREE.Mesh(geometry, material);
			sphere.name = "sphereMesh"
			//点灯光添加形状
			pointLight.add(sphere);

			return pointLight

		}

		pointLight = createLight(0xffffff);
		scene.add(pointLight);

		pointLight2 = createLight(0xff0000);
		scene.add(pointLight2);

		pointLight3 = createLight(0x02f414);
		scene.add(pointLight3);

		pointLight4 = createLight(0xff0000);
		scene.add(pointLight4);

		//圆柱

		for (var i = 0; i < 3; i++) {
			var geometry = new THREE.CylinderGeometry(0.5, 0.5, 80, 48);
			geometry.center();
			var material = new THREE.MeshPhongMaterial({
				color: 0xff0000,
				shininess: 100,
				specular: 0x222222
			});
			var cylinder = new THREE.Mesh(geometry, material);

			cylinder.position.x = Math.random() * 20 - 10;
			cylinder.position.y = Math.random() * 20 - 10;
			cylinder.position.z = Math.random() * 20 - 10;

			cylinder.rotation.x = Math.random() * 10
			cylinder.rotation.y = Math.random() * 10
			cylinder.rotation.z = Math.random() * 10
			cylinder.castShadow = true;
			cylinder.receiveShadow = true;

			cylinderArray.add(cylinder);

		}
		scene.add(cylinderArray);

		//背景箱
		var geometry = new THREE.BoxGeometry(50, 50, 50);
		var material = new THREE.MeshPhongMaterial({
			color: 0xa0adaf,
			shininess: 10,
			specular: 0x111111,
			side: THREE.BackSide
		})
		mesh = new THREE.Mesh(geometry, material);
		mesh.position.y = 10;

		mesh.receiveShadow = true;
		scene.add(mesh);

		//渲染器
		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0x000000);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.BasicShadowMap;
		secondPage.appendChild(renderer.domElement);

		//控制器	
		var controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.target.set(0, 10, 0);
		controls.minDistance = 0;
		controls.maxDistance = 43;
		controls.update();

		//事件监听
		window.addEventListener('resize', onWindowResize, false);
	}

	//监听函数
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	function animate() {
		requestAnimationFrame(animate);
		render();
	}

	function render() {
		var time = performance.now() * 0.001;
		//灯运动动画
		pointLight.position.x = Math.sin(time) * 14;
		pointLight.position.y = Math.sin(time * 1.1) * 14 + 5;
		pointLight.position.z = Math.sin(time * 1.2) * 14;

		time += 10000;

		pointLight2.position.x = Math.sin(time) * 14;
		pointLight2.position.y = Math.sin(time * 1.1) * 14 + 5;
		pointLight2.position.z = Math.sin(time * 1.2) * 14;

		time += 20000;

		pointLight3.position.x = Math.sin(time) * 14;
		pointLight3.position.y = Math.sin(time * 1.1) * 14 + 5;
		pointLight3.position.z = Math.sin(time * 1.2) * 14;

		time += 30000;

		pointLight4.position.x = Math.sin(time) * 14;
		pointLight4.position.y = Math.sin(time * 1.1) * 14 + 5;
		pointLight4.position.z = Math.sin(time * 1.2) * 14;
		//灯颜色动画
		timeCounter += 1;
		if (timeCounter % 50 == 0) {
			var changeColor = Math.random() * 0xffffff;
			pointLight.getObjectByName("sphereMesh").material.color.set(changeColor);
			pointLight.color.set(changeColor);
		}

		if (timeCounter % 100 == 0) {
			var changeColor = Math.random() * 0xffffff;
			pointLight4.getObjectByName("sphereMesh").material.color.set(changeColor);
			pointLight4.color.set(changeColor);
		}

		if (timeCounter % 150 == 0) {
			var changeColor = Math.random() * 0xffffff;
			pointLight2.getObjectByName("sphereMesh").material.color.set(changeColor);
			pointLight2.color.set(changeColor);
		}

		if (timeCounter % 200 == 0) {
			var changeColor = Math.random() * 0xffffff;
			pointLight3.getObjectByName("sphereMesh").material.color.set(changeColor);
			pointLight3.color.set(changeColor);
		}
		//圆柱运动动画
		cylinderArray.rotation.y = time * 0.1;
		
		textMesh.lookAt(camera.position);
		renderer.render(scene, camera);
	}

})();


//============================thirdPage=========================================
(function() {
	//基本
	var camera, scene, renderer, thirdPage;
	//平面
	var planeMesh, planeGeometry;
	var worldWidth = 128,
		worldDepth = 128,
		worldHalfWidth = worldWidth / 2,
		worldHalfDepth = worldDepth / 2;
	//粒子
	var particleArray = [];

	//交互
	var mouseX = 0,
		mouseY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	//文字
	var textMesh1, textMesh2, textMesh3, textMesh4, textMesh5, textMesh6;
	//启动时间
	var clock = new THREE.Clock();

	//加载文字 
	var loader = new THREE.FontLoader();
	loader.load('three/fonts/LiSu_Regular.typeface.js', function(font) {

		init(font);
		animate();

	});

	function init(font) {
		thirdPage = document.getElementById('thirdPage');
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.y = 0;
		camera.position.z = 100;

		scene = new THREE.Scene();
		//为场景创建雾
		scene.fog = new THREE.FogExp2(0xaaccff, 0.0009);
		scene.add(new THREE.AmbientLight(0xffffff));

		//创建平面
		planeGeometry = new THREE.PlaneGeometry(1000, 1000, worldWidth - 1, worldDepth - 1);
		planeGeometry.rotateX(-Math.PI / 2);
		//为平面各个顶点设置不同高度
		for (var i = 0, l = planeGeometry.vertices.length; i < l; i++) {
			planeGeometry.vertices[i].y = 35 * Math.sin(i / 2);

		}
		//贴图
		var texture = new THREE.TextureLoader().load("three/textures/water.jpg");
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(5, 5);

		var material = new THREE.MeshBasicMaterial({
			color: 0xff0000,
			map: texture
		});

		planeMesh = new THREE.Mesh(planeGeometry, material);
		planeMesh.position.y = -50;
		scene.add(planeMesh);

		//粒子
		function generateSprite() {

			var canvas = document.createElement('canvas');
			canvas.width = 32;
			canvas.height = 32;

			var context = canvas.getContext('2d');
			var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
			gradient.addColorStop(0, 'rgba(255,255,255,1)');
			gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
			gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
			gradient.addColorStop(1, 'rgba(0,0,0,1)');

			context.fillStyle = gradient;
			context.fillRect(0, 0, canvas.width, canvas.height);

			return canvas;

		}

		var material = new THREE.SpriteMaterial({
			map: new THREE.CanvasTexture(generateSprite()),
			blending: THREE.AdditiveBlending
		});

		for (var i = 0; i < 500; i++) {

			particle = new THREE.Sprite(material);
			particle.position.x = Math.random() * 1600 - 800;
			particle.position.y = Math.random() * 500 - 250;
			particle.position.z = Math.random() * 1600 - 800;
			particle.scale.set(50, 50, 50);

			particleArray.push(particle);
			scene.add(particle);
		}

		//文字生成

		function generateText(text, color) {
			var geometry = new THREE.TextGeometry(text, {
				font: font,
				size: 10,
				height: 1,
				curveSegments: 2
			});
			geometry.center();
			geometry.computeBoundingBox();

			var material = new THREE.MeshPhongMaterial({
				color: color,
				shininess: 100,
				specular: 0x222222
			});
			var textMesh = new THREE.Mesh(geometry, material);
			textMesh.castShadow = true;
			textMesh.receiveShadow = true;
			textMesh.rotation.y = Math.PI * 2;
			textMesh.scale.z = 0.3;
			return textMesh;
		}

		textMesh1 = generateText("简", 0xffffff);
		textMesh1.position.x = -50;
		textMesh1.position.y = 50;
		textMesh1.position.z = 0;
		scene.add(textMesh1);

		textMesh2 = generateText("单", 0xffffff);
		textMesh2.position.x = -50;
		textMesh2.position.y = 35;
		textMesh2.position.z = 0;
		scene.add(textMesh2);

		textMesh3 = generateText("喜", 0xffffff);
		textMesh3.position.x = -30;
		textMesh3.position.y = 45;
		textMesh3.position.z = 0;
		scene.add(textMesh3);

		textMesh4 = generateText("欢", 0xffffff);
		textMesh4.position.x = -30;
		textMesh4.position.y = 30;
		textMesh4.position.z = 0;
		scene.add(textMesh4);

		textMesh5 = generateText("折", 0xffffff);
		textMesh5.position.x = -30;
		textMesh5.position.y = 15;
		textMesh5.position.z = 0;
		scene.add(textMesh5);

		textMesh6 = generateText("腾", 0xffffff);
		textMesh6.position.x = -30;
		textMesh6.position.y = -0;
		textMesh6.position.z = 0;
		scene.add(textMesh6);

		//渲染器
		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0x000000);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		thirdPage.appendChild(renderer.domElement);

		//事件监听
		thirdPage.addEventListener('mousemove', onDocumentMouseMove, false);
		thirdPage.addEventListener('touchstart', onDocumentTouchStart, false);
		thirdPage.addEventListener('touchmove', onDocumentTouchMove, false);
		//
		window.addEventListener('resize', onWindowResize, false);
	}

	//事件函数
	function onWindowResize() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function onDocumentMouseMove(event) {
		mouseX = (event.clientX - windowHalfX) * 0.1;
		mouseY = (event.clientY - window.innerHeight) * 0.1;
	}

	function onDocumentTouchStart(event) {
		if (event.touches.length == 1) {
			event.preventDefault();
			mouseX = (event.touches[0].pageX - windowHalfX) * 0.1;
			mouseY = (event.touches[0].pageY - window.innerHeight) * 0.1;
		}
	}

	function onDocumentTouchMove(event) {
		if (event.touches.length == 1) {
			event.preventDefault();
			mouseX = (event.touches[0].pageX - windowHalfX) * 0.1;
			mouseY = (event.touches[0].pageY - window.innerHeight) * 0.1;
		}
	}
	//
	function animate() {
		requestAnimationFrame(animate);
		render();
	}
	function render() {
		var time = clock.getElapsedTime() * 10;

		//	海洋动画
		for (var i = 0, l = planeGeometry.vertices.length; i < l; i++) {
			planeGeometry.vertices[i].y = 10 * Math.sin(i / 5 + (time + i) / 7);
		}
		planeMesh.rotation.y = time * 0.02;
		planeMesh.geometry.verticesNeedUpdate = true;

		//粒子动画
		for (var i = 0; i < particleArray.length; i++) {
			particleArray[i].position.y += 1;
			if (particleArray[i].position.y > 420) {
				particleArray[i].position.y = -100
			}
		}

		//相机交互
		camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
		camera.position.y += (Math.abs(mouseY) * 0.5 - camera.position.y) * 0.05;
		
		camera.lookAt(scene.position);
		renderer.render(scene, camera);
	}
})();


//============================fourthPage=========================================
(function() {
	//基本
	var camera, scene, renderer, fourthPage, zz;
	//文字
	var textMesh1, textMesh2, textMesh3;
	var textMeshClone=new THREE.Object3D();
	var textMeshObject3D= new THREE.Object3D();
	//交互
	var texture_placeholder,
		isUserInteracting = false,
		onMouseDownMouseX = 0,
		onMouseDownMouseY = 0,
		lon = 90,
		onMouseDownLon = 0,
		lat = 0,
		onMouseDownLat = 0,
		phi = 0,
		theta = 0,
		target = new THREE.Vector3();

	//加载文字 
	var loader = new THREE.FontLoader();
	loader.load('three/fonts/LiSu_Regular.typeface.js', function(font) {
		init(font);
		animate();
	});

	function init(font) {
		fourthPage = document.getElementById('fourthPage');
		zz=document.getElementById('zz');
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
		scene = new THREE.Scene();

		//全景图
		texture_placeholder = document.createElement('canvas');
		texture_placeholder.width = 128;
		texture_placeholder.height = 128;

		var context = texture_placeholder.getContext('2d');
		context.fillStyle = 'rgb( 200, 200, 200 )';
		context.fillRect(0, 0, texture_placeholder.width, texture_placeholder.height);

		var materials = [
			loadTexture('three/textures/skybox/px.jpg'), // right
			loadTexture('three/textures/skybox/nx.jpg'), // left
			loadTexture('three/textures/skybox/py.jpg'), // top
			loadTexture('three/textures/skybox/ny.jpg'), // bottom
			loadTexture('three/textures/skybox/pz.jpg'), // back
			loadTexture('three/textures/skybox/nz.jpg') // front
		];
		var mesh = new THREE.Mesh(new THREE.BoxGeometry(300, 300, 300, 7, 7, 7), new THREE.MultiMaterial(materials));
		mesh.scale.x = -1;
		scene.add(mesh);
		//创建全景图贴图材质
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
		
		//文字生成
		function generateText(text, color) {
			var geometry = new THREE.TextGeometry(text, {
				font: font,
				size: 5,
				height: 1,
				curveSegments: 2
			});
			geometry.center();
			geometry.computeBoundingBox();

			var material = new THREE.MeshBasicMaterial({
				color: color
			});
			var textMesh = new THREE.Mesh(geometry, material);
			textMesh.castShadow = true;
			textMesh.receiveShadow = true;
			textMesh.rotation.y = Math.PI;

			textMesh.scale.z = 0.3;
			return textMesh;
		}

		textMesh1 = generateText("自", 0xff0000);
		textMesh1.position.x = -10;
		textMesh1.position.y = 10;
		textMesh1.position.z = 30;
		textMeshObject3D.add(textMesh1);

		textMesh2 = generateText("画", 0xff0000);
		textMesh2.position.x = -10;
		textMesh2.position.y = 0;
		textMesh2.position.z = 30;
		textMeshObject3D.add(textMesh2);

		textMesh3 = generateText("像", 0xff0000);
		textMesh3.position.x = -10;
		textMesh3.position.y = -10;
		textMesh3.position.z = 30;
		textMeshObject3D.add(textMesh3);
		scene.add(textMeshObject3D);
		
		textMeshClone=textMeshObject3D.clone();
		textMeshClone.position.x=0;
		textMeshClone.position.y=0;
		textMeshClone.position.z=-100;
		scene.add(textMeshClone);

		//渲染器
		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0xffffff);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		fourthPage.appendChild(renderer.domElement);
		//监听事件
		fourthPage.addEventListener('mousedown', onDocumentMouseDown, false);
		fourthPage.addEventListener('mousemove', onDocumentMouseMove, false);
		fourthPage.addEventListener('mouseup', onDocumentMouseUp, false);
		fourthPage.addEventListener('mousewheel', onDocumentMouseWheel, false);
		fourthPage.addEventListener('touchstart', onDocumentTouchStart, false);
		fourthPage.addEventListener('touchmove', onDocumentTouchMove, false);
		
		zz.addEventListener('mousedown', onDocumentMouseDown, false);
		zz.addEventListener('mousemove', onDocumentMouseMove, false);
		zz.addEventListener('mouseup', onDocumentMouseUp, false);
		zz.addEventListener('mousewheel', onDocumentMouseWheel, false);
		zz.addEventListener('touchstart', onDocumentTouchStart, false);
		zz.addEventListener('touchmove', onDocumentTouchMove, false);

		//
		window.addEventListener('resize', onWindowResize, false);
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function onDocumentMouseDown(event) {
		event.preventDefault();
		isUserInteracting = true;
		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;
		onPointerDownLon = lon;
		onPointerDownLat = lat;
	}

	function onDocumentMouseMove(event) {
		if (isUserInteracting === true) {
			lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
			lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
		}
	}

	function onDocumentMouseUp(event) {
		isUserInteracting = false;
	}

	function onDocumentMouseWheel(event) {
		camera.fov -= event.wheelDeltaY * 0.05;

		if (camera.fov >= 117) {
			camera.fov = 117
		}
		if (camera.fov <= 9) {
			camera.fov = 9
		}
		camera.updateProjectionMatrix();
	}

	function onDocumentTouchStart(event) {
		if (event.touches.length == 1) {
			event.preventDefault();
			onPointerDownPointerX = event.touches[0].pageX;
			onPointerDownPointerY = event.touches[0].pageY;
			onPointerDownLon = lon;
			onPointerDownLat = lat;
		}
	}

	function onDocumentTouchMove(event) {
		if (event.touches.length == 1) {
			event.preventDefault();
			lon = (onPointerDownPointerX - event.touches[0].pageX) * 0.1 + onPointerDownLon;
			lat = (event.touches[0].pageY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
		}
	}

	function animate() {
		requestAnimationFrame(animate);
		update();
	}

	function update() {
		//摄像机旋转动画
		if (isUserInteracting === false) {
			lon += 1;
		}
		lat = Math.max(-85, Math.min(85, lat));
		phi = THREE.Math.degToRad(90 - lat);
		theta = THREE.Math.degToRad(lon);
		target.x = 500 * Math.sin(phi) * Math.cos(theta);
		target.y = 500 * Math.cos(phi);
		target.z = 500 * Math.sin(phi) * Math.sin(theta);
		
		camera.lookAt(target);
		renderer.render(scene, camera);
	}
})();


//============================fifthPage==========================================
(function() {
	//基本
	var camera, scene, renderer, fifthPage;
	//文字
	var textMesh1, textMesh2, textMesh3, textMesh4, textMesh5;
	//灯
	var pointLight;
	//背景
	var plane;
	//交互
	var mouse = new THREE.Vector2();
	//加载文字 
	var loader = new THREE.FontLoader();
	loader.load('three/fonts/LiSu_Regular.typeface.js', function(font) {
		init(font);
		animate();
	});

	function init(font) {
		fifthPage = document.getElementById('fifthPage');
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
		camera.position.z = 100;
		scene = new THREE.Scene();

		//灯
		scene.add(new THREE.AmbientLight(0x000000));

		function createLight(color) {
			var pointLight = new THREE.PointLight(color, 1, 30, 1);
			pointLight.castShadow = true;

			var geometry = new THREE.SphereGeometry(0.01, 0.01, 0.01);
			var material = new THREE.MeshBasicMaterial({
				color: color
			});
			var sphere = new THREE.Mesh(geometry, material);
			pointLight.add(sphere);
			return pointLight

		}
		pointLight = createLight(0xffffff);
		pointLight.position.z = 10;
		scene.add(pointLight);

		//平面
		var geometry = new THREE.PlaneGeometry(1925, 1085, 32);
		
		var texture = new THREE.TextureLoader().load("three/textures/bg.jpg");
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set(5, 5);
		var material = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			map: texture
		});

		plane = new THREE.Mesh(geometry, material);
		plane.position.z = -3;
		plane.castShadow = true;
		plane.receiveShadow = true;
		scene.add(plane);

		//文字生成
		function generateText(text, color) {
			var geometry = new THREE.TextGeometry(text, {
				font: font,
				size: 5,
				height: 1,
				curveSegments: 2
			});
			geometry.center();
			geometry.computeBoundingBox();

			var material = new THREE.MeshPhongMaterial({
				color: color,
				shininess: 100,
				specular: 0x222222
			});
			var textMesh = new THREE.Mesh(geometry, material);
			textMesh.castShadow = true;
			textMesh.receiveShadow = true;
			textMesh.rotation.y = Math.PI * 2;

			textMesh.scale.z = 0.3;
			return textMesh;
		}

		textMesh1 = generateText("化繁为简 量变到质变", 0xfa7e12);
		textMesh1.position.x = 0;
		textMesh1.position.y = 50;
		textMesh1.position.z = 0;
		textMesh1.scale.x = 2;
		textMesh1.scale.y = 2;
		scene.add(textMesh1);

		textMesh2 = generateText("我的技能: html css jquery", 0xff0000);
		textMesh2.position.x = 0;
		textMesh2.position.y = 30;
		textMesh2.position.z = 0;
		scene.add(textMesh2);

		textMesh3 = generateText("快要忘记的: angularjs nodejs mongodb threejs cocos2djs", 0xff0000);
		textMesh3.position.x = 0;
		textMesh3.position.y = 10;
		textMesh3.position.z = 0;
		scene.add(textMesh3);

		textMesh4 = generateText("软件: ps edius ae 3dmax cad", 0xff0000);
		textMesh4.position.x = 0;
		textMesh4.position.y = -10;
		textMesh4.position.z = 0;
		scene.add(textMesh4);

		textMesh5 = generateText("英语水平: 瞎蒙带猜带翻译基本能看懂文档几个单词", 0xff0000);
		textMesh5.position.x = 0;
		textMesh5.position.y = -30;
		textMesh5.position.z = 0;
		scene.add(textMesh5);

		//渲染器
		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0x000000);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFShadowMap;
		fifthPage.appendChild(renderer.domElement);
		//监听事件
		fifthPage.addEventListener('mousemove', onDocumentMouseMove, false);
		//
		window.addEventListener('resize', onWindowResize, false);
	}

	//监听函数
	function onDocumentMouseMove(event) {
		//计算标准鼠标位置点
		event.preventDefault();
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function animate() {
		requestAnimationFrame(animate);
		update();
	}
	function update() {
		//鼠标灯交互
		pointLight.position.x = mouse.x * 150;
		pointLight.position.y = mouse.y * 70;

		camera.lookAt(scene.position);
		renderer.render(scene, camera);
	}
})();


//============================sixthPage==========================================
(function() {
	//基本
	var camera, scene, renderer, sixthPage;
	//文字
	var textMesh1;
	//魔方
	//锚点
	var pivot;
	//小方块编号(加锁机制)
	var numberPlane=0
	//保存所有小方块
	var elementArray=[];
	//保存魔方平面对象
	var planesObject={};
	//保存魔方
	var cubeObject3D=new THREE.Object3D();
	//动画
	var initTween;
	//交互
	var mouse = new THREE.Vector2();
	var raycaster = new THREE.Raycaster();

	//加载文字 
	var loader = new THREE.FontLoader();
	loader.load('three/fonts/LiSu_Regular.typeface.js', function(font) {
		init(font);
		animate();
	});

	function init(font) {
		sixthPage = document.getElementById('sixthPage');
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 300;
		scene = new THREE.Scene();

		//文字生成
		function generateText(text, color) {
			var geometry = new THREE.TextGeometry(text, {
				font: font,
				size: 40,
				height: 1,
				curveSegments: 2
			});
			geometry.center();
			geometry.computeBoundingBox();

			var material = new THREE.MeshBasicMaterial({
				color: color
			});
			var textMesh = new THREE.Mesh(geometry, material);
			textMesh.rotation.y = Math.PI * 2;

			textMesh.scale.z = 0.3;
			return textMesh;
		}

		textMesh1 = generateText("结束", 0xfa7e12);
		textMesh1.position.x = 0;
		textMesh1.position.y = 0;
		textMesh1.position.z = 0;
		scene.add(textMesh1);

		//魔方
		for(var i=0;i<6;i++){
			//魔方平面
			planesObject['planes'+i] = new THREE.Group();
			
			for (var u = 0; u < 10; u++) {
				for (var v = 0; v < 10; v++) {
					var geometry = new THREE.PlaneGeometry(10, 10);
					var material = new THREE.MeshBasicMaterial({
						color: Math.random() * 0xffffff,
						side: THREE.DoubleSide
					});
				
					var plane = new THREE.Mesh(geometry, material);
					plane.position.x = u * 10;
					plane.position.y = v * 10;
					plane.position.z = 0;
					//保存到数组
					elementArray.push(plane);
					//为魔方平面添加小方块
					planesObject['planes'+i].add(plane);
					//为魔方添加平面
					cubeObject3D.add(planesObject['planes'+i]);
					//场景添加魔方
					scene.add(cubeObject3D);
				}
			}
		}
		
		//平面拼接魔方
		planesObject['planes0'].rotation.x=Math.PI/2;
		planesObject['planes0'].position.x=0;
		planesObject['planes0'].position.y=-5;
		planesObject['planes0'].position.z=5;
		
		planesObject['planes1'].rotation.x=Math.PI/2;
		planesObject['planes1'].position.y=95;
		planesObject['planes1'].position.z=5;
			
		planesObject['planes2'].rotation.y=Math.PI/2;
		planesObject['planes2'].position.x=-5;
		planesObject['planes2'].position.z=95;
		
		planesObject['planes3'].rotation.y=Math.PI/2;
		planesObject['planes3'].position.x=95;
		planesObject['planes3'].position.z=95;
			
		planesObject['planes4'].position.z=100;


		//改变锚点在中心位置
		var box = new THREE.Box3().setFromObject( cubeObject3D );
		box.center(  cubeObject3D.position ); 
   		cubeObject3D.position.multiplyScalar( - 1 );
		
		pivot = new THREE.Group();
		scene.add( pivot );
		pivot.add( cubeObject3D );

		//渲染器
		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0x000000);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		sixthPage.appendChild(renderer.domElement);
		
		//动画
		initTween =function(number){
			//加锁机制
			if(numberPlane==number){
				return false;
			}
			
			var object =elementArray[number];
			var tweenAnimate1 = new TWEEN.Tween(object.position)
			.to({
				y: 1200
			}, 10000);
			
			var tweenAnimate2 = new TWEEN.Tween(object.rotation)
			.to({
				y:Math.PI*6,
				x:Math.PI*6,
				z:Math.PI*6
			},8000);
			tweenAnimate1.start();
			tweenAnimate2.start();
			//出数组删除元素,优化性能
			elementArray.splice(number,1);
			numberPlane=number;
		}
		
		
		
		//控制器	
		var controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.target.set(0, 10, 0);
		controls.update();

		//监听事件
		sixthPage.addEventListener('mousemove', onDocumentMouseMove, false);
		//
		window.addEventListener('resize', onWindowResize, false);
	}

	//监听函数

	function onDocumentMouseMove(event) {
		//计算标准鼠标位置点
		event.preventDefault();
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	
	function animate() {
		requestAnimationFrame(animate);
		TWEEN.update();
		update();
	}
	function update() {
		//魔方旋转		
		pivot.rotation.y +=0.01;
		//交互
		raycaster.setFromCamera(mouse, camera);
		var intersects = raycaster.intersectObjects(elementArray);
		
		if (intersects.length > 0) {
			
			for (var i = 0; i < elementArray.length; i++) {
				if (intersects[0].object == elementArray[i]) {
					initTween(i);
				}
			}
		}
		textMesh1.lookAt(camera.position);
		camera.lookAt(scene.position);
		renderer.render(scene, camera);
	}
})();
