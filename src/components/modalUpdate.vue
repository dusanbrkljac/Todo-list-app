<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="error">
    <dialog open v-if="show" >
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>     
        </slot>
      </header>
      <section>
        <slot>
          <h3>Category</h3>
          <div class="twoCat">
            <div class="but">
              <input type="radio"
                id="Bussines"
                value="Bussines"
                v-model="newCat"
                @blur="changeCat"  >
                <label for="Bussines">Bussines</label>
            </div>

            <div class="but">
                <input type="radio"
                id="Person"
                value="Person"
                v-model="newCat"
                @blur="changeCat" >
                <label for="Person">Person</label>
            </div>
          </div>

          <div class="divName">
              <label for="">Name</label>
              <input type="name" id="name" v-model="newName"  @blur="changeVal" >
          </div>
          
          <button class="btnUpdate" @click="updateData">Update date</button>
        </slot>
      </section>
      <menu v-if="!fixed">
        <slot name="actions">
          <base-button @click="tryClose">Close</base-button>
        </slot>
      </menu>
    </dialog>
    </transition>
  </teleport>

</template>

<script>

export default {
    props: {
        show: {
          type: Boolean,
          required: true,
        },
        title: {
          type: String,
          required: false,
        },
        fixed: {
          type: Boolean,
          required: false,
          default: false,
        },
        cat: {
            type: String
        },
        name: {
            type: String
        }
    },
    emits:['close','new-date'],
    data(){
      return{
         newnewName: '',
         newnewCat: '',
         newCat : this.cat
         
      }
    },
    computed:{
      newName: {
        get(){
          return this.name
        },
        set(){
          // this.$emit('newN', this.newnewName)
          // this.name = this.newnewName
        }
      }
    },
    methods:{
        tryClose(){
            this.$emit('close')
        },
        changeVal(e){
          this.newnewName = e.target.value
          //  console.log(this.newnewName)
        },
        changeCat(e){
          this.newnewCat = e.target.value;
          // console.log(e.target.value)
        },
        updateData(){
          this.$emit('new-date',this.name,this.newnewName,this.cat,this.newnewCat)
          // console.log(this.cat)
        }
        
   
  }
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background: gainsboro;
  color: black;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}


.error-enter-from,
.error-leave-to{
  opacity: 0;
  /* transform: scale(0.5); */
   transform: translateY(-50%)  scale(0.7);
}

.error-enter-to,
.error-leave-from{
  opacity: 1;
  /* transform: scale(1); */
  transform: translateX(1)  scale(1.2);
}
.error-enter-active{
  transition: all 0.5s ease-out;
}
.error-leave-active{
  transition: all 0.5s ease-in;
}

.twoCat{
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  margin-bottom: 20px;
}
.but{
  background: gainsboro;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
label{
  color: black;
  margin-bottom: 5px;
}
input{
  width: 50%;

}
.divName{
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
}

.btnUpdate{
  padding: 20px;
  margin: 20px auto;
  background: rgb(148, 147, 147);
  cursor: pointer;
}


</style>