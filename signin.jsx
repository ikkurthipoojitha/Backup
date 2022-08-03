import React from "react";
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Signin(){
    return(
        <div class="maincontainer">
            <div class="googletext">
                <div class="columncontainer">
                    <div class="logotext">
                        <img id="logo" width="100px" height="59px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCn3nDgQ7_LWaPb_0_KtiM0cnt23wanFv7_w&usqp=CAU"></img><br/>
                    </div>
                    <p>Create your google account</p>
                <div class="textboxcontainer">
                        <TextField id="outlined-basic" label="First Name" size="small" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" size="small" variant="outlined" />
                </div>
                <div class="textbox"> 
                     <TextField id="outlined-basic" label="Email" size="small" variant="outlined" /> 
                </div>
                <div class="textboxcontainer">
                        <TextField id="outlined-basic" label="Password" size="small" variant="outlined" />
                        <TextField id="outlined-basic" label="Confirm" size="small" variant="outlined" />
                </div>
                <div class="Buttoncontainer">
                    <Button variant="text" size="small">Sign in instead</Button>
                    <Button size="small" variant="contained">Next</Button>
                </div>
                </div>
                <div class="columncontainer2">
                    <img width="85%"height="80%"src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"></img>
                </div>
                
            
            </div>

        </div>
    )
}

export default Signin