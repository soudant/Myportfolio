<script setup>
import ProgressBarItem from './ProgressBarItem.vue';
import ProgressRadialItem from './ProgressRadialItem.vue'
</script>
<template>
    <h1 class="text-4xl font-bold text-lightMode-blue text-center py-10"> Mes compétences :</h1>
    <div class="flex flex-wrap justify-evenly m-10 pb-10">
        <div class="ml-10">
            <h2 class="text-3xl font-semibold text-lightMode-primary pb-5">Compétences en Développement :</h2>
            <div class="ml-5 pb-5">
                    <ProgressBarItem target-value="90" nameLabel="HTML - CSS:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="70" nameLabel="PHP:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="70" nameLabel="Javascript:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="70" nameLabel="Vue.js:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="80" nameLabel="Tailwind:" class="w-[30vw] pb-3"></ProgressBarItem>
            </div>
            <div class="ml-5">
                    <ProgressBarItem target-value="40" nameLabel=" ASP.NET - C#:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="30" nameLabel="Python :" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="50" nameLabel="SQL:" class="w-[30vw] pb-3"></ProgressBarItem>
            </div>
        </div>
        <div class="ml-10">
            <h2 class="text-3xl font-semibold text-lightMode-primary pb-5">Compétences en Conception Graphique et <br> Audiovisuel :</h2>
            <div class="ml-5 pb-5">
                    <ProgressBarItem target-value="30" nameLabel="Photoshop:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="50" nameLabel="Illustrator:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="60" nameLabel="After Effect:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="80" nameLabel="Première Pro:" class="w-[30vw] pb-3"></ProgressBarItem>
            </div>
            <div class="ml-5">
                    <ProgressBarItem target-value="85" nameLabel="Hitfilm Express:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="5" nameLabel="Davinci Resolve:" class="w-[30vw] pb-3"></ProgressBarItem>
                    <ProgressBarItem target-value="90" nameLabel="Figma:" class="w-[30vw] pb-3"></ProgressBarItem>
            </div>
        </div>
    </div>
    <div class="p-10">
        <h2 class="text-3xl font-semibold text-lightMode-primary pb-5 text-center">Autres compétences :</h2>
        <div class="ml-5 flex justify-evenly flex-wrap gap-5">
                    <ProgressRadialItem target-value="85" nameLabel="Microsoft Word:" class=" pb-3"></ProgressRadialItem>
                    <ProgressRadialItem target-value="90" nameLabel="Microsoft PowerPoint:" class="pb-3"></ProgressRadialItem>
                    <ProgressRadialItem target-value="75" nameLabel="Microsoft Excel:" class="pb-3"></ProgressRadialItem>
                    <ProgressRadialItem target-value="90" nameLabel="Visual Studio Code:" class="pb-3"></ProgressRadialItem>
                    <ProgressRadialItem target-value="75" nameLabel="Github:" class="pb-3"></ProgressRadialItem>
            </div>
    </div>
</template>

  
  