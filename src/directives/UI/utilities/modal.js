import { Modal } from 'bootstrap/dist/js/bootstrap.bundle';
import Vue from 'vue'

Vue.directive('modal', {
  bind(el, binding, vnode) {
    setTimeout(() => {
      const id = Object.keys(binding.modifiers)[0]
      const element = document.querySelector(`#${id}`)
      if(element){
        let modal = Modal.getInstance(element)
        el.addEventListener('click', ()=>{
          modal.toggle()
        })
      }
    },1);
  },
});