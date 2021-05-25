const axiosConfig = {
    "content-type": "application/json"
}
if (process.env.REACT_APP_ENV == 'dev') {
    axiosConfig.baseURL = 'http://localhost:8000';
} else {
    axiosConfig.baseURL = 'https://swiftheal-django.herokuapp.com';
}

export {
    axiosConfig
};