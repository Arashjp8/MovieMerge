export interface Movie {
  _id: string;
  title: string;
  vote_average: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  release_date: string;
  original_language: string;
  genres: string[];
  cast: { id: string; role: string }[];
  crew: { id: string; role: string }[];
  __v: number;
}

export interface IMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const movies: Movie[] = [
  {
    _id: "653346-kingdom-of-the-planet-of-the-apes",
    title: "Kingdom of the Planet of the Apes",
    vote_average: 69,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
    overview:
      "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    release_date: "05/10/2024",
    original_language: "US",
    genres: ["Science Fiction", "Adventure", "Action"],
    cast: [
      { id: "1586047-owen-teague", role: "Noa" },
      { id: "2146942-freya-allan", role: "Nova / Mae" },
      { id: "79072-kevin-durand", role: "Proximus Caesar" },
      { id: "1444816-peter-macon", role: "Raka" },
      { id: "3905-william-h-macy", role: "Trevathan" },
      { id: "966554-eka-darville", role: "Sylva" },
      { id: "1394427-travis-jeffery", role: "Anaya" },
      { id: "2435321-lydia-peckham", role: "Soona" },
      { id: "136295-neil-sandilands", role: "Koro" },
    ],
    crew: [
      { id: "67802-rick-jaffa", role: "Characters" },
      { id: "67803-amanda-silver", role: "Characters" },
      { id: "1179066-wes-ball", role: "Director" },
      { id: "507-josh-friedman", role: "Writer" },
    ],
    __v: 0,
  },
  {
    _id: "929590-civil-war",
    title: "Civil War",
    vote_average: 71,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
    overview:
      "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    release_date: "04/11/2024",
    original_language: "GB",
    genres: ["War", "Action", "Drama"],
    cast: [
      { id: "205-kirsten-dunst", role: "Lee" },
      { id: "52583-wagner-moura", role: "Joel" },
      { id: "1683343-cailee-spaeny", role: "Jessie" },
      { id: "196179-stephen-mckinley-henderson", role: "Sammy" },
      { id: "109019-nelson-lee", role: "Tony" },
      { id: "17039-nick-offerman", role: "President" },
      { id: "1385813-jefferson-white", role: "Dave" },
      { id: "2001956-evan-lai", role: "Bohai" },
      { id: "1431398-vince-pisani", role: "Concierge" },
    ],
    crew: [{ id: "2036-alex-garland", role: "Director, Writer" }],
    __v: 0,
  },
  {
    _id: "823464-godzilla-x-kong-the-new-empire",
    title: "Godzilla x Kong: The New Empire",
    vote_average: 72,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/xRd1eJIDe7JHO5u4gtEYwGn5wtf.jpg",
    overview:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    poster_path:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    release_date: "03/29/2024",
    original_language: "US",
    genres: ["Science Fiction", "Action", "Adventure"],
    cast: [
      { id: "15556-rebecca-hall", role: "Dr. Ilene Andrews" },
      { id: "226366-brian-tyree-henry", role: "Bernie Hayes" },
      { id: "221018-dan-stevens", role: "Trapper" },
      { id: "2948491-kaylee-hottle", role: "Jia" },
      { id: "60416-alex-ferns", role: "Mikael" },
      { id: "123701-fala-chen", role: "Iwi Queen" },
      { id: "15298-rachel-house", role: "Hampton" },
      { id: "2896645-ron-smyck", role: "Harris" },
      { id: "1984017-chantelle-jamieson", role: "Jayne" },
    ],
    crew: [
      { id: "98631-adam-wingard", role: "Director, Story" },
      { id: "83858-simon-barrett", role: "Screenplay, Story" },
      { id: "1706-terry-rossio", role: "Screenplay, Story" },
      { id: "1147923-jeremy-slater", role: "Screenplay" },
    ],
    __v: 0,
  },
  {
    _id: "719221-tarot",
    title: "Tarot",
    vote_average: 64,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/otfoeC96neoOdA4HqsX06OWuzE9.jpg",
    overview:
      "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
    release_date: "05/03/2024",
    original_language: "US",
    genres: ["Horror", "Thriller"],
    cast: [
      { id: "2480853-harriet-slater", role: "Haley" },
      { id: "2120814-adain-bradley", role: "Grant" },
      { id: "2749024-avantika", role: "Paige" },
      { id: "1649152-jacob-batalon", role: "Paxton" },
      { id: "1847915-humberly-gonzalez", role: "Madeline" },
      { id: "1849954-wolfgang-novogratz", role: "Lucas" },
      { id: "2388831-larsen-thompson", role: "Elise" },
      { id: "933272-olwen-fouere", role: "Alma Astryn" },
      { id: "1541593-suncica-milanovic", role: "Astrologer" },
    ],
    crew: [
      { id: "1651531-spenser-cohen", role: "Director, Screenplay" },
      { id: "2093324-anna-halberg", role: "Director, Screenplay" },
      { id: "2692445-nicholas-adams", role: "Writer" },
    ],
    __v: 0,
  },
  {
    _id: "614933-atlas",
    title: "Atlas",
    vote_average: 67,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg",
    overview:
      "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
    release_date: "05/24/2024",
    original_language: "IR",
    genres: ["Science Fiction", "Action"],
    cast: [
      { id: "16866-jennifer-lopez", role: "Atlas Shepherd" },
      { id: "1489211-simu-liu", role: "Harlan Shepherd" },
      { id: "1225953-sterling-k-brown", role: "Colonel Elias Banks" },
      { id: "1970662-gregory-james-cohan", role: "Smith / Dhiib Pilot" },
      { id: "1432064-abraham-popoola", role: "Casca Decius" },
      { id: "177231-lana-parrilla", role: "Val Shepherd" },
      { id: "2983-mark-strong", role: "General Jake Boothe" },
      { id: "3314044-briella-guiza", role: "Young Atlas Shepherd" },
      { id: "2504388-adia-smith-eriksson", role: "Ranger West" },
    ],
    crew: [
      { id: "132876-brad-peyton", role: "Director" },
      { id: "1226128-aron-eli-coleite", role: "Writer" },
      { id: "1903055-leo-sardarian", role: "Writer" },
    ],
    __v: 0,
  },
  {
    _id: "437342-the-first-omen",
    title: "The First Omen",
    vote_average: 68,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/tkHQ7tnYYUEnqlrKuhufIsSVToU.jpg",
    overview:
      "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
    poster_path:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/uGyiewQnDHPuiHN9V4k2t9QBPnh.jpg",
    release_date: "04/05/2024",
    original_language: "US",
    genres: ["Horror"],
    cast: [
      { id: "1472584-nell-tiger-free", role: "Margaret" },
      { id: "202032-ralph-ineson", role: "Father Brennan" },
      { id: "27396-sonia-braga", role: "Sister Silva" },
      { id: "2440-bill-nighy", role: "Cardinal Lawrence" },
      { id: "2264673-maria-caballero", role: "Luz" },
      { id: "4481145-nicole-sorace", role: "Carlita" },
      { id: "1260004-tawfeek-barhom", role: "Father Gabriel" },
      { id: "4391-charles-dance", role: "Father Harris" },
      { id: "2733504-ishtar-currie-wilson", role: "Sister Anjelica" },
    ],
    crew: [
      { id: "1706480-arkasha-stevenson", role: "Director, Screenplay" },
      { id: "11834-david-seltzer", role: "Characters" },
      { id: "2381662-keith-thomas", role: "Screenplay" },
      { id: "1814636-tim-smith", role: "Screenplay" },
      { id: "1592196-ben-jacoby", role: "Story" },
    ],
    __v: 0,
  },
  {
    _id: "746036-the-fall-guy",
    title: "The Fall Guy",
    vote_average: 73,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
    overview:
      "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
    release_date: "05/03/2024",
    original_language: "US",
    genres: ["Action", "Comedy", "Crime", "Mystery", "Romance"],
    cast: [
      { id: "30614-ryan-gosling", role: "Colt Seavers" },
      { id: "5081-emily-blunt", role: "Jody Moreno" },
      { id: "27428-aaron-taylor-johnson", role: "Tom Ryder" },
      { id: "1278487-hannah-waddingham", role: "Gail Meyer" },
      { id: "20374-teresa-palmer", role: "Iggy Starr" },
      { id: "1381186-stephanie-hsu", role: "Alma Milan" },
      { id: "1447932-winston-duke", role: "Dan Tucker" },
      { id: "2295806-ben-knight", role: "Dressler" },
      { id: "3054747-matuse-paz", role: "Doone" },
    ],
    crew: [
      { id: "40684-david-leitch", role: "Director" },
      { id: "1239407-drew-pearce", role: "Screenplay" },
    ],
    __v: 0,
  },
  {
    _id: "940721-1-0",
    title: "Godzilla Minus One",
    vote_average: 77,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
    overview:
      "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
    release_date: "11/03/2023",
    original_language: "JP",
    genres: ["Science Fiction", "Horror", "Action"],
    cast: [
      { id: "225730", role: "Koichi Shikishima" },
      { id: "1516266", role: "Noriko Oishi" },
      { id: "1161474", role: "Shiro Mizushima" },
      { id: "111640", role: "Sosaku Tachibana" },
      { id: "111691", role: "Kenji Noda" },
      { id: "100766", role: "Sumiko Ota" },
      { id: "121716", role: "Yoji Akitsu" },
      { id: "4389435", role: "Akiko" },
      { id: "4389437", role: "Captain Tatsuo Hotta" },
    ],
    crew: [{ id: "43652", role: "Director, Screenplay" }],
    __v: 0,
  },
  {
    _id: "882059-boy-kills-world",
    title: "Boy Kills World",
    vote_average: 69,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/1m1rXopfNDVL3UMiv6kriYaJ3yE.jpg",
    overview:
      "When his family is murdered, a deaf-mute named Boy escapes to the jungle and is trained by a mysterious shaman to repress his childish imagination and become an instrument of death.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/25JskXmchcYwj3jHRmcPm738MpB.jpg",
    release_date: "04/26/2024",
    original_language: "US",
    genres: ["Action", "Thriller", "Crime", "Science Fiction"],
    cast: [
      { id: "137905-bill-skarsgard", role: "Boy" },
      { id: "1427680-jessica-rothe", role: "June27" },
      { id: "70904-michelle-dockery", role: "Melanie Van Der Koy" },
      { id: "224197-brett-gelman", role: "Gideon Van Der Koy" },
      { id: "1237603-isaiah-mustafa", role: "Benny" },
      { id: "142019-yayan-ruhian", role: "Shaman" },
      { id: "1696015-cameron-crovetti", role: "Young Boy" },
      { id: "1696014-nicholas-crovetti", role: "Young Boy" },
      { id: "2449432-quinn-copeland", role: "Mina" },
    ],
    crew: [
      { id: "1275319-moritz-mohr", role: "Director" },
      { id: "1544460-arend-remmers", role: "Writer" },
      { id: "1979667-tyler-burton-smith", role: "Writer" },
    ],
    __v: 0,
  },
  {
    _id: "1219685-un-p-re-id-al",
    title: "",
    vote_average: 59,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/iafs5DG5fGq7ef0acl3xlX4BFrs.jpg",
    overview:
      "We don't have an overview translated in English. Help us expand our database by adding one.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/4xJd3uwtL1vCuZgEfEc8JXI9Uyx.jpg",
    release_date: "04/21/2024",
    original_language: "BE",
    genres: ["Drama", "TV Movie"],
    cast: [
      { id: "591239-laurent-gerra", role: "Michel" },
      { id: "30641-eddy-mitchell", role: "Jeff" },
      { id: "2314084-laure-lucille-simon", role: "Florence Pasquier" },
      { id: "28857-jerome-kircher", role: "Max" },
      { id: "3779287-tess-barthelemy", role: "Christelle" },
      { id: "122420-berangere-bonvoisin", role: "Sylvie" },
      { id: "4662283-denez-raoul", role: "Paul" },
      { id: "4662286-alice-aliaga", role: "Karine" },
      { id: "2407-rufus", role: "L'Evêque" },
    ],
    crew: [
      { id: "32513-helene-fillieres", role: "Director, Screenplay" },
      { id: "78468-claude-scasso", role: "Screenplay" },
    ],
    __v: 0,
  },
  {
    _id: "786892-furiosa-a-mad-max-saga",
    title: "Furiosa: A Mad Max Saga",
    vote_average: 77,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/shrwC6U8Bkst9T9J7fr1A50n6x6.jpg",
    overview:
      "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    release_date: "05/23/2024",
    original_language: "AU",
    genres: ["Action", "Adventure", "Science Fiction"],
    cast: [
      { id: "1397778-anya-taylor-joy", role: "Imperator Furiosa" },
      { id: "74568-chris-hemsworth", role: "Dementus" },
      { id: "52891-tom-burke", role: "Praetorian Jack" },
      { id: "2431565-alyla-browne", role: "Young Furiosa" },
      { id: "148899-george-shevtsov", role: "The History Man" },
      { id: "75122-lachy-hulme", role: "Immortan Joe / Rizzdale Pell" },
      { id: "102603-john-howard", role: "The People Eater" },
      { id: "4441956-charlee-fraser", role: "Mary Jabassa" },
      { id: "59117-angus-sampson", role: "Organic Mechanic" },
    ],
    crew: [
      { id: "20629-george-miller", role: "Director, Writer" },
      { id: "1027146-nico-lathouris", role: "Writer" },
    ],
    __v: 0,
  },
  {
    _id: "1011985-kung-fu-panda-4",
    title: "Kung Fu Panda 4",
    vote_average: 71,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/kYgQzzjNis5jJalYtIHgrom0gOx.jpg",
    overview:
      "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    poster_path:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    release_date: "03/08/2024",
    original_language: "US",
    genres: ["Animation", "Action", "Family", "Comedy", "Fantasy"],
    cast: [
      { id: "70851-jack-black", role: "Po (voice)" },
      { id: "1625558-awkwafina", role: "Zhen (voice)" },
      { id: "19492-viola-davis", role: "The Chameleon (voice)" },
      { id: "4483-dustin-hoffman", role: "Shifu (voice)" },
      { id: "17419-bryan-cranston", role: "Li (voice)" },
      { id: "20904-james-hong", role: "Mr. Ping (voice)" },
      { id: "6972-ian-mcshane", role: "Tai Lung (voice)" },
      { id: "690-ke-huy-quan", role: "Han (voice)" },
      { id: "1319469-ronny-chieng", role: "Fish (voice)" },
    ],
    crew: [
      { id: "64151-mike-mitchell", role: "Director" },
      { id: "582919-darren-lemke", role: "Writer" },
      { id: "57743-glenn-berger", role: "Writer" },
      { id: "57744-jonathan-aibel", role: "Writer" },
    ],
    __v: 0,
  },
  {
    _id: "693134-dune-part-two",
    title: "Dune: Part Two",
    vote_average: 82,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    overview:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    poster_path:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg",
    release_date: "03/01/2024",
    original_language: "US",
    genres: ["Science Fiction", "Adventure"],
    cast: [
      { id: "1190668-timothee-chalamet", role: "Paul Atreides" },
      { id: "505710-zendaya", role: "Chani" },
      { id: "933238-rebecca-ferguson", role: "Jessica" },
      { id: "3810-javier-bardem", role: "Stilgar" },
      { id: "16851-josh-brolin", role: "Gurney Halleck" },
      { id: "86654-austin-butler", role: "Feyd-Rautha" },
      { id: "1373737-florence-pugh", role: "Princess Irulan" },
      { id: "543530-dave-bautista", role: "Beast Rabban" },
      { id: "4690-christopher-walken", role: "Emperor" },
    ],
    crew: [
      { id: "137427-denis-villeneuve", role: "Director, Screenplay" },
      { id: "12506-frank-herbert", role: "Novel" },
      { id: "564940-jon-spaihts", role: "Screenplay" },
    ],
    __v: 0,
  },
  {
    _id: "1041613-immaculate",
    title: "Immaculate",
    vote_average: 63,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
    overview:
      "An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a living nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/fdZpvODTX5wwkD0ikZNaClE4AoW.jpg",
    release_date: "03/22/2024",
    original_language: "US",
    genres: ["Horror", "Mystery", "Thriller"],
    cast: [
      { id: "115440-sydney-sweeney", role: "Sister Cecilia" },
      { id: "1340020-alvaro-morte", role: "Father Sal Tedeschi" },
      { id: "1822392-benedetta-porcaroli", role: "Sister Gwen" },
      { id: "1510167-dora-romano", role: "Mother Superior" },
      { id: "128227-giorgio-colangeli", role: "Cardinal Franco Merola" },
      { id: "1355967-simona-tabasco", role: "Sister Mary" },
      { id: "128225-giampiero-judica", role: "Dr. Gallo" },
      { id: "81510-niccolo-senni", role: "Customs Official" },
      { id: "4606018-giulia-heathfield-di-renzi", role: "Sister Isabelle" },
    ],
    crew: [
      { id: "856440-michael-mohan", role: "Director" },
      { id: "3762987-andrew-lobel", role: "Screenplay" },
    ],
    __v: 0,
  },
  {
    _id: "660360",
    title: "Noryang: Deadly Sea",
    vote_average: 72,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/42rp8MkwOEFA62wwgKcuOpP8Fjb.jpg",
    overview:
      "In the winter of 1598, the seven-year Imjin War nears an end as the Japanese Wae invaders prepare to withdraw from Joseon. Admiral Yi Sun-shin leads an allied fleet of Joseon and Ming ships to annihilate the Wae army. Joseon, Ming, and Wae forces clash at Noryang Strait, the deadly sea where Admiral Yi fights his last valiant battle.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/wFAe7gA513Pi2meI4ECwf6YEKR1.jpg",
    release_date: "12/20/2023",
    original_language: "KR",
    genres: ["Action", "History", "Drama", "War"],
    cast: [
      { id: "75912", role: "Admiral Yi Sun-Shin" },
      { id: "229752", role: "Shimazu Yoshihiro" },
      { id: "83682", role: "Chen Lin" },
      { id: "83637", role: "Deng Zilong" },
      { id: "2159394", role: "Junsa" },
      { id: "1916075", role: "Arima Harunobu" },
      { id: "1346897", role: "Konishi Yukinaga" },
      { id: "141857", role: "Song Yeo-jong" },
      { id: "1591491", role: "Yi Hoe" },
    ],
    crew: [
      { id: "1049134", role: "Director, Writer" },
      { id: "4187974-lee-na-ra", role: "Writer" },
      { id: "1293651-yoon-hong-gi", role: "Writer" },
    ],
    __v: 0,
  },
  {
    _id: "1022789-inside-out-2",
    title: "Inside Out 2",
    vote_average: 0,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/qjoX7hl721FOiyeHsDkeQ6rFVLl.jpg",
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/xeqXXTE1Cd3qNaAEOT6qbhhCsgJ.jpg",
    release_date: "06/14/2024",
    original_language: "US",
    genres: ["Animation", "Family", "Drama", "Adventure", "Comedy"],
    cast: [
      { id: "56322-amy-poehler", role: "Joy (voice)" },
      { id: "1903874-maya-hawke", role: "Anxiety (voice)" },
      { id: "3020876-kensington-tallman", role: "Riley (voice)" },
      { id: "51998-liza-lapira", role: "Disgust (voice)" },
      { id: "25147-tony-hale", role: "Fear (voice)" },
      { id: "59258-lewis-black", role: "Anger (voice)" },
      { id: "169200-phyllis-smith", role: "Sadness (voice)" },
      { id: "2195140-ayo-edebiri", role: "Envy (voice)" },
      { id: "1469135-lilimar", role: "Valentina (voice)" },
    ],
    crew: [
      { id: "182001-kelsey-mann", role: "Director, Story" },
      { id: "1457025-meg-lefauve", role: "Screenplay, Story" },
      { id: "1888448-dave-holstein", role: "Screenplay" },
    ],
    __v: 0,
  },
  {
    _id: "748783-the-garfield-movie",
    title: "The Garfield Movie",
    vote_average: 65,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/vWzJDjLPmycnQ42IppEjMpIhrhc.jpg",
    overview:
      "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
    release_date: "05/24/2024",
    original_language: "US",
    genres: ["Animation", "Comedy", "Family", "Adventure"],
    cast: [
      { id: "73457-chris-pratt", role: "Garfield (voice)" },
      { id: "2231-samuel-l-jackson", role: "Vic (voice)" },
      { id: "1278487-hannah-waddingham", role: "Jinx (voice)" },
      { id: "10182-ving-rhames", role: "Otto (voice)" },
      { id: "3292-nicholas-hoult", role: "Jon Arbuckle (voice)" },
      { id: "1093919-cecily-strong", role: "Marge Malone (voice)" },
      { id: "210172-harvey-guillen", role: "Odie (voice)" },
      { id: "21422-brett-goldstein", role: "Roland (voice)" },
      { id: "1564920-bowen-yang", role: "Nolan (voice)" },
    ],
    crew: [
      { id: "56336-jim-davis", role: "Characters" },
      { id: "61411-mark-dindal", role: "Director" },
      { id: "4174087-paul-a-kaplan", role: "Screenplay" },
      { id: "11-david-reynolds", role: "Screenplay" },
      { id: "1705227-mark-torgove", role: "Screenplay" },
    ],
    __v: 0,
  },
  {
    _id: "940551-migration",
    title: "Migration",
    vote_average: 74,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
    overview:
      "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
    release_date: "12/22/2023",
    original_language: "US",
    genres: ["Animation", "Action", "Adventure", "Comedy", "Family"],
    cast: [
      { id: "466505-kumail-nanjiani", role: "Mack Mallard (voice)" },
      { id: "9281-elizabeth-banks", role: "Pam Mallard (voice)" },
      { id: "1736671-caspar-jennings", role: "Dax Mallard (voice)" },
      { id: "4031156-tresi-gazal", role: "Gwen Mallard (voice)" },
      { id: "1625558-awkwafina", role: "Chump (voice)" },
      { id: "10556-carol-kane", role: "Erin (voice)" },
      { id: "298410-keegan-michael-key", role: "Delroy (voice)" },
      { id: "518-danny-devito", role: "Uncle Dan (voice)" },
      { id: "139075-david-mitchell", role: "GooGoo (voice)" },
    ],
    crew: [
      { id: "1092607-benjamin-renner", role: "Director, Story" },
      { id: "17735-mike-white", role: "Screenplay, Story" },
    ],
    __v: 0,
  },
  {
    _id: "996154-black-lotus",
    title: "Black Lotus",
    vote_average: 65,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/hvqNAz3cq48sh9GKxu4lPiogfBo.jpg",
    overview:
      "An ex-special forces operative wages a one man war through the streets of Amsterdam to rescue his friend's daughter from the local crime syndicate.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/y3AeW200hqGLxoPyHMDHpzudylz.jpg",
    release_date: "04/13/2023",
    original_language: "NL",
    genres: ["Action", "Crime", "Mystery", "Thriller"],
    cast: [
      { id: "1424610-rico-verhoeven", role: "Matteo Donner" },
      { id: "81685-frank-grillo", role: "Saban" },
      { id: "11263-peter-franzen", role: "Paul" },
      { id: "141876-roland-moller", role: "John" },
      { id: "929608-magnus-samuelsson", role: "Ber" },
      { id: "1011142-rona-lee-shim-on", role: "Shira" },
      { id: "220990-kevin-janssens", role: "Fischer" },
      { id: "1402606-marie-dompnier", role: "Helene" },
      { id: "1997433-simon-wan", role: "Lo" },
    ],
    crew: [
      { id: "100234-todor-chapkanov", role: "Director" },
      { id: "3612632-tad-daggerhart", role: "Writer" },
    ],
    __v: 0,
  },
  {
    _id: "1096197-no-way-up",
    title: "No Way Up",
    vote_average: 64,
    backdrop_path:
      "https://media.themoviedb.org/t/p/w250_and_h141_face/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
    overview:
      "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
    poster_path:
      "https://media.themoviedb.org/t/p/w116_and_h174_face/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
    release_date: "02/12/2024",
    original_language: "GB",
    genres: ["Action", "Horror", "Thriller"],
    cast: [
      { id: "17782-colm-meaney", role: "Brandon" },
      { id: "127164-phyllis-logan", role: "Mardy" },
      { id: "2613589-sophie-mcintosh", role: "Ava" },
      { id: "1461462-will-attenborough", role: "Kyle" },
      { id: "3031970-jeremias-amoore", role: "Jed" },
      { id: "2573915-manuel-pacific", role: "Danilo" },
      { id: "3952003-grace-nettle", role: "Rosa" },
      { id: "152707-james-carroll-jordan", role: "Hank" },
      { id: "1809488-david-j-biscoe", role: "Plane Passenger" },
    ],
    crew: [
      { id: "56533-claudio-fah", role: "Director" },
      { id: "1346142-andy-mayson", role: "Writer" },
    ],
    __v: 0,
  },
];
