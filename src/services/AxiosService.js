import axios from "axios";

class AxiosService {
    postMeth(url, data, header=false) {
        return axios.post(url, data, header);
    }
    getMeth(url, data) {
        return axios.get(url, data);
    }
}

export default AxiosService;