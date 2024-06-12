'use client';

import { useState } from "react";
import Link from "next/link";

type QuestionsProps = {
  questions: {
    question: string,
    solution: string
  }[]
};

export default function Quiz({ questions }: QuestionsProps) {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const [index, setIndex] = useState(getRandomInt(questions.length));
  const [judgment, setJudgment] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  async function onSubmit(event: any) {
    event.preventDefault();
    const value = event.target.answer.value;
    setJudgment(value === questions[index].solution ? "〇正解" : `×不正解（答：${questions[index].solution}）`);
    setIsAnswered(true);
  }

  function toNext() {
    setIsAnswered(false);
    setIndex(getRandomInt(questions.length));
  }

  return (
    <main>
      <Link href="/">TOP</Link>
      <p className="text-2xl">{questions[index].question}</p>
      <form onSubmit={onSubmit}>
        <select name="answer" disabled={isAnswered}>
          {
            questions.map(q => {
              return (
                <option key={q.solution} value={q.solution}>{q.solution}</option>
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
