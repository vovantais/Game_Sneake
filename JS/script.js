// !ПОЛУЧАЕМ ВСЕ ДИВЫ
const BLOCKS_DIV = document.querySelectorAll('.game__field div');
console.log(BLOCKS_DIV);
// ! ДЛИНА ОДНОГО РЯДА
const COUNT_ROW = Math.sqrt(BLOCKS_DIV.length);
// ! СОЗДАЕМ ЗМЕЙКУ 
let INDEX_SNEAKE = Math.round(((BLOCKS_DIV.length / COUNT_ROW) * 10) - 10);
console.log(INDEX_SNEAKE);
// ! СОЗДАЕМ ПЕРЕМЕННУЮ НА СЧЕТ 
let SCORE_COUNT = 0;

function AddClassSneake() {
   BLOCKS_DIV[INDEX_SNEAKE].classList.add('sneake');
}
AddClassSneake();

// TODO =======
// setInterval(() => {
//    console.log(INDEX_SNEAKE--);
// }, 500);

function MoveSneake(e) {
   const LEFT_BORDER_ERR = INDEX_SNEAKE % COUNT_ROW === 0;
   const RIGHT_BORDER_ERR = INDEX_SNEAKE % COUNT_ROW === COUNT_ROW - 1;
   BLOCKS_DIV[INDEX_SNEAKE].classList.remove('sneake');
   if (e.code == 'ArrowLeft') {
      INDEX_SNEAKE--;
      if (LEFT_BORDER_ERR) {
         GameOver();
      }
      console.log(INDEX_SNEAKE);

   }
   if (e.code == 'ArrowRight') {
      INDEX_SNEAKE++;
      if (RIGHT_BORDER_ERR) {
         GameOver();
      }
      console.log(INDEX_SNEAKE);
   }
   if (e.code == 'ArrowUp') {
      INDEX_SNEAKE = INDEX_SNEAKE - COUNT_ROW;
      if (INDEX_SNEAKE < COUNT_ROW) {
         GameOver();
      }
      console.log(INDEX_SNEAKE);
   }
   if (e.code == 'ArrowDown') {
      INDEX_SNEAKE = INDEX_SNEAKE + COUNT_ROW;
      if (INDEX_SNEAKE > BLOCKS_DIV.length - 1) {
         GameOver();
      }
      console.log(INDEX_SNEAKE);
   }
   BLOCKS_DIV[INDEX_SNEAKE].classList.add("sneake");
}
document.addEventListener('keydown', MoveSneake);
function GameOver() {
   alert("You lose!")
   document.removeEventListener('keydown', MoveSneake);
}