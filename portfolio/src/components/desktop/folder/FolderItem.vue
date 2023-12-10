<script>
export default {
    props: [
        'urlIcon',
        'altIcon',
        'text',
        'size'
    ],
}
</script>

<template>
    <div class=" p-2 pb-4 w-fit text-center h-min">
        <img :src="urlIcon" :alt="altIcon" class=" ml-auto mr-auto pb-1" :class="size">
        <h2 class="text-lightMode-primary w-[11ch] overflow-hidden break-normal">{{ text }}</h2>
    </div>
</template>
