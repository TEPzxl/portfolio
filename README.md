# Portfolio

基于 Next.js 16 构建的个人作品集网站，聚焦全栈能力展示，包括：
- 首页个人介绍（Hero）
- 技术栈模块（Tech Stack）
- 项目展示模块（Projects）
- 联系方式模块（Contact，支持一键复制邮箱）

## 在线预览

- [查看网站](https://portfolio-sand-delta-59.vercel.app/)

## 功能特性

- 响应式布局，适配桌面端与移动端
- 浮动导航，支持锚点跳转（About / Tech Stack / Projects / Contact）
- Hero 动画文案与视觉效果（Spotlight、Grid 背景）
- 项目卡片展示（支持项目链接与技术图标）
- 联系区交互（复制邮箱、邮件直达、GitHub 跳转）

## 技术栈

- Framework: `Next.js 16` (App Router)
- Language: `TypeScript`
- UI: `React 19`
- Style: `Tailwind CSS 4`
- Animation: `motion`
- Icons: `react-icons`、`lucide-react`
- Lint: `ESLint 9` + `eslint-config-next`

## 项目结构

```text
.
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components
│   ├── Hero.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── NavBar.tsx
│   └── ui/
├── data
│   ├── navItems.ts
│   ├── tech-stack.ts
│   └── projects.ts
├── public
└── package.json
```

## 本地运行

### 1. 环境要求

- Node.js `>= 20.9.0`
- npm（推荐使用项目内 `package-lock.json`）

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发环境

```bash
npm run dev
```

访问 `http://localhost:3000`

## 可用脚本

```bash
npm run dev    # 启动开发服务器
npm run build  # 生产构建
npm run start  # 启动生产服务
npm run lint   # 代码检查
```

## 内容配置说明

常见可编辑入口：
- `components/Hero.tsx`：首页介绍文案与 CTA
- `data/tech-stack.ts`：技术栈分类与图标
- `data/projects.ts`：项目列表、描述、链接、封面
- `data/navItems.ts`：导航项与锚点
- `components/Contact.tsx`：邮箱和 GitHub 链接

## 部署建议

推荐部署到 Vercel：

1. 推送代码到 GitHub
2. 在 Vercel 导入仓库
3. 使用默认 Next.js 构建配置即可完成部署

其他平台（Docker、自托管）也可部署，核心步骤为：

```bash
npm install
npm run build
npm run start
```

## 后续优化建议

- 将 `data/projects.ts` 中示例项目替换为真实项目案例
- 增加项目详情页或博客模块
- 补充 SEO 元信息（`app/layout.tsx`）
- 增加访问统计（如 Vercel Analytics）