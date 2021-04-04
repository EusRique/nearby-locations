import axios from '@/plugins/axios'

const searchGuides = async ({ lat, lng, radius, type, key}) => 
  await axios.get(`/json?query=${type}&location=${lat},${lng}&radius=${radius}&key=${key}`)

export default {
  searchGuides
}