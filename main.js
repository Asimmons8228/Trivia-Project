// Function to create a question
function createQuestion(question, options, answer) {
    return { question, options, answer };
}

// Music Trivia Questions
const musicQuestions = {
    easy: [
        createQuestion("Who is known as the 'Queen of Pop'?", { a: 'Britney Spears', b: 'Madonna', c: 'Beyoncé', d: 'Lady Gaga' }, 'b'),
        createQuestion("Which legendary music group performed at the famous Woodstock Festival in 1969?", { a: 'The Beatles', b: 'The Rolling Stones', c: 'The Who', d: 'Jimi Hendrix Experience' }, 'd'),
        createQuestion("What is the best-selling album of all time?", { a: '"Thriller" by Michael Jackson', b: '"The Dark Side of the Moon" by Pink Floyd', c: '"Back in Black" by AC/DC', d: '"Rumours" by Fleetwood Mac' }, 'a'),
        createQuestion("Which singer is known for hits like 'Hello' and 'Someone Like You'?", { a: 'Adele', b: 'Taylor Swift', c: 'Rihanna', d: 'Katy Perry' }, 'a'),
        createQuestion("What is the name of the lead singer of the band U2?", { a: 'Bono', b: 'Sting', c: 'Freddie Mercury', d: 'Mick Jagger' }, 'a'),
    ],
    medium: [
        createQuestion("Who released the iconic album 'Purple Rain' in 1984?", { a: 'Michael Jackson', b: 'Prince', c: 'David Bowie', d: 'Elton John' }, 'b'),
        createQuestion("Which British rock band released the album 'The Wall' in 1979?", { a: 'Led Zeppelin', b: 'The Rolling Stones', c: 'Pink Floyd', d: 'Queen' }, 'c'),
        createQuestion("What is the stage name of the rapper and actor born as Marshall Mathers?", { a: '50 Cent', b: 'Snoop Dogg', c: 'Eminem', d: 'Ice Cube' }, 'c'),
        createQuestion("Who is often referred to as the 'Father of Rock and Roll'?", { a: 'Chuck Berry', b: 'Buddy Holly', c: 'Elvis Presley', d: 'Little Richard' }, 'a'),
        createQuestion("Which female artist released the album 'Lemonade' in 2016?", { a: 'Ariana Grande', b: 'Beyoncé', c: 'Katy Perry', d: 'Taylor Swift' }, 'b'),
    ],
    hard: [
        createQuestion("What song did Queen perform during their iconic Live Aid performance in 1985?", { a: '"Bohemian Rhapsody"', b: '"We Will Rock You"', c: '"Radio Ga Ga"', d: '"Somebody to Love"' }, 'd'),
        createQuestion("Which rock band's album 'OK Computer' is often considered one of the greatest albums of all time?", { a: 'Radiohead', b: 'Nirvana', c: 'Pearl Jam', d: 'The Smashing Pumpkins' }, 'a'),
        createQuestion("Who composed the famous 'Four Seasons' concertos?", { a: 'Ludwig van Beethoven', b: 'Wolfgang Amadeus Mozart', c: 'Antonio Vivaldi', d: 'Johann Sebastian Bach' }, 'c'),
        createQuestion("What is the name of the lead guitarist of the band Led Zeppelin?", { a: 'Jimmy Page', b: 'Eric Clapton', c: 'Jimi Hendrix', d: 'Pete Townshend' }, 'a'),
        createQuestion("Which 1967 album by The Beatles features songs like 'Lucy in the Sky with Diamonds' and 'A Day in the Life'?", { a: '"Abbey Road"', b: '"Revolver"', c: '"Sgt. Pepper\'s Lonely Hearts Club Band"', d: '"The White Album"' }, 'c'),
    ],
};

// Celebrity Trivia Questions
const celebrityQuestions = {
    easy: [
        createQuestion("Who played the character Iron Man in the Marvel Cinematic Universe?", { a: 'Chris Hemsworth', b: 'Chris Evans', c: 'Robert Downey Jr.', d: 'Mark Ruffalo' }, 'c'),
        createQuestion("Which actress starred as Katniss Everdeen in 'The Hunger Games' film series?", { a: 'Jennifer Aniston', b: 'Emma Watson', c: 'Scarlett Johansson', d: 'Jennifer Lawrence' }, 'd'),
        createQuestion("Which comedian is known for hosting 'The Tonight Show' and 'The Jay Leno Show'?", { a: 'Conan O\'Brien', b: 'David Letterman', c: 'Jimmy Fallon', d: 'Jay Leno' }, 'd'),
        createQuestion("Who is the lead actor in the 'Pirates of the Caribbean' film series?", { a: 'Will Smith', b: 'Johnny Depp', c: 'Tom Cruise', d: 'Brad Pitt' }, 'b'),
        createQuestion("Which pop star is known for her hits 'Umbrella' and 'Diamonds'?", { a: 'Katy Perry', b: 'Lady Gaga', c: 'Rihanna', d: 'Adele' }, 'c'),
    ],
    medium: [
        createQuestion("Who is the actress known for her role as Hermione Granger in the 'Harry Potter' film series?", { a: 'Emma Watson', b: 'Dakota Fanning', c: 'Natalie Portman', d: 'Anne Hathaway' }, 'a'),
        createQuestion("Which actor is famous for portraying Jack Dawson in the film 'Titanic'?", { a: 'Leonardo DiCaprio', b: 'Matt Damon', c: 'Brad Pitt', d: 'Johnny Depp' }, 'a'),
        createQuestion("Who won the Academy Award for Best Actor for his role in the film 'Forrest Gump'?", { a: 'Tom Hanks', b: 'Morgan Freeman', c: 'Robert De Niro', d: 'Denzel Washington' }, 'a'),
        createQuestion("Which actress starred as Black Widow in the Marvel Cinematic Universe?", { a: 'Scarlett Johansson', b: 'Zoe Saldana', c: 'Brie Larson', d: 'Gal Gadot' }, 'a'),
        createQuestion("Who is the actor known for his portrayal of James Bond in several films?", { a: 'Pierce Brosnan', b: 'Roger Moore', c: 'Daniel Craig', d: 'Sean Connery' }, 'c'),
    ],
    hard: [
        createQuestion("Which actor starred as Walter White in the TV series 'Breaking Bad'?", { a: 'Bryan Cranston', b: 'Jon Hamm', c: 'Matthew McConaughey', d: 'Kevin Spacey' }, 'a'),
        createQuestion("Who is the actress known for her role as Eleven in the TV series 'Stranger Things'?", { a: 'Millie Bobby Brown', b: 'Sophie Turner', c: 'Emilia Clarke', d: 'Maisie Williams' }, 'a'),
        createQuestion("Which actor portrayed Hannibal Lecter in the film 'The Silence of the Lambs'?", { a: 'Robert De Niro', b: 'Al Pacino', c: 'Anthony Hopkins', d: 'Dustin Hoffman' }, 'c'),
        createQuestion("Who is the actor famous for his role as Tony Stark in the Marvel Cinematic Universe?", { a: 'Chris Hemsworth', b: 'Chris Pratt', c: 'Robert Downey Jr.', d: 'Mark Ruffalo' }, 'c'),
        createQuestion("Which actress won an Academy Award for her performance in the film 'La La Land'?", { a: 'Natalie Portman', b: 'Emma Stone', c: 'Cate Blanchett', d: 'Jennifer Lawrence' }, 'b'),
    ],
};

// Movie Trivia Questions
const movieQuestions = {
    easy: [
        createQuestion("Which film features a young lion named Simba who embarks on a journey to reclaim his throne?", { a: 'Aladdin', b: 'The Lion King', c: 'Beauty and the Beast', d: 'Frozen' }, 'b'),
        createQuestion("Who played the role of Tony Stark in the 'Iron Man' film series?", { a: 'Chris Evans', b: 'Chris Hemsworth', c: 'Robert Downey Jr.', d: 'Mark Ruffalo' }, 'c'),
        createQuestion("Which animated film follows the adventures of a young clownfish named Nemo?", { a: 'Finding Nemo', b: 'Toy Story', c: 'Shrek', d: 'Ratatouille' }, 'a'),
        createQuestion("In 'Jurassic Park,' what type of creatures do the characters encounter?", { a: 'Aliens', b: 'Zombies', c: 'Dinosaurs', d: 'Witches' }, 'c'),
        createQuestion("Which film tells the story of a young wizard named Harry Potter?", { a: 'The Lord of the Rings', b: 'Harry Potter and the Sorcerers Stone', c: 'The Chronicles of Narnia', d: 'The Hobbit' }, 'b'),
    ],
    medium: [
        createQuestion("Who directed the science fiction film 'Inception'?", { a: 'James Cameron', b: 'Christopher Nolan', c: 'Steven Spielberg', d: 'George Lucas' }, 'b'),
        createQuestion("Which film follows the story of an elderly man named Carl Fredricksen and a young Wilderness Explorer named Russell?", { a: 'Up', b: 'Wall-E', c: 'Inside Out', d: 'Ratatouille' }, 'a'),
        createQuestion("Who played the role of Katniss Everdeen in 'The Hunger Games' film series?", { a: 'Jennifer Aniston', b: 'Emma Watson', c: 'Scarlett Johansson', d: 'Jennifer Lawrence' }, 'd'),
        createQuestion("Which film features a talking snowman named Olaf?", { a: 'The Little Mermaid', b: 'Frozen', c: 'Moana', d: 'Tangled' }, 'b'),
        createQuestion("Who directed the 1994 epic film 'Pulp Fiction'?", { a: 'Steven Spielberg', b: 'Quentin Tarantino', c: 'Martin Scorsese', d: 'Francis Ford Coppola' }, 'b'),
    ],
    hard: [
        createQuestion("In the film 'The Shawshank Redemption,' what does Andy Dufresne use to escape from prison?", { a: 'A tunnel', b: 'A helicopter', c: 'A boat', d: 'A hot air balloon' }, 'a'),
        createQuestion("Which film is often considered the first feature-length animated movie?", { a: 'The Little Mermaid', b: 'Cinderella', c: 'Snow White and the Seven Dwarfs', d: 'Beauty and the Beast' }, 'c'),
        createQuestion("Who played the lead role of Maximus in the film 'Gladiator'?", { a: 'Russell Crowe', b: 'Mel Gibson', c: 'Leonardo DiCaprio', d: 'Brad Pitt' }, 'a'),
        createQuestion("What is the name of the fictional African country in the film 'Black Panther'?", { a: 'Wakanda', b: 'Zamunda', c: 'Genovia', d: 'Elbonia' }, 'a'),
        createQuestion("Which actor portrayed the character Jack Dawson in the film 'Titanic'?", { a: 'Leonardo DiCaprio', b: 'Matt Damon', c: 'Brad Pitt', d: 'Johnny Depp' }, 'a'),
    ],
};

// Television Trivia Questions
const televisionQuestions = {
    easy: [
        createQuestion("Which TV show features a group of friends living in New York City and includes characters like Ross, Rachel, and Joey?", { a: 'The Office', b: 'Friends', c: 'The Big Bang Theory', d: 'How I Met Your Mother' }, 'b'),
        createQuestion("In 'Game of Thrones,' who is known as the 'Mother of Dragons'?", { a: 'Sansa Stark', b: 'Cersei Lannister', c: 'Daenerys Targaryen', d: 'Arya Stark' }, 'c'),
        createQuestion("Which TV show is about a high school chemistry teacher who turns to cooking and selling methamphetamine after a terminal cancer diagnosis?", { a: 'Breaking Bad', b: 'The Walking Dead', c: 'Dexter', d: 'The Sopranos' }, 'a'),
        createQuestion("What animated TV show features a character named Homer Simpson?", { a: 'South Park', b: 'Family Guy', c: 'The Simpsons', d: 'Futurama' }, 'c'),
        createQuestion("Which TV show is set in the fictional town of Pawnee, Indiana, and follows the quirky employees of the Parks and Recreation department?", { a: 'The Office', b: 'Brooklyn Nine-Nine', c: 'Parks and Recreation', d: 'The Good Place' }, 'c'),
    ],
    medium: [
        createQuestion("In 'Stranger Things,' what is the name of the parallel dimension inhabited by the Demogorgon?", { a: 'The Netherworld', b: 'The Upside Down', c: 'The Dark Zone', d: 'The Shadow Realm' }, 'b'),
        createQuestion("Which TV show follows the lives of four women in New York City named Carrie, Charlotte, Miranda, and Samantha?", { a: 'Sex and the City', b: 'Desperate Housewives', c: 'Grey\'s Anatomy', d: 'Gossip Girl' }, 'a'),
        createQuestion("In 'The Walking Dead,' what do the survivors call the undead creatures?", { a: 'Zombies', b: 'Walkers', c: 'Biters', d: 'Creepers' }, 'b'),
        createQuestion("Which TV show is a mockumentary-style series that follows the lives of employees at the Dunder Mifflin Paper Company?", { a: 'Brooklyn Nine-Nine', b: 'The Office', c: 'Parks and Recreation', d: 'It\'s Always Sunny in Philadelphia' }, 'b'),
        createQuestion("What TV show features a brilliant but socially awkward forensic scientist named Dr. Temperance Brennan?", { a: 'Criminal Minds', b: 'CSI: Miami', c: 'Bones', d: 'NCIS' }, 'c'),
    ],
    hard: [
        createQuestion("In 'Breaking Bad,' what is the street name of the high-quality blue methamphetamine produced by Walter White?", { a: 'Crystal Clear', b: 'Blue Diamond', c: 'Heisenberg Blue', d: 'Walter White Special' }, 'c'),
        createQuestion("Which TV show is known for its complex characters like Tony Soprano, a mob boss dealing with personal and professional issues?", { a: 'Boardwalk Empire', b: 'The Sopranos', c: 'The Wire', d: 'Sons of Anarchy' }, 'b'),
        createQuestion("In 'Sherlock,' who plays the role of Sherlock Holmes?", { a: 'Martin Freeman', b: 'David Tennant', c: 'Benedict Cumberbatch', d: 'Matt Smith' }, 'c'),
        createQuestion("Which TV show features a high school chemistry teacher who becomes a notorious methamphetamine manufacturer and drug lord?", { a: 'Breaking Bad', b: 'Narcos', c: 'Ozark', d: 'Weeds' }, 'a'),
        createQuestion("In 'Game of Thrones,' what is the name of Jon Snow's direwolf?", { a: 'Ghost', b: 'Shadow', c: 'Fang', d: 'Stark' }, 'a'),
    ],
};
// Randomly select a category
function selectCategory() {
    const categories = ['music', 'celebrity', 'movie', 'television'];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

// Variables to keep track of the game state
let categoryQuestions = [];
let questionIndex = -1;
let score = 0;
let currentQuestion = null;

// Function to display a question
function displayQuestion(question) {
    console.log(`Question: ${question.text}`);
    displayQuestionOptions(question);
}

// Function to display the next question or end the game
function displayNextQuestion() {
    questionIndex++;
    if (questionIndex < categoryQuestions.length) {
        currentQuestion = categoryQuestions[questionIndex];
        displayQuestion(currentQuestion);
    } else {
        // Display the user's final score
        console.log(`Your final score: ${score} out of ${categoryQuestions.length}`);
    }
}

// Function to create and display radio buttons for options
function displayQuestionOptions(question) {
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous options

    for (const option in question.options) {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'answer';
        radioInput.value = option;

        const optionLabel = document.createElement('label');
        optionLabel.appendChild(radioInput);
        optionLabel.appendChild(document.createTextNode(question.options[option]));

        optionsContainer.appendChild(optionLabel); // Append to the options container
    }
}

// Function to handle user's answer selection
function handleAnswerSelection() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        // Check if the answer is correct
        if (userAnswer === currentQuestion.answer) {
            console.log('Correct!\n');
            score++;
        } else {
            console.log(`Wrong! The correct answer is ${currentQuestion.options[currentQuestion.answer]}\n`);
        }
        // Move to the next question
        displayNextQuestion();
    } else {
        alert('Please select an option.');
    }
}




// Add event listener for answer selection
document.getElementById('submit-answer').addEventListener('click', handleAnswerSelection);


// Function to get questions based on category and difficulty
function getCategoryQuestions(category, difficulty) {
    let questions;
    switch (category) {
        case 'music':
            questions = musicQuestions[difficulty];
            break;
        case 'celebrity':
            questions = celebrityQuestions[difficulty];
            break;
        case 'movie':
            questions = movieQuestions[difficulty];
            break;
        case 'television':
            questions = televisionQuestions[difficulty];
            break;
        default:
            questions = [];
    }
    return questions;
}
// Function to start the trivia game
function startTriviaGame() {
    const selectedCategory = selectCategory();
    const selectedDifficulty = document.querySelector('.difficulty-button.active').getAttribute('data-difficulty');
    categoryQuestions = getCategoryQuestions(selectedCategory, selectedDifficulty);
    questionIndex = -1;
    score = 0;
    displayNextQuestion();
}

// Add event listeners for difficulty buttons to start the game
const difficultyButtons = document.querySelectorAll('.difficulty-button');
difficultyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove the 'active' class from all difficulty buttons
        difficultyButtons.forEach((btn) => {
            btn.classList.remove('active');
        });
        // Add the 'active' class to the clicked button
        button.classList.add('active');
        // Start the trivia game
        startTriviaGame();
    });
});
