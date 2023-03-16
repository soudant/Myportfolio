<template>
  <footer id="taskbar">
    <div class="icon">
      <slot name="iconDesktop"></slot>
    </div>
    <input type="text" name="search" id="search" />
    <div class="icon">
      <slot name="iconFileOpen"></slot>
    </div>
    <div class="heure">{{ heureActuelle }} {{ dateActuelle }}</div>
  </footer>
</template>

<script> 
import script from './dateHeure-script';
export default {
  ...script,
}
</script>