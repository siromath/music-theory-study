'use client';

import Quiz from "../components/Quiz";
import { getStaffImage } from "../utils";

/*
a_12
b_123
c_123
d_123
e_123
f_123
g_12
*/

const questionsList = [
  {
    questionImage: getStaffImage("f_c_1"),
    solution: "ド"
  },
  {
    questionImage: getStaffImage("f_c_2"),
    solution: "ド"
  },
  {
    questionImage: getStaffImage("f_c_3"),
    solution: "ド"
  },
  {
    questionImage: getStaffImage("f_d_1"),
    solution: "レ"
  },
  {
    questionImage: getStaffImage("f_d_2"),
    solution: "レ"
  },
  {
    questionImage: getStaffImage("f_d_3"),
    solution: "レ"
  },
  {
    questionImage: getStaffImage("f_e_1"),
    solution: "ミ"
  },
  {
    questionImage: getStaffImage("f_e_2"),
    solution: "ミ"
  },
  {
    questionImage: getStaffImage("f_e_3"),
    solution: "ミ"
  },
  {
    questionImage: getStaffImage("f_f_1"),
    solution: "ファ"
  },
  {
    questionImage: getStaffImage("f_f_2"),
    solution: "ファ"
  },
  {
    questionImage: getStaffImage("f_f_3"),
    solution: "ファ"
  },
  {
    questionImage: getStaffImage("f_g_1"),
    solution: "ソ"
  },
  {
    questionImage: getStaffImage("f_g_2"),
    solution: "ソ"
  },
  {
    questionImage: getStaffImage("f_a_1"),
    solution: "ラ"
  },
  {
    questionImage: getStaffImage("f_a_2"),
    solution: "ラ"
  },
  {
    questionImage: getStaffImage("f_b_1"),
    solution: "シ"
  },
  {
    questionImage: getStaffImage("f_b_2"),
    solution: "シ"
  },
  {
    questionImage: getStaffImage("f_b_3"),
    solution: "シ"
  }
];

export default function DoremiOfStaffFClef() {
  return (
    <Quiz questions={questionsList} />
  );
}
