const fs = require('fs').promises;
var readlineSync = require('readline-sync');
// функция должна принимать на вход номер квиза, считывать правильный файл
// выдавать вопрос и варианты ответов в красивом виде

const numberQuis = readlineSync.question(
  'Viberete temu: \n1 Valuty mira\n2 Breaking Bad\n3 Big Bang Theory\n'
);
console.log('Вы выбрали ' + numberQuis + 'й квиз! Поехали!');

// const genFileInf = fs.readFile(`./quiz/${number}.txt`);
async function readFile(number) {
  const genFileInf = await fs.readFile(`./quiz/${number}.txt`, 'utf8');
  let counter = 0;
  let fileArr = genFileInf.split(`\n`); // массив
  for (let i = 0; i < fileArr.length - 1; i = i + 5) {
    console.log(fileArr[i]);
    console.log(fileArr[i + 1]);
    console.log(fileArr[i + 2]);
    console.log(fileArr[i + 3]);
    const readAnswer = readlineSync.question('Napishite cifru\n');
    if (readAnswer === fileArr[i + 4]) {
        counter += 10;
      console.log('That`s right!');
      console.log(`Очки: ${counter}`);
    } else {
      console.log('No!');
      console.log(`Очки: ${counter}`);
    }
  }
}

readFile(numberQuis);