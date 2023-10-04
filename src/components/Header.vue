<template>
  <div>
    <SelectInput :options="continents" v-model="selectedContinent" />
  </div>
  <div>
    <Input v-model="search" placeholder="search city..." />
  </div>
  <div class="cities-container">
    <div v-for="(city, i) in filteredCities" :key="`${city.name}-${i}`" class="city"
      :style="{ backgroundImage: `url(${city.image})` }">
      <p>{{ city.name }} {{ city.continent }}</p>
      <p>{{ city.country }}</p>
      <p>{{ city.description }}</p>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue';
import SelectInput from './SelectInput/SelectInput.vue';
import Input from './Input/Input.vue';
import { cities } from '../constants'
import {ICity} from "../types"

export default defineComponent({
  components: {
    SelectInput,
    Input
  },
  setup() {
    const activeCities = cities.filter(city => city.active)
    const continentList = cities.reduce((continents: {label: string, value: string}[], city: ICity) => {
      if(continents.findIndex(continent => continent.value === city.continent) === -1) {
        continents.push({
          label: city.continent,
          value: city.continent
        })
      }
      return continents
    }, [])

    continentList.unshift({label: 'All cities', value: "All cities"})

    const search = ref('');
    const selectedContinent = ref("");
    const isDisabled = ref(false);
    const citiesList = ref(activeCities)
    const continents = ref(continentList)

    watch(selectedContinent, async (continent) => {
      if(continent === 'All cities') {

      }
      console.log("continent", continent)
    })

    const filteredCities = computed(() => {
      const continentFilterParam = selectedContinent.value === "All cities" ? "" : selectedContinent.value
      const searchValue = search.value.toLowerCase();

      if(continentFilterParam) {
        return citiesList.value.filter(city => (city.name.toLowerCase().includes(searchValue) || city.country.toLowerCase().includes(searchValue)) && city.active && city.continent.includes(continentFilterParam));
      }else {
        return citiesList.value.filter(city => (city.name.toLowerCase().includes(searchValue) || city.country.toLowerCase().includes(searchValue)) && city.active);
      }
    });

    return {
      search,
      selectedContinent,
      isDisabled,
      continents,
      filteredCities
    };
  },
});
</script>

<style scoped>
.cities-container {
  display: flex;
  gap: 1rem;
  flex-flow: row wrap;
}

.cities-container .city {
  width: 219px;
  height: 266px;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Adjust opacity as needed */
}
</style>