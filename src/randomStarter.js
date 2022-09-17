/* Sources: https://www.literacyshed.com/the-story-starter-shed.html
https://www.helpingwritersbecomeauthors.com/boring-opening-lines/
*/
function genericRandomStarter() {
    // Returns a rarndom 'generic' story starter
    const genericWords = ['Yes, ', 'Once upon a time, ', 'One day, ', 'No, ', 'It was a bright and sunny day. ',
    'It was a dark and gloomy day. ', 'Ingrid had just turned thirteen. ', 'The grocery store was busy today. '];
    let max = genericWords.length - 1;
    let min = 0;

    let index = Math.floor(Math.random() * (max - min) + min);

    return genericWords[index];
}

function spicyRandomStarter() {
    // Returns a random 'spicy' story starter
    const spicyWords = ['I didn\'t mean to kill her. ', 
    'The air turned black all around me. ',
    'Icy fingers gripped my arm in the darkness. ',
    'Wandering through the graveyard it felt like something was watching me. ', 
    'The eyes in the painting follow him down the corridor. ', 
    'A shrill cry echoed in the mist. ',
    'Icy wind slashed at his face and the rain danced its evil dance upon his head.',
    'Footsteps slowly creaked on every step of the stairs. The bedroom door handle turned slowly. ', 
    'Death lurked in every door way with hell at one dark window.',
    'My hair stood on end, a shiver raced down my spine and a lump came to my throat. ', 
    'It was him. ',
    'A scream shattered the silence. ',
    'It was there and then it had gone, why would a rabbit be on my bathroom floor? ',
    'Bleary-eyed, I went downstairs for breakfast, the house was empty. ',
    'The sirens started, it was coming. ',
    'The date was 13th July, my 345th birthday. ',
    'Three of us. We were the only ones left, the only ones to make it to the island. ',
    '"What have you done?" the headmaster bellowed. ',
    'He cried for three whole days. ',
    'It was time to get up. ',
    'The car screamed to a halt, four men wearing masks jumped out and ran into the nearest building', 
    'Everything stopped, people were stood like statues all around me. ',
    'I had never seen a ghost.  But like they say, there is a first time for everything.', 
    'He opened the safe and it had gone. No one had the code, who could have opened it? ',
    'In the topmost window of the highest tower stood a small boy. ', 
    'Am I in heaven?  What happened to me? ',
    'Closer and closer it came, it was getting bigger and bigger. ',
    'He wandered aimlessly through the house seeking any form of distraction to avoid the inevitable doom. ',
    'Peeking through the window her surprise turned to horror; ',
    'I woke up with a start, something was in my room. ',
    'The horrific visage gurned at me through my bedroom window.',
    'Keeping watch at the side of the ship, George was tiring. ',
    'The two coins in his pocket clinked together as he stumbled down the cold pavement. ',
    'The phone rang. "Hello," I said, "Hello." No one was there.',
    'The caretaker closed the cemetery gates, who was that watching him?', 
    'Hundreds of eyes peered at me through the darkness in the alley. ', 
    'I heard the music as I entered the room, but all that was there was a violin.',
    'It was the day the moon fell. ', 
    'Hi, Steve. Just wanted to tell you I killed your mother-in-law. '];
    
    let max = spicyWords.length - 1;
    let min = 0;

    let index = Math.floor(Math.random() * (max - min) + min);

    return spicyWords[index];
}

function createRandomStarter(type) {
    // General function for returning a random story starter.
    // Param: type can be 'generic' or 'spicy'

    if (type === 'generic') {
        return genericRandomStarter();    
    }
    return spicyRandomStarter();  
}