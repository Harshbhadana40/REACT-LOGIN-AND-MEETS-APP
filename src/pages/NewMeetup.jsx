import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../Components/meetups/NewmeetupForm";

const NewMeetupPage = () => {
  const Navigate = useNavigate();
  const addMeetHandler = (meetupData) => {
    fetch("https://react-e7b79-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      Navigate("/all-meetup");
    });
  };
  return (
    <section>
      <h2>Add New Meetups</h2>
      <NewMeetupForm onsubmitdata={addMeetHandler} />
    </section>
  );
};

export default NewMeetupPage;
