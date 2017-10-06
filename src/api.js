import axios from  'axios'
const base_url = 'https://www.easy-mock.com/mock/59d719f89d342f449f2fc142/api'

function _ajax(apiName,params){
    return axios.post(base_url + '/' + apiName,params)
}

export default _ajax