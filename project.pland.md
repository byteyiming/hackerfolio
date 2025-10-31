项目计划：AI 驱动的“黑客/矩阵”主题作品集网站

文档版本: 1.1 (已更新)
日期: 2025年10月29日
项目负责人: 

$$您的名字$$


目标AI助手: 

$$AI 助手名称$$

1. 项目概述 (Executive Summary)

本项目旨在使用 Next.js、TypeScript 和 styled-jsx 构建一个具有“黑客/矩阵”（Matrix）视觉主题的、高性能的、响应式的个人作品集网站。网站将模拟一个复古的计算机终端界面，包含动态的“代码雨”背景、扫描线效果和发光的绿色文本。其核心目的是展示开发者的技术能力（尤其是前端和AI相关项目），并为访问者（如招聘方、同行）提供独特而难忘的浏览体验。

2. 核心目标 (Core Objectives)

技术展示: 使用现代前端技术栈 (Next.js, TypeScript) 作为作品集本身的第一展示品。

视觉冲击: 完美复刻“黑客”主题，包括代码雨、CRT扫描线和发光UI元素，使其在视觉上脱颖而出。

高性能: 利用 Next.js 的静态站点生成 (SSG) 特性，确保网站加载速度极快。

内容与代码分离: 将所有作品集内容（个人简介、项目列表等）存储在根目录的 portfolio-data.json 文件中，便于更新。

响应式设计: 确保在桌面和移动设备上均有良好的视觉和交互体验。

3. 关键特性 (Key Features)

全局“矩阵”主题:

深黑色/深绿色背景。

全局字体使用等宽字体 (如 Courier New, monospace)。

所有可交互元素（链接、按钮）均有发光 (glow) 效果。

动态“代码雨”背景组件 (<MatrixRain />):

使用 <canvas> 元素以获得最佳性能（优于 DOM 动画）。

使用 React.useEffect 钩子来启动和管理动画循环。

动画应在浏览器窗口大小调整时自动重绘以适应新尺寸。

字符（日文片假名、数字、字母）应随机生成并以不同速度下落。

CRT 扫描线覆盖层:

使用 CSS repeating-linear-gradient 创建一个半透明的覆盖层，模拟老式显示器的扫描线。

使用微妙的 CSS 动画使其轻微闪烁或滚动。

数据驱动的内容板块:

主页/介绍 (<Hero />): 包含一个“打字机”动画效果，逐字显示从 JSON 文件加载的介绍信息。

关于我 (<About />): 模拟一个正在加载的“机密文件”，显示来自 JSON 的个人简介。

项目展示 (<Projects />):

从 JSON 文件动态加载项目数组。

使用网格布局 (CSS Grid) 展示项目卡片。

项目卡片 (<ProjectCard />) 边框发光，鼠标悬停时触发“故障 (glitch)” 效果。

联系表单 (<ContactForm />):

表单 input 和 textarea 样式模拟终端输入框。

提交按钮具有脉冲发光动画。

4. 技术栈 (Technology Stack)

核心框架: Next.js 14+ (使用 App Router)

语言: TypeScript

样式:

styled-jsx: (Next.js 内置) 用于组件级样式封装。

styles/globals.css: (或 styled-jsx global) 用于定义全局主题、字体和动画。

动画 (代码雨): HTML5 <canvas> + React Hooks (useEffect, useRef, useState)

内容管理: 根目录 portfolio-data.json 文件 (通过 import 或 fs 在构建时读取)。

部署: Vercel (与 Next.js 完美集成)

5. 项目架构与文件结构 (示例)

我们将使用 Next.js App Router 的标准结构。

/hacker-portfolio
|
├── /src
│   ├── /app
│   │   │
│   │   ├── /_components          <-- 存放核心组件
│   │   │   ├── MatrixRain.tsx    <-- “矩阵雨”画布组件
│   │   │   ├── Header.tsx        <-- 导航
│   │   │   ├── Hero.tsx          <-- 主页介绍（带打字效果）
│   │   │   ├── About.tsx         <-- 关于我
│   │   │   ├── Projects.tsx      <-- 项目列表
│   │   │   ├── ProjectCard.tsx   <-- 单个项目卡片
│   │   │   ├── ContactForm.tsx   <-- 联系表单
│   │   │   └── ScanLines.tsx     <-- 扫描线覆盖层
│   │   │
│   │   ├── layout.tsx            <-- 根布局 (加载全局样式和字体)
│   │   ├── page.tsx              <-- 主页 (pages/index.js 的替代品)
│   │   └── globals.css           <-- 全局样式（背景、字体、动画）
│   │
│   ├── /lib
│   │   └── types.ts              <-- TypeScript 类型定义 (例如 IProject)
|
├── /public
│   └── /fonts                    <-- (如果需要存放自定义字体)
|
├── portfolio-data.json         <-- [新] 存放所有作品集内容
├── package.json
└── tsconfig.json


6. 执行里程碑 (Milestones)

Milestone 1: 项目设置与基础主题 (1-2天)

[执行] 使用 npx create-next-app@latest --typescript 初始化 Next.js + TS 项目。

[执行] 在 globals.css 中设置全局样式：

body 背景色为 #000。

全局颜色为 #00ff00。

全局字体设为 monospace, "Courier New"。

[执行] 创建 ScanLines.tsx 组件，并将其添加到 layout.tsx 中，实现全局扫描线效果。

[执行] 创建 MatrixRain.tsx 组件，使用 <canvas> 和 useEffect 实现基础的代码雨动画。

Milestone 2: 内容与核心组件 (3-4天)

[执行] 在项目根目录创建 portfolio-data.json 文件。填充示例内容（例如：{ "aboutMe": "...", "projects": [...] }）。

[执行] 在 layout.tsx 中集成 <MatrixRain /> 和 <ScanLines />，确保它们作为背景运行。

[执行] 构建 <Hero /> 组件，从 portfolio-data.json 加载内容并实现打字机动画效果。

[执行] 构建 <About /> 组件，使用模拟终端的边框和样式，并从 portfolio-data.json 加载“关于我”的文本。

[执行] 定义 IProject 接口 (在 lib/types.ts)。

[执行] 构建 <ProjectCard /> 组件 (接收 IProject 类型的 props)，并为其添加 styled-jsx 样式（边框、发光、悬停效果）。

[执行] 构建 <Projects /> 组件，从 portfolio-data.json 导入项目数组，并使用网格布局来渲染多个 <ProjectCard />。

Milestone 3: 交互与收尾 (2-3天)

[执行] 构建 <ContactForm /> 组件，包含 input 和 button 的终端样式。

[执行] (可选) 为表单提交添加基础的 API 路由 (app/api/contact/route.ts)。

[执行] 调整所有组件的响应式设计，确保在移动设备上体验良好（代码雨的列数应动态调整）。

[执行] 审查和重构：确保 TypeScript 类型无误，移除不必要的 any 类型。

[执行] 部署到 Vercel 并进行公开测试。

7. 未来的增强功能 (Future Enhancements)

真实终端: 将联系表单或导航升级为功能性的（模拟）Web 终端，可以接收如 ls, cat about.txt 等命令。

AI 集成: (如果作品集包含 AI 项目) 添加一个小的 Next.js Server Action 功能，调用一个AI模型（如 Gemini API）来动态生成一句“今日科技名言”或回答一个简单问题。

音效: 添加细微的键盘敲击声或终端嗡嗡声（默认静音，用户可选）。