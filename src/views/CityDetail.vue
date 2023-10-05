<template>
    EBEN DETAIL
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    props: {
      value: String,
      placeholder: String,
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        
    },
  });
  </script>