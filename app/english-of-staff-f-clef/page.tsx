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
    solution: "C"
  },
  {
    questionImage: getStaffImage("f_c_2"),
    solution: "C"
  },
  {
    questionImage: getStaffImage("f_c_3"),
    solution: "C"
  },
  {
    questionImage: getStaffImage("f_d_1"),
    solution: "D"
  },
  {
    questionImage: getStaffImage("f_d_2"),
    solution: "D"
  },
  {
    questionImage: getStaffImage("f_d_3"),
    solution: "D"
  },
  {
    questionImage: getStaffImage("f_e_1"),
    solution: "E"
  },
  {
    questionImage: getStaffImage("f_e_2"),
    solution: "E"
  },
  {
    questionImage: getStaffImage("f_e_3"),
    solution: "E"
  },
  {
    questionImage: getStaffImage("f_f_1"),
    solution: "F"
  },
  {
    questionImage: getStaffImage("f_f_2"),
    solution: "F"
  },
  {
    questionImage: getStaffImage("f_f_3"),
    solution: "F"
  },
  {
    questionImage: getStaffImage("f_g_1"),
    solution: "G"
  },
  {
    questionImage: getStaffImage("f_g_2"),
    solution: "G"
  },
  {
    questionImage: getStaffImage("f_a_1"),
    solution: "A"
  },
  {
    questionImage: getStaffImage("f_a_2"),
    solution: "A"
  },
  {
    questionImage: getStaffImage("f_b_1"),
    solution: "B"
  },
  {
    questionImage: getStaffImage("f_b_2"),
    solution: "B"
  },
  {
    questionImage: getStaffImage("f_b_3"),
    solution: "B"
  }
];

export default function EnglishOfStaffFClef() {
  return (
    <Quiz questions={questionsList} />
  );
}
