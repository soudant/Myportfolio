<script setup>
import TaskBarItem from "./TaskBarItem.vue";
</script>

<template>
    <TaskBarItem>
        <template #iconDesktop>
             <img src="@/assets/img/logo.png" alt="TS" class="h-full flex justify-center pl-4 pr-4">
        </template>
        <template #iconFileOpen>
            <img src="/img/folder.png" alt="FolderIconOpen" class="h-full flex justify-center p-2 bg-primaries-text border-b-2">
        </template>
    </TaskBarItem>
</template>