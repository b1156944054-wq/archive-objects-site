/*
  文件/模块目的：
  v1.7 负责首页轻视角、克制型作品热点选择、信息面板更新和对象显示控制。

  输入输出与规则：
  输入来自鼠标/触摸移动、视角按钮、热点按钮；输出为背景轻视差、热点轻位移和产品信息更新。
  不使用任何第三方库，保证双击 index.html 可运行。

  关键步骤为什么这样做：
  避免用假家具破坏质感；用高级热点建立产品入口，后续替换为真实渲染图/模型。
*/

const stage = document.getElementById('heroStage');
const image = document.getElementById('sceneImage');
const markerLayer = document.getElementById('objectMarkerLayer');
const markers = Array.from(document.querySelectorAll('.object-marker'));
const viewButtons = Array.from(document.querySelectorAll('.view-control button'));
const objectsToggle = document.getElementById('objectsToggle');
const focusObjects = document.getElementById('focusObjects');
const objectCard = document.getElementById('objectCard');
const objectKicker = document.getElementById('objectKicker');
const objectTitle = document.getElementById('objectTitle');
const objectCopy = document.getElementById('objectCopy');
const objectType = document.getElementById('objectType');
const objectStatus = document.getElementById('objectStatus');
const objectLink = document.getElementById('objectLink');

const OBJECTS = {
  bench: {
    kicker: 'Object 001',
    title: 'Sculptural Bench',
    copy: 'A signature usable-art object for villas, galleries, private clubs, and entrance spaces.',
    type: 'Private commission',
    status: 'Concept ready',
    link: 'products/bench.html'
  },
  table: {
    kicker: 'Object 002',
    title: 'Art Table',
    copy: 'A ceremonial surface for lounges, hotel suites, reception rooms, and curated spatial moments.',
    type: 'Object study',
    status: 'In development',
    link: 'products/table.html'
  },
  cabinet: {
    kicker: 'Object 003',
    title: 'Cabinet Object',
    copy: 'A sculptural storage and display object for private collections, clubs, and designer projects.',
    type: 'Custom scale',
    status: 'Archive object',
    link: 'products/cabinet.html'
  },
  light: {
    kicker: 'Object 004',
    title: 'Light Object',
    copy: 'Ambient light shaped as a spatial signal: part sculpture, part instrument, part future marker.',
    type: 'Lighting object',
    status: 'Concept study',
    link: 'products/lamp.html'
  }
};

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;
let markersVisible = true;

function selectObject(key, showCard = true) {
  const data = OBJECTS[key];
  if (!data) return;
  markers.forEach((marker) => marker.classList.toggle('is-active', marker.dataset.object === key));
  objectKicker.textContent = data.kicker;
  objectTitle.textContent = data.title;
  objectCopy.textContent = data.copy;
  objectType.textContent = data.type;
  objectStatus.textContent = data.status;
  objectLink.href = data.link;
  if (showCard) objectCard.classList.remove('is-hidden');
}

function setMarkersVisible(nextValue) {
  markersVisible = nextValue;
  markerLayer.classList.toggle('is-hidden', !markersVisible);
  objectCard.classList.toggle('is-hidden', !markersVisible);
  objectsToggle.firstChild.nodeValue = markersVisible ? 'Objects ' : 'Show objects ';
}

function setView(view) {
  const map = { left: -1, center: 0, right: 1 };
  targetX = map[view] ?? 0;
  targetY = 0;
  viewButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.view === view));
}

function updatePointer(clientX, clientY) {
  const rect = stage.getBoundingClientRect();
  const x = (clientX - rect.left) / rect.width;
  const y = (clientY - rect.top) / rect.height;
  targetX = Math.max(-1, Math.min(1, (x - 0.5) * 1.15));
  targetY = Math.max(-1, Math.min(1, (y - 0.5) * .75));
  viewButtons.forEach((button) => button.classList.remove('is-active'));
}

function animate() {
  currentX += (targetX - currentX) * .065;
  currentY += (targetY - currentY) * .065;

  const bgX = 50 + currentX * 3.2;
  const bgY = 50 + currentY * 1.7;
  const imgX = currentX * -14;
  const imgY = currentY * -7;
  const markerX = currentX * 18;
  const markerY = currentY * 8;

  image.style.backgroundPosition = `${bgX}% ${bgY}%`;
  image.style.transform = `translate3d(${imgX}px, ${imgY}px, 0) scale(1.025)`;
  markerLayer.style.transform = `translate3d(${markerX}px, ${markerY}px, 0)`;

  requestAnimationFrame(animate);
}

markers.forEach((marker) => {
  marker.addEventListener('click', (event) => {
    event.stopPropagation();
    selectObject(marker.dataset.object);
  });
});

viewButtons.forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view));
});

objectsToggle.addEventListener('click', () => setMarkersVisible(!markersVisible));
// 交互层修复：入口按钮和顶部导航必须优先响应点击，不能被舞台拖拽层抢走。
const directInteractiveItems = Array.from(document.querySelectorAll('a, button, .card-action'));
directInteractiveItems.forEach((item) => {
  item.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });
});

if (focusObjects) {
  focusObjects.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.assign('official.html');
  });
}

stage.addEventListener('pointerdown', (event) => {
  if (event.target.closest('a, button, .intro-card, .site-header, .object-card')) return;
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  try { stage.setPointerCapture(event.pointerId); } catch (_) {}
});

stage.addEventListener('pointermove', (event) => {
  if (isDragging) {
    const dx = (event.clientX - startX) / Math.max(1, stage.clientWidth);
    const dy = (event.clientY - startY) / Math.max(1, stage.clientHeight);
    targetX = Math.max(-1, Math.min(1, targetX + dx * 1.75));
    targetY = Math.max(-1, Math.min(1, targetY + dy * 1.15));
    startX = event.clientX;
    startY = event.clientY;
  } else {
    updatePointer(event.clientX, event.clientY);
  }
});

stage.addEventListener('pointerup', (event) => {
  isDragging = false;
  try { stage.releasePointerCapture(event.pointerId); } catch (_) {}
});
stage.addEventListener('pointerleave', () => { isDragging = false; });

selectObject('bench', false);
animate();
