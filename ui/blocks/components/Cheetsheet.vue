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
                <div class="column is-12">
                  <div class="content">
                    <div class="columns">
                      <div class="column">
                        <p class="content">.is-primary</p>
                      </div>
                      <div class="column">
                        <VhCopy :data="'is-primary'" class="is-pulled-right"></VhCopy>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <p class="content">.is-link</p>
                      </div>
                      <div class="column">
                        <VhCopy :data="'is-link'" class="is-pulled-right"></VhCopy>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <p class="content">.is-info</p>
                      </div>
                      <div class="column">
                        <VhCopy :data="'is-info'" class="is-pulled-right"></VhCopy>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <p class="content">.is-success</p>
                      </div>
                      <div class="column">
                        <VhCopy :data="'is-success'" class="is-pulled-right"></VhCopy>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <p class="content">.is-warning</p>
                      </div>
                      <div class="column">
                        <VhCopy :data="'is-warning'" class="is-pulled-right"></VhCopy>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <p class="content">.is-danger</p>
                      </div>
                      <div class="column">
                        <VhCopy :data="'is-danger'" class="is-pulled-right"></VhCopy>
                      </div>
                    </div>
                </div>
              </div>
            </div>

              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes modify the <strong>size</strong>.</h6>
              <div class="content">
                <div class="columns">
                  <div class="column">
                    <p class="content">.is-small</p>
                  </div>
                  <div class="column">
                    <VhCopy :data="'is-small'" class="is-pulled-right"></VhCopy>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <p class="content">.is-medium</p>
                  </div>
                  <div class="column">
                     <VhCopy :data="'is-medium'" class="is-pulled-right"></VhCopy>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <p class="content">.is-large</p>
                  </div>
                  <div class="column">
                    <VhCopy :data="'is-large'" class="is-pulled-right"></VhCopy>
                  </div>
                </div>
              </div>

              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes modify the <strong>state</strong>.</h6>
              <div class="content">
                <div class="columns">
                  <div class="column">
                    <p class="content">.is-outlined</p>
                  </div>
                  <div class="column">
                    <VhCopy :data="'is-outlined'" class="is-pulled-right"></VhCopy>
                  </div>
                  </div>
                  <div class="columns">
                    <div class="column">
                      <p class="content">.is-loading</p>
                    </div>
                    <div class="column">
                      <VhCopy :data="'is-loading'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="typography content">
            <h4 class="title is-4 has-text-primary">
              Typography Helpers
            </h4>
            <div class="box">
              <h6 class="is-6" style="border-bottom: 1px solid #e2e2e2; padding-bottom: 20px; margin-bottom: 5px;">The following classes modify the <strong>font-size</strong>.</h6>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-1</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-1'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-2</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-2'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-3</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-3'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-4</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-4'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-5</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-5'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-6</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-6'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-7</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-7'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes <strong>align</strong> the text.</h6>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-centered</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-centered'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-justified</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-justified'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-right</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-right'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes <strong>transform </strong> the text.</h6>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-capitalized</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-capitalized'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-lowercase</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-lowercase'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-uppercase</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-uppercase'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-12">
          <div class="screen-sizes content">
            <h4 class="title is-4 has-text-primary">
              Columns
            </h4>
            <div class="box">
              <div class="columns">
                <div class="column">
                  <p class="content">.container</p>
                </div>
                <div class="column">
                  <VhCopy :data="'container'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px;">Wrap as many .column’s’ as you like in a .columns wrapper</h6>

              <div class="content">
                <VhCopy :data="contentCode" class="is-pulled-right"></VhCopy>
              </div>
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
          <div class="content-class content">
            <h4 class="title is-4 has-text-primary">
              WYSIWYG Content
            </h4>
            <div class="box">
              <div class="columns">
                <div class="column is-12">
                  <SectionCode name="WYSIWYG Content" :code="CheetsheetContentCode">
                    <CheetsheetContent></CheetsheetContent>
                  </SectionCode>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px;">To provide default stylings for commonly generated WYSIWYG contents, use the .content class.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import VhCopy from "../../resuable/VhCopy";
  import CheetsheetContent from "./Cheetsheet-Content";
  import CheetsheetContentCode from "!raw-loader!./Cheetsheet-Content";

  import SectionCode from '../../resuable/SectionCode';
  import SectionTitle from "../../resuable/SectionTitle";



  export default {
    props: ['content'],
    data()
    {
      let obj = {
        contentCode: '<div class="columns">\n' +
          '    <div class="column"></div>\n' +
          '    <div class="column"></div>\n' +
          '    <div class="column"></div>\n' +
          '    <div class="column"></div>\n' +
          '    <div class="column"></div>\n' +
          '</div>'
      };

      return obj;
    },
    computed: {
      CheetsheetContentCode() {
        return CheetsheetContentCode
      },
    },
    components:{
      CheetsheetContent,
      VhCopy,
      SectionTitle,
      SectionCode,
    }
  }
</script>


