/*
  文件/模块目的：
  v2.5 入口页交互：拖动旋转中央艺术家具草模、切换入口作品、更新作品说明与详情链接。

  输入输出与规则：
  输入来自鼠标/触摸拖动和作品切换按钮；输出为 CSS 3D 模型旋转、作品类别变化、文案更新。
  不连接后端，不读取用户数据，不依赖第三方库。

  关键步骤为什么这样做：
  入口页要让用户像围着艺术物件观看一样探索作品，而不是看静态背景图。
*/

const stage = document.getElementById('objectStage');
const wrap = document.getElementById('modelWrap');
const model = document.getElementById('sculptureModel');
const switcherButtons = Array.from(document.querySelectorAll('.object-switcher button'));
const objectId = document.getElementById('objectId');
const objectName = document.getElementById('objectName');
const objectText = document.getElementById('objectText');
const objectType = document.getElementById('objectType');
const viewObject = document.getElementById('viewObject');

const OBJECTS = {
  cabinet: {
    id: 'Object 001',
    name: 'Sculptural Cabinet',
    text: 'A cabinet-like functional sculpture: display, concealment, and architectural presence.',
    type: 'Cabinet Object',
    link: 'products/cabinet.html',
    className: 'model--cabinet'
  },
  bench: {
    id: 'Object 002',
    name: 'Entrance Bench',
    text: 'A long horizontal object held by discs, slabs, and quiet structural tension.',
    type: 'Sculptural Bench',
    link: 'products/bench.html',
    className: 'model--bench'
  },
  table: {
    id: 'Object 003',
    name: 'Ritual Table',
    text: 'A low functional plane between ceremony, surface, and mineral sculpture.',
    type: 'Art Table',
    link: 'products/table.html',
    className: 'model--table'
  },
  light: {
    id: 'Object 004',
    name: 'Quiet Light',
    text: 'A vertical luminous object shaped as atmosphere rather than technology.',
    type: 'Light Object',
    link: 'products/lamp.html',
    className: 'model--light'
  }
};

let rotationX = -10;
let rotationY = -22;
let targetX = rotationX;
let targetY = rotationY;
let dragging = false;
let lastX = 0;
let lastY = 0;
let idle = true;

function applyRotation() {
  rotationX += (targetX - rotationX) * 0.12;
  rotationY += (targetY - rotationY) * 0.12;
  wrap.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  if (!dragging && idle) targetY += 0.045;
  requestAnimationFrame(applyRotation);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function selectObject(key) {
  const item = OBJECTS[key];
  if (!item) return;
  model.className = `sculpture-model ${item.className}`;
  objectId.textContent = item.id;
  objectName.textContent = item.name;
  objectText.textContent = item.text;
  objectType.textContent = item.type;
  viewObject.href = item.link;
  switcherButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.object === key));
  targetX = -10;
  targetY = -22;
}

switcherButtons.forEach((button) => {
  button.addEventListener('click', () => selectObject(button.dataset.object));
  button.addEventListener('pointerdown', (event) => event.stopPropagation());
});

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('pointerdown', (event) => event.stopPropagation());
});

stage.addEventListener('pointerdown', (event) => {
  dragging = true;
  idle = false;
  lastX = event.clientX;
  lastY = event.clientY;
  try { stage.setPointerCapture(event.pointerId); } catch (_) {}
});

stage.addEventListener('pointermove', (event) => {
  if (!dragging) return;
  const dx = event.clientX - lastX;
  const dy = event.clientY - lastY;
  targetY += dx * 0.42;
  targetX = clamp(targetX - dy * 0.22, -34, 18);
  lastX = event.clientX;
  lastY = event.clientY;
});

function endDrag(event) {
  dragging = false;
  setTimeout(() => { idle = true; }, 1600);
  if (event?.pointerId !== undefined) {
    try { stage.releasePointerCapture(event.pointerId); } catch (_) {}
  }
}

stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointercancel', endDrag);
stage.addEventListener('pointerleave', () => { dragging = false; });

selectObject('cabinet');
applyRotation();
