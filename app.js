const button = document.getElementById('button');
const paragraph = document.getElementById('story');
const input = document.getElementById('input');
const noun1text = document.getElementById('noun1');
const noun2text = document.getElementById('noun2');
const noun3text = document.getElementById('noun3');
const adverb1text = document.getElementById('adverb1');
const verb1text = document.getElementById('verb1');
const verb2text = document.getElementById('verb2');
const adjective1text = document.getElementById('adjective1');
const adjective2text = document.getElementById('adjective2');

const noun1 = document.getElementById('noun-1');
const noun2 = document.getElementById('noun-2');
const noun3 = document.getElementById('noun-3');
const adverb1 = document.getElementById('adverb-1');
const verb1 = document.getElementById('verb-1');
const verb2 = document.getElementById('verb-2');
const adjective1 = document.getElementById('adjective-1');
const adjective2 = document.getElementById('adjective-2');

button.addEventListener('click', () => {  
input.classList.add('hidden');
paragraph.classList.remove('hidden');
});

