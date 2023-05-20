/*
Que:- What is Liskow Substitution Priniciple ?
Ans:- Also known as substitutability.
      You should be able to use a subclass in place of its parent class
                                or
      A subclass should be used wherever its base class can be used
      without altering the functionality in blocking way. The program shouldn't
      hang or cross or have any type of undefined behaviour just because the subclass
      define a method or property in different way than its base class 
*/

//Violation

export class QuizQuestion {
  private _question: string;
  private _answer1: string;
  private _answer2: string;
  private _answer3: string;
  private _answer4: string;
  private _conrrectAnswer: number;

  constructor(
    question: string,
    ans1: string,
    ans2: string,
    ans3: string,
    ans4: string,
    correctAns: number
  ) {
    this._question = question;
    this._answer1 = ans1;
    this._answer2 = ans2;
    this._answer3 = ans3;
    this._answer4 = ans4;
    this._conrrectAnswer = correctAns;
  }

  public getQuestion(): string {
    return this._question;
  }

  public answer1(): string {
    return this._answer1;
  }

  public answer2(): string {
    return this._answer2;
  }

  public answer3(): string {
    return this._answer3;
  }

  public answer4(): string {
    return this._answer4;
  }

  public correctAnswer(): number {
    return this._conrrectAnswer;
  }
}

function formatQuestion(quizQuestion: QuizQuestion) {
  console.log(quizQuestion.getQuestion);
  console.log(`1. ${quizQuestion.answer1}`);
  console.log(`2. ${quizQuestion.answer2}`);
  console.log(`3. ${quizQuestion.answer3}`);
  console.log(`4. ${quizQuestion.answer4}`);
}


let quizQuestion = new QuizQuestion(
  "Which framework is using typescript ?",
  "ReactJs",
  "VueJs",
  "Angular",
  "Cycle",
  3
);

formatQuestion(quizQuestion);

export class TrueFalseQuizQuestion extends QuizQuestion {
  constructor(question) {
    super(question, "True", "False", "null", "null", 1);

  }
}