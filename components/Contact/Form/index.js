import React, { useRef, useState } from "react";
import Input from "./Input";
import Image from "next/image";
import send from "../../img/send_2.svg";
import { Paper } from "@mui/material";
import validator from "./Validator";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index() {
  const showToastMessage = () => {
    toast.success('Message sent', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    message: "",
  });
  const userRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    let first = validator.firstNameValidater(userData.firstName);
    let last = validator.lastNameValidater(userData.lastName);
    let email = validator.emailIdValidator(userData.emailId);
    let msg = validator.messageValidater(userData.message);

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
    if (first && last && email && msg) {
      setErrorMsg("");
      axios
        .post("http://localhost:4000/", userData)
        .then(() => {
          setErrorMsg("")
          userRef.current?.reset();
          showToastMessage()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
        className="flex flex-col gap-3"
        onSubmit={submitHandler}
        ref={userRef}
      >
        <div className="md:flex gap-4">
          <Input name={"First Name *"} handler={firstHandler} />
          <Input name={"Last Name *"} handler={lastHandler} />
        </div>
        <Input name={"Email Id *"} handler={emailHandler} />
        <div>
          <div>Message *</div>
          <textarea
            name="message"
            className="border-2 border-primary rounded-t-2xl rounded-l-2xl w-full max-sm:h-[7rem] p-3"
            onChange={messageHandler}
          ></textarea>
        </div>
        <div className="bg-red-200 rounded-full flex justify-center">
          {errorMsg}
        </div>
        <button
          type="submit"
          className="flex bg-primary rounded-2xl text-white font-bold w-full justify-center 
            py-2 gap-3 items-center text-lg"
        >
          Send{" "}
          <Image src={send} alt="send" className="max-sm:w-10 w-[2.5rem]" />
        </button>
      </form>
    </Paper>
  );
}
