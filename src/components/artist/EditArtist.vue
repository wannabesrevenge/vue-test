<template>
    <div>
        <div v-for="(val, key) in artist">
            <input/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        artist: Object
    }
}
</script>

<style>
</style>
