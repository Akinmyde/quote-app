document.addEventListener('DOMContentLoaded', function () {
    let arrQuote = [];
    let quote;

    //  adding the quote to the arrQuote
    let addQuote = () => {
        quote = document.getElementById('quote').value;
        if (quote !== "") {
            arrQuote.push(quote);
            console.log(arrQuote);
        }
        else {
            alert('enter a quote');
        }
        clearTextBox(quote);
    }
    
    let clearTextBox = (input) => {
        input = document.getElementById('quote');
        return input.value = "";
    }

    //generate a random value from an array
    let randomValueFromArray = (array) => {
        return array[Math.floor(Math.random()*array.length)];
    }

    // generate a random number pk
    function random(number) {
        return Math.floor(Math.random()*(number+1));
    }

    //generate a background color
    function bgChange() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        return document.getElementById('myquote').style.backgroundColor = rndCol;
    }

    // change the background color and display a generated quote
    let viewQuotes = () => {
        let generatedQuote = document.getElementById('myquote');
        let randomQuote = randomValueFromArray(arrQuote);
        console.log((randomQuote));
        generatedQuote.innerHTML = "" + randomQuote;
        bgChange();
    }



    let btnAdd = document.getElementById('Add-Quote');
    btnAdd.addEventListener('click', addQuote);

    let btnView = document.getElementById('View-Quote');
    btnView.addEventListener('click', viewQuotes);

})





