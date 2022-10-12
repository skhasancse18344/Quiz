import React from "react";
import { useLoaderData } from "react-router-dom";

import Option from "../Option/Option";

const Quiz = ({ params }) => {
  const quiz = useLoaderData();
  const quizDatas = quiz.data.questions;

  console.log(quizDatas);
  return (
    <div>
      {quizDatas.map((quizData) => (
        <div className="text-center" key={quizData.id}>
          <div className="w-4/5 mx-auto h-4/5 bg-lime-500 my-20 px-10 py-10 rounded-md shadow-lg">
            <h1 className="font-bold text-xl">{quizData.question}</h1>
            <Option data={quizData}></Option>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
