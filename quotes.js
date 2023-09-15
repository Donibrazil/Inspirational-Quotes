var arrayOfQuotes = [

        { 
            "author": "Jim Rohn", 
            "quote": "Beware of what you become in pursuit of what you want." 
        },
        { 
            "author": "Walt Disney", 
            "quote": "The way to get started is to quit talking and begin doing." 
        },
        { 
            "author": "Albert Einstein", 
            "quote": "Try not to become a man of success, but rather try to become a man of value." 
        },
        { 
            "author": "Nelson Mandela", 
            "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall." 
        },
        { 
            "author": "Maya Angelou", 
            "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." 
        },
        { 
            "author": "Steve Jobs", 
            "quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do." 
        },
        { 
            "author": "Eleanor Roosevelt", 
            "quote": "The future belongs to those who believe in the beauty of their dreams." 
        },
        { 
            "author": "William Shakespeare", 
            "quote": "All the world's a stage, and all the men and women merely players." 
        },
        { 
            "author": "Martin Luther King Jr.", 
            "quote": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that." 
        },
        { 
            "author": "Oprah Winfrey", 
            "quote": "The biggest adventure you can take is to live the life of your dreams." 
        }


      ]

      function randomSelector(arrayLength) {
        return Math.floor(Math.random()*arrayLength);
      }

      function generateQuote() {

      var randomNumber = randomSelector(arrayOfQuotes.length);

      document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
      document.getElementById("authorOutput").innerHTML = "-" + arrayOfQuotes[randomNumber].author;

      }