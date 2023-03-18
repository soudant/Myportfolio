<script setup>
import TaskBar from '@/components/desktop/taskbar/Taskbar.vue';
import FolderItem from '@/components/desktop/folder/FolderItem.vue';
import fileExplorerItem from '../components/desktop/file-explorer/file-explorerItem.vue';
</script>

<template>
  <!-- Folder desktop -->
  <div class="w-[6vw] ml-1">
    <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier logo" text="À propos" class="text-primaries-white active" @click="toggleFolder('a_propos')" />
    <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier logo" text="Compétences"
      class="text-primaries-white" @click="toggleFolder('competences')" />
    <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier logo" text="Portfolio" class="text-primaries-white" @click="toggleFolder('portfolio')" />
    <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier logo" text="Contact" class="text-primaries-white" @click="toggleFolder('contact')" />
  </div>

  <!-- file-explorer -->
  <div id="a_propos" :class="{ 'hidden': !isFolderSelected('a_propos') }">
    a propos
  </div>
  <div id="competences" :class="{ 'hidden': !isFolderSelected('competences') }">
    compétences
  </div>
  <div id="portfolio" :class="{ 'hidden': !isFolderSelected('portfolio') }">
    portfolio
  </div>
  <div id="contact" :class="{ 'hidden': !isFolderSelected('contact') }">
    contact
  </div>
  <!-- <fileExplorerItem/> -->


  <!-- Tasbar folder -->
  <TaskBar class="w-screen absolute left-0 bottom-0" />
</template>

<script>
export default {
  data() {
    return {
      selectedFolder: null,
    };
  },
  methods: {
    toggleFolder(id) {
      if (this.selectedFolder === id) {
        this.selectedFolder = null;
      } else {
        this.selectedFolder = id;
      }
    },
  },
  computed: {
    isFolderSelected() {
      return (id) => {
        return this.selectedFolder === id;
      };
    },
  },
};
</script>



