<template>
    <div class="flex flex-col text-xl">
        <div class="flex justify-between pb-2 font-semibold text-lightMode-greySelected">
            <label class="">{{ nameLabel }}</label>
            <p>{{ targetValue }}%</p>
        </div>

        <progress class="progress h-3" :value="progressValue" max="100"></progress>

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