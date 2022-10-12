import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Topic = ({ quizTopic }) => {
  const { id, name, logo } = quizTopic;
  return (
    <div className="border rounded-md mb-8 pb-8 w-60 mx-auto">
      <img className=" bg-zinc-600 rounded-md" src={logo} alt="logo" />
      <h1 className="text-xl font-bold text-center mt-4"> {name}</h1>

      <Link to={`/quiz/${id}`}>
        <button className="rounded-md px-6 py-3 w-40 ml-10 mt-6 bg-lime-600 flex items-center justify-evenly text-white">
          Start Quiz <ArrowLongRightIcon className=" h-5"></ArrowLongRightIcon>
        </button>
      </Link>
    </div>
  );
};

export default Topic;
