import { useState } from "react";
import Mail from "./Mail";
import {useHistory} from "react-router-dom";






const Register = (props) => {
  
const history = useHistory();
console.log(history , "history")

const handleSubmit = (e) => {
  console.log(e)
  e.preventDefault();
  history.push({
    pathname: "/login",
  })
}

    const [username , SetUser] = useState("")       
    const [userError , SetUserError] = useState(null)       
    const [pass , setPass]= useState("");
    const [passError , setPassError] = useState(null)
    const [confirmpass , setConfirmPass]= useState("");
    const [confirmpassError , setConfirmPassError] = useState(null)

        // username check
        const noSpace = (event) => { 
            SetUser(event.target.value)
            if (event.target.name === "username"){
                if (event.target.value.includes(" ")) {
                    SetUserError("username should have no spaces! ")
                }else {
                    SetUserError (null)
                }
            }
        }

          //pass check 
        const passValidation = (e) => {
        if(e.target.name === "userpass") {
            setPass(e.target.value);
            if (e.target.value === "") {
                setPassError (null);
            }else if ( e.target.value.length >= 8 && e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$")  ){
                setPassError (" Vaild");
            }else {
                setPassError ("Not Vaild");
            }
        }
          //confirm pass check 
        if(e.target.name === "confirmpass") {
          setConfirmPass(e.target.value);
            if (e.target.value === "") {
              setConfirmPassError (null);
            
            }else if (document.getElementById("passId").value === document.getElementById("passId2").value && `${passError}` === " Vaild" ) {
              setConfirmPassError (" Vaild");
            } else {
              setConfirmPassError ("Not the Same Password");
            }
    }
}



return (

<form onSubmit={(e) => handleSubmit(e)}>
  <div className="mb-3">
    <label><p> Name </p></label>
    <input type="text" name="name" required className="form-control" />
  </div>
  <Mail />
  <div className="mb-3">
    <label><p> User Name </p></label>
    <input type="text"  value={username} 
     name="username" required
     className="form-control"
     onChange={(even) => noSpace(even)} />    
    <small>{userError}</small>
  </div>


  <div className="mb-3">
    <label>Password</label>
    <input type="password" className="form-control"
     id="passId"
     required
     value={pass}
     name="userpass"
     onChange={(e) => passValidation(e)}/>
     <small> {passError}</small>
  </div>

  <div className="mb-3">
    <label><p> Confirm password </p></label>
    <input id="passId2" type="password"
     className="form-control"
     name="confirmpass"
     value={confirmpass}
     onChange={(e) => passValidation(e)} required  />
    <small> {confirmpassError} </small>
    </div>
     

  <div className="mb-3">
  <button type="Login" className="btn btn-primary">Register</button>
  </div>
</form>
    )
}

export default Register;