const blogs = [
    {
        question: `What is the difference between local storage and session storage ?`,
        answer: `sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab`
    },
    {
        question: `What is the difference between global scope and block scope ?`,
        answer: `Global Scope:
        The variables defined outside of any function or curly brackets are known as global variables and have global scope. Global scope means that the variables can be accessed from any part of that program, any function or conditional state can access that variable.
        Local Scope:
        If you were to define some variables inside curly brackets {} or inside a specific function then those variables are called local variables The local variables have a very confined scope which is called the local scope`
    },
    {
        question: `What is precedence in event loop in JavaScript ?`,
        answer: `The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop.`
    },
    {
        question: `Types of undefined in JavaScript`,
        answer: `1. A variable that has not been assigned a value is of type undefined.<br>
        2. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. \n
        <br>3. A function returns undefined if a value was not returned`
    }
];

const blogs_location = document.getElementById('blogs');
blogs.forEach(blog => {
    const div = document.createElement('div');
    div.className = "blog";
    div.innerHTML = `
<h2 class="red">${blog.question}</h2>
<p style="margin:1rem;text-align:justify;">${blog.answer}</p>
`;
    blogs_location.appendChild(div);
});