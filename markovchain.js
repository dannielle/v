$(document).ready(function(){

    var titles = [
        "Sweet as chickens",
        "My sweet chicken",
        "Sweet as red beans",
        "Lovely as all the fish in the world",
        "Wonderful as all the astronauts",
        "I want to move to space with you",
        "I want to move to Japan with you",
        "Everything you do is wonderful",
        "Bring so much happiness to me",
        "Wild like a dragon",
        "As fiery as a volcano",
        "Hot like the best summer day",
        "Cool like speculoos ice cream",
        "Like the most buttery cookie",
        "Like the sweetest scone in the oven",
        "Like a magical unicorn",
        "Like the brightest star",
        "The cutest boy I know",
        "The sweetest boy I know",
        "Make everything more lovely",
        "Cool like a fish",
        "Smart like a beluga whale",
        "Interesting like a donut",
        "Fun like a squid on a stick",
        "Hilarious like a jazz band",
        "Silly like anime",
        "Captured my heart",
        "I adore you",
        "The best pal to have around",
        "The best buddy to watch TV with",
        "The coolest cat",
        "Hot when you wear an apron",
        "I believe in everything you do",
        "I believe you are going to be successful",
        "Could sprout wings if you wanted",
        "Could make it to the moon if you wanted",
        "Could make it to space if you wanted",
        "I want to touch your buns",
        "I want to hug you until you die",
        "I want to bite your nose",
        "I'm going to eat your nose off",
        "I'm going to eat your face",
        "I love everything about you",
        "Your eyes are gorgeous",
        "Everything about you is gorgeous",
        "Everything about you is brilliant",
        "One cool cat",
        "My egg toast",
        "My sweet sugar",
        "I'm going to eat you up",
        "My favorite boyfriend",
        "My favorite girlfriend",
        "The most gorgeous sprout",
        "My favorite sprout",
        "As sweet as honey",
        "Golden like honey",
        "Have the coolest sweaters",
        "Have the best brain",
        "Incredibly smart",
        "Incredible",
        "Brilliant",
        "Green eyes give me life",
        "I want to bake with you for the rest of my life",
        "You and I will go far together",
        "I want to get another cat with you",
        "I want to go on a road trip together",
        "Like a cozy scarf",
        "Keep me warm",
        "Heat up my toes",
        "Have such lovely body",
        "Taste in music is great",
        "The best goddamn dancer I know"

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