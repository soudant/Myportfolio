<template>
  <footer class="flex p-2 bg-[rgba(42,48,60,0.8)] text-lightMode-white justify-between max-h-[60px]">
    <div class="gauche flex">
      <div class="icon">
        <slot name="iconDesktop"></slot>
      </div>
      <input type="text" placeholder="Rechercher"
        class="input input-bordered w-[30vw] max-w-xs h-full bg-lightMode-white text-lightMode-primary mr-4 ml-4" />
      <div class="icon m-[-0.5rem] min-w-[full] flex space-x-2">
        <slot name="iconFileOpen"></slot>
      </div>
    </div>
    <div class="droite">
      <div class="heure text-center">
        <p>{{ heureActuelle }} </p>
        <p>{{ dateActuelle }}</p>
      </div>
    </div>


  </footer>
</template>

<script>
import script from './dateHeure-script';
export default {
  ...script,
  
}
</script>

<style scoped></style>