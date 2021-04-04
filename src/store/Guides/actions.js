import guides from '@/api/guides.js'

export default {
  async searchGuides({ dispatch }, { lat, lng, radius, type, key}) {
    try {
      const response = await guides.searchGuides({
        lat,
        lng,
        radius,
        type,
        key
      })
      console.log(response.data.results)
      return response.data.results
    } catch (error) {
      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          //text: messages.showMessageError(`Erro ao cadastrar - ${error.response.data.error}`),
          type: "error"
        },
        {
          root: true
        }
      );
  
      return error;
    }
  }
}