let scene =  new THREE.Scene();
let camera =  new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight , .1 ,100);
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({ color : "red"})
let mesh = new THREE.Mesh(box, material);

// Math.PI Stands for 180 degree so basically for the rotation perspective the 3.14 will rotate the object to 180 degree
mesh.position.x = 2;
mesh.position.y = 1;
mesh.position.z = 1;

mesh.rotation.x = 1;
mesh.rotation.y = 1;
mesh.rotation.z = 1;

mesh.scale.x = 1 ;
mesh.scale.y = 1 ;
mesh.scale.z = 1 ;



scene.add(mesh);

const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({canvas : canvas , antialias : true});
renderer.setSize(window.innerWidth , window.innerHeight);
renderer.render(scene, camera);

let clock = new THREE.Clock();
function animate() {
    //runs the animation at peak of device fps
    // function will run infinitely due to below line
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera)
    mesh.rotation.z += 0.01;
    // mesh.position.x += 0.01;
    mesh.scale.y += 0.01;
    // this will help us to animate the things based on the time not the device fps
    mesh.rotation.y = clock.getElaspedTime();

}
animate();