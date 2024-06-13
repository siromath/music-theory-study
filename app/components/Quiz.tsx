'use client';

import { useState } from "react";
import Link from "next/link";

type QuestionsProps = {
  questions: {
    question?: string,
    questionImage?: JSX.Element,
    solution: string
  }[]
};

export default function Quiz({ questions }: QuestionsProps) {
  // min <= n < max
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const questionsCount = questions.length;
  const [index, setIndex] = useState(getRandomInt(0, questionsCount));
  const [judgment, setJudgment] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const currentQuestion = questions[index];

  async function onSubmit(event: any) {
    event.preventDefault();
    const value = event.target.answer.value;
    const correctAnswer = currentQuestion.solution;
    setIsCorrect(value === correctAnswer);
    setJudgment(value === correctAnswer ? "〇正解" : `×不正解（答：${correctAnswer}）`);
    setIsAnswered(true);
  }

  function toNext() {
    setIsAnswered(false);
    setIndex((index + getRandomInt(1, questionsCount)) % questionsCount);
  }

  function getSelectOptions () {
    const solutions = questions.map(q => q.solution);
    return Array.from(new Set(solutions));
  }

  return (
    <main>
      <Link href="/">TOP</Link>
      <div className="p-4 flex justify-center">
        {currentQuestion.questionImage}
      </div>
      {currentQuestion.question
        && <p className="text-center font-bold text-6xl py-20">{currentQuestion.question}</p>
      }
      <form
        onSubmit={onSubmit}
        className="flex justify-center"
      >
        <select
          name="answer"
          disabled={isAnswered}
          className="block bg-white border border-gray-400 pl-2 py-2 rounded shadow focus:outline-none focus:shadow-outline mr-4"
        >
          {
            getSelectOptions().map(o => {
              return (
                <option key={o} value={o}>{o}</option>
              )
            })
          }
        </select>
        <button
          type="submit"
          disabled={isAnswered}
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
        >Answer</button>
      </form>
      {isAnswered &&
        <div className="flex flex-col items-center mt-12">
          <p className={`text-2xl ${isCorrect ? "text-red-600" : "text-blue-600" }`}>{judgment}</p>
          <button
            onClick={toNext}
            className="bg-blue-400 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400 mt-12"
          >Next</button>
        </div>
      }
    </main>
  );
}
