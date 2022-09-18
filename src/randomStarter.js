/* Sources: https://www.literacyshed.com/the-story-starter-shed.html
https://www.journalbuddies.com/creative-writing-2/story-starter-sentences/
https://www.helpingwritersbecomeauthors.com/boring-opening-lines/
*/
function genericRandomStarter() {
    // Returns a rarndom 'generic' story starter
    const genericWords = ['Yes, ', 'Once upon a time, ', 'One day, ', 'No, ', 'It was a bright and sunny day. ',
    'It was a dark and gloomy day. ', 'The grocery store was busy today. ', 'It was a bright, frosty morning. '];
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
    'Icy wind slashed at his face and the rain danced its evil dance upon his head. ',
    'Footsteps slowly creaked on every step of the stairs. ', 
    'Death lurked in every door way with hell at one dark window. ',
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
    'The car screamed to a halt, four men wearing masks jumped out and ran into the nearest building. ', 
    'Everything stopped, people were stood like statues all around me. ',
    'I had never seen a ghost.  But like they say, there is a first time for everything. ', 
    'He opened the safe and it had gone. No one had the code, who could have opened it? ',
    'In the topmost window of the highest tower stood a small boy. ', 
    'Am I in heaven?  What happened to me? ',
    'Closer and closer it came, it was getting bigger and bigger. ',
    'He wandered aimlessly through the house seeking any form of distraction to avoid the inevitable doom. ',
    'Peeking through the window her surprise turned to horror; ',
    'I woke up with a start, something was in my room. ',
    'The horrific visage gurned at me through my bedroom window. ',
    'Keeping watch at the side of the ship, George was tiring. ',
    'The two coins in his pocket clinked together as he stumbled down the cold pavement. ',
    'The phone rang. "Hello," I said, "Hello." No one was there. ',
    'The caretaker closed the cemetery gates, who was that watching him? ', 
    'Hundreds of eyes peered at me through the darkness in the alley. ', 
    'I heard the music as I entered the room, but all that was there was a violin. ',
    'It was the day the moon fell. ', 
    'Hi, Steve. Just wanted to tell you I killed your mother-in-law. ', 
    'I couldn\'t believe a word he told me any more and why had he brought me here? ',
    'Cold and wet, tired and exhausted she made her way along the path through the forest. ', 
    'Everything stopped, everything a statue all around me. Frozen in time. ', 
    '"Help me!" Help me!" Came the call from behind the steel door. ',
    'She removed the sheet with a flourish revealing what had been hidden beneath. ',
    'My next door neighbours were all asleep in their coffins when I climbed the fence to get the ball. ',
    'It moved, why was it moving? ',
    'I hadn\'t seen the door before. It wasn\'t there last night. Cautiously, I turned the handle. ',
    'She scratched his face from the photograph. She would get her revenge. ',
    'The pavement glistened like a carpet of crushed diamonds in the early morning sunshine. ',
    'As she walked along the street the tiny dragon in her pocket stirred restlessly. ',
    'Just after he died, he sat up. ',
    'His metal mask shone in the sunlight, he prayed that this would not be his last day. ',
    'I pushed open the old creaky door and looked inside. What a sight met my eyes! ', 
    'It was spring 2014 when I first realised I could breathe under water. ',
    'Suddenly, icy fingers grabbed my arm as I inched through the darkness. ',
    'I suddenly found out that I was heir to a throne. ',
    'She opened the letter and it said she\'d won $100,000. ',
    'When I flipped on the radio that night, I couldn\'t believe the voice I heard coming through the speakers. ', 
    'I still remember the day I was born. ',
    'There was a secret meeting in the morning and she absolutely had to be there. ',
    'There was something about a music box that always made me think of home. ',
    'I opened my eyes and had no idea where I was. ',
    'He was heading back to the one place he hoped he\'d never have to see again. ',
    'Today she would find out if her entire life was a lie. ',
    'Shaking, I grabbed his hand and said my goodbyes. ',
    'A road trip was just the thing for me and my friends. ',
    'I turned on the 10:00 pm news only to see one of the biggest secrets of my life playing out before my eyes. ',
    'The roller coaster had stopped and we were left upside down. ',
    'For months I\'d been crying myself to sleep every night. ',
    'We were supposed to meet each other on the Bay Bridge at midnight, but he never showed up. ',
    'I had no idea how they got there. ',
    'I\'d been planning the perfect vacation for months, but then ',
    'There are only three of us left - the only three left alive in the world. ',
    'The little girl turned to me and said, “The future of the world is up to you now”. ',
    'At first, I thought it was only the dog making noise, but it was ',
    'It sounded like piano music and it was coming from my living room ',
    'She\'d thought about this moment, imagined it, for years, but she\'d never expected what happened. ',
    'It all started when I accidentally picked up the wrong suitcase at the airport. ',
    'The cab driver suddenly turned left instead of right and I had no idea where he was taking me. ',
    'My boss had given his orders, but I knew what he was asking was illegal. ',
    'She broke open the fortune cookie, but there was a map on the tiny slip of paper. ',
    'The waitress walked over and whispered in my ear. ',
    'He decided to spy on his wife, but what he discovered wasn\'t what he was expecting at all. ',
    'She thought her boss was going to fire her, so she decided she\'d fight back. ',
    'He was tired of living in the retirement home, so he was planning an escape. ',
    'There was a time years ago when I was happy, but those days were over. ',
    'While I could see hundreds of stars in the sky, there was no moon that night. ',
    'From the moment he walked into the casino, Lady Luck was on his side. ',
    'The twins had a secret and they knew that no one could ever find out about it. ',
    'Every time I heard the ice cream truck go by, I got scared. ',
    'I was reading on the subway when all of a sudden, we stopped in the middle of a tunnel. ',
    'I hadn\'t planned on becoming a hostage at the bank when I got up that morning. ',
    'My brother was in Afghanistan and I hadn\'t heard anything from him for over a month. ',
    'Walking down the long hallway to my boss\'s office, I had no idea what he could want from me. ',
    'The note said to go to hotel room #33 and I was hesitant to knock on the door. ',
    'Every Tuesday at 3 pm, flowers were delivered to my house. ',
    'As I flipped through the photo album, ',
    'I had to go on stage in 15 minutes and my clothes were ripped and muddy. ',
    'Time was running out and he had 11 more blocks to run. ',
    'I had the same dream every night and it was scaring me. ',
    'Every time the clock struck midnight, the entire house would go dark for 10 minutes. ',
    'When she looked at her cellphone, she was shocked to see she had 33 voicemails. ',
    'It was my first game to pitch in the majors and I could barely contain my excitement. ',
    'The music was slowing, the song was almost over, but we couldn\'t stop dancing. ',
    'She\'d been in labor for 48 hours and still no baby. '
];
    
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