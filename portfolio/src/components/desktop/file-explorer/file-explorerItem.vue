<script setup>
import fileMiniIcon from '@/assets/img/icon/fileMiniIcon.vue'
import closeIcon from '@/assets/img/icon/closeIcon.vue'
import fullscreenIcon from '@/assets/img/icon/fullscreenIcon.vue'
import fullscreenExitIcon from '@/assets/img/icon/fullscreenExitIcon.vue'
import reduceIcon from '@/assets/img/icon/reduceIcon.vue'
</script>


<template>
    <div id="file" ref="file" class="file shadow-xl bg-lightMode-white rounded-lg w-[50vw] max-md:w-[90vw] max-sm:w-screen  max-sm:min-h-[95vh] h-[50%]">
        <div
            class="header h-[15%] max-h-[10vh] 2xl:h-[10%] 2xl:max-h-[5vh] max-sm:h-[5vh] bg-lightMode-primary text-lightMode-white rounded-t-lg flex justify-between text-center pl-4 pr-4">
            <div class="gauche mt-auto mb-auto">
                <div class="text-sm breadcrumbs">
                    <ul>
                        <li>
                            <fileMiniIcon />
                            Home
                        </li>
                        <li>
                            <fileMiniIcon />
                            Documents
                        </li>
                        <li>
                            <fileMiniIcon />
                            {{ nameFolder }}
                        </li>
                        <li v-if="nameFolderChild != null">
                            <fileMiniIcon />
                            {{ nameFolderChild }}
                        </li>

                    </ul>
                </div>
            </div>
            <div class="droite flex flex-row-reverse  gap-3 mt-auto mb-auto">
                <closeIcon @click="closeBtn" />
                <fullscreenIcon @click="toggleFullscreen" class="active max-sm:hidden" ref="fullscreen"/>
                <fullscreenExitIcon @click="toggleFullscreen" class="hidden" ref="fullscreenExit"/>
                <reduceIcon class="hidden"/>

            </div>
        </div>
        <div id="contenu" ref="contenu" class="flex flex-wrap gap-2 text-lightMode-primary h-[60%] max-sm:h-[calc(100vh-(5vh+60px+10%))] overflow-auto content-start">
            <slot name="contenu"></slot>
        </div>
        <div class="w-full flex h-[10%] rounded-b-lg self-end absolute bottom-0 p-2 text-lightMode-primary">
            <p class="self-end">{{ nbElements }} élément{{ nbElements > 1 ? "s" : "" }} | {{ nameFolder }}</p>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            nbElements: 0,
            isFullscreen: false,
            isHidden: true,
        }
    },
    methods: {
        toggleFullscreen() {
            const fileExplorer = this.$refs.file;
            if (!this.isFullscreen) {
                fileExplorer.classList.remove("top-[calc(50%-25vh-30px)]", "left-[calc(50%-25vw)]", "h-[50%]");
                const screenHeight = window.innerHeight;
                const height = `calc(${screenHeight}px - 60px)`;
                fileExplorer.style.height = height;
                fileExplorer.classList.add("w-screen", "left-[0px]", "top-0");

            } else {
                fileExplorer.classList.add("top-[calc(50%-25vh-30px)]", "left-[calc(50%-25vw)]", "h-[50%]");
                fileExplorer.style.height = "50%";
                fileExplorer.classList.remove("w-screen", "top-[0px]", "left-[0px]");
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
    mounted() {
        this.nbElements = this.$refs.contenu.children.length;
    },


    props: [
        'nameFolder',
        'nameFolderChild',

    ],
};
</script>