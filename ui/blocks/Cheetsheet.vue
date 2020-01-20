<template>
  <div style="background: #f1f3f5; padding: 48px 0px;">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="screen-sizes content">
            <h4 class="title is-4 has-text-primary">
              Screen Sizes
            </h4>
            <div class="box">
              <pre><code>
        768         1024                1216         1408
'     '     '     '     '     '     '     '     '     '     '     '
&lt;---------^------------^------------------^-------------^-------------&gt;
  mobile      tablet         desktop         widescreen      fullhd
</code></pre>
            </div>
          </div>
          <div class="modifiers content">
            <h4 class="title is-4 has-text-primary">
              Modifiers
            </h4>
            <div class="box">
              <h6 class="is-6" style="border-bottom: 1px solid #e2e2e2; padding-bottom: 20px; margin-bottom: 5px;">The following CSS classes affect the <strong>colour</strong>.</h6>
              <div class="columns">
                <div class="column">
                  <b-button type="is-text">
                    <vh-copy
                      :data="is-primary"
                      :label="'copy'"
                      :confirm_dialog="'buefy'">
                    </vh-copy>
                  </b-button>
                </div>
              </div>
              <p class="content">.is-primary</p>
              <p class="content">.is-link</p>
              <p class="content">.is-info</p>
              <p class="content">.is-success</p>
              <p class="content">.is-warning</p>
              <p class="content">.is-danger</p>

              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes modify the <strong>size</strong>.</h6>
              <p class="content">.is-small</p>
              <p class="content">.is-medium</p>
              <p class="content">.is-large</p>

              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes modify the <strong>state</strong>.</h6>
              <p class="content">.is-outlined</p>
              <p class="content">.is-loading</p>
            </div>
          </div>
          <div class="content-class content">
            <h4 class="title is-4 has-text-primary">
              WYSIWYG Content
            </h4>
            <div class="box">
              <div class="columns">
                <div class="column is-4">
                  <div class="content">
                    <!-- start WYSIWYG contents -->
                    <h1>Heading</h1>
                    <p>Paragraph</p>

                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                    </ul>
                    <!-- end WYSIWYG contents -->
                  </div>
                </div>
                <div class="column is-8">
                  <pre class=" language-html"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment" spellcheck="true">&lt;!-- start WYSIWYG contents --&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Paragraph<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment" spellcheck="true">&lt;!-- end WYSIWYG contents --&gt;</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                  </code></pre>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px;">To provide default stylings for commonly generated WYSIWYG contents, use the .content class.</h6>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="screen-sizes content">
            <h4 class="title is-4 has-text-primary">
              Columns
            </h4>
            <div class="box">
              <p class="content">.container</p>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px;">Wrap as many .column’s’ as you like in a .columns wrapper</h6>
              <div class="columns">
                <div class="column">
                  <pre class=" language-html"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>column<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
                </code></pre>
              </div>
              </div>
            </div>
          </div>
          <div class="typography content">
            <h4 class="title is-4 has-text-primary">
              Typography Helpers
            </h4>
            <div class="box">
              <h6 class="is-6" style="border-bottom: 1px solid #e2e2e2; padding-bottom: 20px; margin-bottom: 5px;">The following classes modify the <strong>font-size</strong>.</h6>
              <div class="columns">
                <div class="column is-8">
                  <p class="content has-text-left">.is-size-1</p>
                  <p class="content has-text-left">.is-size-2</p>
                  <p class="content has-text-left">.is-size-3</p>
                  <p class="content has-text-left">.is-size-4</p>
                  <p class="content has-text-left">.is-size-5</p>
                  <p class="content has-text-left">.is-size-6</p>
                  <p class="content has-text-left">.is-size-7</p>
                </div>
                <div class="column is-4">
                  <p class="content has-text-right">3rem</p>
                  <p class="content has-text-right">2.5rem</p>
                  <p class="content has-text-right">2rem</p>
                  <p class="content has-text-right">1.5rem</p>
                  <p class="content has-text-right">1.25rem</p>
                  <p class="content has-text-right">1rem</p>
                  <p class="content has-text-right">0.75rem</p>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes <strong>align</strong> the text.</h6>
              <div class="columns">
                <div class="column is-4">
                  <p class="content has-text-left">.has-text-centered</p>
                  <p class="content has-text-left">.has-text-justified</p>
                  <p class="content has-text-left">.has-text-left</p>
                  <p class="content has-text-left">.has-text-right</p>
                </div>
                <div class="column is-8">
                  <p class="content has-text-right">Makes the text <strong>centered</strong></p>
                  <p class="content has-text-right">Makes the text <strong>justified</strong></p>
                  <p class="content has-text-right">Makes the text align to the <strong>left</strong></p>
                  <p class="content has-text-right">Makes the text align to the <strong>right</strong></p>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes <strong>transform </strong> the text.</h6>
              <div class="columns">
                <div class="column is-3">
                  <p class="content has-text-left">.is-capitalized</p>
                  <p class="content has-text-left">.is-lowercase</p>
                  <p class="content has-text-left">.is-uppercase</p>
                </div>
                <div class="column is-9">
                  <p class="content has-text-right">Transforms the <strong>first character</strong> of each word to <strong>uppercase</strong></p>
                  <p class="content has-text-right">Transforms <strong>all</strong> characters to <strong>lowercase</strong></p>
                  <p class="content has-text-right">Transforms <strong>all</strong> characters to <strong>uppercase</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    props: ['content']
  }
</script>


