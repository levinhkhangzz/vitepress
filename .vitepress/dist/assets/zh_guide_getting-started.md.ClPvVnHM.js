import{_ as s,c as i,o as a,X as e}from"./chunks/framework.LBqz8C7l.js";const u=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/getting-started.md","filePath":"zh/guide/getting-started.md","lastUpdated":null}'),t={name:"zh/guide/getting-started.md"},n=e(`<h1 id="getting-started" tabindex="-1">快速开始 <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;快速开始 {#getting-started}&quot;">​</a></h1><h2 id="try-it-online" tabindex="-1">在线尝试 <a class="header-anchor" href="#try-it-online" aria-label="Permalink to &quot;在线尝试 {#try-it-online}&quot;">​</a></h2><p>可以直接在 <a href="https://vitepress.new" target="_blank" rel="noreferrer">StackBlitz</a> 上进行在线尝试。</p><h2 id="installation" tabindex="-1">安装 <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;安装 {#installation}&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">前置准备 <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;前置准备 {#prerequisites}&quot;">​</a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 18 及以上版本。</li><li>通过命令行界面 (CLI) 访问 VitePress 的终端。</li><li>支持 <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a> 语法的编辑器。 <ul><li>推荐 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> 及其<a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">官方 Vue 扩展</a>。</li></ul></li></ul><p>VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-yJW9c" id="tab-9ssFXbT" checked="checked"><label for="tab-9ssFXbT">npm</label><input type="radio" name="group-yJW9c" id="tab-2j8h5aY"><label for="tab-2j8h5aY">pnpm</label><input type="radio" name="group-yJW9c" id="tab-H-revdz"><label for="tab-H-revdz">yarn</label><input type="radio" name="group-yJW9c" id="tab-aHV3-Dc"><label for="tab-aHV3-Dc">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm add -D vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm add -D vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn add -D vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun add -D vitepress</span></span></code></pre></div></div></div><details class="details custom-block"><summary>遇到了 missing peer deps 警告？</summary><p>如果使用 PNPM，会注意到对 <code>@docsearch/js</code> 的 missing peer deps 警告。这不会影响 VitePress 运行。如果希望禁止显示此警告，请将以下内容添加到 <code>package.json</code>：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;peerDependencyRules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ignoreMissing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;@algolia/client-search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;search-insights&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><div class="tip custom-block"><p class="custom-block-title">注意</p><p>VitePress 是仅 ESM 的软件包。不要使用 <code>require()</code> 导入它，并确保最新的 <code>package.json</code> 包含 <code>&quot;type&quot;: &quot;module&quot;</code>，或者更改相关文件的文件扩展名，例如 <code>.vitepress/config.js</code> 到 <code>.mjs</code>/<code>.mts</code>。更多详情请参考 <a href="http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only" target="_blank" rel="noreferrer">Vite 故障排除指南</a>。此外，在异步 CJS 上下文中，可以使用 <code>await import(&#39;vitepress&#39;)</code> 代替。</p></div><h3 id="setup-wizard" tabindex="-1">安装向导 <a class="header-anchor" href="#setup-wizard" aria-label="Permalink to &quot;安装向导 {#setup-wizard}&quot;">​</a></h3><p>VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-k3_5K" id="tab-YYBXvIq" checked="checked"><label for="tab-YYBXvIq">npm</label><input type="radio" name="group-k3_5K" id="tab-GM27u06"><label for="tab-GM27u06">pnpm</label><input type="radio" name="group-k3_5K" id="tab-RiNlcWB"><label for="tab-RiNlcWB">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx vitepress init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm vitepress init</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bunx vitepress init</span></span></code></pre></div></div></div><p>将需要回答几个简单的问题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">┌</span><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">  Welcome to VitePress!</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Where should VitePress initialize the config?</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ./docs</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Site title:</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  My Awesome Project</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">◇</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Site description:</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  A VitePress Site</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">│</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">◆</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  Theme:</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">  ●</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Default Theme </span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">(Out of the box, good-looking docs)</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ○</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;"> Default Theme + Customization</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">│</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;">  ○</span><span style="--shiki-light:#24292e80;--shiki-dark:#e1e4e880;"> Custom Theme</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-dark:#39c5cf;">└</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Vue 作为 peer dependency</p><p>如果打算使用 Vue 组件或 API 进行自定义，还应该明确地将 <code>vue</code> 安装为 peer dependency。</p></div><h2 id="file-structure" tabindex="-1">文件结构 <a class="header-anchor" href="#file-structure" aria-label="Permalink to &quot;文件结构 {#file-structure}&quot;">​</a></h2><p>如果正在构建一个独立的 VitePress 站点，可以在当前目录 (<code>./</code>) 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 VitePress，建议将站点搭建在嵌套目录 (例如 <code>./docs</code>) 中，以便它与项目的其余部分分开。</p><p>假设选择在 <code>./docs</code> 中搭建 VitePress 项目，生成的文件结构应该是这样的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ api-examples.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><p><code>docs</code> 目录作为 VitePress 站点的项目<strong>根目录</strong>。<code>.vitepress</code> 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>默认情况下，VitePress 将其开发服务器缓存存储在 <code>.vitepress/cache</code> 中，并将生产构建输出存储在 <code>.vitepress/dist</code> 中。如果使用 Git，应该将它们添加到 <code>.gitignore</code> 文件中。也可以手动<a href="./../reference/site-config#outdir">配置</a>这些位置。</p></div><h3 id="the-config-file" tabindex="-1">配置文件 <a class="header-anchor" href="#the-config-file" aria-label="Permalink to &quot;配置文件 {#the-config-file}&quot;">​</a></h3><p>配置文件 (<code>.vitepress/config.js</code>) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 站点级选项</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;VitePress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Just playing around.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 主题级选项</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>还可以通过 <code>themeConfig</code> 选项配置主题的行为。有关所有配置选项的完整详细信息，请参见<a href="./../reference/site-config">配置参考</a>。</p><h3 id="source-files" tabindex="-1">源文件 <a class="header-anchor" href="#source-files" aria-label="Permalink to &quot;源文件 {#source-files}&quot;">​</a></h3><p><code>.vitepress</code> 目录之外的 Markdown 文件被视为<strong>源文件</strong>。</p><p>VitePress 使用 <strong>基于文件的路由</strong>：每个 <code>.md</code> 文件将在相同的路径被编译成为 <code>.html</code> 文件。例如，<code>index.md</code> 将会被编译成 <code>index.html</code>，可以在生成的 VitePress 站点的根路径 <code>/</code> 进行访问。</p><p>VitePress 还提供了生成简洁 URL、重写路径和动态生成页面的能力。这些将在<a href="./routing">路由指南</a>中进行介绍。</p><h2 id="up-and-running" tabindex="-1">启动并运行 <a class="header-anchor" href="#up-and-running" aria-label="Permalink to &quot;启动并运行 {#up-and-running}&quot;">​</a></h2><p>该工具还应该将以下 npm 脚本注入到 <code>package.json</code> 中：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>docs:dev</code> 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-U9b9S" id="tab--EcgVyH" checked="checked"><label for="tab--EcgVyH">npm</label><input type="radio" name="group-U9b9S" id="tab-agyZqzo"><label for="tab-agyZqzo">pnpm</label><input type="radio" name="group-U9b9S" id="tab-rlX8dT6"><label for="tab-rlX8dT6">yarn</label><input type="radio" name="group-U9b9S" id="tab-4KvdKcx"><label for="tab-4KvdKcx">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm run docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm run docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn docs:dev</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun run docs:dev</span></span></code></pre></div></div></div><p>除了 npm 脚本，还可以直接调用 VitePress：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MPION" id="tab-KwFpl7D" checked="checked"><label for="tab-KwFpl7D">npm</label><input type="radio" name="group-MPION" id="tab-FTDT-Z_"><label for="tab-FTDT-Z_">pnpm</label><input type="radio" name="group-MPION" id="tab-jq8UrcI"><label for="tab-jq8UrcI">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npx vitepress dev docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm exec vitepress dev docs</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bunx vitepress dev docs</span></span></code></pre></div></div></div><p>更多的命令行用法请参见 <a href="./../reference/cli">CLI 参考</a>。</p><p>开发服务应该会运行在 <code>http://localhost:5173</code> 上。在浏览器中访问 URL 以查看新站点的运行情况吧！</p><h2 id="what-s-next" tabindex="-1">下一步 <a class="header-anchor" href="#what-s-next" aria-label="Permalink to &quot;下一步 {#what-s-next}&quot;">​</a></h2><ul><li><p>想要进一步了解 Markdown 文件是怎么映射到对应的 HTML，请继续阅读<a href="./routing">路由指南</a>。</p></li><li><p>要了解有关可以在页面上执行的操作的更多信息，例如编写 Markdown 内容或使用 Vue 组件，请参见指南的“编写”部分。一个很好的起点是了解 <a href="./markdown">Markdown 扩展</a>。</p></li><li><p>要探索默认文档主题提供的功能，请查看<a href="./../reference/default-theme-config">默认主题配置参考</a>。</p></li><li><p>如果想进一步自定义站点的外观，参见<a href="./extending-default-theme">扩展默认主题</a>或者<a href="./custom-theme">构建自定义主题</a>。</p></li><li><p>文档成形以后，务必阅读<a href="./deploy">部署指南</a>。</p></li></ul>`,41),p=[n];function l(h,d,o,c,r,k){return a(),i("div",null,p)}const b=s(t,[["render",l]]);export{u as __pageData,b as default};
