(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrectA = 0;
    let numCorrectB = 0;
    let numCorrectC = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.answerA) {
        // add to the number of correct answers
        numCorrectA++;

      }


      else if (userAnswer === currentQuestion.answerB) {
        // add to the number of correct answers
        numCorrectB++;

        // color the answers green

      }

      else if (userAnswer === currentQuestion.answerC) {
        // add to the number of correct answers
        numCorrectC++;

        // color the answers green

      }

        // if answer is wrong or blank
        // color the answers red



    });
    var most;
    if ((numCorrectA > numCorrectB) && (numCorrectA > numCorrectC)){
      alert("You’ve reached your inner chill: You seem to be successful at stress management! You don’t sweat the small stuff but when stressful situations do happen you approach them with a calm and positive perspective. Continue to maintain your breathing, eat healthy, and get sleep! YOU GOT THIS IN THE BAG :)")
      document.location.reload()
    }
    else if ((numCorrectB > numCorrectA) && (numCorrectB > numCorrectC)){
      alert("Up and Down: You seem to experience stress during busy or hard times in your life. While stress can be a great motivator when used properly, it is a hard feeling to manage.  Learning stress management skills will help you reach that inner chill :) Just remember you got this. Go to our tips page for helpful articles. ")
      document.location.reload()
    }
    else if ((numCorrectC > numCorrectA) && (numCorrectC > numCorrectB)){
      alert("You’re Stressed but We are here to help: It seems that you are experience a lot of stress. DON’T PANIC! Everyone has a hard time with stress during their lifetime. Keep breathing, find a stress management plan that works for you (calm playlist, activity, etc), and try to maintain a healthy diet. Small things are not the end of the world and we believe in you. ")
      document.location.reload()
    }
    else if ((numCorrectC == numCorrectA) || (numCorrectC = numCorrectB)){
      alert("Up and Down: You seem to experience stress during busy or hard times in your life. While stress can be a great motivator when used properly, it is a hard feeling to manage.  Learning stress management skills will help you reach that inner chill :) Just remember you got this. Go to our tips page for helpful articles. ")
      document.location.reload()
    }



    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1. When was the last time you set aside time to relax by yourself?",
      answers: {
        a: "A couple times a week",
        b: "I don't really remember",
        c: "Very rarely"
      },
      answerA: "a",
      answerB: "b",
      answerC: "c"
    },
    {
      question: "2. You're getting ready for sleep, how are you feeling?",
      answers: {
        a: "Calm, it is almost always easy for me to fall asleep",
        b: "Depends, if I have a big day ahead it is hard to fall asleep",
        c: "I usually struggle to fall asleep because it is hard not to have worried thoughts"
      },
      answerA: "a",
      answerB: "b",
      answerC: "c"
    },
    {
      question: "3. How often do you get ill?",
      answers: {
        a: "I never get sick, I am a super-healthy person",
        b: "I rarely get sick, I consider myself healthy",
        c: "I always get bugs that go around and constantly have colds",
      },
      answerA: "a",
      answerB: "b",
      answerC: "c"
    },
    {
      question: "4. How tired do you usually feel?",
      answers: {
        a: "Not tired, usually energized",
        b: "Little tired, but nothing a nap can't fix",
        c: "I NEED VACATION..I am overtired AF"
      },
      answerA: "a",
      answerB: "b",
      answerC: "c"
    },
    {
      question: "5. How much do you worry?",
      answers: {
        a: "I rarely worry...some things are just out of my control",
        b: "I usually remain calm, unless I have something to worry about",
        c: "I worry often and consider myself an anxious person"
      },
      answerA: "a",
      answerB: "b",
      answerC: "c"
    },
    {
      question: "6. Do you have difficulty concentrating on a task?",
      answers: {
        a: "No, I am very focused",
        b: "Sometimes, but mostly have good concentration",
        c: "Very often; I am easily distracted"
      },
      answerA: "a",
      answerB: "b",
      answerC: "c"
    },
    {
      question: "7. Do you have difficulty breathing (ex: excessively rapid breathes)?",
      answers: {
        a: "No, never or only a few times",
        b: "Sometimes, but only during very stressful times",
        c: "Often or to a considerable degree"
      },
      answerA: "a",
      answerB: "b",
      answerC: "c"
    },
    {
      question: "8. I find myself getting upset by quite trivial things.",
      answers: {
        a: "No, never or rarely",
        b: "Sometimes, but not usually",
        c: "Often or to a considerable degree"
    },
      answerA: "a",
      answerB: "b",
      answerC: "c"
    }


  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
