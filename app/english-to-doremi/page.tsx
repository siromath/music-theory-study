'use client';

import Quiz from "../components/Quiz";

const questionsList = [
  {
    question: "C",
    solution: "ド"
  },
  {
    question: "D",
    solution: "レ"
  },
  {
    question: "E",
    solution: "ミ"
  },
  {
    question: "F",
    solution: "ファ"
  },
  {
    question: "G",
    solution: "ソ"
  },
  {
    question: "A",
    solution: "ラ"
  },
  {
    question: "B",
    solution: "シ"
  }
];

export default function EnglishToDoremi() {
  return (
    <Quiz questions={questionsList} />
  );
}
