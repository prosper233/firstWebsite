const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.– Cory House", 
  "The only way to learn a new programming language is by writing programs in it– Dennis Ritchie.",
  "First, solve the problem. Then, write the code  John Johnson.", 
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Simplicity is the soul of efficiency.– Austin Freeman",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
  "In order to be irreplaceable, one must always be different.– Coco Chanel", 
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "I have not failed. I’ve just found 10,000 ways that won’t work.– Thomas Edison",
  "It works on my machine. – Every developer ever", 
  "Programming is 10% writing code and 90% figuring out why it doesn’t work.",
  "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors. Phil Karlton", 
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
  "Learning to write programs stretches your mind, and helps you think better. Bill Gates",
  "Programming isn’t about what you know; it’s about what you can figure out. – Chris Pine",
  "Java is to JavaScript what car is to carpet. – Chris Heilmann",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. -Martin Fowler",
  "Optimism is an occupational hazard of programming: feedback is the treatment.– Kent Beck",
  "Talk is cheap. Show me the code.– Linus Torvalds",
  "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity. – John Romero",
  "The best error message is the one that never shows up",
  "Code never lies, comments sometimes do. – Ron Jeffries",
  "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
  "Programmers are constantly making things more complicated than they need to be. – Robert C. Martin",
  "There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors. – Phil Karlton",
  "If you think your users are idiots, only idiots will use it. – Linus Torvalds",
  "It’s not a bug – it’s an undocumented feature. – code&PROSPER",
  " I LOVE MY POOKIE  - dark qwin ",
  " When i love my pookieeeeee i love deeply  - Dark Qwin",
  "believe it if you are told but know it if you see it with your own eyes - code&PROSPER",
  "Good code is its own best documentation. – Steve McConnell",
  "Software is like a garden. It needs constant weeding. – Anonymous",
  "In programming, the hard part isn’t solving problems, but deciding what problems to solve. – Paul Graham",
  "The best way to predict the future is to invent it. – Alan Kay",
  "Any program that runs correctly is obsolete. – Alan Perlis",
  "Programming is the art of algorithm design and the craft of debugging errant code. – Ellen Ullman",
  "It’s not that we use technology, we live technology. – Godfrey Reggio",
  "The key to performance is elegance, not battalions of special cases. – Jon Bentley",
  "The only way to go fast, is to go well. – Robert C. Martin"
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) { 
    const randomIndex = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIndex)) continue;

    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
  }
}
  const copyBtn = document.getElementById("copyBtn");
  const copyText = document.getElementById("quote");
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyText.value)
    .then(()=> {
       alert("quote copied");
    }).catch(err => {
alert (' Error copying to clipboard: ', err);

    });
    });
   


// Add scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#about");

  window.addEventListener("scroll", () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
      aboutSection.classList.add("active");
    }
  });
});
document.querySelector("footer p").innerHTML = `&copy;
 ${new Date().getFullYear()} CODE & PROSPER. All rights reserved.
 <br> <a href="about.html">About Us</a>`;

