import axios from 'axios';


export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

// enum
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  // const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;


  const data = await (await fetch(endpoint)).json();
  console.log()
  console.log(data);
}


// export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
//   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

//   try {
//     const response = await axios.get(endpoint);
//     const data = response.data;
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching quiz questions:', error);
//     throw error;
//   }
// };



