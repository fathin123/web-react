import React from "react";
import './Login.css';

function form() {
    return(
        <div>
            <h2>Tugas Pertemuan 3</h2>
            <form>

              <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                    
                <button type="submit">Login</button>
                <input type="checkbox" defaultChecked/> Remember me
              </div>
              <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
              </div>
            </form>
        </div>
    );
}

export default Login;

// ReactDOM.render(
//     <Form/>,
//     document.getElementById('root')
// );