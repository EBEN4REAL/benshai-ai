<template>
    EBEN DETAIL
</template>
  
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useCityStore } from "../store/CityStore.ts"
import { storeToRefs } from "pinia"
import {fetchCityWeatherData, fetchCityWeatherForecast} from "../Services/cityService.ts"

export default defineComponent({
    setup(props, { emit }) {
        const route = useRoute()
        const cityStore = useCityStore()
        const { temperature } = storeToRefs(cityStore);

        const fetchWeatherInfo = async () => {
            const coords = {
                lat: route.query.lat,
                lng: route.query.lng
            }
            try {
                const data = await fetchCityWeatherData(coords, temperature.value);
            } catch (error) {
                console.error(error.message);
            }
        }

        const fetchWeatheForecastInfo = async () => {
            const coords = {
                lat: route.query.lat,
                lng: route.query.lng
            }
            try {
                const data = await fetchCityWeatherForecast(coords);
                console.log("fetchCityWeatherForecast => ", data)
            } catch (error) {
                console.error(error.message);
            }
        }

        onMounted(() => {
            fetchWeatherInfo()
            fetchWeatheForecastInfo()
        })
    },
});
</script>