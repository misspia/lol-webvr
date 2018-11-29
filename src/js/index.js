import * as THREE from 'three';
import SceneManager from './sceneManager';

const root = document.getElementById('canvas');
const audio = document.getElementById('audio');

const {renderer, camera, target, scene, controls } = new SceneManager(root);
renderer.vr.enabled = true;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const draw = () => {
  requestAnimationFrame(draw);
  renderer.render(scene, camera);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
};

draw();
