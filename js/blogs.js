function backToDesk() {
  window.location.href = "./index.html";
}

const questions = [
  {
    id: 1,
    question:
      "Question-1: What are the different ways to select an element in the DOM?",
    ans: `
    To select an element in the DOM using JavaScript, I can use methods like getElementById (by ID), getElementsByClassName (by class name), getElementsByTagName (by tag name), querySelector (using a CSS selector to select a single element), and querySelectorAll (using a CSS selector to select multiple elements). 
    `,
  },
  {
    id: 2,
    question:
      "Question-2: What is the difference between innerHTML, innerText, and textContent ?",
    ans: `
    "innerHTML" retrieves the complete HTML content within an element, including tags, while "innerText" returns only the visible text content of an element (ignoring styling and hidden elements), and "textContent" retrieves all the text content within an element, including whitespace and line breaks, regardless of styling or visibility, essentially giving you the raw text without HTML interpretation; making "innerText" best for user-visible text and "textContent" ideal for extracting raw text data. 
    `,
  },
  {
    id: 3,
    question: "Question-3: What is event delegation in the DOM?",
    ans: "Event delegation in JavaScript is a pattern that efficiently handles events. Events can be added to a parent element instead of adding to every single element. It refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated.",
  },
  {
    id: 4,
    question: "Question-4: What is event bubbling in the DOM?",
    ans: "Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.",
  },
  {
    id: 5,
    question:
      "Question-5: How do you create, add, and remove elements using JavaScript?",
    ans: `
    <p>create: document.createElement()</p>
    <p>add: appendChild()</p>
    <p>remove: remove()</p>
    `,
  },
];

const qna = document.getElementById("qna");

function handelQna(questions) {
  for (const que of questions) {
    const div = document.createElement("div");
    div.innerHTML = `
    <details class="collapse bg-base-100 border-base-300 border">
  <summary class="collapse-title font-bold">${que.question}</summary>
  <div class="collapse-content text-sm">
    ${que.ans}
  </div>
</details>
    `;
    qna.appendChild(div);
  }
}
handelQna(questions);
