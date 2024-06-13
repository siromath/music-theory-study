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
    solution: "C"
  },
  {
    questionImage: getStaffImage("g_c_2"),
    solution: "C"
  },
  {
    questionImage: getStaffImage("g_c_3"),
    solution: "C"
  },
  {
    questionImage: getStaffImage("g_d_1"),
    solution: "D"
  },
  {
    questionImage: getStaffImage("g_d_2"),
    solution: "D"
  },
  {
    questionImage: getStaffImage("g_d_3"),
    solution: "D"
  },
  {
    questionImage: getStaffImage("g_e_1"),
    solution: "E"
  },
  {
    questionImage: getStaffImage("g_e_2"),
    solution: "E"
  },
  {
    questionImage: getStaffImage("g_f_1"),
    solution: "F"
  },
  {
    questionImage: getStaffImage("g_f_2"),
    solution: "F"
  },
  {
    questionImage: getStaffImage("g_g_1"),
    solution: "G"
  },
  {
    questionImage: getStaffImage("g_g_2"),
    solution: "G"
  },
  {
    questionImage: getStaffImage("g_g_3"),
    solution: "G"
  },
  {
    questionImage: getStaffImage("g_a_1"),
    solution: "A"
  },
  {
    questionImage: getStaffImage("g_a_2"),
    solution: "A"
  },
  {
    questionImage: getStaffImage("g_a_3"),
    solution: "A"
  },
  {
    questionImage: getStaffImage("g_b_1"),
    solution: "B"
  },
  {
    questionImage: getStaffImage("g_b_2"),
    solution: "B"
  },
  {
    questionImage: getStaffImage("g_b_3"),
    solution: "B"
  }
];

export default function EnglishOfStaffGClef() {
  return (
    <Quiz questions={questionsList} />
  );
}
