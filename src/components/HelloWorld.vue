<template>

  <section>
    <div class="title">
      <h1>Create TODO</h1>
      <input type="text" v-model="text">
    </div>

    <!-- !modal Same -->
    <modal-same :show="textError" 
    @close="closeModal" 
    title="Greska"
    >
        <template #desc>
            <h3>Morate popuniti input polje za TODO listu</h3>
        </template>
    </modal-same>
    

    <div class="category">
      <h3>Choose category</h3>

      <div class="twoCat">
        <div class="but">
          <input
            class="inputbtn" 
            type="radio"
            id="Bussines"
            value="Bussines"
            v-model="category"
            >
            <label for="Bussines">Bussines</label>
        </div>

        <div class="but">
            <input 
            class="inputbtn" 
            type="radio"
            id="Person"
            value="Person"
            v-model="category"
            >
            <label for="Person">Person</label>
        </div>

      </div>
    </div>

    <button class="btn" @click="addNew()">Add</button>

 
    <tr class="tr">
      <th scope="col">Category</th>
      <th scope="col">Name-text</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>

 <!-- !list- user component-->
    <div class="newTable" v-if="active">
       <list-users  v-for="item in items"
       :key="item.name"
       :name="item.name"
       :cat="item.cat"
       @deleteItem="deleteFound"
       @change-name="changeName"
       >
       </list-users>
    </div>
  

    <div class="info" v-if="!items.length == 0">
      <p>  {{items.length}} item had</p>
      <button @click="addActive">Active</button>
      <button @click="removeActive">Hide</button>
    </div>
 
  </section>

</template>
 
<script>

import listUsers from './ListUsers.vue';
import ModalSame from './modalSame.vue';

export default {
  components: {
    listUsers,
    ModalSame,
  },
  data(){
    return{
      text: '',
      textError: false,
      category: 'Bussines',
      items: [],
      active: true,
      newName: ''
    }
  },
  methods:{
    addNew(){
        const cat = this.category;
        const name = this.text;
        if(name === ''){
          this.textError = true;
          return;
        }
        this.textError = false;
        const obj = {
            cat,
            name
        }

        let duplicat = false;
        this.items.forEach(element => {
          if(element.name == this.text ){
            alert('ima')
           duplicat = true;
          }
        });
        if(duplicat){
          return;
        }
        this.items.push(obj)
        this.text= '';
        this.duplicat= false;
    },
    deleteFound(par){
      return this.items =  this.items.filter(item => item.name != par)
    },
    changeName(a,b,_,d){
      const item = this.items.find(item => item.name == a )    
      if(b == '' && d == ''){
        return;
      }
      if(b != ''){
        item.name = b;
      }  
    
      if(d != ''){
           if(d == 'Bussines' ){
            item.cat = 'Bussines'
          }else{
            item.cat = "Person"
          }
        return;
      }
    },
    removeActive(){
      this.active = false;
    },
    addActive(){
      this.active  = true;
    },
    closeModal(){
      this.textError = false;
    }  
  }
}
</script>



<style scoped>

section{
  display: flex;
  flex-direction: column;
}

.newTable{
  width: 80%;
  margin: 0px auto;
}
.tr{
  display: flex;
  justify-content: space-around;
  margin: 40px 0px;
  padding: 15px;
  background: rgb(148, 147, 147);
}
.twoCat{
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  margin-bottom: 20px;
}
.but{
  background: gainsboro;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.inputbtn{
  cursor: pointer;
}
.btn{
  min-width: 300px;
  margin: 0px auto;
  padding: 15px;
  background: rgb(148, 147, 147);
  cursor: pointer;
}


.info{
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto ;
  column-gap: 20px;
}


</style>

