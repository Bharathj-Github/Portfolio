import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Image from "next/image";
import send from "../../img/send_2.svg";
import { Hidden, Paper } from "@mui/material";
import validator from "./Validator";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import done from '../../img/ok.json'

export default function Index({nightMode}) {

  const showToastMessage = () => {
    toast.success('Message sent', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const userRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const [first, setFirst] = useState(true);
  const [last,setLast] = useState(true);
  const [email, setEmail] = useState(true);
  const [msg, setMsg] = useState(true);
  const [clicked, setClicked] = useState();
  const [disable, setDisable] = useState(false)
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    message: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    setFirst(validator.firstNameValidater(userData.firstName));
      setLast(validator.lastNameValidater(userData.lastName));
      setEmail(validator.emailIdValidator(userData.emailId));
      setMsg(validator.messageValidater(userData.message));
      setClicked(true);
  }

  useEffect(()=>{
    if(clicked){

      if (!first) {
        setErrorMsg("First Name Is Required!!");
      }
      if (first && !last) {
        setErrorMsg("Last Name Is Required!!");
      }
      if (first && last && !email) {
        setErrorMsg("Invalid Email Id!!");
      }
      if (first && last && email && !msg) {
        setErrorMsg("Message Is Required!!");
      } 
      if (first && last && email && msg && clicked) {
        axios
        .post("https://node-portfolio-26x9.onrender.com", userData)
        .then(() => {
          setDisable(true)
          setUserData(" ")
          showToastMessage();
          setErrorMsg("");
          userRef.current?.reset();
        })
        .catch((err) => {
          console.log(err);
        });
      };
    }

    },[first,last,email,msg,clicked])
    
  const firstHandler = (data) => {
    setUserData({ ...userData, firstName: data });
  };
  const lastHandler = (data) => {
    setUserData({ ...userData, lastName: data });
  };
  const emailHandler = (data) => {
    setUserData({ ...userData, emailId: data });
  };
  const messageHandler = (event) => {
    setUserData({ ...userData, message: event.target.value });
  };
  return (
    <Paper className="bg-gray-100 p-10 rounded-2xl" elevation={4}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="font-extrabold text-primary text-3xl pb-4">
        Send Me A Message
      </div>
      <form
        action=""
        className={`flex flex-col gap-3 ${disable && 'hidden'}`}
        onSubmit={submitHandler}
        ref={userRef}
      >
        <div className="md:flex gap-4">
          <Input name={"First Name *"} handler={firstHandler} err={!first}/>
          <Input name={"Last Name *"} handler={lastHandler} err={!last}/>
        </div>
        <Input name={"Email Id *"} handler={emailHandler} err={!email}/>
        <div>
          <div className={!msg && 'text-red-600'}>Message *</div>
          <textarea
            name="message"
            className={`border-2 border-primary rounded-t-2xl rounded-l-2xl w-full max-sm:h-[7rem] p-3 ${!msg && 'border-red-600 animate-[wiggle_0.2s_2]'}`}
            onChange={messageHandler}
          ></textarea>
        </div>
        <div className="bg-red-200 rounded-full flex justify-center">
          {errorMsg}
        </div>
        <button
          type="submit"
          className={`flex bg-primary rounded-2xl text-white font-bold w-full justify-center 
            py-2 gap-3 items-center text-lg ${disable && 'bg-gray-400'}`}>
          Send{" "}
          <Image src={send} alt="send" className="max-sm:w-10 w-[2.5rem]" />
        </button>
      </form>
      <div className={`${!disable && 'hidden'}`}>
        <div className={'h-[10rem]'}>
        <Lottie 
        className="scale-50 -translate-y-[5rem]"
	    animationData={done} loop={true}
      />
        </div>
        <div className="pt-5">
        I Will Get Back To You As Soon As Possible
        </div>
      </div>
    </Paper>
  );
}
