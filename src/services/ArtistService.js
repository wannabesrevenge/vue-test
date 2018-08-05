import Api from '../lib/Api.js'

export default {
   async getArtists(page = 0, options) {
      const res = await Api().get('/api/artists?' + 'p=' + page)
      console.log('Artist Response', res);
      return res.data;
   }
}
