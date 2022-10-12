import React from "react";
import Swal from "sweetalert2";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Option = (data) => {
  const findCorrect = (clickedOption) => {
    console.log(clickedOption);
    if (clickedOption === data.data.correctAnswer) {
      Swal.fire("Good job!", "Right Answer", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "wrong answer!",
      });
    }
  };
  const correctAnswerShow = () => {
    Swal.fire("Correct answer", data.data.correctAnswer);
  };
  return (
    <div>
      <div className="mt-5">
        <FontAwesomeIcon
          onClick={correctAnswerShow}
          className="text-xl"
          icon={faEye}
        ></FontAwesomeIcon>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10">
        {data.data.options.map((option) => (
          <div>
            <button
              onClick={() => findCorrect(option)}
              className={`border md:w-1/2 sm:w-4/5 py-3 px-8 rounded-md `}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Option;
