import axios from 'axios';

export default class ServiceEngine {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    doAxiosGet = async () => {
        let results;
        results = await axios.get(this.baseUrl).then((response) => {
            return response;
        });
        return results;
    }

    doAxiosPost = async (data) => {
        let results;
        results = await axios({
            method: 'POST',
            url: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip'
            },
            data: data
        }).then((response) => {
            return response;
        });
        return results;
    }

    doAxiosPut = async (data) => {
        let results;
        results = await axios({
            method: 'PUT',
            url: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip'
            },
            data: data
        }).then((response) => {
            return response;
        });
        return results;
    };

}