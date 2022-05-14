# ICS 343 Quizzes Solver

## How to use 🤔?

Go to any quiz in the website, e.g., let say we want to solve quiz 18 and its URL:

```javascript
// quiz 18
const url = `https://highered.mheducation.com/sites/0073376221/student_view0/chapter18/quizzes.html`;
```

then press F12 and copy & paste the script after you change the line below with your information

```javascript
getFullMark(getQuestionObjectArray(), 'YourFullNameName', 'YourIDNumber');
```

## The script 💻

```javascript
const getFullMark = (arr, name, id) => {
  const buttons = document.querySelectorAll('input[type=radio]');
  const txtName = document.getElementById('txtName');
  const sectionId = document.getElementById('sectionid');
  txtName.value = name;
  sectionId.value = id;
  const correctAnswers = [];
  arr.forEach((question) => {
    question.answerObjectsArray.forEach((feedback) => {
      correctAnswers.push(feedback.feedBackTitle);
    });
  });
  i = 0;
  buttons.forEach((button) => {
    if (correctAnswers[i] === 'Õùääóõâ¶×øåáóä150') {
      button.checked = true;
    }
    i++;
  });
  document.querySelector('input[value="Submit Answers"]').click();
};
// fill <YourFullNameName> & <YourIDNumber>
getFullMark(getQuestionObjectArray(), 'YourFullNameName', 'YourIDNumber');
```

## POC ✅

![alt img1](https://github.com/q4q0/ICS-343-Quizzes-Solver/blob/master/assets/img1.png?raw=true)
