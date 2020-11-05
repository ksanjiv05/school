import React,{useState,useEffect} from 'react'
import Util from '../../util/Util'
import NumberFormat from 'react-number-format';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

//style={Object.assign(Util.ButtonY, Util.Font, { borderRadius: "17px" })}
export const Register = () => {
  const [data, setData] = useState({})
  const [email, setEmail] = useState({})
  const [ready, setReady] = useState(false)
  const [errors, setErrors] = useState({})
 
  const clickHandle=()=>{
    console.log(email)
    console.log(data.cpassword,data.password)
    if(data.password !== data.cpassword) {
    setReady(true);
      {setErrors(preSate=>({
        ...preSate,
        password:"Password mismatch !!!"
      }))}
      toast.warning("Password mismatch !!!")
    }
  //   if(data.phone.length() !== 10) {
  //   setReady(true);
  //   {setErrors(preSate=>({
  //     ...preSate,
  //     password:"Plaese Enter valid mobile number !!!"
  //   }))}
  // }
  
  if(ready==false){
    data.email=email.email;
    data.phone=data.phone.split(' ')[1]
    console.log(data)
   
    console.log("goo.",ready)
    axios.post(process.env.REACT_APP_API_URL+'/api/user',data,{}).then(res=>{
      if(res.status==200)
      {
        console.log(res.data.success.token);
      localStorage.setItem("accessToken",res.data.success.token );
      sessionStorage.setItem("email",res.data.success.email );
        toast.success("SignUp Scccessfully ")
    }
    }).catch(err=>{
      toast.error("Some Error")
    })
}
    else
    return;
    


  }
  const handelEmail=(ev)=>{
    const { name, value } = ev.target;
    setEmail((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handelChange=(ev)=>{
    const { name, value } = ev.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

useEffect(() => {
  console.log(email);
 
}, [email])

  return (
    <center>
    <ToastContainer />
      <div className="login" style={{width:"45%"}}>
        <form>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input id="name" type="text" className="form-control" name="name" placeholder="Name" onChange={ev=>handelChange(ev)} />
            </div>

          
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
            <input id="dob" type="date" className="form-control" name="dob" placeholder="Date of Birth" onChange={ev=>handelChange(ev)} />
          </div>
          
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
            <input id="username" type="text" className="form-control" name="username" placeholder="Username" onChange={ev=>handelChange(ev)} />
          </div>
         
          <div className="input-group" >
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input id="password" type="password" className="form-control" name="password" placeholder="Password" onChange={ev=>handelChange(ev)} />

          </div>
          </div>


          <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input id="lname" type="text" className="form-control" name="lname" placeholder="Last Name" onChange={ev=>handelChange(ev)} />
                </div>
                <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                <input id="email" type="text" className="form-control" name="email" placeholder="Email" onBlur={ev=>handelEmail(ev)}  />
              </div>
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-phone"></i></span>
                {/* <input id="tel" type="text" className="form-control" name="phone" onChange={ev=>handelChange(ev)} /> */}
                <NumberFormat format="+91 ##########" className="form-control" name="phone" onChange={ev=>handelChange(ev)} />
              </div>
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input id="cpassword" type="password" className="form-control" name="cpassword" placeholder="Re Enter Password" onChange={ev=>handelChange(ev)} />

              </div>

          </div>

          <div className="input-group" style={{padding:"0% 4% 0% 4%"}}>
            <input type="button"  style={{ backgroundColor: "rgb(1 6 39)", color: "#e2dada",borderRadius: "17px" }} className="form-control " value="Register" onClick={clickHandle} />
          </div>
        </div>
        </form>
      </div>
    </center>
  )
}
