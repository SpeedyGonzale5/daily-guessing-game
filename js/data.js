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
    }
]; 