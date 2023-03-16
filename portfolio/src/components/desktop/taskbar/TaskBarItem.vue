<template>
  <footer class="flex p-2 bg-primaries-light_blue text-primaries-white justify-between">
    <div class="gauche flex">
      <div class="icon">
        <slot name="iconDesktop"></slot>
      </div>
      <input type="text" placeholder="Rechercher"
        class="input input-bordered w-[30vw] max-w-xs bg-primaries-white text-primaries-text mr-4 ml-4" />
      <div class="icon">
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