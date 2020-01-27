<template>
 <div class="docs">
   <div class="columns">
     <div class="column is-12">
       <div class="content">
         <h3>Other Valet Commands</h3>
         <b-table :data="data">
           <template slot-scope="props">
             <b-table-column field="Command" label="Command">
               <code class=" language-php">{{ props.row.Command }}</code>
             </b-table-column>
             <b-table-column field="Description" label="Description">
              {{ props.row.Description }}
             </b-table-column>
           </template>
         </b-table>
         <b-message type="is-info" has-icon>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
         </b-message>
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
  export default {
    data() {
      return {
        data,
      }
    }
  }
</script>
