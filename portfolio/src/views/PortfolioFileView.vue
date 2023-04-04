<script setup>
import project from '@/donnees/projets.json'
import { ref, reactive, onMounted } from 'vue';
import PortfolioItem from '../components/Portfolio-file/PortfolioItem.vue';

const props = defineProps({
    id: {
        required: true
    }
})
</script>

<template>
    <PortfolioItem :title="myJson[props.id-1].name" :categorie="myJson[props.id-1].categorie" :annee="myJson[props.id-1].annee" :descriptions="myJson[props.id-1].descriptions" :photosIllus="myJson[props.id-1].photosIllus" :photos="myJson[props.id-1].photos" :lienURL="myJson[props.id-1].lienURL" :competences="myJson[props.id-1].competences" :ressources="myJson[props.id-1].ressources"></PortfolioItem>

</template>

<script>
export default {
    data() {
        return {
            myJson: project
        }
    }
}

</script>

<style scoped></style>