# Headless UI 组件库深度体验与对比项目

本项目是一个基于 React 生态的实战工程，旨在对比和展示目前社区主流的几种 Headless UI（无样式组件库）和状态机驱动库在实现常见组件（如 Select 下拉选择窗、Dialog 对话框、Popover 气泡卡片等）时的使用方式、API 设计与实现细节差异。

## 🎯 核心目标

现代前端开发中，Headless UI 逐渐成为主流趋势，它们将**状态与逻辑**同**UI视图**完全解耦，让开发者可以保持100%样式控制权的同时，享受开箱即用的交互规范和可访问性。

通过本项目，你可以直观地比较以下几种优秀的 Headless 库在实现相同交互需求时的不同封装方式和开发体验，进而为主流业务和基础库选型提供参考：

- **Radix UI** (`@radix-ui/react-*`) - 最为主流的 React 生态无头组件库，提供高质量的 Primitives。
- **Headless UI** (`@headlessui/react`) - 由 Tailwind Labs 官方维护，完全适配 Tailwind CSS 的工具。
- **React Aria Components** (`react-aria-components`) - 由 Adobe 团队驱动，在可访问性（a11y）支持方面异常强大。
- **Ark UI & Zag.js** (`@ark-ui/react`, `@zag-js/react`) - 基于完全解耦的状态机架构（State Machine），提供与框架无关的组件核心状态。
- **Floating UI** (`@floating-ui/react`) - 专注于弹窗定位计算的基石库，也是 Radix UI 等众多高阶库底层的定位基石。

## 🛠 技术栈

- **前端框架**: React 19 + TypeScript + Vite 7
- **CSS 方案**: Tailwind CSS v4 + `tailwind-merge` + `clsx`
- **路由方案**: React Router DOM v7
- **图标依赖**: Lucide React
- **包管理工具**: pnpm

## 📂 项目结构

```text
src/
├── assets/         # 存放静态资源
├── components/     # 组件封装及不同框架对比实现
│   ├── dialog/     # Dialog 对话框组件的多框架版本实现
│   ├── popover/    # Popover 弹窗卡片的多框架版本实现
│   ├── select/     # Select 下拉选择器组件的多框架版本实现
│   └── shared/     # 共享 UI 组件 (例如 CompareCard - 用于横向展示组件)
├── pages/          # 路由映射页面
│   ├── DialogCompare.tsx   # Dialog 组件横向对比页
│   ├── PopoverCompare.tsx  # Popover 弹窗组件横向对比页
│   └── SelectCompare.tsx   # Select 下拉选择组件横向对比页
├── utils/          # 辅助工具函数库
│   └── cn.ts       # 官方经典的 Tailwind Class 合并工具
├── App.tsx         # 应用主入口包含路由注册
├── index.css       # 全局样式文件（含 Tailwind 配置）
└── main.tsx        # 应用挂载入口
```

## 🚀 快速启动

1. **安装依赖**
   本项目使用 pnpm 管理，推荐先行安装并在终端运行：
   ```bash
   pnpm install
   ```

2. **启动本地开发服务器**
   ```bash
   pnpm dev
   ```
   应用默认将在 `http://localhost:5173/` 运行，打开浏览器可以在顶部导航条通过点击不同组件栏目，横向观察所有 Headless UI 的演示。

3. **构建生产版本**
   代码包含对 TS 类型的检查校验：
   ```bash
   pnpm build
   ```

4. **预览生产版本页面**
   ```bash
   pnpm preview
   ```

5. **执行代码检查**
   ```bash
   pnpm lint
   ```
