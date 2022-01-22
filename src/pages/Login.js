
import {useState} from "react";
import Mail from "./Mail";



const Login = () => {

	const [pass, setPass] = useState("");
	const [passError, setPassError] = useState(null);

	const passValidation = (e) => {
		console.log(e.target.value)

		if(e.target.name === "userpass") {
			setPass(e.target.value)
      if(e.target.value===""){
        setPassError(null);
      }else if(e.target.value.length>=8 && e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$")){
        setPassError("valid pass");

      }else{
        setPassError("invalid pass");

      }

}

}

  const showPass = () => {
  const passInput= document.getElementById("passId")

  if(passInput.type === "password") {
    return passInput.type = "text"
    
  }else{
    return passInput.type = "password"
  }
}

    return (
  
    <form>
  
  <Mail />
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
     <input type="checkbox" onClick={()=>showPass()}/>
     <label>show Password</label>
     </div>


  <div className="mb-3">
  <button type="Login" className="btn btn-primary">Login</button>
  </div>

    </form>
    
    );
  }

  
  export default Login;
  