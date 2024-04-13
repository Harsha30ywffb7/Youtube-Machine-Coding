import React from "react";

const commentsData = [
  {
    name: "harsha",
    text: "this my comment",
    reply: [{ name: "harsha", text: "this my comment", reply: [] }],
  },
  {
    name: "harsha",
    text: "this my comment",
    reply: [],
  },
  {
    name: "harsha",
    text: "this my comment",
    reply: [
      {
        name: "harsha",
        text: "this my comment",
        reply: [],
      },
      {
        name: "harsha",
        text: "this my comment",
        reply: [
          {
            name: "harsha",
            text: "this my comment",
            reply: [],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="my-10">
      <p className="text-xl font-bold p-2 m-2">Comments</p>
      <CommentsList comments={commentsData} />
    </div>
  );
};

const Comment = ({ data }) => {
  const { text, name, reply } = data;
  return (
    <div className="mx-2 flex m-1 bg-gray-100 rounded-md">
      <img
        className="mt-1 p-1 h-10"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="comment profile"
      />
      <div className="text-sm">
        <p className=" mx-3 font-bold ">{name}</p>
        <p className="mx-3">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5  border-2 border-l-black ml-5">
        <CommentsList comments={comment.reply} />
      </div>
    </div>
  ));
};

export default CommentsContainer;
