'use client';

import Quiz from "../components/Quiz";
import { getStaffImage } from "../utils";

/*
a_123
b_123
c_123
d_123
e_12
f_12
g_123
*/

const questionsList = [
  {
    questionImage: getStaffImage("g_c_1"),
    solution: "ド"
  },
  {
    questionImage: getStaffImage("g_c_2"),
    solution: "ド"
  },
  {
    questionImage: getStaffImage("g_c_3"),
    solution: "ド"
  },
  {
    questionImage: getStaffImage("g_d_1"),
    solution: "レ"
  },
  {
    questionImage: getStaffImage("g_d_2"),
    solution: "レ"
  },
  {
    questionImage: getStaffImage("g_d_3"),
    solution: "レ"
  },
  {
    questionImage: getStaffImage("g_e_1"),
    solution: "ミ"
  },
  {
    questionImage: getStaffImage("g_e_2"),
    solution: "ミ"
  },
  {
    questionImage: getStaffImage("g_f_1"),
    solution: "ファ"
  },
  {
    questionImage: getStaffImage("g_f_2"),
    solution: "ファ"
  },
  {
    questionImage: getStaffImage("g_g_1"),
    solution: "ソ"
  },
  {
    questionImage: getStaffImage("g_g_2"),
    solution: "ソ"
  },
  {
    questionImage: getStaffImage("g_g_3"),
    solution: "ソ"
  },
  {
    questionImage: getStaffImage("g_a_1"),
    solution: "ラ"
  },
  {
    questionImage: getStaffImage("g_a_2"),
    solution: "ラ"
  },
  {
    questionImage: getStaffImage("g_a_3"),
    solution: "ラ"
  },
  {
    questionImage: getStaffImage("g_b_1"),
    solution: "シ"
  },
  {
    questionImage: getStaffImage("g_b_2"),
    solution: "シ"
  },
  {
    questionImage: getStaffImage("g_b_3"),
    solution: "シ"
  }
];

export default function DoremiOfStaffGClef() {
  return (
    <Quiz questions={questionsList} />
  );
}
