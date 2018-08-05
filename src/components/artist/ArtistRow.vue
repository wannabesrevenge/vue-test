<template>
    <tr>
        <td>{{artist._id}}</td>
        <td>{{artist.name}}</td>
    </tr>
</template>

<script>
export default {
    name: 'ArtistRow',
    props: {
        artist: Object
    }
}
</script>

<style>
</style>
