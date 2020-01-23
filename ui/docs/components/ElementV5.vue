<template>
 <div class="docs">
   <div class="columns">
     <div class="column is-12">
       <div class="content">
         <h3>Environment Variable Types</h3>
         <p>All variables in your <code class=" language-php"><span class="token punctuation">.</span>env</code> files are parsed as strings, so some reserved values have been created to allow you to return a wider range of types from the <code class=" language-php"><span class="token function">env</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> function:</p>
<!--         <b-table :data="data">-->
<!--           <template slot-scope="props">-->
<!--             <b-table-column :field="tablerow" :label="tablerow">-->
<!--               <code class=" language-php">{{ props.row.Command }}</code>-->
<!--             </b-table-column>-->
<!--             <b-table-column field="Description" label="Description">-->
<!--               {{ props.row.Description }}-->
<!--             </b-table-column>-->
<!--           </template>-->
<!--         </b-table>-->
         <table>
           <thead>
           <tr>
             <th><code class=" language-php"><span class="token punctuation">.</span>env</code> Value</th>
             <th><code class=" language-php"><span class="token function">env</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> Value</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <td>true</td>
             <td>(bool) true</td>
           </tr>
           <tr>
             <td>(true)</td>
             <td>(bool) true</td>
           </tr>
           <tr>
             <td>false</td>
             <td>(bool) false</td>
           </tr>
           <tr>
             <td>(false)</td>
             <td>(bool) false</td>
           </tr>
           <tr>
             <td>empty</td>
             <td>(string) ''</td>
           </tr>
           <tr>
             <td>(empty)</td>
             <td>(string) ''</td>
           </tr>
           <tr>
             <td>null</td>
             <td>(null) null</td>
           </tr>
           <tr>
             <td>(null)</td>
             <td>(null) null</td>
           </tr>
           </tbody>
         </table>
         <p>If you need to define an environment variable with a value that contains spaces, you may do so by enclosing the value in double quotes.</p>
         <pre class=" language-php"><code class=" language-php"><span class="token constant">APP_NAME</span><span class="token operator">=</span><span class="token double-quoted-string string">"My Application"</span></code></pre>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  const data = [
    {"Command":'valet forget',"Description":'Run this command from a "parked" directory to remove it from the parked directory list.'},
    {"Command":'valet forget',"Description":'Run this command from a "parked" directory to remove it from the parked directory list.'},
    {"Command":'valet forget',"Description":'Run this command from a "parked" directory to remove it from the parked directory list.'},
    {"Command":'valet forget',"Description":'Run this command from a "parked" directory to remove it from the parked directory list.'},
    {"Command":'valet forget',"Description":'Run this command from a "parked" directory to remove it from the parked directory list.'},
    {"Command":'valet forget',"Description":'Run this command from a "parked" directory to remove it from the parked directory list.'},
    {"Command":'valet forget',"Description":'Run this command from a "parked" directory to remove it from the parked directory list.'},
  ];
  const tablerow = '<code class=" language-php"><span class="token punctuation">.</span>env</code> Value';
  export default {
    data() {
      return {
        data,
        tablerow,
      }
    }
  }
</script>
