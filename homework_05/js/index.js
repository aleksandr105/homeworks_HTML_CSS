// function createLoger() {
//   let massages = [];

//   function loger(message) {
//     if (typeof message !== 'string') {
//       console.log('Не валидный параметр аргумент');
//       return;
//     }

//     if (massages.length < 3) {
//       massages.push(message);
//       return;
//     }

//     massages.splice(0, 1);
//     massages.push(message);
//   }

//   loger.getLogs = function () {
//     console.log(massages);
//   };

//   return loger;
// }

// const loger = createLoger();
// loger('log 1');
// loger.getLogs();
// loger('log 2');
// loger.getLogs();
// loger('log 3');
// loger.getLogs();
// loger('log 4');
// loger.getLogs();
// loger(4);
// loger('log 5');
// loger.getLogs();

// function cacheFunction(fn) {
//   let prevX;
//   let data;

//   return function (x) {
//     if (prevX === x) {
//       console.log('без вычислений, взято из кэша', data);
//       return;
//     }
//     prevX = x;
//     data = fn(x);
//   };
// }

// function slowFunction(x) {
//   const data = x * 2;
//   console.log('Выполняю сложные вычисления...', data);
//   return data;
// }

// const cachedSlowFunction = cacheFunction(slowFunction);

// cachedSlowFunction(5); // "Выполняю сложные вычисления..." -> 10
// cachedSlowFunction(5); // 10 (без вычислений, взято из кэша)
// cachedSlowFunction(10); // "Выполняю сложные вычисления..." -> 20
// cachedSlowFunction(10); // 20 (из кэша)
