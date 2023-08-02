import { questions } from "../data/questions";
import { useMemo, useState } from "react";
import { check } from "../assets";
function Test() {
  const [questionId, setQuestionId] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [done, setDone] = useState(false);
  const handleNext = () => {
    if (questionId >= 19) {
      setDone(true);
    } else {
      if (currentAnswer === questions[questionId].correctAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      }
      setQuestionId(questionId + 1);
    }
  };
  const result = useMemo(() => {
    if (correctAnswers === 20) {
      return "you passed";
    } else {
      return "you failed";
    }
  }, [correctAnswers]);
  return !done ? (
    <div className="px-[76px] pt-[229px]">
      <h2 className="w-[673px] h-[65px] text-primary text-[50px] font-normal">
        Prove you’re worthy
      </h2>
      <div className="text-5xl mt-[35px] font-normal text-white mb-[50px]">
        Question {questionId + 1}: {questions[questionId].question}
      </div>
      <div className="flex flex-col gap-8">
        {questions[questionId].options.map((option: string) => (
          <div key={option} className="flex flex-row gap-4">
            <div
              onClick={() => setCurrentAnswer(option)}
              className={`w-[50px] h-[50px] flex justify-center items-center cursor-pointer rounded-lg border border-primary transition-all hover:border-2 ${
                option === currentAnswer ? "bg-primary" : ""
              }`}
            >
              <img src={check} alt="check" />
            </div>
            <div className="text-4xl font-normal text-white">{option}</div>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleNext()}
        className="w-[250px] h-[50px] mt-8 relative  bg-primary border rounded-[5px] shadow hover:text-orange-500 border-orange-500 hover:bg-transparent transition-all"
      >
        <p className="text-base font-bold text-neutral-900 hover:text-orange-500">
          Next
        </p>
      </button>
    </div>
  ) : (
    <h1>{result}</h1>
  );
}

export default Test;
