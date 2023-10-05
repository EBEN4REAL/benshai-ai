<template>
  <div class="filters-wrapper">
    <div>
      <SelectInput :options="continents" v-model="selectedContinent" />
    </div>
    <div>
      <Input v-model="search" placeholder="search city..." /> {{ myCoordinates }}
    </div>
    <div>
      <p @click="sortCity('name')">Name</p>
      <p @click="sortCity('distance')">Distance</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import SelectInput from './SelectInput/SelectInput.vue';
import Input from './Input/Input.vue';
import { useCityStore } from "../store/CityStore"

export default defineComponent({
  components: {
    SelectInput,
    Input
  },
  setup() {
    const { continents, updateSelectedContinent, updateSearch, sortCity } = useCityStore()
    const myCoordinates = ref<{ latitude: number, longitude: number }>()
    const search = ref('');
    const selectedContinent = ref("");
    const isDisabled = ref(false);

    watch(selectedContinent, (continent) => {
      updateSelectedContinent(continent)
    })

    watch(search, (value) => {
      updateSearch(value)
    })

    return {
      search,
      selectedContinent,
      isDisabled,
      continents,
      myCoordinates,
      sortCity
    };
  },
});
</script>

<style scoped>
.filters-wrapper {
  display: flex;
  gap: 5px;
}
</style>