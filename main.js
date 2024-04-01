function getRandomComponent(arr) {
  let arrayLength = arr.length;
  let randomIndex = Math.floor(Math.random() * arrayLength);
  return arr[randomIndex];
}

const phraseParts = {
  mentalHealth: [
    'You will start to suddenly feel like',
    'Do not reject seeing yourself with a',
    'The Universe is trying to get you involved with a',
  ],
  astrology: [
    'the year of the Dragon that has luck and money in store for you!',
    'Mars and Venus try to center your universe.',
    'your Aura and energy.',
  ],
  uplifting: [
    'You can achieve anything you put your mind to',
    'Trying and achieving are two points of the same path',
    'When the world gives you avocados, go make guacamole!',
    'Your biggest limitation is your own fear',
  ],
  funny: [
    'bank of clown fishes',
    'piglet dancing the marseillese on rollerskates',
    'monkey in a dress drinking a virgin mojito',
    'elephant balancing his weight on the trafalgar square place',
  ],
};

let generalExp = getRandomComponent(phraseParts.mentalHealth);
let randomTypeInd = Math.floor(Math.random() * 3 + 1);
let type = Object.keys(phraseParts)[randomTypeInd];

switch (type) {
  case 'astrology':
    let astrologyExp = getRandomComponent(phraseParts.astrology);
    console.log(generalExp + ' ' + astrologyExp);
    break;
  case 'uplifting':
    let upliftingExp = getRandomComponent(phraseParts.uplifting);
    console.log(generalExp + ' ' + upliftingExp);
    break;
  case 'funny':
    let funnyExp = getRandomComponent(phraseParts.funny);
    console.log(generalExp + ' ' + funnyExp);
    break;
}
