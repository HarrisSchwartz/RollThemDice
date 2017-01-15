"use strict";

class main {
     constructor() {
          main.prepApp();
          main.handleRoll();
          main.handleRollResults();
          main.handleRedo();
          main.handleNewRoll();
     }

     static prepApp() {
          document.getElementById('rollgif').style.display = 'none';
          document.getElementById('rollgif2').style.display = 'none';
          document.getElementById('rollgif3').style.display = 'none';
          document.getElementById('rollgif4').style.display = 'none';
          document.getElementById('rollgif5').style.display = 'none';
          document.getElementById('results').style.display = 'none';
          document.getElementById('redo').style.display = 'none';
          document.getElementById('newRoll').style.display = 'none';
          document.getElementById('bottom').style.display = 'none';
          document.getElementById('numdice').innerText = document.getElementById('slider').value;
          document.getElementById('slider').addEventListener('click'|| 'slide', () => {
               document.getElementById('numdice').innerText = document.getElementById('slider').value;
          });
     }

     static handleRoll() {
          document.getElementById('roll').addEventListener('click', () => {
               var random = Math.floor(Math.random() * 5);
               if (random == 1) {
                    document.getElementById('rollgif').style.display = 'block';
               } else if (random == 2) {
                    document.getElementById('rollgif2').style.display = 'block';
               } else if (random == 3) {
                    document.getElementById('rollgif3').style.display = 'block';
               } else if (random == 4) {
                    document.getElementById('rollgif4').style.display = 'block';
               } else {
                    document.getElementById('rollgif5').style.display = 'block';
               }
          });
          document.getElementById('roll').addEventListener('click', () => {
               document.getElementById('bottom').style.display = 'block';
               document.getElementById('top').style.display = 'none';
               document.getElementById('results').style.display = 'block';
               document.getElementById('redo').style.display = 'block';
               document.getElementById('newRoll').style.display = 'block';
          });
     }

     static handleRollResults() {
          document.getElementById('roll').addEventListener('click', () => {
          var indivResults = [];
          var numDice = document.getElementById('slider').value;

               if (document.getElementById('d4').checked) {
               while (indivResults.length < numDice) {
                    indivResults[indivResults.length] = Math.floor(1 + Math.random() * 4);
               }
          } else if (document.getElementById('d6').checked) {
               while (indivResults.length < numDice) {
                    indivResults[indivResults.length] = Math.floor(1 + Math.random() * 6);
               }
          } else if (document.getElementById('d8').checked) {
               while (indivResults.length < numDice) {
                    indivResults[indivResults.length] = Math.floor(1 + Math.random() * 8);
               }
          } else if (document.getElementById('d10').checked) {
               while (indivResults.length < numDice) {
                    indivResults[indivResults.length] = Math.floor(1 + Math.random() * 10);
               }
          } else if (document.getElementById('d12').checked) {
               while (indivResults.length < numDice) {
                    indivResults[indivResults.length] = Math.floor(1 + Math.random() * 12);
               }
          } else if (document.getElementById('d20').checked) {
               while (indivResults.length < numDice) {
                    indivResults[indivResults.length] = Math.floor(1 + Math.random() * 20);
               }
          } else if (document.getElementById('d100').checked) {
               while (indivResults.length < numDice) {
                    indivResults[indivResults.length] = Math.floor(1 + Math.random() * 100);
               }
          }
          document.getElementById('indivResults').innerText = (indivResults.toString(indivResults).replace(/,/g, ', '));
               document.getElementById('sumResults').innerText = (indivResults.reduce(function (a,b) {
                    return a + b;
               }, 0));
     });
}

     static handleRedo() {
          document.getElementById('redo').addEventListener('click', () => {
               var random = Math.floor(Math.random() * 5);
               if (random == 1) {
                    document.getElementById('rollgif').style.display = 'block';
                    document.getElementById('rollgif2').style.display = 'none';
                    document.getElementById('rollgif3').style.display = 'none';
                    document.getElementById('rollgif4').style.display = 'none';
                    document.getElementById('rollgif5').style.display = 'none';
               } else if (random == 2) {
                    document.getElementById('rollgif2').style.display = 'block';
                    document.getElementById('rollgif').style.display = 'none';
                    document.getElementById('rollgif3').style.display = 'none';
                    document.getElementById('rollgif4').style.display = 'none';
                    document.getElementById('rollgif5').style.display = 'none';
               } else if (random == 3) {
                    document.getElementById('rollgif3').style.display = 'block';
                    document.getElementById('rollgif').style.display = 'none';
                    document.getElementById('rollgif2').style.display = 'none';
                    document.getElementById('rollgif4').style.display = 'none';
                    document.getElementById('rollgif5').style.display = 'none';
               } else if (random == 4) {
                    document.getElementById('rollgif4').style.display = 'block';
                    document.getElementById('rollgif').style.display = 'none';
                    document.getElementById('rollgif2').style.display = 'none';
                    document.getElementById('rollgif3').style.display = 'none';
                    document.getElementById('rollgif5').style.display = 'none';
               } else {
                    document.getElementById('rollgif5').style.display = 'block';
                    document.getElementById('rollgif').style.display = 'none';
                    document.getElementById('rollgif2').style.display = 'none';
                    document.getElementById('rollgif3').style.display = 'none';
                    document.getElementById('rollgif4').style.display = 'none';
               }
          });
          document.getElementById('redo').addEventListener('click', () => {
               var indivResults = [];
               var numDice = document.getElementById('slider').value;

               if (document.getElementById('d4').checked) {
                    while (indivResults.length < numDice) {
                         indivResults[indivResults.length] = Math.floor(1 + Math.random() * 4);
                    }
               } else if (document.getElementById('d6').checked) {
                    while (indivResults.length < numDice) {
                         indivResults[indivResults.length] = Math.floor(1 + Math.random() * 6);
                    }
               } else if (document.getElementById('d8').checked) {
                    while (indivResults.length < numDice) {
                         indivResults[indivResults.length] = Math.floor(1 + Math.random() * 8);
                    }
               } else if (document.getElementById('d10').checked) {
                    while (indivResults.length < numDice) {
                         indivResults[indivResults.length] = Math.floor(1 + Math.random() * 10);
                    }
               } else if (document.getElementById('d12').checked) {
                    while (indivResults.length < numDice) {
                         indivResults[indivResults.length] = Math.floor(1 + Math.random() * 12);
                    }
               } else if (document.getElementById('d20').checked) {
                    while (indivResults.length < numDice) {
                         indivResults[indivResults.length] = Math.floor(1 + Math.random() * 20);
                    }
               } else if (document.getElementById('d100').checked) {
                    while (indivResults.length < numDice) {
                         indivResults[indivResults.length] = Math.floor(1 + Math.random() * 100);
                    }
               }
               document.getElementById('indivResults').innerText = (indivResults.toString(indivResults).replace(/,/g, ', '));
               document.getElementById('sumResults').innerText = (indivResults.reduce(function (a,b) {
                    return a + b;
               }, 0));
          });
     }

     static handleNewRoll() {
          document.getElementById('newRoll').addEventListener('click', () => {
               window.location.reload();
          });
     }
}

window.addEventListener('load', () => {
     new main();
});