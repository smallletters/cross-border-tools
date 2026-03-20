# 跨境电商工具导航

一个精美的跨境电商工具导航网站，基于 Next.js 14 + Tailwind CSS 构建。

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产版本
npm start
```

## 项目结构

```
cross-border-tools/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 全局布局（含Header/Footer）
│   ├── page.tsx             # 首页
│   ├── globals.css          # 全局样式
│   ├── submit/
│   │   └── page.tsx         # 提交工具页面
│   └── tools/[slug]/
│       ├── page.tsx         # 工具详情页
│       ├── loading.tsx      # 加载状态
│       └── not-found.tsx    # 404页面
├── components/               # React 组件
│   ├── Header.tsx           # 顶部导航
│   ├── Footer.tsx           # 底部
│   ├── CategoryTabs.tsx     # 分类标签
│   ├── SearchBar.tsx        # 搜索框
│   └── ToolCard.tsx         # 工具卡片
├── lib/
│   └── tools.ts             # 工具数据（17个示例工具）
└── public/                   # 静态资源
```

## 功能特性

- ✅ 分类浏览（10个分类）
- ✅ 关键词搜索（防抖优化）
- ✅ 工具详情页（SEO优化）
- ✅ 提交工具表单
- ✅ 响应式设计
- ✅ 深色模式支持
- ✅ SEO 友好（动态meta）

## 页面路由

| 路由 | 说明 |
|-----|-----|
| `/` | 首页（工具列表 + 分类 + 搜索） |
| `/tools/[slug]` | 工具详情页 |
| `/submit` | 提交工具页面 |

## 工具分类

1. 🔍 选品工具
2. 📦 ERP系统
3. ⚙️ 运营工具
4. 📢 营销广告
5. 📱 社媒运营
6. 🛒 独立站
7. 💳 支付收款
8. 🚚 物流
9. 📊 数据分析

## 扩展指南

### 添加新工具

编辑 `lib/tools.ts`，在 `tools` 数组中添加：

```typescript
{
  id: '18',
  name: '新工具名称',
  slug: 'new-tool-slug',
  description: '工具描述...',
  url: 'https://example.com',
  category: 'product-research',
  tags: ['标签1', '标签2'],
  price: '$29/月',
  rating: 4.5,
  featured: false,
}
```

### 添加新分类

编辑 `lib/tools.ts`，在 `categories` 数组中添加：

```typescript
{ id: 'new-category', name: '新分类', icon: '🆕' },
```

## 部署

### Vercel（推荐）

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

### 其他平台

```bash
npm run build
npm start
```

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel / Node.js

---

Made with ❤️ for 跨境电商卖家