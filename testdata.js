let score=0;

let questions = [
    {
        "question":"In the video, what is the name of Peppa's brother?",
        "answers":[
            ["George",2],
            ["Geoff",3],
            ["Gaerwn",3]
        ]
    },
    {
        "question":"How many people are there in Peppa's family？",
        "answers":[
            ["4",4],
            ["5",5],
            ["3",5]
        ]
    },
    {
        "question":"What skin color is Peppa？",
        "answers":[
            ["pink",5],
            ["while",6],
            ["black",6]
        ]
    },
    {
        "question":"What race is Peppa？",
        "answers":[
            ["Pig",7],
            ["Dog",8],
            ["Cat",8]
        ]
    },
    {
        "question":"What is the name of Peppa's best friend？",
        "answers":[
            ["suzy",8],
            ["Candy",9],
            ["Danny",9]
        ]
    },
    {
        "question":"What race is Peppa's best friend?",
        "answers":[
            ["sheep",9],
            ["cat",10],
            ["elephant",10]
        ]
    },
    {
        "question":"How old is Peppa's brother？",
        "answers":[
            ["2","A"],
            ["3","B"],
            ["4","B"]
        ]
    },
    {
        "question":"In Peppa's family, who is the tallest one？",
        "answers":[
            ["Peppa's father","B"],
            ["Peppa's mother","C"],
            ["Peppa","C"]
        ]
    },
    {
        "question":"Who is Peppa？",
        "answers":[
            ["Rebecca's classmate","C"],
            ["George's mother","D"],
            ["suzy's sister","D"]
        ]
    },
    {
        "question":"What is PeppaPig's main character's name？",
        "answers":[
            ["Peppa","D"],
            ["Grorge","E"],
            ["Rebecca","E"]
        ]
    }
    
];

let finalAnswers={
        "A":["You get A","Your answer is all right."],
        "B":["You get B","You got one question wrong."],
        "C":["You get C","You got two question wrong."],
        "D":["You get D","You got three question wrong."],
        "E":["You get E","Your answer is all false."]
};