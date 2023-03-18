<script>
export default {
    props: [
        'urlIcon',
        'altIcon',
        'text'
    ],
}
</script>

<template>
    <div class="folder text-center mt-3 mb-5">
        <img :src="urlIcon" :alt="altIcon" class="ml-auto mr-auto w-[70%] mb-1">
        <h2>{{ text }}</h2>
    </div>
</template>
