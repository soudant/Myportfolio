<script setup>
import TaskBar from "@/components/desktop/taskbar/Taskbar.vue";
import FolderItem from "@/components/desktop/folder/FolderItem.vue";
import fileExplorerItem from "../components/desktop/file-explorer/file-explorerItem.vue";
import Contact from "../components/desktop/contact/Contact.vue";
</script>

<template>
  <!-- Folder desktop -->
  <div class="w-[6vw] ml-1">
    <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier à propos" text="À propos"
      class="text-primaries-white active" @click="toggleFolder('a_propos')" />
    <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier compétences" text="Compétences"
      class="text-primaries-white" @click="toggleFolder('competences')" />
    <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier portfolio" text="Portfolio"
      class="text-primaries-white" @click="toggleFolder('portfolio')" />
    <!-- <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier contact" text="Contact" class="text-primaries-white" @click="toggleFolder('contact')" /> -->
    <FolderItem urlIcon="/img/file.png" altIcon="icon du dossier contact" text="Contact" class="text-primaries-white"
      @click="toggleFolder('contact')" />
  </div>

  <!-- file-explorer -->
  <fileExplorerItem nameFolder="À propos" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="a_propos"
    :class="{ hidden: !isFolderSelected('a_propos') }">
    <template #contenu>
      <FolderItem urlIcon="/img/folder.png" text="TEST" class="w-[10vh]" />
      <FolderItem urlIcon="/img/folder.png" text="TEST" class="w-[10vh]" />
      <FolderItem urlIcon="/img/folder.png" text="TEST" class="w-[10vh]" />
      <FolderItem urlIcon="/img/folder.png" text="TEST" class="w-[10vh]" />
      <FolderItem urlIcon="/img/folder.png" text="TEST" class="w-[10vh]" />
    </template>
  </fileExplorerItem>
  <fileExplorerItem nameFolder="Compétences" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="competences"
    :class="{ hidden: !isFolderSelected('competences') }">
    <template #contenu>
      <FolderItem urlIcon="/img/folder.png" text="TEST" class="w-[10vh]" />
    </template>
  </fileExplorerItem>
  <fileExplorerItem nameFolder="Portfolio" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="portfolio"
    :class="{ hidden: !isFolderSelected('portfolio') }" />
  <fileExplorerItem nameFolder="Contact" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="contact"
    :class="{ hidden: !isFolderSelected('contact') }" />
  <Contact></Contact>



  <!-- Tasbar folder -->
  <TaskBar class="w-screen absolute left-0 bottom-0" :class="{ 'cache': !selectedFolder }" />

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
    taskBarClass() {
      return this.selectedFolder === null ? "cache" : "";
    },
  },
};
</script>



