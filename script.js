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
window.print()