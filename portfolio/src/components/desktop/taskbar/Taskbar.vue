<script setup>
import TaskBarItem from "./TaskBarItem.vue";
</script>

<template>
    <TaskBarItem>
        <template #iconDesktop>
             <img src="@/assets/img/logo.png" alt="TS" class="h-full flex justify-center pl-4 pr-4">
        </template>
        <template #iconFileOpen>
            <img :src="url" alt="FolderIconOpen" class="h-full flex justify-center p-2 bg-lightMode-greySelected border-b-2 border-lightMode-white" :class="cache" >
        </template>
    </TaskBarItem>
</template>


<script>
export default {
    props: [
        'cache',
        'url'
    ],
}
</script>

