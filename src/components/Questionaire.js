import React from "react";

const Questionaire = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white text-black-800 p-10 rounded-lg shadow-md">
        <h2
          className="text-3xl w-full"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers.map((answer) => {
          const textColor = showAnswers
            ? answer === correct_answer
              ? "text-green-500"
              : "text-red-500"
            : "text-white-500";

          //   const textColor = showAnswers ? "text-white" : "text-black-700";
          return (
            <button
              className={`${textColor} p-4 bg-white font-semibold rounded-lg shadow`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            ></button>
          );
        })}
      </div>
      {showAnswers && (
        <button
          onClick={handleNextQuestion}
          className="ml-auto bg-gray-600 text-white p-2 font-semibold rounded-lg shadow mt-6"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

// function shuffllingAnswer(arr) {
//     for (let i=0; i<100; i++) {
//         const idx1 = ;
//         const idx2 = ;
//     }
// }

export default Questionaire;
