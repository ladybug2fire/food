import axios from 'axios'
import {HOST} from '../../config/myconfig'
export const getUser = function () {
  console.log(HOST)
  return axios.get(`${HOST}/api/getuser`, {
    params: {
      ID: 12345
    }
  }).then(function (response) {
    console.log(response)
  }).catch(function (error) {
    console.log(error)
  })
}
