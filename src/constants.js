export const ACCESS_TOKEN = localStorage.getItem('access_token');
export const LOGGED_IN_USER_ID = localStorage.getItem('user_id');
export const PERMISSIONS = localStorage.getItem('permissions');
export const HTTP_STATUS = Object.freeze({
    PENDING:'PENDING',
    FULFILLED:'FULFILLED',
    REJECTED:'REJECTED',
});