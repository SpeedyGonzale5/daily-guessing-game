// Artist database
const artists = [
    {
        name: "Taylor Swift",
        genre: "Pop",
        debutYear: "2006",
        gender: "Female",
        grammyAwards: 13,
        countryOfOrigin: "USA"
    },
    {
        name: "Ed Sheeran",
        genre: "Pop",
        debutYear: "2011",
        gender: "Male",
        grammyAwards: 4,
        countryOfOrigin: "UK"
    },
    {
        name: "Adele",
        genre: "Pop",
        debutYear: "2008",
        gender: "Female",
        grammyAwards: 15,
        countryOfOrigin: "UK"
    },
    {
        name: "Drake",
        genre: "Hip Hop",
        debutYear: "2006",
        gender: "Male",
        grammyAwards: 4,
        countryOfOrigin: "Canada"
    },
    {
        name: "Beyoncé",
        genre: "R&B",
        debutYear: "1997",
        gender: "Female",
        grammyAwards: 28,
        countryOfOrigin: "USA"
    },
    {
        name: "The Weeknd",
        genre: "R&B",
        debutYear: "2011",
        gender: "Male",
        grammyAwards: 4,
        countryOfOrigin: "Canada"
    },
    {
        name: "Lady Gaga",
        genre: "Pop",
        debutYear: "2008",
        gender: "Female",
        grammyAwards: 13,
        countryOfOrigin: "USA"
    },
    {
        name: "Eminem",
        genre: "Hip Hop",
        debutYear: "1996",
        gender: "Male",
        grammyAwards: 15,
        countryOfOrigin: "USA"
    },
    {
        name: "Coldplay",
        genre: "Rock",
        debutYear: "2000",
        gender: "Male",
        grammyAwards: 7,
        countryOfOrigin: "UK"
    },
    {
        name: "Rihanna",
        genre: "Pop",
        debutYear: "2005",
        gender: "Female",
        grammyAwards: 9,
        countryOfOrigin: "Barbados"
    },
    {
        name: "Bruno Mars",
        genre: "Pop",
        debutYear: "2010",
        gender: "Male",
        grammyAwards: 11,
        countryOfOrigin: "USA"
    },
    {
        name: "Justin Bieber",
        genre: "Pop",
        debutYear: "2009",
        gender: "Male",
        grammyAwards: 2,
        countryOfOrigin: "Canada"
    },
    {
        name: "Kendrick Lamar",
        genre: "Hip Hop",
        debutYear: "2011",
        gender: "Male",
        grammyAwards: 14,
        countryOfOrigin: "USA"
    },
    {
        name: "Ariana Grande",
        genre: "Pop",
        debutYear: "2013",
        gender: "Female",
        grammyAwards: 2,
        countryOfOrigin: "USA"
    },
    {
        name: "Bob Dylan",
        genre: "Folk",
        debutYear: "1962",
        gender: "Male",
        grammyAwards: 10,
        countryOfOrigin: "USA"
    },
    {
        name: "Madonna",
        genre: "Pop",
        debutYear: "1983",
        gender: "Female",
        grammyAwards: 7,
        countryOfOrigin: "USA"
    },
    {
        name: "Michael Jackson",
        genre: "Pop",
        debutYear: "1971",
        gender: "Male",
        grammyAwards: 13,
        countryOfOrigin: "USA"
    },
    {
        name: "David Bowie",
        genre: "Rock",
        debutYear: "1967",
        gender: "Male",
        grammyAwards: 5,
        countryOfOrigin: "UK"
    },
    {
        name: "Whitney Houston",
        genre: "R&B",
        debutYear: "1985",
        gender: "Female",
        grammyAwards: 6,
        countryOfOrigin: "USA"
    },
    {
        name: "Prince",
        genre: "Pop",
        debutYear: "1978",
        gender: "Male",
        grammyAwards: 7,
        countryOfOrigin: "USA"
    },
    {
        name: "Stevie Wonder",
        genre: "R&B",
        debutYear: "1962",
        gender: "Male",
        grammyAwards: 25,
        countryOfOrigin: "USA"
    },
    {
        name: "Elton John",
        genre: "Pop",
        debutYear: "1969",
        gender: "Male",
        grammyAwards: 5,
        countryOfOrigin: "UK"
    },
    {
        name: "Mariah Carey",
        genre: "Pop",
        debutYear: "1990",
        gender: "Female",
        grammyAwards: 5,
        countryOfOrigin: "USA"
    },
    {
        name: "Bob Marley",
        genre: "Reggae",
        debutYear: "1962",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "Jamaica"
    },
    {
        name: "Paul McCartney",
        genre: "Rock",
        debutYear: "1970",
        gender: "Male",
        grammyAwards: 18,
        countryOfOrigin: "UK"
    },
    {
        name: "Céline Dion",
        genre: "Pop",
        debutYear: "1981",
        gender: "Female",
        grammyAwards: 5,
        countryOfOrigin: "Canada"
    },
    {
        name: "Jay-Z",
        genre: "Hip Hop",
        debutYear: "1996",
        gender: "Male",
        grammyAwards: 23,
        countryOfOrigin: "USA"
    },
    {
        name: "Kanye West",
        genre: "Hip Hop",
        debutYear: "2004",
        gender: "Male",
        grammyAwards: 22,
        countryOfOrigin: "USA"
    },
    {
        name: "Shakira",
        genre: "Pop",
        debutYear: "1991",
        gender: "Female",
        grammyAwards: 3,
        countryOfOrigin: "Colombia"
    },
    {
        name: "U2",
        genre: "Rock",
        debutYear: "1980",
        gender: "Male",
        grammyAwards: 22,
        countryOfOrigin: "Ireland"
    },
    {
        name: "Pink Floyd",
        genre: "Rock",
        debutYear: "1967",
        gender: "Male",
        grammyAwards: 1,
        countryOfOrigin: "UK"
    },
    {
        name: "Queen",
        genre: "Rock",
        debutYear: "1973",
        gender: "Male",
        grammyAwards: 4,
        countryOfOrigin: "UK"
    },
    {
        name: "ABBA",
        genre: "Pop",
        debutYear: "1972",
        gender: "Mixed",
        grammyAwards: 0,
        countryOfOrigin: "Sweden"
    },
    {
        name: "Metallica",
        genre: "Metal",
        debutYear: "1981",
        gender: "Male",
        grammyAwards: 8,
        countryOfOrigin: "USA"
    },
    {
        name: "AC/DC",
        genre: "Rock",
        debutYear: "1973",
        gender: "Male",
        grammyAwards: 1,
        countryOfOrigin: "Australia"
    },
    {
        name: "Lil Pump",
        genre: "Rap",
        debutYear: "2016",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Nirvana",
        genre: "Rock",
        debutYear: "1987",
        gender: "Male",
        grammyAwards: 1,
        countryOfOrigin: "USA"
    },
    {
        name: "The Beatles",
        genre: "Rock",
        debutYear: "1960",
        gender: "Male",
        grammyAwards: 7,
        countryOfOrigin: "UK"
    },
    {
        name: "Elvis Presley",
        genre: "Rock",
        debutYear: "1954",
        gender: "Male",
        grammyAwards: 3,
        countryOfOrigin: "USA"
    },
    {
        name: "Frank Sinatra",
        genre: "Jazz",
        debutYear: "1935",
        gender: "Male",
        grammyAwards: 9,
        countryOfOrigin: "USA"
    },
    {
        name: "Miles Davis",
        genre: "Jazz",
        debutYear: "1945",
        gender: "Male",
        grammyAwards: 8,
        countryOfOrigin: "USA"
    },
    {
        name: "Louis Armstrong",
        genre: "Jazz",
        debutYear: "1923",
        gender: "Male",
        grammyAwards: 1,
        countryOfOrigin: "USA"
    },
    {
        name: "Ella Fitzgerald",
        genre: "Jazz",
        debutYear: "1935",
        gender: "Female",
        grammyAwards: 13,
        countryOfOrigin: "USA"
    },
    {
        name: "Ray Charles",
        genre: "R&B",
        debutYear: "1949",
        gender: "Male",
        grammyAwards: 17,
        countryOfOrigin: "USA"
    },
    {
        name: "Johnny Cash",
        genre: "Country",
        debutYear: "1955",
        gender: "Male",
        grammyAwards: 13,
        countryOfOrigin: "USA"
    },
    {
        name: "Willie Nelson",
        genre: "Country",
        debutYear: "1956",
        gender: "Male",
        grammyAwards: 12,
        countryOfOrigin: "USA"
    },
    {
        name: "Dolly Parton",
        genre: "Country",
        debutYear: "1967",
        gender: "Female",
        grammyAwards: 11,
        countryOfOrigin: "USA"
    },
    {
        name: "B.B. King",
        genre: "Blues",
        debutYear: "1949",
        gender: "Male",
        grammyAwards: 15,
        countryOfOrigin: "USA"
    },
    {
        name: "Chuck Berry",
        genre: "Rock",
        debutYear: "1955",
        gender: "Male",
        grammyAwards: 1,
        countryOfOrigin: "USA"
    },
    {
        name: "James Brown",
        genre: "R&B",
        debutYear: "1956",
        gender: "Male",
        grammyAwards: 3,
        countryOfOrigin: "USA"
    },
    {
        name: "Aretha Franklin",
        genre: "R&B",
        debutYear: "1956",
        gender: "Female",
        grammyAwards: 18,
        countryOfOrigin: "USA"
    },
    {
        name: "Diana Ross",
        genre: "R&B",
        debutYear: "1959",
        gender: "Female",
        grammyAwards: 1,
        countryOfOrigin: "USA"
    },
    {
        name: "Tina Turner",
        genre: "Rock",
        debutYear: "1958",
        gender: "Female",
        grammyAwards: 12,
        countryOfOrigin: "USA"
    },
    {
        name: "Travis Scott",
        genre: "Hip Hop",
        debutYear: "2012",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Post Malone",
        genre: "Pop",
        debutYear: "2015",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Billie Eilish",
        genre: "Pop",
        debutYear: "2015",
        gender: "Female",
        grammyAwards: 7,
        countryOfOrigin: "USA"
    },
    {
        name: "Lil Nas X",
        genre: "Hip Hop",
        debutYear: "2018",
        gender: "Male",
        grammyAwards: 2,
        countryOfOrigin: "USA"
    },
    {
        name: "Doja Cat",
        genre: "Pop",
        debutYear: "2014",
        gender: "Female",
        grammyAwards: 1,
        countryOfOrigin: "USA"
    },
    {
        name: "Dua Lipa",
        genre: "Pop",
        debutYear: "2015",
        gender: "Female",
        grammyAwards: 2,
        countryOfOrigin: "UK"
    },
    {
        name: "Megan Thee Stallion",
        genre: "Hip Hop",
        debutYear: "2016",
        gender: "Female",
        grammyAwards: 3,
        countryOfOrigin: "USA"
    },
    {
        name: "Roddy Ricch",
        genre: "Hip Hop",
        debutYear: "2017",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Olivia Rodrigo",
        genre: "Pop",
        debutYear: "2021",
        gender: "Female",
        grammyAwards: 3,
        countryOfOrigin: "USA"
    },
    {
        name: "Lil Baby",
        genre: "Hip Hop",
        debutYear: "2017",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "DaBaby",
        genre: "Hip Hop",
        debutYear: "2014",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Jack Harlow",
        genre: "Hip Hop",
        debutYear: "2015",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Polo G",
        genre: "Hip Hop",
        debutYear: "2017",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Pop Smoke",
        genre: "Hip Hop",
        debutYear: "2019",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Juice WRLD",
        genre: "Hip Hop",
        debutYear: "2018",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "XXXTentacion",
        genre: "Hip Hop",
        debutYear: "2014",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Lil Tjay",
        genre: "Hip Hop",
        debutYear: "2017",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Gunna",
        genre: "Hip Hop",
        debutYear: "2016",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "YoungBoy Never Broke Again",
        genre: "Hip Hop",
        debutYear: "2015",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "A Boogie wit da Hoodie",
        genre: "Hip Hop",
        debutYear: "2016",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Lil Durk",
        genre: "Hip Hop",
        debutYear: "2011",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "King Von",
        genre: "Hip Hop",
        debutYear: "2018",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "42 Dugg",
        genre: "Hip Hop",
        debutYear: "2019",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "EST Gee",
        genre: "Hip Hop",
        debutYear: "2019",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "GloRilla",
        genre: "Hip Hop",
        debutYear: "2019",
        gender: "Female",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Ice Spice",
        genre: "Hip Hop",
        debutYear: "2021",
        gender: "Female",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Fivio Foreign",
        genre: "Hip Hop",
        debutYear: "2019",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "NLE Choppa",
        genre: "Hip Hop",
        debutYear: "2019",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Lil Skies",
        genre: "Hip Hop",
        debutYear: "2017",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "A$AP Rocky",
        genre: "Hip Hop",
        debutYear: "2011",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Playboi Carti",
        genre: "Hip Hop",
        debutYear: "2015",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Trippie Redd",
        genre: "Hip Hop",
        debutYear: "2017",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Lil Uzi Vert",
        genre: "Hip Hop",
        debutYear: "2015",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "21 Savage",
        genre: "Hip Hop",
        debutYear: "2014",
        gender: "Male",
        grammyAwards: 1,
        countryOfOrigin: "UK"
    },
    {
        name: "Young Thug",
        genre: "Hip Hop",
        debutYear: "2011",
        gender: "Male",
        grammyAwards: 1,
        countryOfOrigin: "USA"
    },
    {
        name: "Future",
        genre: "Hip Hop",
        debutYear: "2010",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Lil Wayne",
        genre: "Hip Hop",
        debutYear: "1995",
        gender: "Male",
        grammyAwards: 5,
        countryOfOrigin: "USA"
    },
    {
        name: "J. Cole",
        genre: "Hip Hop",
        debutYear: "2007",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Tyler, The Creator",
        genre: "Hip Hop",
        debutYear: "2007",
        gender: "Male",
        grammyAwards: 2,
        countryOfOrigin: "USA"
    },
    {
        name: "Mac Miller",
        genre: "Hip Hop",
        debutYear: "2007",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "A$AP Ferg",
        genre: "Hip Hop",
        debutYear: "2013",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "A$AP Mob",
        genre: "Hip Hop",
        debutYear: "2006",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "BROCKHAMPTON",
        genre: "Hip Hop",
        debutYear: "2015",
        gender: "Mixed",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Kid Cudi",
        genre: "Hip Hop",
        debutYear: "2008",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Migos",
        genre: "Hip Hop",
        debutYear: "2008",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    {
        name: "Lil Yachty",
        genre: "Hip Hop",
        debutYear: "2015",
        gender: "Male",
        grammyAwards: 0,
        countryOfOrigin: "USA"
    },
    // Adding first 50 of 150 artists
    { name: "Bruce Springsteen", genre: "Rock", debutYear: "1973", gender: "Male", grammyAwards: 20, countryOfOrigin: "USA" },
    { name: "Janet Jackson", genre: "Pop", debutYear: "1982", gender: "Female", grammyAwards: 5, countryOfOrigin: "USA" },
    { name: "George Michael", genre: "Pop", debutYear: "1981", gender: "Male", grammyAwards: 2, countryOfOrigin: "UK" },
    { name: "Marvin Gaye", genre: "R&B", debutYear: "1961", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Led Zeppelin", genre: "Rock", debutYear: "1968", gender: "Male", grammyAwards: 1, countryOfOrigin: "UK" },
    { name: "The Rolling Stones", genre: "Rock", debutYear: "1962", gender: "Male", grammyAwards: 3, countryOfOrigin: "UK" },
    { name: "Garth Brooks", genre: "Country", debutYear: "1989", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Shania Twain", genre: "Country", debutYear: "1993", gender: "Female", grammyAwards: 5, countryOfOrigin: "Canada" },
    { name: "George Strait", genre: "Country", debutYear: "1981", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Tupac Shakur", genre: "Hip Hop", debutYear: "1991", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "The Notorious B.I.G.", genre: "Hip Hop", debutYear: "1993", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Snoop Dogg", genre: "Hip Hop", debutYear: "1992", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Dr. Dre", genre: "Hip Hop", debutYear: "1986", gender: "Male", grammyAwards: 6, countryOfOrigin: "USA" },
    { name: "Foo Fighters", genre: "Rock", debutYear: "1995", gender: "Male", grammyAwards: 12, countryOfOrigin: "USA" },
    { name: "Red Hot Chili Peppers", genre: "Rock", debutYear: "1984", gender: "Male", grammyAwards: 6, countryOfOrigin: "USA" },
    { name: "Green Day", genre: "Rock", debutYear: "1990", gender: "Male", grammyAwards: 5, countryOfOrigin: "USA" },
    { name: "Daft Punk", genre: "Electronic", debutYear: "1997", gender: "Male", grammyAwards: 6, countryOfOrigin: "France" },
    { name: "Radiohead", genre: "Rock", debutYear: "1992", gender: "Male", grammyAwards: 3, countryOfOrigin: "UK" },
    { name: "Björk", genre: "Electronic", debutYear: "1977", gender: "Female", grammyAwards: 0, countryOfOrigin: "Iceland" },
    { name: "Alicia Keys", genre: "R&B", debutYear: "2001", gender: "Female", grammyAwards: 15, countryOfOrigin: "USA" },
    { name: "Usher", genre: "R&B", debutYear: "1994", gender: "Male", grammyAwards: 8, countryOfOrigin: "USA" },
    { name: "Justin Timberlake", genre: "Pop", debutYear: "1995", gender: "Male", grammyAwards: 10, countryOfOrigin: "USA" },
    { name: "Britney Spears", genre: "Pop", debutYear: "1998", gender: "Female", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Christina Aguilera", genre: "Pop", debutYear: "1999", gender: "Female", grammyAwards: 5, countryOfOrigin: "USA" },
    { name: "Spice Girls", genre: "Pop", debutYear: "1996", gender: "Female", grammyAwards: 0, countryOfOrigin: "UK" },
    { name: "Backstreet Boys", genre: "Pop", debutYear: "1996", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "*NSYNC", genre: "Pop", debutYear: "1997", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Harry Styles", genre: "Pop", debutYear: "2017", gender: "Male", grammyAwards: 3, countryOfOrigin: "UK" },
    { name: "SZA", genre: "R&B", debutYear: "2012", gender: "Female", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Lizzo", genre: "Pop", debutYear: "2013", gender: "Female", grammyAwards: 3, countryOfOrigin: "USA" },
    { name: "Bad Bunny", genre: "Latin", debutYear: "2016", gender: "Male", grammyAwards: 2, countryOfOrigin: "Puerto Rico" },
    { name: "J Balvin", genre: "Latin", debutYear: "2009", gender: "Male", grammyAwards: 0, countryOfOrigin: "Colombia" },
    { name: "Karol G", genre: "Latin", debutYear: "2012", gender: "Female", grammyAwards: 0, countryOfOrigin: "Colombia" },
    { name: "Rosalía", genre: "Latin", debutYear: "2017", gender: "Female", grammyAwards: 1, countryOfOrigin: "Spain" },
    { name: "BTS", genre: "K-Pop", debutYear: "2013", gender: "Male", grammyAwards: 0, countryOfOrigin: "South Korea" },
    { name: "BLACKPINK", genre: "K-Pop", debutYear: "2016", gender: "Female", grammyAwards: 0, countryOfOrigin: "South Korea" },
    { name: "TWICE", genre: "K-Pop", debutYear: "2015", gender: "Female", grammyAwards: 0, countryOfOrigin: "South Korea" },
    { name: "Chris Brown", genre: "R&B", debutYear: "2005", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Nicki Minaj", genre: "Hip Hop", debutYear: "2007", gender: "Female", grammyAwards: 0, countryOfOrigin: "Trinidad and Tobago" },
    { name: "Cardi B", genre: "Hip Hop", debutYear: "2015", gender: "Female", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Halsey", genre: "Pop", debutYear: "2014", gender: "Female", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Shawn Mendes", genre: "Pop", debutYear: "2014", gender: "Male", grammyAwards: 0, countryOfOrigin: "Canada" },
    { name: "Camila Cabello", genre: "Pop", debutYear: "2017", gender: "Female", grammyAwards: 0, countryOfOrigin: "Cuba" },
    { name: "Charlie Puth", genre: "Pop", debutYear: "2015", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Sam Smith", genre: "Pop", debutYear: "2012", gender: "Non-binary", grammyAwards: 4, countryOfOrigin: "UK" },
    { name: "Florence + the Machine", genre: "Rock", debutYear: "2009", gender: "Female", grammyAwards: 0, countryOfOrigin: "UK" },
    { name: "Lana Del Rey", genre: "Pop", debutYear: "2010", gender: "Female", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Lorde", genre: "Pop", debutYear: "2013", gender: "Female", grammyAwards: 2, countryOfOrigin: "New Zealand" },
    { name: "Tame Impala", genre: "Rock", debutYear: "2010", gender: "Male", grammyAwards: 0, countryOfOrigin: "Australia" },
    // Adding second 50 of 150 artists (51-100)
    { name: "Khalid", genre: "R&B", debutYear: "2016", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Normani", genre: "Pop", debutYear: "2018", gender: "Female", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Anderson .Paak", genre: "R&B", debutYear: "2012", gender: "Male", grammyAwards: 4, countryOfOrigin: "USA" },
    { name: "H.E.R.", genre: "R&B", debutYear: "2016", gender: "Female", grammyAwards: 4, countryOfOrigin: "USA" },
    { name: "Kacey Musgraves", genre: "Country", debutYear: "2013", gender: "Female", grammyAwards: 6, countryOfOrigin: "USA" },
    { name: "Chris Stapleton", genre: "Country", debutYear: "2015", gender: "Male", grammyAwards: 8, countryOfOrigin: "USA" },
    { name: "Luke Combs", genre: "Country", debutYear: "2016", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Morgan Wallen", genre: "Country", debutYear: "2016", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Maren Morris", genre: "Country", debutYear: "2016", gender: "Female", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Peso Pluma", genre: "Latin", debutYear: "2020", gender: "Male", grammyAwards: 0, countryOfOrigin: "Mexico" },
    { name: "Daddy Yankee", genre: "Latin", debutYear: "1995", gender: "Male", grammyAwards: 0, countryOfOrigin: "Puerto Rico" },
    { name: "Maluma", genre: "Latin", debutYear: "2011", gender: "Male", grammyAwards: 0, countryOfOrigin: "Colombia" },
    { name: "Anitta", genre: "Latin", debutYear: "2013", gender: "Female", grammyAwards: 0, countryOfOrigin: "Brazil" },
    { name: "Skrillex", genre: "Electronic", debutYear: "2008", gender: "Male", grammyAwards: 8, countryOfOrigin: "USA" },
    { name: "Calvin Harris", genre: "Electronic", debutYear: "2007", gender: "Male", grammyAwards: 1, countryOfOrigin: "UK" },
    { name: "Marshmello", genre: "Electronic", debutYear: "2015", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Zedd", genre: "Electronic", debutYear: "2010", gender: "Male", grammyAwards: 1, countryOfOrigin: "Germany" },
    { name: "The Chainsmokers", genre: "Electronic", debutYear: "2012", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Imagine Dragons", genre: "Rock", debutYear: "2012", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Twenty One Pilots", genre: "Rock", debutYear: "2009", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Paramore", genre: "Rock", debutYear: "2005", gender: "Female", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "My Chemical Romance", genre: "Rock", debutYear: "2002", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Arctic Monkeys", genre: "Rock", debutYear: "2006", gender: "Male", grammyAwards: 0, countryOfOrigin: "UK" },
    { name: "Phoebe Bridgers", genre: "Indie", debutYear: "2017", gender: "Female", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Bon Iver", genre: "Indie", debutYear: "2007", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Vampire Weekend", genre: "Indie", debutYear: "2008", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Tate McRae", genre: "Pop", debutYear: "2019", gender: "Female", grammyAwards: 0, countryOfOrigin: "Canada" },
    { name: "The Kid LAROI", genre: "Pop", debutYear: "2018", gender: "Male", grammyAwards: 0, countryOfOrigin: "Australia" },
    { name: "Giveon", genre: "R&B", debutYear: "2018", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Latto", genre: "Hip Hop", debutYear: "2016", gender: "Female", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Coi Leray", genre: "Hip Hop", debutYear: "2017", gender: "Female", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Don Toliver", genre: "Hip Hop", debutYear: "2017", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Baby Keem", genre: "Hip Hop", debutYear: "2017", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Yeat", genre: "Hip Hop", debutYear: "2018", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Central Cee", genre: "Hip Hop", debutYear: "2017", gender: "Male", grammyAwards: 0, countryOfOrigin: "UK" },
    { name: "Tems", genre: "R&B", debutYear: "2018", gender: "Female", grammyAwards: 0, countryOfOrigin: "Nigeria" },
    { name: "Rema", genre: "Afrobeats", debutYear: "2019", gender: "Male", grammyAwards: 0, countryOfOrigin: "Nigeria" },
    { name: "Burna Boy", genre: "Afrobeats", debutYear: "2012", gender: "Male", grammyAwards: 1, countryOfOrigin: "Nigeria" },
    { name: "Wizkid", genre: "Afrobeats", debutYear: "2009", gender: "Male", grammyAwards: 1, countryOfOrigin: "Nigeria" },
    { name: "Joni Mitchell", genre: "Folk", debutYear: "1968", gender: "Female", grammyAwards: 9, countryOfOrigin: "Canada" },
    { name: "Fleetwood Mac", genre: "Rock", debutYear: "1967", gender: "Mixed", grammyAwards: 1, countryOfOrigin: "UK/USA" },
    { name: "Stevie Nicks", genre: "Rock", debutYear: "1981", gender: "Female", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Eagles", genre: "Rock", debutYear: "1971", gender: "Male", grammyAwards: 6, countryOfOrigin: "USA" },
    { name: "Billy Joel", genre: "Pop", debutYear: "1971", gender: "Male", grammyAwards: 5, countryOfOrigin: "USA" },
    { name: "Guns N' Roses", genre: "Rock", debutYear: "1987", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Bon Jovi", genre: "Rock", debutYear: "1984", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Journey", genre: "Rock", debutYear: "1975", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Def Leppard", genre: "Rock", debutYear: "1980", gender: "Male", grammyAwards: 0, countryOfOrigin: "UK" },
    // Adding final 50 of 150 artists (101-150)
    { name: "The Police", genre: "Rock", debutYear: "1978", gender: "Male", grammyAwards: 6, countryOfOrigin: "UK" },
    { name: "Sting", genre: "Rock", debutYear: "1985", gender: "Male", grammyAwards: 17, countryOfOrigin: "UK" },
    { name: "Phil Collins", genre: "Pop", debutYear: "1981", gender: "Male", grammyAwards: 7, countryOfOrigin: "UK" },
    { name: "Genesis", genre: "Rock", debutYear: "1969", gender: "Male", grammyAwards: 1, countryOfOrigin: "UK" },
    { name: "Eric Clapton", genre: "Blues", debutYear: "1963", gender: "Male", grammyAwards: 17, countryOfOrigin: "UK" },
    { name: "Santana", genre: "Rock", debutYear: "1969", gender: "Male", grammyAwards: 10, countryOfOrigin: "Mexico/USA" },
    { name: "Tom Petty", genre: "Rock", debutYear: "1976", gender: "Male", grammyAwards: 3, countryOfOrigin: "USA" },
    { name: "Aerosmith", genre: "Rock", debutYear: "1973", gender: "Male", grammyAwards: 4, countryOfOrigin: "USA" },
    { name: "Kiss", genre: "Rock", debutYear: "1974", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Run-D.M.C.", genre: "Hip Hop", debutYear: "1983", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Beastie Boys", genre: "Hip Hop", debutYear: "1981", gender: "Male", grammyAwards: 3, countryOfOrigin: "USA" },
    { name: "Public Enemy", genre: "Hip Hop", debutYear: "1985", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "LL Cool J", genre: "Hip Hop", debutYear: "1985", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Nas", genre: "Hip Hop", debutYear: "1994", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Wu-Tang Clan", genre: "Hip Hop", debutYear: "1993", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "OutKast", genre: "Hip Hop", debutYear: "1994", gender: "Male", grammyAwards: 6, countryOfOrigin: "USA" },
    { name: "Missy Elliott", genre: "Hip Hop", debutYear: "1997", gender: "Female", grammyAwards: 4, countryOfOrigin: "USA" },
    { name: "Lauryn Hill", genre: "R&B", debutYear: "1998", gender: "Female", grammyAwards: 8, countryOfOrigin: "USA" },
    { name: "Mary J. Blige", genre: "R&B", debutYear: "1992", gender: "Female", grammyAwards: 9, countryOfOrigin: "USA" },
    { name: "TLC", genre: "R&B", debutYear: "1992", gender: "Female", grammyAwards: 4, countryOfOrigin: "USA" },
    { name: "Destiny's Child", genre: "R&B", debutYear: "1997", gender: "Female", grammyAwards: 3, countryOfOrigin: "USA" },
    { name: "Amy Winehouse", genre: "R&B", debutYear: "2003", gender: "Female", grammyAwards: 5, countryOfOrigin: "UK" },
    { name: "Frank Ocean", genre: "R&B", debutYear: "2011", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Miguel", genre: "R&B", debutYear: "2010", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Janelle Monáe", genre: "R&B", debutYear: "2007", gender: "Non-binary", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Solange", genre: "R&B", debutYear: "2002", gender: "Female", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "FKA twigs", genre: "Electronic", debutYear: "2012", gender: "Female", grammyAwards: 0, countryOfOrigin: "UK" },
    { name: "Grimes", genre: "Electronic", debutYear: "2010", gender: "Female", grammyAwards: 0, countryOfOrigin: "Canada" },
    { name: "Charli XCX", genre: "Pop", debutYear: "2013", gender: "Female", grammyAwards: 0, countryOfOrigin: "UK" },
    { name: "Carly Rae Jepsen", genre: "Pop", debutYear: "2008", gender: "Female", grammyAwards: 0, countryOfOrigin: "Canada" },
    { name: "Maggie Rogers", genre: "Pop", debutYear: "2016", gender: "Female", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Troye Sivan", genre: "Pop", debutYear: "2014", gender: "Male", grammyAwards: 0, countryOfOrigin: "Australia" },
    { name: "Avicii", genre: "Electronic", debutYear: "2010", gender: "Male", grammyAwards: 0, countryOfOrigin: "Sweden" },
    { name: "David Guetta", genre: "Electronic", debutYear: "2002", gender: "Male", grammyAwards: 2, countryOfOrigin: "France" },
    { name: "Swedish House Mafia", genre: "Electronic", debutYear: "2008", gender: "Male", grammyAwards: 0, countryOfOrigin: "Sweden" },
    { name: "Disclosure", genre: "Electronic", debutYear: "2012", gender: "Male", grammyAwards: 0, countryOfOrigin: "UK" },
    { name: "Flume", genre: "Electronic", debutYear: "2012", gender: "Male", grammyAwards: 1, countryOfOrigin: "Australia" },
    { name: "ODESZA", genre: "Electronic", debutYear: "2012", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Muse", genre: "Rock", debutYear: "1999", gender: "Male", grammyAwards: 2, countryOfOrigin: "UK" },
    { name: "The Killers", genre: "Rock", debutYear: "2004", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Linkin Park", genre: "Rock", debutYear: "2000", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "System of a Down", genre: "Metal", debutYear: "1998", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Slipknot", genre: "Metal", debutYear: "1999", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Rage Against the Machine", genre: "Rock", debutYear: "1992", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Soundgarden", genre: "Rock", debutYear: "1988", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Pearl Jam", genre: "Rock", debutYear: "1991", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" },
    { name: "Alice in Chains", genre: "Rock", debutYear: "1990", gender: "Male", grammyAwards: 0, countryOfOrigin: "USA" },
    { name: "Nine Inch Nails", genre: "Industrial", debutYear: "1989", gender: "Male", grammyAwards: 2, countryOfOrigin: "USA" },
    { name: "Beck", genre: "Alternative", debutYear: "1993", gender: "Male", grammyAwards: 8, countryOfOrigin: "USA" },
    { name: "St. Vincent", genre: "Alternative", debutYear: "2007", gender: "Female", grammyAwards: 3, countryOfOrigin: "USA" },
    { name: "The Strokes", genre: "Rock", debutYear: "2001", gender: "Male", grammyAwards: 1, countryOfOrigin: "USA" }
];