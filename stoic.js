// console.log("hujhkklj")

// var quotes = [
//   'huhi',
//   'huhhjkli',
//   'huhfhgzjhukuzii',
//   'huhgzut6r5i',
//   'huhigzuu7',
// ]

// function newQuote() {
//   var randomNumber = Math.floor(Math.random() * (quotes.length));
//   document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
// }

$(document).ready(function(){
  var randomNum, randomQuote, author;
  var randomNum2, randomNeg;
  getQuote();
  getNegativeVisualisation()
  getDiscomfort()
  function getQuote(){
    var quotes = [
      {
        quote: "Imagine smiling after a slap in the face. Then think of doing it twenty-four hours a day.",
        author: "Markus Zusak"
      },
      {
        quote: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
        author: "Marcus Aurelius"
      },
      {
        quote: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
        author: "Marcus Aurelius"
      },
      {
        quote: "It is the power of the mind to be unconquerable.",
        author: "Seneca"
      },
      {
        quote: "A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.",
        author: "Nassim Nicholas Taleb"
      },
      {
        quote: "Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them.",
        author: "Seneca"
      },
      {
        quote: "It is not the man who has too little that is poor, but the one who hankers after more.",
        author: "Seneca"
      },
      {
        quote: "Nothing, to my way of thinking, is a better proof of a well ordered mind than a man's ability to stop just where he is and pass some time in his own company.",
        author: "Seneca"
      },
      {
        quote: "Love sometimes injures. Friendship always benefits, After friendship is formed you must trust, but before that you must judge.",
        author: "Seneca"
      },
      {
        quote: "Remember that all we have is \"on loan\" from Fortune, which can reclaim it without our permission. Thus, we should love all our dear ones, but always with the thought that we have no promise that we may keep them forever - nay, no promise even that we may keep them for long.",
        author: "Seneca"
      },
      {
        quote: "It is more necessary for the soul to be cured than the body; for it is better to die than to live badly.",
        author: "Seneca"
      },
      {
        quote: "A gem cannot be polished without friction, nor a man perfected without trials.",
        author: "Seneca"
      },
      {
        quote: "Whatever fortune has raised to a height, she has raised only to cast it down.",
        author: "Seneca"
      },
      {
        quote: "Nothing is burdensome if taken lightly, and nothing need arouse one's irritation so long as one doesn't make it bigger than it is by getting irritated.",
        author: "Epictetus"
      },
      {
        quote: "Even the least of our activities ought to have some end in view.",
        author: "Marcus Aurelius"
      },
      {
        quote: "Everything we hear is an opinion, not a fact.",
        author: "Marcus Aurelius"
      },
      {
        quote: "You have power over your mind.",
        author: "Marcus Aurelius"
      },
      {
        quote: "The soul becomes dyed with the colour of its thoughts.",
        author: "Marcus Aurelius"
      },
      {
        quote: "Reject your sense of injury and the injury itself disappear.",
        author: "Marcus Aurelius"
      },
      {
        quote: "People are not disturbed by things, but by the view they take of them.",
        author: "Epictetus"
      },
      {
        quote: "If evil be spoken of you and it be true, correct yourself, if it be a lie, laugh at it.",
        author: "Epictetus"
      },
      {quote:"Remember, it is not enough to be hit or insulted to be harmed, you must believe that you are being harmed. If someone succeeds in provoking you, realize that your mind is complicit in the provocation.",
      author: "Epictetus"},
      {quote:"Soon, you will have forgotten everything. Soon, everybody will have forgotten you.", author:"Marcus Aurelius"},
    ];
    
    randomNum = Math.floor((Math.random()*quotes.length));
    quoteSelect = quotes[randomNum];
    randomQuote = quoteSelect.quote;
    author = quoteSelect.author;
    
    $('#quoteType').text(randomQuote);
    $('#quoteSrc').text(author);
  }

  function getNegativeVisualisation(){
    var negative = [
      {
        quote: "How it would feel to lose a loved one?",       
      },{
        quote: "How it would feel to have your next big event failing?", 
      },{
        quote: "How it would feel to have a physical disability?", 
      },{
        quote: "How it would feel to be homeless?", 
      },{
        quote: "How it would feel to lose social status?", 
      },{
        quote: "How it would feel to live in a third world country?", 
      },
    ];
    
    randomNum2 = Math.floor((Math.random()*negative.length));
    quoteSelect = negative[randomNum2];
    randomQuote = quoteSelect.quote;
    
    $('#negVisu').text(randomQuote);
  }

  function getDiscomfort(){
    var discomfortQuote = [
      {
        quote: "Take a cold shower.",       
      },{
        quote: "Underdress and go in the cold.", 
      },{
        quote: "Fast today.", 
      },{
        quote: "Sleep on the floor.", 
      },{
        quote: "No chilling on internet.", 
      },{
        quote: "Force yourself to interact with someone.", 
      },{
        quote: "No treats.", 
      },{
        quote: "Hard physical exercice.", 
      },{
        quote: "Ask for a discount.", 
      },
    ];
    
    randomNum = Math.floor((Math.random()*discomfortQuote.length));
    quoteSelect = discomfortQuote[randomNum];
    randomQuote = quoteSelect.quote;
    
    $('#discomfort').text(randomQuote);
  }
  
  // $('#tweetThis').on('click', function(){
  //   window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " -" + author);
  // });
  
  $('#newQuote').on('click', function(){
    getQuote();
  });
});
