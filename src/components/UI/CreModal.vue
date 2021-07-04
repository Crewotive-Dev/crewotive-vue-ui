<script>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';

export default {
  data () {
    return {
      enabled: false,
      key: '_'+Math.random().toString(16).substring(2,10)
    }
  },
  props: {
    fullscreen: {
      type: [String, Boolean],
      required: false,
      default: ''
    },
    backdrop: {
      type: [String, Boolean],
      required: false,
      default: true
    },
    scrollable:{
      type: Boolean,
      required: false,
      default: false
    },
    animationIn:{
      type: String,
      required: false,
      default: ''
    },
    animationOut:{
      type: String,
      required: false,
      default: ''
    },
    size:{
      type: String,
      required: false,
      default: ''
    }
  },
  computed:{
    styleClasses(){
      const vm = this
      return {
        [`modal-dialog-scrollable`]: vm.scrollable,
        [`modal-fullscreen${ vm.fullscreen != true ? '-'+vm.fullscreen:"" }`]: vm.fullscreen,
        [`modal-${vm.size}`]: vm.size,
        // [`animate__animated animate__${vm.animationIn}`]: vm.animationIn
      }
    }
  },
  watch: {
    backdrop(){
      this.key = '_'+Math.random().toString(16).substring(2,10)
      this.initModal()
    }
  },
  mounted(){
    this.initModal()
  },
  methods:{
    initModal(){
      const id = this.$el.id
      const element = document.getElementById(`${id}`)
      if(element){
        let modal = Modal.getInstance(element)
        if(!modal)
          modal = new Modal(element,{
            focus: true,
            backdrop: this.backdrop
          })
        element.addEventListener('hide.bs.modal', ()=>{ this.enabled = false })
        element.addEventListener('shown.bs.modal', ()=>{ this.enabled = true })
      }
    }
  }
}
</script>

<template>
  <div
    :key="key"
    class="modal fade"
    tabindex="-1"
  >
    <div
      class="modal-dialog"
      :class="styleClasses"
    >
      <transition
        mode="in-out"
        appear
        :enter-active-class="`animate__animated animate__${animationIn}`"
        :leave-active-class="`animate__animated animate__${animationOut}`"
      >
        <main
          v-if="enabled"
          class="modal-content"
        >
          <header class="modal-header">
            <slot name="modal-header" />
          </header>
          <div class="modal-body">
            <slot name="modal-body" />
          </div>
          <footer class="modal-footer">
            <slot name="modal-footer" />
          </footer>
        </main>
      </transition>
    </div>
  </div>
</template>

<style>

</style>