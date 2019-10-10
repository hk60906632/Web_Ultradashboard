class TypeWriter {

  constructor(txtElement, words, duration) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.duration = parseInt(duration, 10);
    this.typeWords();
    this.isDeleting = false;
  }

  typeWords() {
    //index of the current word
    const current = this.wordIndex % this.words.length;
    //get full text of current word
    const fullTxt = this.words[current];

    //check if deleting
    if (this.isDeleting) {
      //remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Type Speed
    let typeSpeed = 300;

    //want the delete be faster
    if (this.isDeleteing) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      //Make pause at end
      typeSpeed = this.duration;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;

      //pause before start typing
      typeSpeed = 500;
    }

    //setTimeout() is a js function which calls a function or 
    //evaluates an expression after a specified number of millseconds
    setTimeout(() => this.typeWords(), typeSpeed);
  }
}

function init() {
  const txtElement = document.querySelector('.txt-type');
  //this grabs the list of words define int he attr data-words in the html page and turn it to json array
  var words = JSON.parse(txtElement.getAttribute('data-words'));

  const duration = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, duration);
}

init();
