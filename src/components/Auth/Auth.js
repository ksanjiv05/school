import axios from 'axios';

export default class Auth {
  
  constructor() {
    this.accessToken='Bearer '+localStorage.getItem('accessToken');//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZhMTMyMzI2ZjM5MjMyNTljMjE2NjRiIiwiZW1haWwiOiJsYXlsYTA1QGdtYWlsLmNvbSIsImV4cGlyZXNJbiI6MzYwMDAwfSwiaWF0IjoxNjA0Mzk5NjY2LCJleHAiOjE2MDQ3NTk2NjZ9.s8uFgbR2NTvVAzEYo5CWJqaoMdOWN8ggk3FqvpOQEzM';//;
  }

  isAuthenticated = async () => {
    console.log("login-----------",this.accessToken);
    if(this.accessToken==null)
      return false
    else{
       let flag
        const responce = axios.post(process.env.REACT_APP_API_URL+"/api/validated",{},{headers:{Authorization:this.accessToken}})
        if((await responce).data.message=="success") return true;
        else return false
       
    }
  };

  // handleAuthentication = () => {
  //   this.auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       this.setSession(authResult);
  //       this.history.push("/");
  //     } else if (err) {
  //       this.history.push("/");
  //       alert(`Error: ${err.error}. Check the console for further details.`);
  //       console.log(err);
  //     }
  //   });
  // };

  // setSession = (authResult) => {
  //   console.log(authResult);
  //   // set the time that the access token will expire
  //   const expiresAt = JSON.stringify(
  //     authResult.expiresIn * 1000 + new Date().getTime()
  //   );

  //   localStorage.setItem("access_token", authResult.accessToken);
  //   localStorage.setItem("id_token", authResult.idToken);
  //   localStorage.setItem("expires_at", expiresAt);
  // };

  // isAuthenticated() {
  //   const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  //   return new Date().getTime() < expiresAt;
  // }

  // logout = () => {
  //   localStorage.removeItem("access_token");
  //   localStorage.removeItem("id_token");
  //   localStorage.removeItem("expires_at");
  //   localStorage.removeItem("scopes");
  //   this.history.push("/");

  //   this.auth0.logout({
  //     clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  //     returnTo: "http://localhost:3000",
  //   });
  //   console.log("logout");
  // };
}
