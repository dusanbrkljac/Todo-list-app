<template>  

 <tr class="tr">
   <td >{{cat}}</td>
   <td>{{name}}</td>
   <td class="delete" @click="clickDelete">Delete</td>
   <td class="update" @click="adModal" >Update</td>
 </tr>

  
  <modal-update :show="show"  
    title="Update item" 
    @close="closeModal"
    @new-date="changeName"
    :cat="cat"
    :name="name"
    >
  </modal-update>

</template>


<script>
import modalUpdate from './modalUpdate.vue'

export default {
  components:{
    modalUpdate
  },
    props:[ 'name','cat'],
    emits:['deleteItem','change-name'],
    data(){
        return{
          show: false,
          newChangedName: ''
        }
    },
    methods:{
        clickDelete(){
            this.$emit('deleteItem',this.name)
        },
        adModal(){
           this.show = true;
           this.$emit('update',this.name,this.cat)
        },
        closeModal(){
          this.show = false;
        },
        changeName(a,b,c,d){
          this.$emit('change-name',a,b,c,d)
          this.show= false;
        }      
    }
}
</script>

<style scoped>
.delete{
    border: 1px solid black;
    padding: 8px;
    cursor: pointer;   
}
.update{
  border: 1px solid rgb(68, 68, 67);
  padding: 8px;
  cursor: pointer;
}
.tr{
  display: flex;
  justify-content: space-between;
  
}
</style>
