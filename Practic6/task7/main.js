// library for CLI-inputs
const readlineSync = require("readline-sync");

const questionsProgrammingLanguages = [
    {
        question: 'Who is the maintainer of Node.js?',
        answers: ['Ryan Dahl', 'Guido van Rossum', 'Bjarne Stroustrup', 'Anonymous'],

        isCorrectAnswer: function(answer) {
            switch (answer) {
                case 'Ryan Dahl':
                    return true
                case 'Anonymous', 'Bjarne Stroustrup', 'Guido van Rossum':
                    return false
                default:
                    return false
            }
        }
    },

    {
        question: 'Who is the maintainer of Python?',
        answers: ['Ryan Dahl', 'Guido van Rossum', 'Bjarne Stroustrup', 'Anonymous'],

        isCorrectAnswer: function(answer) {
            switch (answer) {
                case 'Guido van Rossum':
                    return true
                case 'Ryan Dahl', 'Bjarne Stroustrup', 'Anonymous':
                    return false
                default:
                    return false
            }
        }
    },

    {
        question: 'Is Python an interpreted programming language?',
        answers: ['Yes', 'No'],
        
        isCorrectAnswer: function(answer) {
            switch (answer) {
                case 'Yes':
                    return true
                case 'No':
                    return false
                default:
                    return false
            }
        }
    },

    {
        question: 'Is Javascript an interpreted programming language?',
        answers: ['Yes', 'No'],
        
        isCorrectAnswer: function(answer) {
            switch (answer) {
                case 'Yes':
                    return true
                case 'No':
                    return false
                default:
                    return false
            }
        }
    },

    {
        question: 'Is C++ an interpreted programming language?',
        answers: ['Yes', 'No'],
        
        isCorrectAnswer: function(answer) {
            switch (answer) {
                case 'No':
                    return true
                case 'Yes':
                    return false
                default:
                    return false
            }
        }
    },

    {
        question: 'Is C an object-oriented programming language?',
        answers: ['Yes', 'No'],
        
        isCorrectAnswer: function(answer) {
            switch (answer) {
                case 'No':
                    return true
                case 'Yes':
                    return false
                default:
                    return false
            }
        }
    },

    {
        question:'What of this languages is functional programming languages?',
        answers: ['Javascript', 'Python', 'Java', 'Scala'],

        isCorrectAnswer: function(answer) {
            switch (answer) {
                case 'Javascript', 'Python', 'Java':
                    return false
                case 'Scala':
                    return true
                default:
                    return false
            }
        }
    }
]

const startQuiz = () => {
    console.log('Welcome to Math quiz\nThe game is available for persons over 10 years old');

    const inputAge = readlineSync.question('How old are you?\n:');

    if (Number(inputAge) > 10) {
        questionsProgrammingLanguages.forEach(function(item){
            showQuestion(item)
        })

        console.log('Thank you for a game!')
    } 
    else {
        console.log('Your age must be greater than 10')
    }
}

const showQuestion = currentQuestion => {
    console.log(currentQuestion.question);
    console.log(currentQuestion.answers);
    const answer = readlineSync.question('Your answer: ');  
    const result = currentQuestion.isCorrectAnswer(answer) ? 'Great!' : 'Wrong.';
    console.log(result);
}

startQuiz();
