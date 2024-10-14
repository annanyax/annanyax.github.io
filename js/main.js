// document.addEventListener("DOMContentLoaded", function () {
//     // Smooth scroll for nav links
//     document.querySelectorAll('nav a').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             document.getElementById(targetId).scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Check if the link is a local anchor link (starts with #) and prevent scrolling on external links like PDF
        const href = this.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                console.error(`Element with ID ${targetId} not found`);
            }
        } else {
            // Allow default behavior for external links (like your CV PDF)
            console.log("External link or PDF. Skipping smooth scroll behavior.");
        }
    });
});


    // JavaScript for switching between company tabs
const companyTabs = document.querySelectorAll('.company-tab');
const jobDetails = document.querySelectorAll('.job-detail');

companyTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        companyTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to the clicked tab
        this.classList.add('active');

        // Hide all job details
        jobDetails.forEach(detail => detail.classList.remove('active'));

        // Show the job details that match the clicked tab
        const selectedCompany = this.getAttribute('data-company');
        document.querySelector(`.job-detail[data-company="${selectedCompany}"]`).classList.add('active');
    });
});

    // Chat Functionality
    const navIcon = document.querySelector('.nav-left img');
    const chatContainer = document.getElementById('chat-container');
    const closeChatButton = document.getElementById('close-chat');
    const chatContent = document.getElementById('chat-content');
    const chatInput = document.getElementById('chat-input');
    const sendMessageButton = document.getElementById('send-message');

    // Predefined message buttons
    const introductionMessages = [
        { sender: 'bot', message: "Hi! I'm An a 🛶" },
        { sender: 'bot', message: "Get it? Anna-bot 😂" },
        { sender: 'bot', message: "I'm just like Annanya, but way amusing 😎" },
        { sender: 'bot', message: "How can I help you today?" }
    ];

    const predefinedMessages = {
        1: [
            { sender: 'user', message: "I just wanted to say hello" },
            { sender: 'bot', message: "Well hello there!" },
            { sender: 'bot', message: "Thanks for saying hi 😁" },
            { sender: 'bot', message: "I hope you're having a good day" },
            { sender: 'bot', message: "Can I help you with anything else?" }
        ],
        3: [
            { sender: 'user', message: "Make me a website!" },
            { sender: 'bot', message: "Hey, Thanks for reaching out" },
            { sender: 'bot', message: "Unfortunately, my plate is full until June 2023" },
            { sender: 'bot', message: "Thanks for understanding" },
            { sender: 'bot', message: "Can I help you with anything else?" }
        ],
        4: [
            { sender: 'user', message: "Who are you?" },
            { sender: 'bot', message: "Good question" },
            { sender: 'bot', message: "I wonder 🤔" },
            { sender: 'bot', message: "I might have identity crisis. Oops 😁" },
            { sender: 'bot', message: "Maybe get back later to find out" },
            { sender: 'bot', message: "Can I help you with anything else?" }
        ],
        7: [
            { sender: 'user', message: "I'd like to send you a message" },
            { sender: 'bot', message: "Oh, yay! 💃" },
            // { sender: 'bot', message: 'Send me a message <a href="message.html" target="_blank" rel="noreferrer noopener"><span>here</span></a>' },
            { sender: 'bot', message: 'You can also reach me out on <a href="mailto:email@email@annanyasah.com" rel="noreferrer noopener"><span>email</span></a>' }
        ]
    };

    // Function to append messages to chat content
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.innerHTML = `<strong>${sender === 'user' ? 'You' : 'Anna'}:</strong> ${message}`;
        chatContent.appendChild(messageElement);
        chatContent.scrollTop = chatContent.scrollHeight; // Scroll to bottom
    }

    // Function to append chat options
    function appendOptions() {
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('chat-options');

        const options = [
            { text: "👋 I just wanted to say hello", questionId: 1 },
            { text: "🤓 Make me a website!", questionId: 3 },
            { text: "🤔 Who are you?", questionId: 4 },
            { text: "📧 I'd like to send you a message", questionId: 7 }
        ];

        options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('chat-option-button');
            button.textContent = option.text;
            button.dataset.question = option.questionId;

            button.addEventListener('click', () => handlePredefinedQuestion(option.questionId));
            optionsContainer.appendChild(button);
        });

        chatContent.appendChild(optionsContainer);
        chatContent.scrollTop = chatContent.scrollHeight; // Scroll to bottom
    }

    // Handle predefined questions
    function handlePredefinedQuestion(questionId) {
        const messages = predefinedMessages[questionId];
        if (messages) {
            messages.forEach((msg, index) => {
                setTimeout(() => {
                    appendMessage(msg.sender, msg.message);
                    if (index === messages.length - 1) {
                        appendOptions(); // Add options after response
                    }
                }, 1800 * (index + 1));
            });
        }
    }

    // Open chat and add introductory messages
    navIcon.addEventListener('click', function () {
        chatContainer.classList.add('open');
        if (chatContent.children.length === 0) {
            introductionMessages.forEach((msg, index) => {
                setTimeout(() => {
                    appendMessage(msg.sender, msg.message);
                    if (index === introductionMessages.length - 1) {
                        appendOptions(); // Add options after introduction
                    }
                }, 1800 * (index + 1));
            });
        }
    });

    // Close chat and clear messages
    closeChatButton.addEventListener('click', function () {
        chatContainer.classList.remove('open');
        chatContent.innerHTML = ''; // Clear chat content
    });

    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            appendMessage('user', message);
            chatInput.value = '';

            // Simulate Anna-bot response
            setTimeout(() => {
                appendMessage('bot', "The interative functionality still WIP 🚧");
                appendMessage('bot', "Try in a few weeks 😊");
            }, 1000);
        }
    }

    // Event listeners for sending a message
    sendMessageButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });



    