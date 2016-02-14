$(document).ready(function(){

    var titles = [
        "You're as sweet as chickens",
        "You're my sweet chicken",
        "You're as sweet as red beans",
        "You're as lovely as all the fish in the world",
        "You're as wonderful as all the astronauts",
        "I want to move to space with you",
        "I want to move to Japan with you",
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
        "You're dumb like anime",
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
        "I want to hug you until you die",
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
        "You're the best goddamn dancer I know"

    ];

    var terminals = {};
    var startwords = [];
    var wordstats = {};

    for (var i = 0; i < titles.length; i++) {
        var words = titles[i].split(' ');
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

    var make_title = function (min_length) {
        word = choice(startwords);
        var title = [word];
        while (wordstats.hasOwnProperty(word)) {
            var next_words = wordstats[word];
            word = choice(next_words);
            title.push(word);
            if (title.length > min_length && terminals.hasOwnProperty(word)) break;
        }
        if (title.length < min_length) return make_title(min_length);
        return title.join(' ');
    };

    $('#generate').on('click', function () {
        var title = make_title(3 + Math.floor(3 * Math.random()));
        $('#generated_title').html(title);
    });

});