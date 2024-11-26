// var addBinary = function (a, b) {
//   const map = {
//     0: 1,
//     1: 2,
//     2: 4,
//     3: 8,
//     4: 16,
//     5: 32,
//     6: 64,
//     7: 128,
//     8: 256,
//   };
//   let number1 = 0,
//     number2 = 0,
//     addition = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == 1) {
//       number1 += map[i];
//     }
//   }
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] == 1) {
//       number2 += map[i];
//     }
//   }

//   addition = number1 + number2;
//   return addition;
// };
// console.log(addBinary("11", "1"));

// class Person {
//   talk() {
//     return "Talking";
//   }
// }

// const me = new Person();
// console.dir(me); // This will still log Person {}
// console.dir(Object.getPrototypeOf(me)); // This will log the prototype

// function CreateEl(tag, text, color) {
//   this.el = document.createElement(tag);
//   this.el.innerHTML = text;
//   this.el.style.color = color;
//   document.body.append(this.el);
//   this.el.addEventListener("click", () => {
//     console.log(this.el);
//   });
// }

// function Person(n) {
//   this.name = n;
//   this.talk = function () {
//     return `${this.name} is talking`;
//   };

//   setTimeout(function () {
//     console.log(0, this);
//   }, 500);
//   setTimeout(
//     function () {
//       console.log(1, this);
//     }.bind(this),
//     1000
//   );
//   setTimeout(() => {
//     console.log(2, this);
//   }, 1500);
// }
// const me = new Person("vlad");

function func1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("good");
    }, 1000);
  });
}

function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("404");
    }, 1000);
  });
}

function onSuccess(data) {
  console.log("onSuccess", data);
}
function onError(data) {
  console.log("onError", data);
}

func1().then(func2).then(onSuccess).catch(onError);
