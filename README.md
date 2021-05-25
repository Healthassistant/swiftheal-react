# SWIFTHEAL
SwiftHeal is an amazing platform to provide you a great healthcare service. It takes care of your health by simplifying the process of diagnosis, just  signup to the website and use its symptom analyser to get yourself diagnosed and not only diagnosis, we provide you excellent prescritption through well qualified and experienced doctors, also if required we can easily arrange a physical visit or a lab test and could easily manage all your medical reports.


# For developers
## Folder structure:
- Any complete page would be put in **src/Views**
- Individual components of the pages can be put in **src/Components**


## Cloning the app
- Clone the github repository
- Install node js in your system
- Enter the command in your terminal (Make sure you are in root directory of folder)
```shell
npm install
```
- Then start the server by the following command
```shell
npm start
```

## .env file
- A .env file with structure similar to 
```text
REACT_APP_AXIOS_BASE_URL="https://swiftheal-django.herokuapp.com"
REACT_APP_AXIOS_DEV_BASE_URL="http://localhost:8000"
REACT_APP_ENV=remote
```
REACT_APP_ENV=remote for working with remote api and dev for working with local api
