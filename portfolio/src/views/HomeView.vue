<script setup>
import TaskBar from "@/components/desktop/taskbar/Taskbar.vue";
import FolderItem from "@/components/desktop/folder/FolderItem.vue";
import fileExplorerItem from "@/components/desktop/file-explorer/file-explorerItem.vue";
import fileTextItem from "@/components/desktop/file-text/file-textItem.vue";

import project from '@/donnees/projets.json'
</script>

<template>
  <div id="desktop" class="h-screen w-screen bg-[url('/img/fond_ecran.jpeg')] bg-contain ">
    <!-- Folder desktop -->
    <div class="p-2 w-min flex flex-col justify-center items-center text-lightMode-primary">
      <FolderItem urlIcon="/img/IconFolder.svg" altIcon="icon du dossier à propos" text="À propos" size="w-[5vw]"
        class=" active" @click="toggleFolder('a_propos')" />
      <FolderItem urlIcon="/img/IconFolder.svg" altIcon="icon du dossier compétences" text="Compétences" size="w-[5vw]"
        class="" @click="toggleFolder('competences')" />
      <FolderItem urlIcon="/img/IconFolder.svg" altIcon="icon du dossier portfolio" text="Portfolio" size="w-[5vw]"
        class="" @click="toggleFolder('portfolio')" />
      <!-- <FolderItem urlIcon="/img/IconFolder.svg" altIcon="icon du dossier contact" text="Contact" class="text-primaries-white" @click="toggleFolder('contact')" /> -->
      <FolderItem urlIcon="/img/IconFileTXT.svg" altIcon="icon du fichier contact" text="contact.txt" size="w-[5vw]"
        class="" @click="toggleFolder('contact')" />
    </div>

    <!-- file-explorer -->
    <fileExplorerItem v-if="selectedFolder === 'a_propos'" @close-file-explorer="selectedFolder = null"
      nameFolder="À propos" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="a_propos">
      <template #contenu>
        <a href="/file/videoPresentation.mp4" target="_blank">
          <FolderItem href="" urlIcon="/img/IconFileMP4.svg" text="présentation.mp4" size="w-[5vw]" class="" />
        </a>
        <a href="/file/CV.pdf" target="_blank">
          <FolderItem href="" urlIcon="/img/IconFilePDF.svg" text="mon CV.pdf" size="w-[5vw]" class="" />
        </a>
        <FolderItem urlIcon="/img/IconFileTXT.svg" altIcon="icon du fichier a_propos " text="	À propos.txt" size="w-[5vw]"
          class="" @click="toggleFolder('a_proposText')" />
      </template>
    </fileExplorerItem>

    <fileExplorerItem v-if="selectedFolder === 'competences'" @close-file-explorer="selectedFolder = null"
      nameFolder="Compétences" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="competences">
      <template #contenu>
        <RouterLink target='_blank' :to="'/competences'">
          <FolderItem urlIcon="/img/IconFileHTML.svg" text="compétences.html" size="w-[5vw]" class="" />
        </RouterLink>
      </template>
    </fileExplorerItem>

    <fileExplorerItem v-if="selectedFolder === 'portfolio'" @close-file-explorer="selectedFolder = null"
      nameFolder="Portfolio" class="absolute top-[calc(50%-25vh)] left-[calc(50%-25vw)]" id="portfolio">
      <template #contenu>
        <RouterLink target='_blank' :to="'/portfolio/' + 1">
          <FolderItem urlIcon="/img/IconFileHTML.svg" text="projet_1.html" size="w-[5vw]" class="" />
        </RouterLink>
        <RouterLink target='_blank' :to="'/portfolio/' + 2">
          <FolderItem urlIcon="/img/IconFileHTML.svg" text="projet_2.html" size="w-[5vw]" class="" />
        </RouterLink>
        <RouterLink target='_blank' :to="'/portfolio/' + 3">
          <FolderItem urlIcon="/img/IconFileHTML.svg" text="projet_3.html" size="w-[5vw]" class="" />
        </RouterLink>
        <RouterLink target='_blank' :to="'/portfolio/' + 4">
          <FolderItem urlIcon="/img/IconFileHTML.svg" text="projet_4.html" size="w-[5vw]" class="" />
        </RouterLink>
        <RouterLink target='_blank' :to="'/portfolio/' + 5">
          <FolderItem urlIcon="/img/IconFileHTML.svg" text="projet_5.html" size="w-[5vw]" class="" />
        </RouterLink>
      </template>
    </fileExplorerItem>

    <fileTextItem nameFolder="Contact" class="absolute top-[calc(50%-25vh)] left-[calc(50%-20vw)]" id="contact"
      name="contact.txt" v-if="selectedFolder === 'contact'" @close-file-explorer="selectedFolder = null">
      <template #contenu>
        <p class="">Vous voulez me joindre ? <br><br>
          Voici mes coordonnées :<br>
          mail: contact@t-soudan.fr<br>
          tél : 07.86.10.43.11</p>
      </template>
    </fileTextItem>


    <!-- file-a_proposText -->
    <fileTextItem nameFolder="A propos.txt" class="absolute top-[calc(50%-25vh)] left-[calc(50%-20vw)]" id="a_proposText"
      name="A propos.txt" v-if="selectedFolder === 'a_proposText'" @close-file-explorer="selectedFolder = null">
      <template #contenu>
        <p class="">Bonjour, je m'appelle Thomas SOUDAN et j'ai 19 ans. Je suis étudiant en deuxième année de BUT informatique à l'IUT d'Annecy et je suis passionné par les technologies numériques. Mon temps libre est généralement consacré à la pratique de mes différentes passions telles que le montage vidéo, la programmation, le développement web et la photographie.<br><br>
        Je trouve une grande satisfaction à travailler sur des projets créatifs qui impliquent l'utilisation de mes compétences en informatique. Le montage vidéo est un de mes passe-temps favoris et je suis constamment à la recherche de nouvelles techniques pour améliorer mes créations. La programmation et le développement web sont également des domaines qui m'intéressent beaucoup.<br><br>
        En dehors de mes activités en ligne, j'aime également capturer des moments précieux en prenant des photos de mes amis et de ma famille. Je suis très motivé à améliorer mes compétences en photographie et à apprendre de nouvelles techniques pour capturer des images encore plus impressionnantes. J'espère un jour pouvoir combiner mes compétences en informatique et en photographie pour créer des projets encore plus créatifs.</p>
      </template>
    </fileTextItem>


    <!-- Tasbar folder -->
    <TaskBar :cache="{ hidden: selectedFolder === null }"
      :url="selectedFolder === 'contact' ? '/img/IconFileTXT.svg' : selectedFolder === 'a_proposText' ? '/img/IconFileTXT.svg' : '/img/IconFolder.svg'"
      class="w-screen absolute left-0 bottom-0" />


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