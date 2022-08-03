import React from "react";
import './signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Signup(){
    return(
        <div class="maincontainer">
            <div class="googletext">
                <div class="logotext">
                    <img width="100px" height="59px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCn3nDgQ7_LWaPb_0_KtiM0cnt23wanFv7_w&usqp=CAU"></img><br/>
                </div>
                <p><span>Sign in<br/></span>
                        Use your google account</p>
                
                <div class="textbox">
                    <TextField id="outlined-basic" label="Email" size="small" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" size="small" variant="outlined" />
                </div>
                <div class="Buttoncontainer">
                    <Button variant="text" size="small">Create Account</Button>
                    <Button size="small" variant="contained">Next</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
