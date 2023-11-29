//ADD EVENT LISTENER
document
  .getElementById("AnswerBtn")
  .addEventListener("click", AnswerBtnClicked);

function AnswerBtnClicked() {
  //INITIATE SCORE COUNTER
  let i = 0;

  let out = document.getElementById("output");
  let feedBack = document.getElementById("feedBack");
  let input1 = document.getElementById("input1");
  let input2 = document.getElementById("input2");
  let input3 = document.getElementById("input3");
  let input4 = document.getElementById("input4");

  //GET ANSWER FROM INPUT
  let answer1 = document.getElementById("search-in1").value.toLowerCase();
  let answer2 = document.getElementById("search-in2").value.toLowerCase();
  let answer3 = document.getElementById("search-in3").value.toLowerCase();
  let answer4 = document.getElementById("search-in4").value.toLowerCase();

  //CHECK ANSWERS AND UPDATE SCORE
  if (answer1 === "ana") {
    i++;
    input1.innerHTML = "correct";
    input1.style.color = "green";
  } else {
    input1.innerHTML = "incorrect";
    input1.style.color = "red";
  }
  if (answer2 === "saturday") {
    i++;
    input2.innerHTML = "correct";
    input2.style.color = "green";
  } else {
    input2.innerHTML = "incorrect";
    input2.style.color = "red";
  }
  if (answer3 === "yes") {
    i++;
    input3.innerHTML = "correct";
    input3.style.color = "green";
  } else {
    input3.innerHTML = "incorrect";
    input3.style.color = "red";
  }
  if (answer4 === "foxy" || answer4 === "chica") {
    i++;
    input4.innerHTML = "correct";
    input4.style.color = "green";
  } else {
    input4.innerHTML = "incorrect";
    input4.style.color = "red";
  }

  //CREATE SCORE COUNTER
  let outof4 = i;
  let percentage = (outof4 * 100) / 4;
  output.innerHTML = `Your Score: ${outof4}/4 or ${percentage}%`;

  // GIVE FEEDBACK BASED ON SCORE
  if (i === 0) {
    feedBack.innerHTML = "Try again";
  } else if (i === 1) {
    feedBack.innerHTML = "Decent effort";
  } else if (i === 2) {
    feedBack.innerHTML = "Good effort";
  } else if (i === 3) {
    feedBack.innerHTML = "Nice Job!";
  } else if (i === 4) {
    feedBack.innerHTML = "You are an expert!";
  }
}
