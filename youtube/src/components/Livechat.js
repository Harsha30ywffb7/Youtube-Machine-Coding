import React, { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomString } from "../utils/helper";

const Livechat = () => {
  const dispatcher = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((state) => state.chat.messages);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Api polling");
      dispatcher(
        addChat({
          name: generateRandomName(),
          message: generateRandomString(25) + "😆😄",
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="h-[400px] bg-slate-100 overflow-y-scroll flex-col-reverse">
        {chatMessages.map((c, index) => (
          <Chatmessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatcher(
            addChat({
              name: "HarshaVardhan",
              message: liveMessage,
            })
          );
          setLiveMessage('')
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e)=>{setLiveMessage(e.target.value)}}
          className="border border-b-black m-3 w-96 p-1"
        />
        <button className="px-2 mx-2 bg-red-300 rounded-md">send</button>
      </form>
    </>
  );
};

export default Livechat;
