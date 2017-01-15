/**
 * Created by HarrisSchwartz on 1/14/17.
 */

handleRollResults
{
    var indivResults = [];
    var numDice = document.getElementById('slider').value;

    if (document.getElementsByName('dieType').value = 2) {
        while (indivResults.length < numDice) {
            indivResults = Math.floor(Math.random() * 3);
        }
    } else if (document.getElementById('dieType').value = 4) {
        while (indivResults.length < numDice) {
            indivResults = Math.floor(Math.random() * 5);
        }
    } else if (document.getElementById('dieType').value = 6) {
        while (indivResults.length < numDice) {
            indivResults = Math.floor(Math.random() * 7);
        }
    } else if (document.getElementById('dieType').value = 8) {
        while (indivResults.length < numDice) {
            indivResults = Math.floor(Math.random() * 9);
        }
    } else if (document.getElementById('dieType').value = 10) {
        while (indivResults.length < numDice) {
            indivResults = Math.floor(Math.random() * 11);
        }
    } else if (document.getElementById('dieType').value = 12) {
        while (indivResults.length < numDice) {
            indivResults = Math.floor(Math.random() * 13);
        }
    } else if (document.getElementById('dieType').value = 20) {
        while (indivResults.length < numDice) {
            indivResults = Math.floor(Math.random() * 21);
        }
    } else if (document.getElementById('dieType').value = 100) {
        while (indivResults.length < numDice) {
            indivResults = Math.floor(Math.random() * 101);
        }
    }
    document.getElementById('indivResults').innerText = `${indivResults}`;
}