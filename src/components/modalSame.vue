<template>
    <div v-if="show" @click="tryClose" class="backdrop"></div>

    <transition name="fade" >
        <dialog open v-if="show">
            <header name="header">
                <slot>
                    {{title}}
                </slot>
            </header>
            <section>
                <slot name="desc">
                </slot>
            </section>
        </dialog>
    </transition>
</template>




<script>

export default {
    emits:['close'],
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        title:{
            type: String,
            required: false,
        }
    },
    methods:{
        tryClose(){
            this.$emit('close')
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



.fade-enter-from,
.fade-leave-to {
  opacity: 0;
    transform: rotate(120deg) translateY(500px);
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: rotate(40) translateY(-50px);
}
.fade-enter-active{
      transition: all 0.7s ease-out
}
.fade-leave-active{
      transition: all 1s ease-in;
}
</style>