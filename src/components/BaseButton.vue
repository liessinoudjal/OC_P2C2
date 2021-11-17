<script>
export default {
  name: 'BaseButton',
  inheritAttrs: true,
  computed: {
      test(){
          const attr = {...this.$attrs}
          delete attr.id;
          console.log(attr)
          return attr
      }
  }

}
</script>

<template>

  <!-- This v-bind="$attrs" is a way
  to assign events to an element in a component.
  Without it, Vue does not know where to listen
  for the events. -->

  <button  v-bind="test">
   <slot></slot>
  </button>
</template>
