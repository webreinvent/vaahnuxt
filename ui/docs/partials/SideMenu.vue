<template>
  <aside class="menu">
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <a
        class="has-text-dark"
        slot="trigger"
        aria-controls="contentIdForA11y1"><b>UI Elements</b></a>
        <div class="content menu-list">
          <ul  class="link-items">
            <li>
              <a href="#elementone" class="has-text-dark"> <span>#</span>ElementOne</a>
            </li>
            <li>
              <a href="#elementtwo" class="has-text-dark"> <span>#</span>ElementTwo</a>
            </li>
            <li>
              <a href="#elementthree" class="has-text-dark"> <span>#</span>ElementThree</a>
            </li>
            <li>
              <a href="#elementfour" class="has-text-dark"> <span>#</span>ElementFour</a>
            </li>
            <li>
              <a href="#elementfive" class="has-text-dark"> <span>#</span>ElementFive</a>
            </li>
            <li>
              <a href="#elementsix" class="has-text-dark"> <span>#</span>ElementSix</a>
            </li>
            <li>
              <a href="#elementseven" class="has-text-dark"> <span>#</span>ElementSeven</a>
            </li>
            <li>
              <a href="#elementeight" class="has-text-dark"> <span>#</span>ElementEight</a>
            </li>
          </ul>
        </div>
    </b-collapse>
  </aside>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true
      }
    }
  }
</script>

<style>
  .menu-list li ul, .menu-list ul{
    border-left: none !important;
    margin-left: 0px !important;
    padding-left:0px !important; ;
  }
</style>
