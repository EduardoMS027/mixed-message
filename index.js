// phrase source
const subject = ['I am ','He is ','She is ','We are ','They are'];
const verb = ['having ', 'thinking ', 'fidding ', 'feeling ', 'becoming '];
const obj = [' fun.', ' on money.', ' the path to track.', 'good.', 'loyal to the nation.'];

const history = new Set();

// page actions
const generateButton = document.getElementById('generate');
const phraseResult = document.getElementById('phrase-result');
let historyPhrase = document.getElementById('history-phrase');

// view
generateButton.addEventListener('click', () =>{
    if(phraseResult.innerText !== '')
    {
        history.add(phraseResult.innerText);
        console.log(history);
        historyPhrase.innerHTML = '';
        generateHistoryToScreen(history);
        phraseResult.innerText = '';
        
    }
    phraseResult.innerText = randomPhraseGenerator();
});

const generateHistoryToScreen = (historyToShow) => {
    for(const item of historyToShow)
    {
        let li = document.createElement('li');
        li.innerText = item;
        historyPhrase.appendChild(li);
    }        
};



// controller
const randomPhraseGenerator = () => {
    let subjectIndex = Math.floor(Math.random()*(subject.length-1));
    let verbIndex = Math.floor(Math.random()*(subject.length-1));
    let objIndex = Math.floor(Math.random()*(subject.length-1));

    return subject[subjectIndex] + verb[verbIndex] + obj[objIndex];
};



//console.log(randomPhraseGenerator());