import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import Admission from './components/admission/Admission';
import { Preview } from './components/admission/Preview';
import Home from './components/Home';
import Admin from './components/admin/Admin';
import UploadDocument from './components/admission/UploadDocument';
import Auth from './components/Auth/Auth';
import Index from './components/admission/Index';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './components/Slider';
import { Notification } from './components/Notification';
import DisplayDocument from './components/library/DisplayDocument';
import Print from './components/library/Print';
import Library from './components/library/Library';
import Download from './components/downloads/Download';

const App = () => {
  const [status, setStatus] = useState(false);

  const auth = new Auth();
  useEffect(() => {
    async function authenticat() {
      const isAuth = await auth.isAuthenticated();
      setStatus(isAuth);
    }
    authenticat();
    console.log(status, 'pppp');
  });

  return (
    <BrowserRouter>
      <div className="containerx">
        <Header />
        <Switch>
          {/* <Route exact path="/" component={DisplayDocument} /> */}
          <Route exact path="/" component={Slider} />
          <Route exact path="/reg" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admission" component={Index} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/download" component={Download} />
          {/* <Route path="/admission" render={()=> status? handelAdmission():
            (<Redirect to="/login" />)}
      /> */}

          {/* {
        status ?(
          <>
          <Route exact path="/admission" component={Admission}/>
          <Route exact path="/uploaddoc" component={UploadDocument}/>
          </>
        ):(<Route exact path="/login" component={Login}/>)
      } */}
          <Route
            path="/apply"
            render={(props) =>
              status ? <Admission /> : <Redirect to="/login" />
            }
          />

          <Route
            path="/uploaddoc"
            render={(props) =>
              status ? <UploadDocument /> : <Redirect to="/login" />
            }
          />
          <Route
            path="/preview"
            render={(props) =>
              status ? <Preview /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
