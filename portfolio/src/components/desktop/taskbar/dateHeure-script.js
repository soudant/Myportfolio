export default {
    data() {
      return {
        dateActuelle: '',
        heureActuelle: '',
      };
    },
    methods: {
      mettreAJourHeure() {
        setInterval(() => {
          const date = new Date();
          const jour = date.getDate().toString().padStart(2, '0');
          const mois = (date.getMonth() + 1).toString().padStart(2, '0');
          const annee = date.getFullYear();
          const heure = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          this.dateActuelle = `${jour}/${mois}/${annee}`;
          this.heureActuelle = `${heure}:${minutes}`;
        }, 1000);
      },
    },
    mounted() {
      this.mettreAJourHeure();
    },
  };