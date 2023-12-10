<template>
    <!-- https://www.joaoverissimo.work/work/magicians -->
    <div class="bg-lightMode-primary min-h-screen flex justify-center items-center gap-10">
        <div class="bg-lightMode-white w-[30vh] h-[40vh] rounded">
            <img :src="photosIllus[0]" alt="" class="h-full object-cover rounded">
        </div>
        <div class="">
            <h1 class=" text-lightMode-white font-bold text-4xl pb-3">{{ title }}</h1>
            <h2 class="text-lightMode-blue font-semibold text-3xl">{{ categorie }} </h2>
            <p class="text-lightMode-white font-bold pt-2">Année : {{ annee }}</p>

            <a :href="lienURL" class="" v-if="lienURL !== null"><br><button class="btn btn-wide">Voir le projet</button></a>
        </div>
    </div>
    <div class="min-h-screen px-[15%] py-10 bg-lightMode-white flex justify-between items-center">
        <div class=" w-[50%]">
            <h2 class="text-lightMode-blue font-bold text-3xl">Description : </h2>
            <div v-for="description in descriptions" :key="description">
                <p class="text-lightMode-primary font-bold w-[100%] pt-5" v-if="!/<[a-z][\s\S]*>/i.test(description)">
                <div v-html="description"></div>
                </p>
                <p class="text-lightMode-primary font-bold w-[100%] pt-5" v-else v-html="description"></p>
            </div>
        </div>

        <!-- <div class="bg-lightMode-primary w-[60vh] h-[40vh] rounded">
            <img :src="photosIllus[1]" alt="" class="h-full object-cover rounded">
            <iframe class="h-full w-full object-cover rounded" :src="photosIllus[1]" allowfullscreen scrolling="no"></iframe>
        </div> -->
        <div class="bg-lightMode-primary w-[60vh] h-[40vh] rounded">
            <!-- Vérifie si photosIllus[1] est une image -->
            <template v-if="/\.(jpeg|jpg|gif|png)$/i.test(photosIllus[1])">
                <img :src="photosIllus[1]" alt="" class="h-full object-cover rounded">
            </template>

            <!-- Vérifie si photosIllus[1] est un lien vidéo -->
            <template v-else-if="/^https?:\/\/.+$/i.test(photosIllus[1])">
                <iframe class="h-full w-full object-cover rounded" :src="photosIllus[1]" allowfullscreen
                    scrolling="no"></iframe>
            </template>
        </div>

    </div>

    <div class="min-h-screen bg-lightMode-primary w-[100%] pr-40 pl-40 flex justify-around items-center">
        <div class="card w-96 bg-lightMode-white shadow-xl m-2">
            <figure><img src="/img/Black-Sorbaire.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-lightMode-blue font-bold text-3xl">Compétences : </h2>
                <div v-for="competence in competences" :key="competence">
                    <div class="chat chat-start ">
                        <div class="chat-bubble">{{ competence }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card w-96 bg-lightMode-white shadow-xl m-2">
            <figure><img src="/img/Black-Sorbaire.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-lightMode-blue font-bold text-3xl text-right">Ressources : </h2>
                <div v-for="ressource in ressources" :key="ressource">
                    <div class="chat chat-end ">
                        <div class="chat-bubble">{{ ressource }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="picture min-h-screen bg-lightMode-white w-[100%] mr-auto ml-auto items-center" v-if="photos.length > 0">
        <h2 class="text-lightMode-blue font-bold text-3xl pt-10 pb-20 text-center">Quelques photos : </h2>
        <div class="w-[50vw] mr-auto ml-auto items-center">
            <div>
                <div class="carousel w-full rounded">
                    <div v-for="(photo, index) in photos" :key="index" :id="'item' + (index + 1)"
                        class="carousel-item w-full">
                        <img :src="photo" class="w-full object-cover" />
                    </div>
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a v-for="(photo, index) in photos" :key="index" :href="'#item' + (index + 1)" class="btn btn-xs">{{
                        index + 1 }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'title',
        'categorie',
        'annee',
        'descriptions',
        'photosIllus',
        'photos',
        'lienURL',
        'competences',
        'ressources'
    ],
}
</script>

<style scoped>
table,
td,
th {
    padding: 1vh;
    @apply border;

}
</style>