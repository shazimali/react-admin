import axios from 'axios';
axios.defaults.baseURL = "http://laravel-api.test/api";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
