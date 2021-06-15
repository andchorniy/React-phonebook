/* eslint-disable import/no-anonymous-default-export */

const getUserEmail = (state) => state.auth.user.email;
const getToken = (state) => state.auth.token;
export default { getUserEmail, getToken };
