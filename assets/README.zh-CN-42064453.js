import{_ as a}from"./locales-be796722.js";import{o as s,a as t,z as d}from"./vue-libs-19c20d28.js";const n={},e={class:"van-doc-markdown-body"},l=d(`<h1>Divider 分割线</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>用于将内容分隔为多个区域。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Divider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Divider</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><p>默认渲染一条水平分割线。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhan-shi-wen-ben" tabindex="-1">展示文本</h3><p>通过插槽在可以分割线中间插入内容。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span>&gt;</span>文本<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="nei-rong-wei-zhi" tabindex="-1">内容位置</h3><p>通过 <code>content-position</code> 指定内容所在位置。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">content-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>文本<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">content-position</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>文本<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xu-xian" tabindex="-1">虚线</h3><p>添加 <code>dashed</code> 属性使分割线渲染为虚线。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">dashed</span>&gt;</span>文本<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">自定义样式</h3><p>可以直接通过 <code>style</code> 属性设置分割线的样式。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ color: &#39;#1989fa&#39;, borderColor: &#39;#1989fa&#39;, padding: &#39;0 16px&#39; }&quot;</span>
&gt;</span>
  文本
<span class="hljs-tag">&lt;/<span class="hljs-name">van-divider</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="chui-zhi" tabindex="-1">垂直</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">vertical</span> /&gt;</span>
文本
<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">dashed</span> /&gt;</span>
文本
<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">:hairline</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
文本
<span class="hljs-tag">&lt;<span class="hljs-name">van-divider</span> <span class="hljs-attr">vertical</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ borderColor: &#39;#1989fa&#39; }&quot;</span> /&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dashed</td><td>是否使用虚线</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>hairline</td><td>是否使用 0.5px 线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>content-position</td><td>内容位置，可选值为 <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td>vertical <code>v4.4.0</code></td><td>是否使用垂直</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>内容</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><p>组件导出以下类型定义：</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">DividerProps</span>, <span class="hljs-title class_">DividerContentPosition</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3><p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--van-divider-margin</td><td><em>var(--van-padding-md) 0</em></td><td>-</td></tr><tr><td>--van-divider-vertical-margin</td><td><em>0 var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-divider-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-divider-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-divider-line-height</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-divider-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-divider-content-padding</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-divider-content-left-width</td><td><em>10%</em></td><td>-</td></tr><tr><td>--van-divider-content-right-width</td><td><em>10%</em></td><td>-</td></tr></tbody></table></div>`,16),i=[l];function c(p,r){return s(),t("div",e,i)}const v=a(n,[["render",c]]);export{v as default};
