<template>
    <div>
        <button v-on:click="setPage(page - 1)">Prev Page</button>
            {{page}}
        <button v-on:click="setPage(page + 1)">Next Page</button>
        <table>
            <ArtistRow v-for="a in artists" :artist="a"></ArtistRow>
        </table>
        <button v-on:click="setPage(page - 1)">Prev Page</button>
            {{page}}
        <button v-on:click="setPage(page + 1)">Next Page</button>
    </div>
</template>

<script>
import ArtistService from '../../services/ArtistService.js'
import ArtistRow from './ArtistRow.vue'

export default {
    template: `
    <div>
        <button v-on:click="setPage(page - 1)">Prev Page</button>
            {{page}}
        <button v-on:click="setPage(page + 1)">Next Page</button>
        <table>
            <ArtistRow v-for="a in artists" :artist="a"></ArtistRow>
        </table>
        <button v-on:click="setPage(page - 1)">Prev Page</button>
            {{page}}
        <button v-on:click="setPage(page + 1)">Next Page</button>
    </div>
    `,
    components: {
        ArtistRow
    },
    data () {
        return {
            artists: [],
            page: 0
        }
    },
    methods: {
        async setPage(val) {
            if (val < 0) {
                return;
            }

            const newArtists = await ArtistService.getArtists(val);
            if (newArtists.length < 1) {
                return;
            }

            this.page = val;
            this.artists = newArtists;
        }
    },
    async created () {
        console.log("TEST")
        this.artists = await ArtistService.getArtists();
    }
}
</script>

<style>
</style>

