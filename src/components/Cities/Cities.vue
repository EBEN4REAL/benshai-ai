<template>
    <div class="cities-container bg-orange-200">
        <div v-for="(city, i) in filteredCities" :key="`${city.name}-${i}`" class="city"
            :style="{ backgroundImage: `url(${city.image})` }">
            <p style="color: white">
                {{ city.distance }}
            </p>
            <p>{{ city.name }} {{ city.continent }}</p>
            <p>{{ city.country }}</p>
            <p>{{ city.description }}</p>

            <div class="overlay"></div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { ICity } from "../../types"
import { useCityStore } from "../../store/CityStore.ts"
import { storeToRefs } from 'pinia'

export default defineComponent({
    props: {
        filteredCities: Array<ICity>,
        placeholder: String,
        value: String
    },
    setup() {
        const cityStore = useCityStore()
        const { filteredCities, selectedContinent, search: searchValue } = storeToRefs(cityStore);

        console.log("STORE => filteredCities", filteredCities)

        return {
            filteredCities,
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
}
</style>