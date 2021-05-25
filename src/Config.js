const axiosConfig = {
    "content-type": "application/json"
}
console.log(process.env.REACT_APP_ENV)
if (process.env.REACT_APP_ENV == 'remote') {
    axiosConfig.baseURL = 'https://swiftheal-django.herokuapp.com';
} else {
    axiosConfig.baseURL = 'http://localhost:8000';
}

export {
    axiosConfig
};