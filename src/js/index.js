import * as THREE from 'three';

import SceneManager from './sceneManager';
import championsJSON from '../data/champions.json';
import itemsJSON from '../data/items.json';


const champions = championsJSON.data;
const items = itemsJSON.data;

const root = document.getElementById('root');

const scene = new SceneManager(root);

console.log(champions);


