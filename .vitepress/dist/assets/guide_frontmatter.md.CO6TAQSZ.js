import{_ as s,c as a,o as t,X as i}from"./chunks/framework.LBqz8C7l.js";const E=JSON.parse('{"title":"Frontmatter","description":"","frontmatter":{},"headers":[],"relativePath":"guide/frontmatter.md","filePath":"guide/frontmatter.md","lastUpdated":null}'),e={name:"guide/frontmatter.md"},n=i(`<h1 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>VitePress supports YAML frontmatter in all Markdown files, parsing them with <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>. The frontmatter must be at the top of the Markdown file (before any elements including <code>&lt;script&gt;</code> tags), and must take the form of valid YAML set between triple-dashed lines. Example:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Docs with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Many site or default theme config options have corresponding options in frontmatter. You can use frontmatter to override specific behavior for the current page only. For details, see <a href="./../reference/frontmatter-config">Frontmatter Config Reference</a>.</p><p>You can also define custom frontmatter data of your own, to be used in dynamic Vue expressions on the page.</p><h2 id="accessing-frontmatter-data" tabindex="-1">Accessing Frontmatter Data <a class="header-anchor" href="#accessing-frontmatter-data" aria-label="Permalink to &quot;Accessing Frontmatter Data&quot;">​</a></h2><p>Frontmatter data can be accessed via the special <code>$frontmatter</code> global variable:</p><p>Here&#39;s an example of how you could use it in your Markdown file:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Docs with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># {{ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">$frontmatter</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">title</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"> }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Guide content</span></span></code></pre></div><p>You can also access current page&#39;s frontmatter data in <code>&lt;script setup&gt;</code> with the <a href="./../reference/runtime-api#usedata"><code>useData()</code></a> helper.</p><h2 id="alternative-frontmatter-formats" tabindex="-1">Alternative Frontmatter Formats <a class="header-anchor" href="#alternative-frontmatter-formats" aria-label="Permalink to &quot;Alternative Frontmatter Formats&quot;">​</a></h2><p>VitePress also supports JSON frontmatter syntax, starting and ending in curly braces:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Blogging Like a Hacker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;editLink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div>`,14),r=[n];function l(h,o,p,d,k,c){return t(),a("div",null,r)}const m=s(e,[["render",l]]);export{E as __pageData,m as default};
