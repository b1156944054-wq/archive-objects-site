# Archive Objects Website v2.5

## 本次修改目标

v2.5 把入口页从“科技感空间官网”切换成“艺术家具档案馆入口”。

整体结构仍然分成两层：

1. `index.html`：前台入口展示页，米白艺术肌理背景 + 中央可拖动旋转的非写实 3D 雕塑家具 + 作品切换。
2. 官方站多页面：进入 `official.html` 后，再进入不同栏目页面，而不是把所有内容堆在一个上下滚动页里。

---

## 页面结构

| 页面 | 作用 |
|---|---|
| `index.html` | 前台入口展示页 / 互动式雕塑入口 |
| `official.html` | 官方站首页 / 品牌与栏目入口 |
| `collection.html` | 产品系列：Bench / Table / Cabinet / Light |
| `atelier.html` | Atelier / Maison logic / Savoir-faire |
| `materials.html` | 材料系统与工艺可信度 |
| `process.html` | 委托流程：空间读取到交付安装 |
| `project-studies.html` | 项目研究 / 场景案例雏形 |
| `commission.html` | 委托咨询入口 / 静态项目表单 |
| `contact.html` | 联系与合作入口 |
| `products/*.html` | 产品详情页 |

---

## v2.5 新增能力

- 入口页改为米白纸面 / 灰泥质感背景。
- 中央加入可拖动旋转的 CSS 3D 艺术家具草模。
- 支持 Cabinet / Bench / Table / Light 四个作品切换。
- `View object` 会进入当前作品详情页。
- 入口页不再使用未来城市、蓝天湖景、科技玻璃 UI 作为主视觉。

---

## 测试说明

打开：

```text
index.html
```

预期：

1. 首屏是艺术纸面肌理背景，不是未来科技展厅。
2. 中间出现浅色雕塑家具草模。
3. 拖动中间作品，作品可以旋转。
4. 点击 `Cabinet / Bench / Table / Light`，作品轮廓和右侧说明切换。
5. 点击 `Enter official site` 进入 `official.html`。
6. 点击 `View object` 进入当前作品详情页。

---

## 台账更新

| 项目 | 内容 |
|---|---|
| 修改目标 | 入口页从科技感视觉改成艺术家具档案馆视觉 |
| 修改文件 | `index.html`、`styles.css`、`script.js`、`README.md` |
| 解决问题 | 旧首页科技感过强、作品不是主角、无法观看作品角度 |
| 新增能力 | 中央可旋转艺术家具草模、作品切换、材质感背景 |
| 是否影响契约 | 不涉及后端、支付、数据库、权限 |
| 遗留风险 | 当前为 CSS 3D 草模；后续可替换为 Rhino / Blender 导出的 GLB 真模型 |
