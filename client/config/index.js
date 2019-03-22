export default {
    apiUrl: process.env.NODE_ENV === 'production'
        ? 'https://igrp-transport.herokuapp.com/api' : 'http://localhost:3000/api',
};
  