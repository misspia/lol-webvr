import * as THREE from 'three';
import SceneManager from './sceneManager';
import Audio from './audio';

const rootElement = document.getElementById('canvas');
const audioElement = document.getElementById('audio');

const audio = new Audio({ audioElement });

const {renderer, camera, target, scene, controls } = new SceneManager(rootElement);
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

  audio.getByteFrequencyData();
  // console.log(audio.frequencyData) 
  
};

draw();

