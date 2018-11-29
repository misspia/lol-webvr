import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';

const OrbitController = OrbitControls(THREE);



export default class SceneManager {
    constructor(canvas) {
        const { innerWidth, innerHeight, devicePixelRatio } = window;

        this.canvas = canvas;
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialis: true,
            alpha: false,
            stencil: false
        });
        this.renderer.setSize(innerWidth, innerHeight);
        this.setClearColor(0x29233b);
        
        const dpr = Math.min(1.5, devicePixelRatio);
        this.renderer.setPixelRatio(dpr);

        const aspectRatio = innerWidth / innerHeight;
        this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.01, 100);
        this.target = new THREE.Vector3();
        this.camera.position.set(0, 1, -3);

        this.scene = new THREE.Scene();
        window.scene = this.scene;

        this.controls = new OrbitController(this.camera, this.renderer.domElement);

        // initial resize
        this.resize();

        //event listeners
        window.addEventListener('resize', () => this.resize());
    }
    resize() {
         const { innerWidth, innerHeight } = window;
         this.camera.aspect = innerWidth / innerHeight;
         this.camera.updateProjectionMatrix();
         this.renderer.setSize(innerWidth, innerHeight);
    }
    setCameraPos(x, y, z) {
        this.camera.position.set(x, y, z);
    }
    lookAt(x, y, z) {
        this.camera.lookAt(x, y, z);
    }
    setClearColor(hex) {
        this.renderer.setClearColor(hex);
    }
    disableOrbitControls() {
        this.controls.enabled = false;
    }
    render() {

    }
}