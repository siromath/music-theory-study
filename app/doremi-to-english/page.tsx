'use client';

import Quiz from "../components/Quiz";

const questionsList = [
  {
    question: "ド",
    solution: "C"
  },
  {
    question: "レ",
    solution: "D"
  },
  {
    question: "ミ",
    solution: "E"
  },
  {
    question: "ファ",
    solution: "F"
  },
  {
    question: "ソ",
    solution: "G"
  },
  {
    question: "ラ",
    solution: "A"
  },
  {
    question: "シ",
    solution: "B"
  }
];

export default function DoremiToEnglish() {
  return (
    <Quiz questions={questionsList} />
  );
}
