<template>
 <div class="docs">
   <div class="columns">
     <div class="column is-12">
       <div class="content">
         <h3>Installing Laravel</h3>
         <p>Laravel utilizes Composer to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.</p>
         <h5>Via Laravel Installer</h5>
         <p>First, download the Laravel installer using Composer:</p>
         <pre class=" language-php"><code class=" language-php">composer <span class="token keyword">global</span> <span class="token keyword">require</span> laravel<span class="token operator">/</span>installer</code></pre>
         <p>Make sure to place Composer's system-wide vendor bin directory in your <code class=" language-php"><span class="token variable">$PATH</span></code> so the laravel executable can be located by your system. This directory exists in different locations based on your operating system; however, some common locations include:</p>
         <ul>
           <li>macOS and GNU / Linux Distributions: <code class=" language-php"><span class="token variable">$HOME</span><span class="token operator">/</span><span class="token punctuation">.</span>composer<span class="token operator">/</span>vendor<span class="token operator">/</span>bin</code></li>
           <li>Windows: <code class=" language-php"><span class="token operator">%</span><span class="token constant">USERPROFILE</span><span class="token operator">%</span>\<span class="token package">AppData<span class="token punctuation">\</span>Roaming<span class="token punctuation">\</span>Composer<span class="token punctuation">\</span>vendor<span class="token punctuation">\</span>bin</span></code></li>
         </ul>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  export default {

  }
</script>
