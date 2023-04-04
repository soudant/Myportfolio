<template>
    <div class="flex flex-col text-xl">
        <label class="pb-2 font-semibold  text-center text-lightMode-greySelected">{{ nameLabel }}</label>
        <div class="radial-progress text-lightMode-dark_grey self-center" :style="{ '--value': targetValue, '--thickness': '0.75rem' }">
            {{ targetValue }}%</div>
    </div>
</template>
  
<script>
export default {
    props: {
        targetValue: {
            type: Number,
            required: true,
        },
        nameLabel: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            progressValue: 0,
            animationDuration: 2000, // en millisecondes
            interval: null
        };
    },
    mounted() {
        this.interval = setInterval(() => {
            const increment = (this.targetValue / this.animationDuration) * 20;
            this.progressValue += increment;
            if (this.progressValue >= this.targetValue) {
                clearInterval(this.interval);
            }
        }, 10);
    }
};
</script>