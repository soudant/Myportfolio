<script setup>
import TaskBar from "@/components/desktop/taskbar/Taskbar.vue";
import FolderItem from "@/components/desktop/folder/FolderItem.vue";
import fileExplorerItem from "../components/desktop/file-explorer/file-explorerItem.vue";
import Contact from "../components/desktop/contact/Contact.vue";
import project from '@/donnees/projets.json'
</script>

<template>
  <div id="desktop" class="h-screen w-screen bg-primaries-white">
    <!-- Folder desktop -->
    <div class="p-2 w-min flex flex-col justify-center items-center text-primaries-text">
      <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier à propos" text="À propos" size="w-[5vw]"
        class=" active" @click="toggleFolder('a_propos')" />
      <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier compétences" text="Compétences" size="w-[5vw]"
        class="" @click="toggleFolder('competences')" />
      <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier portfolio" text="Portfolio" size="w-[5vw]" class=""
        @click="toggleFolder('portfolio')" />
      <!-- <FolderItem urlIcon="/img/folder.png" altIcon="icon du dossier contact" text="Contact" class="text-primaries-white" @click="toggleFolder('contact')" /> -->
      <FolderItem urlIcon="/img/file.png" altIcon="icon du dossier contact" text="Contact" size="w-[5vw]" class=""
        @click="toggleFolder('contact')" />
    </div>

    <!-- file-explorer -->
    <fileExplorerItem nameFolder="À propos" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="a_propos"
      :class="{ hidden: !isFolderSelected('a_propos') }">
      <template #contenu>
        <a href="/file/videoPresentation.mp4" target="_blank">
          <FolderItem href="" urlIcon="/img/mp4.png" text="présentation.mp4" size="w-[5vw]" class="" />
        </a>
        <a href="/file/CV.pdf" target="_blank">
          <FolderItem href="" urlIcon="/img/pdf.png" text="mon CV.pdf" size="w-[5vw]" class="" />
        </a>

      </template>
    </fileExplorerItem>
    <fileExplorerItem nameFolder="Compétences" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]"
      id="competences" :class="{ hidden: !isFolderSelected('competences') }">
      <template #contenu>
        <FolderItem urlIcon="/img/folder.png" text="TEST" size="w-[5vw]" class="" />
      </template>
    </fileExplorerItem>

    <fileExplorerItem nameFolder="Portfolio" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="portfolio"
      :class="{ hidden: !isFolderSelected('portfolio') }">
      <template #contenu>
        <RouterLink :to="'/portfolio/' + 1">projet 1</RouterLink>
        <RouterLink :to="'/portfolio/' + 2">projet 2</RouterLink>
        <RouterLink :to="'/portfolio/' + 3">projet 3</RouterLink>
        <RouterLink :to="'/portfolio/' + 4">projet 4</RouterLink>
        <RouterLink :to="'/portfolio/' + 5">projet 5</RouterLink>

      </template>
    </fileExplorerItem>

    <fileExplorerItem nameFolder="Contact" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="contact"
      :class="{ hidden: !isFolderSelected('contact') }" />

    <!-- file-contact -->
    <!-- <Contact class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]"></Contact> -->


    <!-- Tasbar folder -->
    <TaskBar :cache="{ hidden: selectedFolder === null }" class="w-screen absolute left-0 bottom-0" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFolder: null,
      myJson: project
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



