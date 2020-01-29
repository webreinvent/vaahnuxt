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
          <div class="modifiers content">
            <h4 class="title is-4 has-text-primary">
              Text Color Helpers
            </h4>
            <div class="box">
              <h6 class="is-6" style="border-bottom: 1px solid #e2e2e2; padding-bottom: 20px; margin-bottom: 5px;">The following CSS classes affect the <strong>colour</strong>.</h6>
              <div class="columns">
                <div class="column is-12">
                  <div class="content">
                    <div class="columns">
                      <div class="column is-4">
                        <p class="content">.has-text-white</p>
                      </div>
                      <div class="column">
                        <p class="content color"><span class="box has-background-white"></span> hsl(0, 0%, 100%)</p>
                      </div>
                      <div class="column is-2">
                        <VhCopy :data="'has-text-white'" class="is-pulled-right"></VhCopy>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-black</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-black"></span> hsl(0, 0%, 4%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-black'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-light</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-light"></span> hsl(0, 0%, 96%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-light'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-dark</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-dark"></span> hsl(0, 0%, 21%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-dark'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-primary</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-primary"></span> hsl(171, 100%, 41%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-primary'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-info</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-info"></span> hsl(204, 86%, 53%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-info'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-link</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-link"></span> hsl(217, 71%, 53%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-link'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-success</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-success"></span> hsl(141, 71%, 48%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-success'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-warning</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-warning"></span> hsl(48, 100%, 67%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-warning'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-danger</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-danger"></span> hsl(348, 100%, 61%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-danger'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-black-bis</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-black-bis"></span> hsl(0, 0%, 7%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-black-bis'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-black-ter</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-black-ter"></span> hsl(0, 0%, 14%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-black-ter'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-grey-darker</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-grey-darker"></span> hsl(0, 0%, 21%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-grey-darker'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-grey</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-grey"></span> hsl(0, 0%, 48%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-grey'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-grey-light</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-grey-light"></span> hsl(0, 0%, 71%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-grey-light'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-grey-lighter</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-grey-lighter"></span> hsl(0, 0%, 86%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-grey-lighter'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-white-ter</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-white-ter"></span> hsl(0, 0%, 96%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-white-ter'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-text-white-bis</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-white-bis"></span> hsl(0, 0%, 98%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-text-white-bis'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            </div>
          </div>
          <div class="modifiers content">
            <h4 class="title is-4 has-text-primary">
              Background Color Helpers
            </h4>
            <div class="box">
              <h6 class="is-6" style="border-bottom: 1px solid #e2e2e2; padding-bottom: 20px; margin-bottom: 5px;">The following CSS classes affect the <strong>colour</strong>.</h6>
              <div class="columns">
                <div class="column is-12">
                  <div class="content">
                    <div class="columns">
                      <div class="column is-4">
                        <p class="content">.has-background-white</p>
                      </div>
                      <div class="column">
                        <p class="content color"><span class="box has-background-white"></span> hsl(0, 0%, 100%)</p>
                      </div>
                      <div class="column is-2">
                        <VhCopy :data="'has-background-white'" class="is-pulled-right"></VhCopy>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-black</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-black"></span> hsl(0, 0%, 4%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-black'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-light</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-light"></span> hsl(0, 0%, 96%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-light'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-dark</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-dark"></span> hsl(0, 0%, 21%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-dark'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-primary</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-primary"></span> hsl(171, 100%, 41%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-primary'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-info</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-info"></span> hsl(204, 86%, 53%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-info'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-link</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-link"></span> hsl(217, 71%, 53%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-link'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-success</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-success"></span> hsl(141, 71%, 48%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-success'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-warning</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-warning"></span> hsl(48, 100%, 67%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-warning'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-danger</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-danger"></span> hsl(348, 100%, 61%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-danger'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-black-bis</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-black-bis"></span> hsl(0, 0%, 7%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-black-bis'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-black-ter</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-black-ter"></span> hsl(0, 0%, 14%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-black-ter'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-grey-darker</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-grey-darker"></span> hsl(0, 0%, 21%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-grey-darker'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-grey</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-grey"></span> hsl(0, 0%, 48%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-grey'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-grey-light</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-grey-light"></span> hsl(0, 0%, 71%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-grey-light'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-grey-lighter</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-grey-lighter"></span> hsl(0, 0%, 86%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-grey-lighter'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-white-ter</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-white-ter"></span> hsl(0, 0%, 96%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-white-ter'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <div class="content">
                  <div class="columns">
                    <div class="column is-4">
                      <p class="content">.has-background-white-bis</p>
                    </div>
                    <div class="column">
                      <p class="content color"><span class="box has-background-white-bis"></span> hsl(0, 0%, 98%)</p>
                    </div>
                    <div class="column is-2">
                      <VhCopy :data="'has-background-white-bis'" class="is-pulled-right"></VhCopy>
                    </div>
                  </div>
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
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes are used for the <strong>Responsive</strong> text.</h6>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-1-mobile</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-1-mobile'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-1-tablet</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-1-tablet'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-1-touch</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-1-touch'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-1-desktop</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-1-desktop'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-1-widescreen</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-1-widescreen'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-size-1-fullhd</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-size-1-fullhd'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-mobile</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-mobile'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-tablet</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-tablet'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-tablet-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-tablet-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-touch</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-touch'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-desktop</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-desktop'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-desktop-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-desktop-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-widescreen</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-widescreen'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-widescreen-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-widescreen-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-left-fullhd</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-left-fullhd'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-weight-light</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-weight-light'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-weight-normal</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-weight-normal'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-weight-medium</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-weight-medium'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-weight-semibold</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-weight-semibold'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.has-text-weight-bold</p>
                </div>
                <div class="column">
                  <VhCopy :data="'has-text-weight-bold'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
            </div>
          </div>

          <div class="typography content">
            <h4 class="title is-4 has-text-primary">
              Helpers
            </h4>
            <div class="box">
              <h6 class="is-6" style="border-bottom: 1px solid #e2e2e2; padding-bottom: 20px; margin-bottom: 5px;">The following classes modify the <strong>Float</strong>.</h6>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-clearfix</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-clearfix'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-pulled-left</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-pulled-left'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-pulled-right</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-pulled-right'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes manages <strong>Spacing</strong></h6>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-marginless</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-marginless'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-paddingless</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-paddingless'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes are used for various Other purposes.</h6>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-overlay</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-overlay'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-clipped</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-clipped'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-radiusless</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-radiusless'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-shadowless</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-shadowless'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-unselectable</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-unselectable'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-invisible</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-invisible'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-sr-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-sr-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-relative</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-relative'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <h6 class="is-6 has-background-light" style="border-bottom: 1px solid #e2e2e2; padding: 20px 0px 20px 10px; margin-bottom: 5px;">The following classes are used for Responsive helpers.</h6>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-block</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-block'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-inline</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-inline'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-inline-block</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-inline-block'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-inline-flex</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-inline-flex'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex-mobile</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex-mobile'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex-tablet-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex-tablet-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex-desktop-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex-desktop-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex-widescreen-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex-widescreen-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex-touch</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex-touch'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex-tablet</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex-tablet'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex-desktop</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex-desktop'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-flex-widescreen</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-flex-widescreen'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-mobile</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-mobile'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-tablet-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-tablet-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-desktop-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-desktop-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-widescreen-only</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-widescreen-only'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-touch</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-touch'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-tablet</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-tablet'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-desktop</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-desktop'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-widescreen</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-widescreen'" class="is-pulled-right"></VhCopy>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <p class="content">.is-hidden-fullhd</p>
                </div>
                <div class="column">
                  <VhCopy :data="'is-hidden-fullhd'" class="is-pulled-right"></VhCopy>
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

