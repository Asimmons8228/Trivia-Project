const questions = [
    // Music Trivia Questions
    {
        question: "Who is known as the 'Queen of Pop'?",
        answers: [
            { text: 'Britney Spears', correct: false },
            { text: 'Madonna', correct: true },
            { text: 'Beyoncé', correct: false },
            { text: 'Lady Gaga', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Music',
    },
    {
        question: "Which legendary music group performed at the famous Woodstock Festival in 1969?",
        answers: [
            { text: 'The Beatles', correct: false },
            { text: 'The Rolling Stones', correct: false },
            { text: 'The Who', correct: false },
            { text: 'Jimi Hendrix Experience', correct: true },
        ],
        difficulty: 'Easy',
        category: 'Music',
    },
    {
        question: "What is the best-selling album of all time?",
        answers: [
            { text: '"Thriller" by Michael Jackson', correct: true },
            { text: '"The Dark Side of the Moon" by Pink Floyd', correct: false },
            { text: '"Back in Black" by AC/DC', correct: false },
            { text: '"Rumours" by Fleetwood Mac', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Music',
    },
    {
        question: "Which singer is known for hits like 'Hello' and 'Someone Like You'?",
        answers: [
            { text: 'Adele', correct: true },
            { text: 'Taylor Swift', correct: false },
            { text: 'Rihanna', correct: false },
            { text: 'Katy Perry', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Music',
    },
    {
        question: "What is the name of the lead singer of the band U2?",
        answers: [
            { text: 'Bono', correct: true },
            { text: 'Sting', correct: false },
            { text: 'Freddie Mercury', correct: false },
            { text: 'Mick Jagger', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Music',
    },
    {
        question: "Who released the iconic album 'Purple Rain' in 1984?",
        answers: [
            { text: 'Michael Jackson', correct: false },
            { text: 'Prince', correct: true },
            { text: 'David Bowie', correct: false },
            { text: 'Elton John', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Music',
    },
    {
        question: "Which British rock band released the album 'The Wall' in 1979?",
        answers: [
            { text: 'Led Zeppelin', correct: false },
            { text: 'The Rolling Stones', correct: false },
            { text: 'Pink Floyd', correct: true },
            { text: 'Queen', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Music',
    },
    {
        question: "What is the stage name of the rapper and actor born as Marshall Mathers?",
        answers: [
            { text: '50 Cent', correct: false },
            { text: 'Snoop Dogg', correct: false },
            { text: 'Eminem', correct: true },
            { text: 'Ice Cube', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Music',
    },
    {
        question: "Who is often referred to as the 'Father of Rock and Roll'?",
        answers: [
            { text: 'Chuck Berry', correct: true },
            { text: 'Buddy Holly', correct: false },
            { text: 'Elvis Presley', correct: false },
            { text: 'Little Richard', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Music',
    },
    {
        question: "Which female artist released the album 'Lemonade' in 2016?",
        answers: [
            { text: 'Ariana Grande', correct: false },
            { text: 'Beyoncé', correct: true },
            { text: 'Katy Perry', correct: false },
            { text: 'Taylor Swift', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Music',
    },
    {
        question: "What song did Queen perform during their iconic Live Aid performance in 1985?",
        answers: [
            { text: '"Bohemian Rhapsody"', correct: false },
            { text: '"We Will Rock You"', correct: false },
            { text: '"Radio Ga Ga"', correct: false },
            { text: '"Somebody to Love"', correct: true },
        ],
        difficulty: 'Hard',
        category: 'Music',
    },
    {
        question: "Which rock band's album 'OK Computer' is often considered one of the greatest albums of all time?",
        answers: [
            { text: 'Radiohead', correct: true },
            { text: 'Nirvana', correct: false },
            { text: 'Pearl Jam', correct: false },
            { text: 'The Smashing Pumpkins', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Music',
    },
    {
        question: "Who composed the famous 'Four Seasons' concertos?",
        answers: [
            { text: 'Ludwig van Beethoven', correct: false },
            { text: 'Wolfgang Amadeus Mozart', correct: false },
            { text: 'Antonio Vivaldi', correct: true },
            { text: 'Johann Sebastian Bach', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Music',
    },
    {
        question: "What is the name of the lead guitarist of the band Led Zeppelin?",
        answers: [
            { text: 'Jimmy Page', correct: true },
            { text: 'Eric Clapton', correct: false },
            { text: 'Jimi Hendrix', correct: false },
            { text: 'Pete Townshend', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Music',
    },
    {
        question: "Which 1967 album by The Beatles features songs like 'Lucy in the Sky with Diamonds' and 'A Day in the Life'?",
        answers: [
            { text: '"Abbey Road"', correct: false },
            { text: '"Revolver"', correct: false },
            { text: '"Sgt. Pepper\'s Lonely Hearts Club Band"', correct: true },
            { text: '"The White Album"', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Music',
    },
    // Celebrity Trivia Questions
    {
        question: "Who played the character Iron Man in the Marvel Cinematic Universe?",
        answers: [
            { text: 'Chris Hemsworth', correct: false },
            { text: 'Chris Evans', correct: false },
            { text: 'Robert Downey Jr.', correct: true },
            { text: 'Mark Ruffalo', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Celebrity',
    },
    {
        question: "Which actress starred as Katniss Everdeen in 'The Hunger Games' film series?",
        answers: [
            { text: 'Jennifer Aniston', correct: false },
            { text: 'Emma Watson', correct: false },
            { text: 'Scarlett Johansson', correct: false },
            { text: 'Jennifer Lawrence', correct: true },
        ],
        difficulty: 'Easy',
        category: 'Celebrity',
    },
    {
        question: "Which comedian is known for hosting 'The Tonight Show' and 'The Jay Leno Show'?",
        answers: [
            { text: 'Conan O\'Brien', correct: false },
            { text: 'David Letterman', correct: false },
            { text: 'Jimmy Fallon', correct: false },
            { text: 'Jay Leno', correct: true },
        ],
        difficulty: 'Easy',
        category: 'Celebrity',
    },
    {
        question: "Who is the lead actor in the 'Pirates of the Caribbean' film series?",
        answers: [
            { text: 'Will Smith', correct: false },
            { text: 'Johnny Depp', correct: true },
            { text: 'Tom Cruise', correct: false },
            { text: 'Brad Pitt', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Celebrity',
    },
    {
        question: "Which pop star is known for her hits 'Umbrella' and 'Diamonds'?",
        answers: [
            { text: 'Katy Perry', correct: false },
            { text: 'Lady Gaga', correct: false },
            { text: 'Rihanna', correct: true },
            { text: 'Adele', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Celebrity',
    },
    {
        question: "Who is the actress known for her role as Hermione Granger in the 'Harry Potter' film series?",
        answers: [
            { text: 'Emma Watson', correct: true },
            { text: 'Dakota Fanning', correct: false },
            { text: 'Natalie Portman', correct: false },
            { text: 'Anne Hathaway', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Celebrity',
    },
    {
        question: "Which actor is famous for portraying Jack Dawson in the film 'Titanic'?",
        answers: [
            { text: 'Leonardo DiCaprio', correct: true },
            { text: 'Matt Damon', correct: false },
            { text: 'Brad Pitt', correct: false },
            { text: 'Johnny Depp', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Celebrity',
    },
    {
        question: "Who won the Academy Award for Best Actor for his role in the film 'Forrest Gump'?",
        answers: [
            { text: 'Tom Hanks', correct: true },
            { text: 'Morgan Freeman', correct: false },
            { text: 'Robert De Niro', correct: false },
            { text: 'Denzel Washington', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Celebrity',
    },
    {
        question: "Which actress starred as Black Widow in the Marvel Cinematic Universe?",
        answers: [
            { text: 'Scarlett Johansson', correct: true },
            { text: 'Zoe Saldana', correct: false },
            { text: 'Brie Larson', correct: false },
            { text: 'Gal Gadot', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Celebrity',
    },
    {
        question: "Who is the actor known for his portrayal of James Bond in several films?",
        answers: [
            { text: 'Pierce Brosnan', correct: false },
            { text: 'Roger Moore', correct: false },
            { text: 'Daniel Craig', correct: true },
            { text: 'Sean Connery', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Celebrity',
    },
    {
        question: "Which actor starred as Walter White in the TV series 'Breaking Bad'?",
        answers: [
            { text: 'Bryan Cranston', correct: true },
            { text: 'Jon Hamm', correct: false },
            { text: 'Matthew McConaughey', correct: false },
            { text: 'Kevin Spacey', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Celebrity',
    },
    {
        question: "Who is the actress known for her role as Eleven in the TV series 'Stranger Things'?",
        answers: [
            { text: 'Millie Bobby Brown', correct: true },
            { text: 'Sophie Turner', correct: false },
            { text: 'Emilia Clarke', correct: false },
            { text: 'Maisie Williams', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Celebrity',
    },
    {
        question: "Which actor portrayed Hannibal Lecter in the film 'The Silence of the Lambs'?",
        answers: [
            { text: 'Robert De Niro', correct: false },
            { text: 'Al Pacino', correct: false },
            { text: 'Anthony Hopkins', correct: true },
            { text: 'Dustin Hoffman', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Celebrity',
    },
    {
        question: "Who is the actor famous for his role as Tony Stark in the Marvel Cinematic Universe?",
        answers: [
            { text: 'Chris Hemsworth', correct: false },
            { text: 'Chris Pratt', correct: false },
            { text: 'Robert Downey Jr.', correct: true },
            { text: 'Mark Ruffalo', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Celebrity',
    },
    {
        question: "Which actress won an Academy Award for her performance in the film 'La La Land'?",
        answers: [
            { text: 'Natalie Portman', correct: false },
            { text: 'Emma Stone', correct: true },
            { text: 'Cate Blanchett', correct: false },
            { text: 'Jennifer Lawrence', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Celebrity',
    },
    // Movie Trivia Questions
    {
        question: "Which film features a young lion named Simba who embarks on a journey to reclaim his throne?",
        answers: [
            { text: 'Aladdin', correct: false },
            { text: 'The Lion King', correct: true },
            { text: 'Beauty and the Beast', correct: false },
            { text: 'Frozen', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Movie',
    },
    {
        question: "Who played the role of Tony Stark in the 'Iron Man' film series?",
        answers: [
            { text: 'Chris Evans', correct: false },
            { text: 'Chris Hemsworth', correct: false },
            { text: 'Robert Downey Jr.', correct: true },
            { text: 'Mark Ruffalo', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Movie',
    },
    {
        question: "Which animated film follows the adventures of a young clownfish named Nemo?",
        answers: [
            { text: 'Finding Nemo', correct: true },
            { text: 'Toy Story', correct: false },
            { text: 'Shrek', correct: false },
            { text: 'Ratatouille', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Movie',
    },
    {
        question: "In 'Jurassic Park,' what type of creatures do the characters encounter?",
        answers: [
            { text: 'Aliens', correct: false },
            { text: 'Zombies', correct: false },
            { text: 'Dinosaurs', correct: true },
            { text: 'Witches', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Movie',
    },
    {
        question: "Which film tells the story of a young wizard named Harry Potter?",
        answers: [
            { text: 'The Lord of the Rings', correct: false },
            { text: 'Harry Potter and the Sorcerers Stone', correct: true },
            { text: 'The Chronicles of Narnia', correct: false },
            { text: 'The Hobbit', correct: false },
        ],
        difficulty: 'Easy',
        category: 'Movie',
    },
    {
        question: "Who directed the science fiction film 'Inception'?",
        answers: [
            { text: 'James Cameron', correct: false },
            { text: 'Christopher Nolan', correct: true },
            { text: 'Steven Spielberg', correct: false },
            { text: 'George Lucas', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Movie',
    },
    {
        question: "Which film follows the story of an elderly man named Carl Fredricksen and a young Wilderness Explorer named Russell?",
        answers: [
            { text: 'Up', correct: true },
            { text: 'Wall-E', correct: false },
            { text: 'Inside Out', correct: false },
            { text: 'Ratatouille', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Movie',
    },
    {
        question: "Who played the role of Katniss Everdeen in 'The Hunger Games' film series?",
        answers: [
            { text: 'Jennifer Aniston', correct: false },
            { text: 'Emma Watson', correct: false },
            { text: 'Scarlett Johansson', correct: false },
            { text: 'Jennifer Lawrence', correct: true },
        ],
        difficulty: 'Medium',
        category: 'Movie',
    },
    {
        question: "Which film features a talking snowman named Olaf?",
        answers: [
            { text: 'The Little Mermaid', correct: false },
            { text: 'Frozen', correct: true },
            { text: 'Moana', correct: false },
            { text: 'Tangled', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Movie',
    },
    {
        question: "Who directed the 1994 epic film 'Pulp Fiction'?",
        answers: [
            { text: 'Steven Spielberg', correct: false },
            { text: 'Quentin Tarantino', correct: true },
            { text: 'Martin Scorsese', correct: false },
            { text: 'Francis Ford Coppola', correct: false },
        ],
        difficulty: 'Medium',
        category: 'Movie',
    },
    {
        question: "In the film 'The Shawshank Redemption,' what does Andy Dufresne use to escape from prison?",
        answers: [
            { text: 'A tunnel', correct: true },
            { text: 'A helicopter', correct: false },
            { text: 'A boat', correct: false },
            { text: 'A hot air balloon', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Movie',
    },
    {
        question: "Which film is often considered the first feature-length animated movie?",
        answers: [
            { text: 'The Little Mermaid', correct: false },
            { text: 'Cinderella', correct: false },
            { text: 'Snow White and the Seven Dwarfs', correct: true },
            { text: 'Beauty and the Beast', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Movie',
    },
    {
        question: "Who played the lead role of Maximus in the film 'Gladiator'?",
        answers: [
            { text: 'Russell Crowe', correct: true },
            { text: 'Mel Gibson', correct: false },
            { text: 'Leonardo DiCaprio', correct: false },
            { text: 'Brad Pitt', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Movie',
    },
    {
        question: "What is the name of the fictional African country in the film 'Black Panther'?",
        answers: [
            { text: 'Wakanda', correct: true },
            { text: 'Zamunda', correct: false },
            { text: 'Genovia', correct: false },
            { text: 'Elbonia', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Movie',
    },
    {
        question: "Which actor portrayed the character Jack Dawson in the film 'Titanic'?",
        answers: [
            { text: 'Leonardo DiCaprio', correct: true },
            { text: 'Matt Damon', correct: false },
            { text: 'Brad Pitt', correct: false },
            { text: 'Johnny Depp', correct: false },
        ],
        difficulty: 'Hard',
        category: 'Movie',
    },
    {
        question: "Which TV show features a group of friends living in New York City and includes characters like Ross, Rachel, and Joey?",
        answers: [
            { text: 'The Office', correct: false },
            { text: 'Friends', correct: true },
            { text: 'The Big Bang Theory', correct: false },
            { text: 'How I Met Your Mother', correct: false }
        ],
        difficulty: 'Easy',
        category: 'Television'
    },
    {
        question: "In 'Game of Thrones,' who is known as the 'Mother of Dragons'?",
        answers: [
            { text: 'Sansa Stark', correct: false },
            { text: 'Cersei Lannister', correct: false },
            { text: 'Daenerys Targaryen', correct: true },
            { text: 'Arya Stark', correct: false }
        ],
        difficulty: 'Easy',
        category: 'Television'
    },
    {
        question: "Which TV show is about a high school chemistry teacher who turns to cooking and selling methamphetamine after a terminal cancer diagnosis?",
        answers: [
            { text: 'Breaking Bad', correct: true },
            { text: 'The Walking Dead', correct: false },
            { text: 'Dexter', correct: false },
            { text: 'The Sopranos', correct: false }
        ],
        difficulty: 'Easy',
        category: 'Television'
    },
    {
        question: "What animated TV show features a character named Homer Simpson?",
        answers: [
            { text: 'South Park', correct: false },
            { text: 'Family Guy', correct: false },
            { text: 'The Simpsons', correct: true },
            { text: 'Futurama', correct: false }
        ],
        difficulty: 'Easy',
        category: 'Television'
    },
    {
        question: "Which TV show is set in the fictional town of Pawnee, Indiana, and follows the quirky employees of the Parks and Recreation department?",
        answers: [
            { text: 'The Office', correct: false },
            { text: 'Brooklyn Nine-Nine', correct: false },
            { text: 'Parks and Recreation', correct: true },
            { text: 'The Good Place', correct: false }
        ],
        difficulty: 'Easy',
        category: 'Television'
    },
    {
        question: "In 'Stranger Things,' what is the name of the parallel dimension inhabited by the Demogorgon?",
        answers: [
            { text: 'The Netherworld', correct: false },
            { text: 'The Upside Down', correct: true },
            { text: 'The Dark Zone', correct: false },
            { text: 'The Shadow Realm', correct: false }
        ],
        difficulty: 'Medium',
        category: 'Television'
    },
    {
        question: "Which TV show follows the lives of four women in New York City named Carrie, Charlotte, Miranda, and Samantha?",
        answers: [
            { text: 'Sex and the City', correct: true },
            { text: 'Desperate Housewives', correct: false },
            { text: "Grey's Anatomy", correct: false },
            { text: 'Gossip Girl', correct: false }
        ],
        difficulty: 'Medium',
        category: 'Television'
    },
    {
        question: "In 'The Walking Dead,' what do the survivors call the undead creatures?",
        answers: [
            { text: 'Zombies', correct: false },
            { text: 'Walkers', correct: true },
            { text: 'Biters', correct: false },
            { text: 'Creepers', correct: false }
        ],
        difficulty: 'Medium',
        category: 'Television'
    },
    {
        question: "Which TV show is a mockumentary-style series that follows the lives of employees at the Dunder Mifflin Paper Company?",
        answers: [
            { text: 'Brooklyn Nine-Nine', correct: false },
            { text: 'The Office', correct: true },
            { text: 'Parks and Recreation', correct: false },
            { text: "It's Always Sunny in Philadelphia", correct: false }
        ],
        difficulty: 'Medium',
        category: 'Television'
    },
    {
        question: "What TV show features a brilliant but socially awkward forensic scientist named Dr. Temperance Brennan?",
        answers: [
            { text: 'Criminal Minds', correct: false },
            { text: 'CSI: Miami', correct: false },
            { text: 'Bones', correct: true },
            { text: 'NCIS', correct: false }
        ],
        difficulty: 'Medium',
        category: 'Television'
    },
    {
        question: "In 'Breaking Bad,' what is the street name of the high-quality blue methamphetamine produced by Walter White?",
        answers: [
            { text: 'Crystal Clear', correct: false },
            { text: 'Blue Diamond', correct: false },
            { text: 'Heisenberg Blue', correct: true },
            { text: 'Walter White Special', correct: false }
        ],
        difficulty: 'Hard',
        category: 'Television'
    },
    {
        question: "Which TV show is known for its complex characters like Tony Soprano, a mob boss dealing with personal and professional issues?",
        answers: [
            { text: 'Boardwalk Empire', correct: false },
            { text: 'The Sopranos', correct: true },
            { text: 'The Wire', correct: false },
            { text: 'Sons of Anarchy', correct: false }
        ],
        difficulty: 'Hard',
        category: 'Television'
    },
    {
        question: "In 'Sherlock,' who plays the role of Sherlock Holmes?",
        answers: [
            { text: 'Martin Freeman', correct: false },
            { text: 'David Tennant', correct: false },
            { text: 'Benedict Cumberbatch', correct: true },
            { text: 'Matt Smith', correct: false }
        ],
        difficulty: 'Hard',
        category: 'Television'
    },
    {
        question: "Which TV show features a high school chemistry teacher who becomes a notorious methamphetamine manufacturer and drug lord?",
        answers: [
            { text: 'Breaking Bad', correct: true },
            { text: 'Narcos', correct: false },
            { text: 'Ozark', correct: false },
            { text: 'Weeds', correct: false }
        ],
        difficulty: 'Hard',
        category: 'Television'
    },
    {
        question: "In 'Game of Thrones,' what is the name of Jon Snow's direwolf?",
        answers: [
            { text: 'Ghost', correct: true },
            { text: 'Shadow', correct: false },
            { text: 'Fang', correct: false },
            { text: 'Stark', correct: false }
        ],
        difficulty: 'Hard',
        category: 'Television'
    }
];
const questionElement= document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let difficultyButtons = document.querySelectorAll(".difficulty-btn");
let filteredQuestions = [];

let currentQuestionIndex = 0;
let score= 0;
let selectedCategory = '';
let selectedDifficulty = '';

//Randomly select one of four quiz categories
function selectRandomCategory() {
    const categories = [...new Set(questions.map(question => question.category))];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

//Start the Quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    selectedCategory = selectRandomCategory();
    nextButton.innerHTML = 'Next';
    showQuestion();
}
//Grab and dislay questions
function showQuestion(){
    resetState();
    filteredQuestions = questions.filter(question=>question.category===selectedCategory && question.difficulty ===selectedDifficulty)
    console.log(filteredQuestions);
    let currentQuestion = filteredQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display='none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display ='block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${filteredQuestions.length}`;
    nextButton.innerHTML= 'Play Again';
    nextButton.style.display = 'block';
    document.getElementById('difficulty-container').style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < filteredQuestions.length){
        console.log(filteredQuestions.length);
        showQuestion();
    }else{
        showScore();
        document.getElementById('difficulty-container').style.display = 'none';
    }
}

nextButton.addEventListener('click',()=>{
    if (currentQuestionIndex < filteredQuestions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

let buttonDifficulty = document.getElementById('button-holder');
console.log(buttonDifficulty);
buttonDifficulty.addEventListener('click', (e) => {
    if (e.target.classList.contains('Easy')){
        selectedDifficulty = 'Easy';
        buttonDifficulty.style.display ='none';
        startQuiz();
    }else if (e.target.classList.contains('Medium')){
        selectedDifficulty = 'Medium';
        buttonDifficulty.style.display ='none';
        startQuiz();
    }else if (e.target.classList.contains('Hard')){
        selectedDifficulty = 'Hard';
        buttonDifficulty.style.display ='none';
        startQuiz();
    }
}); 

// const easyDifficulty = document.getElementById('Easy');
// const mediumDifficulty = document.getElementById('Medium');
// const hardDifficulty = document.getElementById('Hard');


//     easyDifficulty.addEventListener('click', (e) => {

//         if(e.target.classList.contains('difficulty-btn')){
//             console.log(easyDifficulty, 'Easy button clicked');
//         }
//     });
//     mediumDifficulty.addEventListener('click', (e) => {

//         if(e.target.classList.contains('difficulty-btn')){
//             console.log(mediumDifficulty, 'Medium button clicked');
//         }
//     });
//     hardDifficulty.addEventListener('click', (e) => {

//         if(e.target.classList.contains('difficulty-btn')){
//             console.log(hardDifficulty, 'Hard button clicked');
//         }
//     });

