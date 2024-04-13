import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { removeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";
const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(removeMenu());
  });
  return (
    <div className="flex flex-col w-full">
      <div className="flex ">
        <div>
          <div className="m-3 p-2">
            <iframe
              width="800"
              height="400"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <CommentsContainer />
          </div>
        </div>
        <div className=" border-2 border-gray-300 rounded-md w-full">
          <Livechat />
        </div>
      </div>
    </div>
  );
};

export default Watchpage;
