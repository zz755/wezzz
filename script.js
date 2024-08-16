let questions = [
  "在干嘛捏舟舟",
  "今天有没有不开心",
  "从前有只麋鹿在森林里玩，一不小心它迷路了，于是他就给他好朋友长颈鹿打电话说:“喂，xxxx”",
  "最最最最最最最最（七个最）可爱的女孩是谁",
  "最最最最可爱的女孩每天都开心好不好"
];

let answers = [
  "",
  "",
  "我迷路啦",
  "舟舟",
  "好"
];

let responses = [
  "好叭",
  "信你咯，不开心记得告诉小狼哦，毕竟会他会无脑无条件坚定支持舟舟。那来猜个问题",
  "猜对咯哈哈哈哈哈哈(我麋鹿啦)",
  "是吧~这都大实话，不准反驳嗷",
  "给你看个好康的(找小狼要叭)"
];

let currentQuestionNumber = 0;

function showQuestion() {
  document.getElementById('question').innerHTML = questions[currentQuestionNumber];
}

function submitAnswer() {
  let userAnswer = document.getElementById('answer').value;
  if (currentQuestionNumber === 0) {  // 第一个问题
    currentQuestionNumber++;
    alert(responses[0]);
    showQuestion();
  } else if (currentQuestionNumber === 1) {  // 第二个问题
    currentQuestionNumber++;
    alert(responses[1]);
    showQuestion();
  } else if (currentQuestionNumber === 2) {  // 第三个问题
    if (userAnswer.toLowerCase() === answers[currentQuestionNumber]) {
      currentQuestionNumber++;
      alert(responses[2]);
      showQuestion();
    } else {
      alert("笨蛋，再想想捏");
    }
  } else if (currentQuestionNumber === 3) {  // 第四个问题
    if (userAnswer.toLowerCase() === answers[currentQuestionNumber]) {
      currentQuestionNumber++;
      alert(responses[3]);
      showQuestion();
    } else {
      alert("笨蛋，再想想捏");
    }
  } else if (currentQuestionNumber === 4) {  // 第五个问题
    if (userAnswer.toLowerCase() === answers[currentQuestionNumber]) {
      currentQuestionNumber++;
      alert(responses[4]);
      alert("希望舟舟不被家里的的问题所困扰，不被别人所说的话而定义，一直能做自己想做的事情。然后可以永远开心，舟舟包是最棒的耶");
      alert("结束咯");
    } else {
      alert("笨蛋，再想想捏");
    }
  }
  document.getElementById('answer').value = '';
  showQuestion();
}

document.getElementById('submit').addEventListener('click', submitAnswer);

showQuestion();