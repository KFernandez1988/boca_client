import axios from "axios";
import { createContext } from "react";
import { redirect } from "react-router-dom";

export default createContext<any>({
    isLog: localStorage.getItem('isLog'),
    token: localStorage.getItem('token'),
    login(email: string, password: string ) {
      const  getToken = async () => {
         await axios.post('https://dashboard.heroku.com/apps/bocaapi/auth/login', {
          email,
          password
         }).then(res => { 
            console.log(res.data)
            if ( res.data) {
            localStorage.setItem('isLog', "1");
            localStorage.setItem('token', res.data);
            return window.location.href = '/'
         }}).catch(err => { console.error("not authenticated", err)});
      }
      getToken();
    },
      logOut() {
        localStorage.removeItem('isLog');
        localStorage.removeItem('token');
        return window.location.href = '/auth'
      }
    });