const fs = require("fs").promises;
var readlineSync = require("readline-sync");
const player = require("play-sound")((opts = {}));
// функция должна принимать на вход номер квиза, считывать правильный файл
// выдавать вопрос и варианты ответов в красивом виде

const numberQuis = readlineSync.question(
  "\n\x1b[1m\x1b[35mВыберите тему:\n\n     \x1b[36m1. Валюты мира\n     \x1b[36m2. Во все тяжкие\n     \x1b[36m3. Теория большого взрыва\n     \x1b[36m4. Доктор Хаус\n     \x1b[36m5. Клан Сопрано\n     \x1b[36m6. Уровень сложно, интересные факты\n     \x1b[36m7. Факты о Санкт-Петербурге\x1b[0m\n"
);
console.log(
  "\n\x1b[1m\x1b[35mВы выбрали " + numberQuis + "-й квиз! Поехали!\n\x1b[0m"
);

// const genFileInf = fs.readFile(`./quiz/${number}.txt`);
async function readFile(number) {
  const genFileInf = await fs.readFile(`./quiz/${number}.txt`, "utf8");
  let counter = 0;
  let fileArr = genFileInf.split(`\n`); // массив
  for (let i = 0; i < fileArr.length - 1; i = i + 5) {
    console.log(`\x1b[1m\x1b[37m${fileArr[i]}\n\x1b[0m`);
    console.log(`     \x1b[36m\x1b[1m${fileArr[i + 1]}\x1b[0m`);
    console.log(`     \x1b[36m\x1b[1m${fileArr[i + 2]}\x1b[0m`);
    console.log(`     \x1b[36m\x1b[1m${fileArr[i + 3]}\x1b[0m\n`);
    const readAnswer = readlineSync.question("Выберите ответ:\n");
    if (readAnswer === fileArr[i + 4]) {
      counter += 10;
      console.log("\n\x1b[32m\x1b[1mTHAT'S RIGHT!");
      console.log(`\x1b[1m\x1b[35mОчки: ${counter}\n`);
      player.play("./right.mp3", function (err) {
        if (err) throw err;
      });
    } else {
      console.log("\n\x1b[1m\x1b[31mNOPE!");
      console.log(`\x1b[1m\x1b[35mОчки: ${counter}\n`);
      player.play("./no.mp3", function (err) {
        if (err) throw err;
      });
    }
  }
  player.play("./victory.mp3", function (err) {
    if (err) throw err;
  });
}

readFile(numberQuis);
// async function rR(number) {
//   const fL = await fs.readdir("./quiz");
//   // console.log(fL);
//   if (number > 0 && number <= fL.length) {
//     readFile(numberQuis);
//   } else {
//     console.log("Нет такой темы\n");
//   }
// }
// rR();
