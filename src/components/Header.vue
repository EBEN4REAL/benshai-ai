<template>
  <div>
    <SelectInput :options="selectOptions" v-model="selectedValue" />
  </div>
  <div>
    <Input v-model="inputValue" placeholder="Enter text" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SelectInput from './SelectInput/SelectInput.vue';
import Input from './Input/Input.vue';

export default defineComponent({
  components: {
    SelectInput,
    Input
  },
  setup() {
    const inputValue = ref('');
    const selectedValue = ref('');
    const isDisabled = ref(false);

    const selectOptions = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];

    return {
      inputValue,
      selectedValue,
      isDisabled,
      selectOptions
    };
  },
});
</script>