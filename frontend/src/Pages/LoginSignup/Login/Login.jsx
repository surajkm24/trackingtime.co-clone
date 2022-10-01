import React, { useContext, useState } from 'react'
import {Box, Button, Image, Input, InputGroup, InputLeftElement, Text} from "@chakra-ui/react";
import styles from "./Login.module.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import {AuthContext} from '../../ContextAPI/AuthContext';

// post user
const postUser = async(text)=>{
  try{
    let res = await axios.post("http://localhost:8080/user/login", text);
    //  console.log(res.data);
     return res.data;
 
    }catch(e){
    console.log(e)
  }

}

// login main function
const Login = () => {
 
  const navigate = useNavigate();
  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const {token,setToken} = useContext(AuthContext)
  console.log(token)
 const handleSubmit = (e) => {
  e.preventDefault();

  postUser(text)
  .then((res) => {
    if (res.token) {
      setText("")
      setToken(res.token);
      return navigate("/create-new-acc")
    } else {
      console.log("login failed");
    }
  })

  .catch(() => {
    console.log("error");
  })



 };

//  console.log(data);
 const handleChange = (e) => {
   const {name, value} = e.target;
   setText({
   ...text,
    [name]: value,
   });
 };

 

  return (
  
      
    <Box className={styles.LoginMainBox} >

      {/* <div class="background" style="background-image: url(img/ui-login-background.svg);"></div> */}
      {/* leftBox */}
      <Box className={styles.leftBox} >
         {/* <Box backgroundImage="url:(img/ui-login-background.svg)"></Box> */}
         
         <Image src="https://pro.trackingtime.co/img/ui-login-background.svg"></Image>
      </Box>

      {/* rightBox */}
      <Box className={styles.rightBox} > 
         <Image  src={process.env.PUBLIC_URL+"TrackingTime-logo.png"}></Image>

         <Box className={styles.inputBox}>
          <InputGroup>
             <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL+"google-logo-login.png"} color="gray.300" />} />
             <Input className={styles.greyBackG} placeholder="Sign in with Google"></Input>
          </InputGroup>
          
           {/* <br /> */}
           <InputGroup>
           <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL+"microsoft-logo-login.png"} color="gray.300" />} />
             <Input className={styles.greyBackG} placeholder="Sign in with Microsoft"></Input>
           </InputGroup>
           {/* <br /> */}
           <InputGroup>
              <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL+"apple-logo-login.png"} color="gray.300" />} />
              <Input className={styles.greyBackG} placeholder="Sign in with Apple"></Input>
           </InputGroup>

           {/* <br /> */}

{/* from start*/}
         <form onSubmit={handleSubmit}>
           <Text className={styles.text2}>Sign in with you email</Text>
           <br />
           <Input onChange={handleChange} name="email" value={text.email} required className={styles.whiteBackG} type="email" placeholder="Email"></Input>
           <br />
           <Input onChange={handleChange} name="password" value={text.password} required className={styles.whiteBackG} type="password" placeholder="Password"></Input>
           <br />
           <Text className={styles.text1}>Forgot Your password? <a href=''>Retrieve</a></Text>
           <br />
           <Button type='submit' className={styles.loginBtn}>
             {/* <Link to="/create-new-acc"> */}
            LOGIN
            {/* </Link> */}
             </Button>
        </form>
{/* form end */}
           <br />
           <Text className={styles.switch}>Don't have an account? 
           <Link to="/signup">
            SIGNUP
            </Link>
            </Text>
           <br />
           <Text className={styles.switch}><a href=''>Terms of service</a> /<a href=''>Privacy Policy</a></Text>
         </Box>
      </Box>

    </Box>
  

  )
}

export default Login
