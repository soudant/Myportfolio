<script setup>
import TaskBarItem from "./TaskBarItem.vue";
</script>

<template>
    <TaskBarItem>
        <template #iconDesktop>
             <img src="@/assets/img/logo.png" alt="TS" class="h-full flex justify-center px-4">
        </template>
        <template #iconFileOpen>
            <img :src="url" alt="FolderIconOpen" class="h-full w-auto mx-7 flex justify-center p-2 bg-lightMode-greySelected border-b-2 border-lightMode-white" :class="cache">
        </template>
    </TaskBarItem>
</template>


<script>
export default {
    props: [
        'urlLogo',
        'altLogo',
        'cache',
        'url'
    ],
}
</script>

