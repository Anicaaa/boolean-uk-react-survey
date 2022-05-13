import RadioButtons from "./RadioButtons";
import CheckBoxes from "./CheckBoxes";

import { useState } from "react";

const initialState = {
    color: "",
    spendTime: {
       swimming: false,
       bathing: false,
       chatting: false,
       noTime: false,
    },
    review: "",
    username: "",
    email: ""
}

function Form() {
const [open, setOpen] = useState(false); //Ignore this state
const [userData, setUserData] = useState(initialState)

function handleChange(event) {
    const {name, value, checked} = event.target

    if (name === "color") {
      setUserData({ ...userData, color: value });
    }
    if (name === "spend-time") {
      setUserData({ ...userData, spendTime: checked });
    }
    if (name === "review") {
      setUserData({ ...userData, review: value });
    }
    if (name === "username") {
      setUserData({ ...userData, username: value });
    }
    if (name === "email") {
      setUserData({ ...userData, email: value });
    }
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(userData)
}

return (
<form className="form" onSubmit={handleSubmit}>
  <h2>Tell us what you think about your rubber duck!</h2>

  <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <RadioButtons userData={userData} handleChange={handleChange}/>
  </div>

  <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <CheckBoxes userData={userData} handleChange={handleChange}/>
  </div>

  <label>What else have you got to say about your rubber duck?
    <textarea name="review" cols="30" rows="10" value={userData.review} onChange={handleChange}></textarea>
    </label>

    <label>Put your name here (if you feel like it):
    <input type="text" name="username" value={userData.username} onChange={handleChange} />
    </label>

    <label>Leave us your email please??
    <input
    type="email" name="email" value={userData.email} onChange={handleChange} />
    </label>

    <input className="form__submit" type="submit" value="Submit Survey!" />
</form>
  );
}

export default Form;