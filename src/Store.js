import axios from "axios";

const store = {
    async postData(path = '', data = {}) {
        const label = new Date().valueOf() + ' - POST ' + path;
        console.time(label)
        const url = '/api' + path;
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(res => {
                    resolve(res.data)
                    console.timeEnd(label)
                })
                .catch(err => {
                    reject({error: err.response.status, message: err.response.data.message || err.response.statusText})
                })

        })
    },

    async api(path, data) {
        return await this.postData(path, data)
    },

    async getUser() {
        const user = await this.postData('/user/authenticated');
        if (!user.error) {
            return user;
        } else {
            console.warn(user.error)
        }
    },
}

export default store;
