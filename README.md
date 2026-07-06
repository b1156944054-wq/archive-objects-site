# Archive Objects Website v2.2

## 本次修改目标

v2.2 重点不是继续改首屏视觉，而是把官方网站补成更像真实企业官网的结构和内容。

整体结构现在分成两层：

1. `index.html`：前台入口展示页，保留高级场景和氛围。
2. 官方站多页面：进入 `official.html` 后，再进入不同栏目页面，而不是把所有内容堆在一个上下滚动页里。

---

## 页面结构

| 页面 | 作用 |
|---|---|
| `index.html` | 前台入口展示页 / 高级视觉入口 |
| `official.html` | 官方站首页 / 品牌与栏目入口 |
| `collection.html` | 产品系列：Bench / Table / Cabinet / Light |
| `atelier.html` | 工作室故事、设计方法、客户对象 |
| `materials.html` | 材料系统与工艺可信度 |
| `process.html` | 委托流程：空间读取到交付安装 |
| `project-studies.html` | 项目研究：私宅、酒店、画廊等场景案例雏形 |
| `commission.html` | 委托咨询入口 / 静态项目表单 |
| `contact.html` | 联系与合作入口，保留兼容页面 |
| `products/bench.html` | 长凳产品详情页 |
| `products/table.html` | 桌几产品详情页 |
| `products/cabinet.html` | 柜体产品详情页 |
| `products/lamp.html` | 灯具产品详情页 |

---

## 主要新增内容

### 1. 官方站首页

补充了品牌定位：

- Usable art objects for high-end spaces
- Between furniture, sculpture, and spatial memory
- 解释品牌不是普通家具商城，而是高端艺术家具工作室

### 2. Collection 页面

补充 4 个产品方向：

- Sculptural Bench
- Art Table
- Cabinet Object
- Light Object

每个方向都有：

- 使用空间
- 商业定位
- 尺寸/材料方向
- 产品页入口

### 3. Atelier 页面

补充：

- 品牌/工作室来源逻辑
- 不是普通家具造型，而是空间、情绪、艺术物件的转化
- Space Reading / Form Language / Realization 三个设计方法
- 面向业主、收藏者、设计师、项目团队

### 4. Materials 页面

补充：

- Metal
- Mineral Surface
- Wood + Structure
- Glass
- Light
- Digital Archive

目的：让客户相信作品可以落地，不只是概念图。

### 5. Process 页面

补充 6 步流程：

1. Space Reading
2. Object Direction
3. Concept Proposal
4. Prototype / 3D Study
5. Fabrication
6. Delivery

并加入典型周期和客户需要准备的资料。

### 6. Project Studies 页面

新增 3 个项目研究雏形：

- Villa Entrance Bench
- Boutique Hotel Lobby Object
- Gallery Cabinet Object

目的：在真实案例不足时，用项目研究先承接客户理解。

### 7. Commission 页面

新增静态项目咨询表单结构：

- 项目类型
- 作品方向
- 城市/国家
- 时间周期
- 预算范围
- 联系方式
- 项目说明

当前只是静态原型，不提交数据。后续可接 Email、Google Forms、Airtable、Notion 或后端 CRM。

### 8. 产品详情页

四个产品页都补了：

- 产品定位
- 适用空间
- 材料路线
- 尺寸逻辑
- 价格逻辑
- 委托说明
- 询价入口

---

## 测试说明

### 打开入口页

双击：

```text
index.html
```

预期：

1. 看到前台高级视觉入口页。
2. 点击 `Enter official site` 进入 `official.html`。

### 测试官方站

进入 `official.html` 后，点击顶部导航：

```text
Collection / Atelier / Materials / Process / Projects / Commission
```

预期：

每个导航进入独立页面，而不是在同一页面上下跳转。

### 测试产品页

进入：

```text
collection.html
```

点击任意产品：

```text
Open object
```

预期：

进入对应产品页，并能点击 `Start commission` 或 `Inquire about this object`。

### 测试表单

进入：

```text
commission.html
```

预期：

能看到静态项目咨询表单。当前不提交数据，后续需要接真实表单系统。

---

## 台账更新

| 项目 | 内容 |
|---|---|
| 修改目标 | 补齐官方网站结构和内容，让它更像真实高端品牌官网 |
| 新增页面 | `project-studies.html`、`commission.html` |
| 重点修改 | `official.html`、`collection.html`、`atelier.html`、`materials.html`、`process.html`、`products/*.html`、`official.css`、`official.js` |
| 解决问题 | 官网内容太薄、所有内容堆在一个长页面、产品页空、缺少客户信任结构 |
| 新增能力 | 多页面官网结构、产品页内容、项目研究、材料工艺说明、委托流程、静态咨询表单 |
| 是否影响契约 | 不涉及后端、支付、数据库、权限、核心启动入口 |
| 遗留风险 | 表单未连接后端；真实案例、真实产品图、真实工艺图片仍需后续替换 |

---

## 后续建议

下一步可以继续替换：

1. 真实产品渲染图 / PNG / GLB；
2. 创始人介绍和真实设计经历；
3. 材料样品图和制作过程图；
4. 表单提交系统；
5. 中英文切换。


## v2.3 更新：产品集 / Product Collection

### 修改目标
解决“用户看不到有哪些产品”的问题。Collection 页面不再只是四个大方向说明，而是变成真正的产品集入口。

### 新增内容
- 四大产品家族：Benches / Tables / Cabinet Objects / Light Objects
- 十二个可见产品方向：B-01~B-03、T-01~T-03、C-01~C-03、L-01~L-03
- 每个产品方向都有：产品名、适用空间、尺寸逻辑、状态、详情页入口
- 新增产品家族导航和购买路径说明

### 测试说明
1. 打开 `index.html`。
2. 点击 `Enter official site` 进入官网。
3. 点击顶部 `Collection`。
4. 预期看到完整产品矩阵，而不是只有品牌解释。
5. 点击任意产品卡的 `View direction`，应进入对应产品详情页。

### 遗留风险
当前产品图仍是抽象占位视觉，后续需要替换为真实家具渲染图、透明 PNG 或 GLB 模型。

## v2.4 Update - Studio renamed to Atelier

### Modification target
Rename the brand-method section from `Studio` to `Atelier` so the site reads less like a small design office and more like a high-end art-furniture brand with craft and commission logic.

### Modified structure
- `studio.html` was renamed to `atelier.html`.
- All official navigation links were updated from `Studio` to `Atelier`.
- Footer references were updated to `Atelier`.
- Product pages now link to `../atelier.html`.
- The Atelier page now uses higher-brand language: Maison logic, Savoir-faire, spatial reading, form language, and realization.

### Contract impact
No backend, payment, database, permissions, or core entry logic was changed.

### Test notes
1. Open `index.html`.
2. Click `Enter official site`.
3. On `official.html`, click `Atelier` in the top navigation.
4. Expected: browser opens `atelier.html`.
5. Test product pages and footer links; all should point to `atelier.html`, not `studio.html`.
