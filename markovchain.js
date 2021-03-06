$(document).ready(function(){

    var sayings = [
        "You're as sweet as chickens",
        "You're my sweet chicken",
        "You're as sweet as red beans",
        "You're as lovely as all the fish in the world",
        "You're as wonderful as all the astronauts",
        "Everything you do is wonderful",
        "You bring so much happiness to me",
        "You're wild like a dragon",
        "You're as fiery as a volcano",
        "You're hot like the best summer day",
        "You're cool like speculoos ice cream",
        "You're like the most buttery cookie",
        "You're like the sweetest scone in the oven",
        "You're like a magical unicorn",
        "You're like the brightest star",
        "You're the cutest boy I know",
        "You're the sweetest boy I know",
        "You make everything more lovely",
        "You're cool like a fish",
        "You're smart like a beluga whale",
        "You're interesting like a donut",
        "You're fun like a squid on a stick",
        "You're hilarious like a jazz band",
        "You're silly like anime",
        "You've captured my heart",
        "I adore you",
        "You're the best pal to have around",
        "You're the best buddy to watch TV with",
        "You're the coolest cat",
        "You are hot when you wear an apron",
        "I believe in everything you do",
        "I believe you are going to be successful",
        "You could sprout wings if you wanted",
        "You could make it to the moon if you wanted",
        "You could make it to space if you wanted",
        "I want to touch your buns",
        "I want to hug forever",
        "I want to bite your nose",
        "I'm going to eat your nose off",
        "I'm going to eat your face",
        "I love everything about you",
        "Your eyes are gorgeous",
        "Everything about you is gorgeous",
        "Everything about you is brilliant",
        "You are one cool cat",
        "You're my egg toast",
        "You're my sweet sugar",
        "I'm going to eat you up",
        "You're my favorite boyfriend",
        "You're my favorite girlfriend",
        "You're the most gorgeous sprout",
        "You're my favorite sprout",
        "You're as sweet honey",
        "You're golden like honey",
        "You have the coolest sweaters",
        "You have the best brain",
        "You're incredibly smart",
        "You're incredible",
        "You're brilliant",
        "Your green eyes give me life",
        "I want to bake with you for the rest of my life",
        "You and I will go far together",
        "I want to get another cat with you",
        "I want to go on a road trip together",
        "You're a cozy scarf",
        "You keep me warm",
        "You heat up my toes",
        "You have such lovely touch",
        "Your taste in music is great",
        "You're the best goddamn dancer I know",
        "I wanna conquer the universe together",
        "I wanna share ice cream together",
        "I wanna bake cookies together",
        "I wanna build rocket ships together",
        "I wanna grow flowers together",
        "I wanna build train-sets together",
        "I wanna finish jigsaw puzzles together",
        "I wanna read comics together",
        "I wanna write feminist analyses together",
        "I wanna listen to podcasts together",
        "I wanna visit thrift stores together",
        "I wanna visit Japan together",
        "I wanna visit outer space together",
        "I wanna fight the paladins for you",
        "I wanna be your knight",
        "I wanna go to Mordor together",
        "I wanna destroy The One Ring together",
        "I wanna grow flowers with Totoro together",
        "I wanna play UNDERTALE with you",
        "I wanna watch you play Fallout",
        "I wanna download indie games togther",
        "I wanna listen to Joanna Newsom together",
        "I wanna nerd out to Star Wars together",
        "I wanna replay FFVII together",
        "I wanna roll you up in a Katamari",
        "I wanna watch you play Bloodborne",
        "I wanna make Mario levels together",
        "I wanna publish a zine together",
        "I wanna dance badly together",
        "I wanna roast asparagus together",
        "You're like Megaman but cooler",
        "You're like Frodo but braver",
        "You're like Cloud but smarter",
        "You're like Pikachu but cuter",
        "You're like Beat Takeshi but funnier",
        "You're like Samwise Gamgee but lovelier",
        "I enjoy playing video games together",
        "I enjoy playing board games together",
        "I enjoy nerding out together",
        "I enjoy making out together",
        "I wanna pet Noah",
        "I love you"

    ];

    var terminals = {};
    var startwords = [];
    var wordstats = {};

    for (var i = 0; i < sayings.length; i++) {
        var words = sayings[i].split(' ');
        terminals[words[words.length-1]] = true;
        startwords.push(words[0]);
        for (var j = 0; j < words.length - 1; j++) {
            if (wordstats.hasOwnProperty(words[j])) {
                wordstats[words[j]].push(words[j+1]);
            } else {
                wordstats[words[j]] = [words[j+1]];
            }
        }
    }

    var choice = function (a) {
        var i = Math.floor(a.length * Math.random());
        return a[i];
    };

    var make_saying = function (min_length) {
        word = choice(startwords);
        var saying = [word];
        while (wordstats.hasOwnProperty(word)) {
            var next_words = wordstats[word];
            word = choice(next_words);
            saying.push(word);
            if (saying.length > min_length && terminals.hasOwnProperty(word)) break;
        }
        if (saying.length < min_length) return make_saying(min_length);
        return saying.join(' ');
    };

    $('#generate').on('click', function () {
        var saying = make_saying(3 + Math.floor(3 * Math.random()));
        $('#generated_saying').html(saying);
    });

});