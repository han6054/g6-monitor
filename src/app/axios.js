import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    timeout: 1000 * 60, // 请求超时（ms）
});

instance.interceptors.request.use(config => {
    return config;
});
instance.interceptors.response.use(({ config, data }) => {
    console.log(config)
    return data;
});

export default (config) => {
    return new Promise((resolve, reject) => {
        instance(config).then(res => {
            resolve(res);
        })
            .catch(error => {
                reject(error);
            });
    });
};