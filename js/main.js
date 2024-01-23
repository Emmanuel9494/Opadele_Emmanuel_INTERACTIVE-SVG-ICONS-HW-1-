console.log("JS file connected");

const vectorGraphic = document.querySelector('#duck-main');

function logThisId() {
    console.log(this);
    console.log('The Duck Has Quacked on', this.id);
}

vectorGraphic.addEventListener('click', logThisId);
