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
  const currentQuestion = questions[index];

  async function onSubmit(event: any) {
    event.preventDefault();
    const value = event.target.answer.value;
    const correctAnswer = currentQuestion.solution;
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
      {currentQuestion.questionImage}
      {currentQuestion.question
        && <p className="text-2xl">{currentQuestion.question}</p>
      }
      <form onSubmit={onSubmit}>
        <select name="answer" disabled={isAnswered}>
          {
            getSelectOptions().map(o => {
              return (
                <option key={o} value={o}>{o}</option>
              )
            })
          }
        </select>
        <button type="submit" disabled={isAnswered}>Answer</button>
      </form>
      {isAnswered &&
        <>
          <p>{judgment}</p>
          <button onClick={toNext}>Next</button>
        </>
      }
    </main>
  );
}
