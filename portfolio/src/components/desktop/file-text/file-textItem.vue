<script setup>
import FolderItem from '../folder/FolderItem.vue';
import fileMiniIcon from '@/assets/img/icon/fileMiniIcon.vue'
import closeIcon from '@/assets/img/icon/closeIcon.vue'
import fullscreenIcon from '@/assets/img/icon/fullscreenIcon.vue'
import fullscreenExitIcon from '@/assets/img/icon/fullscreenExitIcon.vue'
import reduceIcon from '@/assets/img/icon/reduceIcon.vue'
</script>


<template>
    <div id="file" ref="file" class="overflow-hidden file shadow-xl bg-lightMode-white rounded-lg w-[40vw] h-[50vh]">
        <div
            class="header h-[10%] max-h-[5vh] bg-lightMode-white text-lightMode-grey rounded-t-lg flex justify-between text-center pl-2 pr-4">
            <div class="gauche mt-auto mb-auto">
                {{ name }} - Bloc-notes
            </div>
            <div class="droite flex flex-row-reverse  gap-2 mt-auto mb-auto text-lightMode-primary">
                <closeIcon @click="closeBtn" class="text-lightMode-primary" />
                <fullscreenIcon @click="toggleFullscreen" class="active text-lightMode-primary" />
                <fullscreenExitIcon @click="toggleFullscreen" class="hidden text-lightMode-primary" />
                <reduceIcon />

            </div>
        </div>
        <div class="menu text-lightMode-primary border-b border-lightMode-light-grey pl-2 p-1">
            <ul class="flex gap-3">
                <li>Fichier</li>
                <li>Edition</li>
                <li>Format</li>
                <li>Affichage</li>
                <li>Aide</li>
            </ul>
        </div>
        <div id="contenu" ref="contenu" class="gap-2 overflow-y-scroll p-2 h-[100%] text-lightMode-primary">
            <slot name="contenu"></slot>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isFullscreen: false,
            isHidden: true,
        }
    },
    methods: {
        toggleFullscreen() {
            const fileExplorer = this.$refs.file;
            if (!this.isFullscreen) {
                fileExplorer.classList.remove("w-[40vw]", "top-[calc(50%-25vh-30px)]", "left-[calc(50%-20vw)]",  "h-[50vh]")
                const screenHeight = window.innerHeight;
                const height = `calc(${screenHeight}px - 60px)`;
                fileExplorer.style.height = height; 
                fileExplorer.classList.add("h-[calc(100vh-60px)]", "w-screen", "left-0", "top-0");
            } else {
                fileExplorer.classList.add("w-[40vw]", "top-[calc(50%-25vh-30px)]", "left-[calc(50%-20vw)]",  "h-[50vh]");
                fileExplorer.classList.remove("h-[calc(100vh-60px)]", "w-screen", "left-0", "top-0");
                fileExplorer.style.height = "50vh";
            }
            this.isFullscreen = !this.isFullscreen;
        },
        closeBtn() {
            const fileExplorer = this.$refs.file;
            fileExplorer.classList.add("hidden");
            this.isHidden = true;
            this.$emit("close-file-explorer");
        },

    },


    props: [
        'nameFolder',
        'nameFolderChild',
        'name'

    ],
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
    @apply bg-lightMode-light-grey
}

/* Handle */
::-webkit-scrollbar-thumb {
    @apply bg-lightMode-primary rounded-full
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    @apply bg-lightMode-dark_grey
}
</style>