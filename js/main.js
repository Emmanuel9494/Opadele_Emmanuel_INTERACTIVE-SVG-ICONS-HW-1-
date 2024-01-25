//H1 tag js
const Heading = document.querySelector('h1');

function logHeadTagId() {
    console.log(Heading);
    console.log('You just hoverd over an interactive SVG icon, i lied its a H1', Heading.id);
}

Heading.addEventListener('mouseover', logHeadTagId);

//Duck svg js
console.log("JS file connected");

const vectorGraphic = document.querySelector('#duck-main');

function logThisId() {
    console.log(this);
    console.log('The Duck Has Quacked on', this.id);
}

vectorGraphic.addEventListener('click', logThisId);



//clock svg js


const ClockMotion = document.querySelector('#clock');

function logClockId() {
    console.log(clock);
    console.log('When you need to check time, pull down this and you have a', clock.id);
}

ClockMotion.addEventListener('click', logClockId);


//lamp-dance svg js
const Dance = document.querySelector('#lamp-dance');

function logLampLightId() {
    console.log(Dance);
    console.log('Ther is a man, There is a pole, it is a ', Dance.id);
}

Dance.addEventListener('click', logLampLightId);

//pac-man svg js
const PacMan = document.querySelector('#pac-man');

function logBigPacId() {
    console.log(PacMan);
    console.log('Without the sound, it is still', PacMan.id);
}

PacMan.addEventListener('mouseover', logBigPacId);

//world-car svg js
const Travel = document.querySelector('#world-car');

function logWorldCarId() {
    console.log(Travel);
    console.log('Pack your bags, say your byes and lets bounce in this', Travel.id);
}

Travel.addEventListener('mouseout', logWorldCarId);