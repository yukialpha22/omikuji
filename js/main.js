'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '中吉', '凶'];
    // const n = Math.floor(Math.random() * 3);
    // btn.textContent = n;
    // btn.textContent = results[n];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = 'いいね';
    } else if (n < 0.2) {
      btn.textContent = 'まあまあ';
    } else {
      btn.textContent = 'だめ';
    }
    // switch (n) {
    //   case 0:
    //   btn.textContent = '大吉';
    //   break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    // }
  });
}