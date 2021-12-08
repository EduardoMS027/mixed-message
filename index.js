// phrase source
const subject = ['I am ','He is ','She is ','We are ','They are'];
const verb = ['having ', 'thinking ', 'fidding ', 'feeling ', 'becoming '];
const obj = [' fun.', ' on money.', ' the path to track.', 'good.', 'loyal to the nation.'];

// page actions
const generateButton = document.getElementById('generate');
const phraseResult = document.getElementById('phrase-result');


generateButton.addEventListener('click', () =>{
    
    phraseResult.innerText = randomPhraseGenerator();
});


const randomPhraseGenerator = () => {
    let subjectIndex = Math.floor(Math.random()*(subject.length-1));
    let verbIndex = Math.floor(Math.random()*(subject.length-1));
    let objIndex = Math.floor(Math.random()*(subject.length-1));

    return subject[subjectIndex] + verb[verbIndex] + obj[objIndex];
};

//console.log(randomPhraseGenerator());