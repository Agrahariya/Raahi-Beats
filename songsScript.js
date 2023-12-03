let songsArray = [
  {
    song: "8 Parche (Punjabi Hit)",
    url: "./songs/8 parche.m4a",
    image: "./songs/8-parche.jpg",
    movie: "",
    artist: "Baani Sandhu , Gur Sidhu",
    year: "2019",
    category: "punjabi",
  },
  {
    song: "Aashiq Banaya Aapne",
    url: "./songs/ashiq.m4a",
    image: "./songs/Hate-Story-IV-Hindi-2018-20180223-500x500.jpg",
    movie: "",
    artist: "Himesh Reshammiya , Neha Kakkar",
    year: "2019",
  },
  {
    song: "Afghan Jalebi (Ya Baba)",
    url: "./songs/Dance/Phantom.m4a",
    image: "./songs/Dance/Phantom-Hindi-2015-500x500.jpg",
    movie: "",
    artist: "Pritam, Asrar, Akhtar Channal",
    year: "2015",
  },
  {
    song: "Apna Bana Le",
    url: "./songs/apna bana le.m4a",
    image: "./songs/Bhediya-Hindi-2023-20230927155213-500x500.jpg",
    movie: "",
    artist: "Sachin-Jigar , Arijit Singh",
    year: "2023",
  },
  {
    song: "Apna Time Aayega",
    url: "./songs/Apna-Time-Aayega.m4a",
    image: "./songs/Apna-Time-Aayega.jpg",
    movie: "",
    artist: "Ranveer Singh , Dub Sharma , DIVINE",
    year: "2020",
  },
  {
    song: "Baby",
    url: "./songs/baby.m4a",
    image: "./songs/My-World-2-0-English-2010-20200606003742-500x500.jpg",
    movie: "",
    artist: "Justin Bieber",
    year: "2022",
  },
  {
    song: "Barish Mein Tum",
    url: "./songs/Barish.m4a",
    image: "./songs/Baarish-Mein-Tum-Hindi-2022-20220902211010-500x500.jpg",
    movie: "",
    artist: "Neha Kakkar , Rohanpreet Singh , Harsh Kargeti",
    year: "2022",
  },
  {
    song: "Bhool Bhulaiyaa 2 Title Track Remix",
    url: "./songs/party/Bhool.m4a",
    image:
      "./songs/party/Bhool-Bhulaiyaa-2-Title-Track-From-Bhool-Bhulaiyaa-2-Hindi-2022-20220502201002-500x500.jpg",
    movie: "",
    artist: "Yogii, Neeraj Shridhar, Mellow D, Bob, Pritam, Tanishk Bagchi",
    year: "2022",
  },
  {
    song: "Bom Diggy Diggy",
    url: "./songs/party/Sonu.m4a",
    image:
      "./songs/party/Sonu-Ke-Titu-Ki-Sweety-Hindi-2018-20180214153942-500x500.jpg",
    movie: "Sonu Ke Titu Ki Sweety",
    artist: "Jasmin Walia, Zack Knight",
    year: "2018",
  },
  {
    song: "Chal Tere Ishq Mein",
    url: "./songs/Chal Tere Ishq Mein.m4a",
    image: "./songs/Chal-Tere-Ishq-Mein.jpg",
    movie: "",
    artist:
      "Mithoon , Neeti Mohan , Vishal Mishra , Shehnaz Akhtar , Sahil Akhtar",
    year: "2023",
  },
  {
    song: "Chaleya",
    url: "./songs/chaleya.m4a",
    image: "./songs/chaleya.jpg",
    movie: "Chaleya",
    artist: " Anirudh Ravichander, Arijit Singh, Shilpa Rao",
    year: "2023",
  },
  {
    song: "Chammak Challo",
    url: "./songs/Dance/Ra-One.m4a",
    image: "./songs/Dance/Ra-One-Hindi-2011-500x500.jpg",
    movie: "",
    artist: "Vishal & Shekhar, Akon",
    year: "2011",
  },
  {
    song: "Dance Like(Punjabi Hit)",
    url: "./songs/Dance/Dance.m4a",
    image: "./songs/Dance/Dance-Like-Punjabi-2019-20191130051515-500x500.jpg",
    movie: "",
    artist: "Harrdy Sandhu, Jaani ",
    year: "2019",
    category: "punjabi",
  },
  {
    song: "Desi Kalakaar",
    url: "./songs/Desi-Kalakaar.m4a",
    image: "./songs/Desi-Kalakaar.jpg",
    movie: "",
    artist: "Yo Yo Honey Singh",
    year: "2014",
  },
  {
    song: "Dilbar",
    url: "./songs/dilbar.m4a",
    image: "./songs/Satyameva-Jayate-Hindi-2018-20180801-500x500.jpg",
    movie: "",
    artist: "Amar Arshi , Badshah , Neha Kakkar",
    year: "2017",
  },
  {
    song: "Diwali",
    url: "./songs/diwali.m4a",
    image: "./songs/diwali.jpg",
    movie: "Apurva",
    artist: "Vishal Mishra",
    year: "2023",
  },
  {
    song: "Gaddi Kaali",
    url: "./songs/gaddi kaali.m4a",
    image: "./songs/Gaadi-Kaali-Punjabi-2023-20231005101228-500x500.jpg",
    movie: "",
    artist: "Neha Kakkar , Rohanpreet Singh , Saga Sounds , Raees",
    year: "2023",
  },
  {
    song: "Ghungroo",
    url: "./songs/party/Stree.m4a",
    image: "./songs/party/War-Hindi-2019-20191001104931-500x500.jpg",
    movie: "War",
    artist: "Vishal & Shekhar , Arijit Singh , Shilpa Rao , Kumaar",
    year: "2019",
  },
  {
    song: "Hass Hass (Punjabi Hit)",
    url: "./songs/HassHass.m4a",
    image: "./songs/HassHass.jpg",
    movie: "",
    artist: "Diljit Dosanjh , Sia , Greg Kurstin",
    year: "2023",
    category: "punjabi",
  },
  {
    song: "Hawa Banke",
    url: "./songs/Hawa-Banke.m4a",
    image: "./songs/Hawa-Banke.jpg",
    movie: "",
    artist: "Darshan Raval , Simran Choudhary",
    year: "2019",
  },
  {
    song: "Heeriye",
    url: "./songs/heeriye.m4a",
    image:
      "./songs/Heeriye-feat-Arijit-Singh-Hindi-2023-20230928050405-500x500.jpg",
    movie: "",
    artist: "Dulquer Salmaan , Jasleen Royal , Arijit Singh",
    year: "2023",
  },
  {
    song: "Issey Kehte Hain Hip Hop",
    url: "./songs/Issey-Kehte-Hain-Hip-Hop-Hindi.m4a",
    image: "./songs/Issey-Kehte-Hain-Hip-Hop-Hindi-2014-500x500.jpg",
    movie: "",
    artist: "Yo Yo Honey Singh, Lil Golu",
    year: "2014",
  },
  {
    song: "Jawan",
    url: "./songs/jawan.m4a",
    image: "./songs/jawan.jpg",
    movie: "",
    artist: "Anirudh Ravichander",
    year: "2017",
  },
  {
    song: "Jhoome Jo Pathaan",
    url: "./songs/party/Bhool.m4a",
    image: "./songs/party/Pathaan-Hindi-2022-20221222104158-500x500.jpg",
    movie: "",
    artist: "Vishal & Shekhar , Arijit Singh , Sukriti Kakar , Vishal Dadlani , Shekhar Ravjiani , Kumaar",
    year: "2022",
  },
  {
    song: "Kala Chasma",
    url: "./songs/kala .m4a",
    image: "./songs/Baar-Baar-Dekho-Hindi-2016-20181205114400-500x500.jpg",
    movie: "",
    artist: "Amar Arshi , Badshah , Neha Kakkar",
    year: "2017",
  },
  {
    song: "Kamariya",
    url: "./songs/party/Stree.m4a",
    image: "./songs/party/Stree-Hindi-2018-20180822-500x500.jpg",
    movie: "Stree",
    artist: "Aastha Gill , Jigar Saraiya , Divya Kumar , Sachin Sanghvi",
    year: "2014",
  },
  {
    song: "Khud-Se-Zyada",
    url: "./songs/Khud-Se-Zyada.m4a",
    image: "./songs/Khud-Se-Zyada.jpg",
    movie: "",
    artist: "Tanishk Bagchi , Zara Khan",
    year: "2019",
  },
  {
    song: "King Of Indian Hip Hop",
    url: "./songs/King-Of-Indian-Hip-Hop-Hindi.m4a",
    image: "./songs/King-Of-Indian-Hip-Hop-Hindi.jpg",
    movie: "",
    artist: "Emiway Bantai",
    year: "2019",
  },
  {
    song: "Kya Baat Ay(Punjabi Hit)",
    url: "./songs/Dance/Kya-Baat.m4a",
    image: "./songs/Dance/Kya-Baat-Ay-Punjabi-2018-20180921123124-500x500.jpg",
    movie: "",
    artist: "Harrdy Sandhu , Jaani ",
    year: "2018",
    category: "punjabi",
  },
  {
    song: "Leke Prabhu Ka Naam",
    url: "./songs/LekePrabhuKaNaam.m4a",
    image:
      "./songs/Leke-Prabhu-Ka-Naam-From-Tiger-3-Hindi-2023-20231023111427-500x500.jpg",
    movie: "Tiger 3",
    artist: "Pritam , Arijit Singh , Nikhita Gandhi , Amit",
    year: "2023",
  },
  {
    song: "Makhna",
    url: "./songs/makhna.m4a",
    image: "./songs/Makhna-Hindi-2018-20231116171053-500x500.jpg",
    movie: "",
    artist: "Yo Yo Honey Singh , Neha Kakkar , Singhsta , Allistair",
    year: "2018",
  },
  {
    song: "Manali Trance",
    url: "./songs/Manali-Trance.m4a",
    image: "./songs/Manali-Trance.jpg",
    movie: "",
    artist: "Lil Golu , Neha Kakkar",
    year: "2014",
  },
  {
    song: "Mi Amor (Punjabi Hit)",
    url: "./songs/mi amor.m4a",
    image: "./songs/mi-amor.jpg",
    movie: "",
    artist: " Sharn and 40K and The Paul",
    year: "2023",
    category: "punjabi",
  },
  {
    song: "Nadiyon Paar",
    url: "./songs/Dance/Nadiyon.m4a",
    image:
      "./songs/Dance/Nadiyon-Paar-Let-the-Music-Play-Again-From-Roohi--Hindi-2021-20210303125809-500x500.jpg",
    movie: "",
    artist: "Sachin-Jigar",
    year: "2021",
  },
  {
    song: "Oonchi Oonchi Deewarein",
    url: "./songs/oonchi-oonchi.m4a",
    image:
      "./songs/Oonchi-Oonchi-Deewarein-From-Yaariyan-2-Hindi-2023-20230919183037-500x500.jpg",
    movie: "Tiger 3",
    artist: "Manan Bhardwaj , Arijit Singh",
    year: "2023",
  },
  {
    song: "Paagal",
    url: "./songs/Paagal.m4a",
    image: "./songs/Paagal.jpg",
    movie: "",
    artist: "Badshah",
    year: "2019",
  },
  {
    song: "Peaches",
    url: "./songs/peaches.m4a",
    image: "./songs/Justice-English-2021-20210325102906-500x500.jpg",
    movie: "",
    artist: "Justin Bieber",
    year: "2021",
  },
  {
    song: "Phir Bhi Tumko Chaahunga",
    url: "./songs/pir bhi tumko chaunga.m4a",
    image: "./songs/Half-Girlfriend-Hindi-2017-20180622-500x500.jpg",
    movie: "",
    artist: " Mithoon , Arijit Singh , Shashaa Tirupati",
    year: "2017",
  },
  {
    song: "Proper Patola(Punjabi Hit)",
    url: "./songs/Dance/Namaste.m4a",
    image:
      "./songs/Dance/Namaste-England-Hindi-2018-20181003055757-500x500.jpg",
    movie: "",
    artist: "Badshah",
    year: "2018",
    category: "punjabi",
  },
  {
    song: "Satranga",
    url: "./songs/Satranga.m4a",
    image: "./songs/Satranga.jpg",
    movie: "Animal",
    artist: "Arijit Singh , Shreyas Puranik , Siddharth Garima",
    year: "2023",
  },
  {
    song: "Softly (Punjabi Hit)",
    url: "./songs/softly.m4a",
    image: "./songs/softly.jpg",
    movie: "",
    artist: " Karan Aujla , IKKY",
    year: "2023",
    category: "punjabi",
  },
  {
    song: "Stay",
    url: "./songs/stay.m4a",
    image: "./songs/Stay-English-2021-20210706223809-500x500.jpg",
    movie: "",
    artist:
      " The Kid Laroi , Justin Bieber ft. The Kid LAROI & Justin Bieber ,Cashmere Cat",
    year: "2021",
  },
  {
    song: "Taaron Ke Saher",
    url: "./songs/taaron ka saher.m4a",
    image: "./songs/Taaron-Ke-Shehar-Hindi-2020-20200920035507-500x500.jpg",
    movie: "",
    artist: "Neha Kakkar , Jubin Nautiyal , Jaani",
    year: "2020",
  },
  {
    song: "Tere Do Naina",
    url: "./songs/Tere-Do-Naina.m4a",
    image: "./songs/Tere-Do-Naina.jpg",
    movie: "",
    artist: "Gourov-Roshin ft. Ankit Tiwari",
    year: "2019",
  },
  {
    song: "Thoda Thoda Pyar ",
    url: "./songs/ThodaThodaPyaar.m4a",
    image: "./songs/ThodaThodaPyaar.jpg",
    movie: "",
    artist: "Stebin Ben",
    year: "2023",
  },
  {
    song: "Tip Tip Barsa Paani - Hip Hop Remix",
    url: "./songs/TipTip.m4a",
    image:
      "./songs/Tip-Tip-Barsa-Paani-Hip-Hop-Remix-Hindi-2019-20230608011454-500x500.jpg",
    movie: "",
    artist: "Udit Narayan, Alka Yagnik",
    year: "2019",
  },
  {
    song: "Tum Hi Ho",
    url: "./songs/tum hi ho.m4a",
    image: "./songs/Aashiqui-2-Hindi-2013-500x500.jpg",
    movie: "",
    artist: " Arijit Singh",
    year: "2013",
  },
  {
    song: "Tumse Mil K Dil Ka Haal",
    url: "./songs/tumseMilKDilKaHaal.mp3",
    image: "./songs/tumseMilKDilKaHaal.jpg",
    movie: "Main Hoon Na",
    artist: "Sonu Nigam , Sabri Brothers",
    year: "1996",
  },
  {
    song: "Vaaste",
    url: "./songs/vaaste.m4a",
    image: "./songs/vaaste.jpg",
    movie: "",
    artist:
      "Nikhil D'souza , Dhvani Bhanushali , Tanishk Bagchi ft. Nikhil D'souza",
    year: "2021",
  },
  {
    song: "Watch Out",
    url: "./songs/WatchOut.m4a",
    image: "./songs/WatchOut.jpg",
    movie: "",
    artist: " Sidhu Moose Wala , Sikander Kahlon , MXRCI",
    year: "2023",
  },
  {
    song: "White-Brown",
    url: "./songs/white brown balck.m4a",
    image: "./songs/white-brown-balck.jpg",
    movie: "",
    artist: " Jaani , Avvy Sra , Karan Aujla",
    year: "2022",
  },
  {
    song: "Yaad Piya Ki Aane Lagi",
    url: "./songs/ypkalh.m4a",
    image:
      "./songs/Yaad-Piya-Ki-Aane-Lagi-Hindi-2019-20191116115736-500x500.jpg",
    movie: "",
    artist: "Neha Kakkar , Tanishk Bagchi",
    year: "2019",
  },
  {
    song: "Yummy",
    url: "./songs/yummy.m4a",
    image: "./songs/Yummy-English-2020-20200103035142-500x500.jpg",
    movie: "",
    artist: "Justin Bieber",
    year: "2019",
  },
  {
    song: "Eenie",
    url: "./songs/international/Eenie.m4a",
    image: "./songs/international/Eenie-Meenie-2010-500x500.jpg",
    movie: "",
    artist: "Sean Kingston",
    year: "2010",
    category: "international",
  },
  {
    song: "Ghost",
    url: "./songs/international/Ghost.m4a",
    image: "./songs/international/Ghost.jpg",
    movie: "",
    artist: "Justin Bieber",
    year: "2021",
    category: "international",
  },
  {
    song: "I-Don-t",
    url: "./songs/international/I-Don-t.m4a",
    image:
      "./songs/international/I-Don-t-Care-English-2019-20190702110450-500x500.jpg",
    movie: "",
    artist: "Ed Sheeran , Justin Bieber",
    year: "2019",
    category: "international",
  },
  {
    song: "Intention",
    url: "./songs/international/Intentions-English-2020-20200207033302-500x500.m4a",
    image:
      "./songs/international/Intentions-English-2020-20200207033302-500x500.jpg",
    movie: "",
    artist: "Justin Bieber , Quavo",
    year: "2020",
    category: "international",
  },
  {
    song: "Love Me",
    url: "./songs/international/Love.m4a",
    image: "./songs/international/Love.jpg",
    movie: "",
    artist: "Justin Bieber",
    year: "2009",
    category: "international",
  },
  {
    song: "Purpose",
    url: "./songs/international/Purpose.m4a",
    image: "./songs/international/Purpose-English-2015-500x500.jpg",
    movie: "",
    artist: "Justin Bieber",
    year: "2015",
    category: "international",
  },
  {
    song: "Stuck",
    url: "./songs/international/Stuck.m4a",
    image:
      "./songs/international/Stuck-with-U-English-2020-20200508041707-500x500.jpg",
    movie: "",
    artist: "Justin Bieber , Arian Grande",
    year: "2020",
    category: "international",
  },
  {
    song: "Aayee Milan Ki Raat",
    url: "./songs/oldSongs/Aayee.m4a",
    image: "./songs/oldSongs/Aayee-Milan-Ki-Raat-Hindi-1990-500x500.jpg",
    movie: "",
    artist: "",
    year: "2019",
    category: "oldSongs",
  },
  {
    song: "Main Toh Raste Se Ja Raha Tha",
    url: "./songs/oldSongs/Coolie.m4a",
    image: "./songs/oldSongs/Coolie-No-1-Hindi-1995-20230804160904-500x500.jpg",
    movie: "",
    artist: "Alka Yagnik , Kumar Sanu",
    year: "2019",
    category: "oldSongs",
  },
  {
    song: "O Priya Priya",
    url: "./songs/oldSongs/Dil.m4a",
    image: "./songs/oldSongs/Dil-OPriya.jpg",
    movie: "",
    artist: "",
    year: "2019",
    category: "oldSongs",
  },
  {
    song: "Doodh Ka Karz",
    url: "./songs/oldSongs/Doodh.m4a",
    image:
      "./songs/oldSongs/Doodh-Ka-Karz-Hindi-1990-20221207235458-500x500.jpg",
    movie: "",
    artist: "",
    year: "2019",
    category: "oldSongs",
  },
  {
    song: "Ghulam",
    url: "./songs/oldSongs/Ghulam.m4a",
    image: "./songs/oldSongs/Ghulam-Hindi-1998-20230304134505-500x500.jpg",
    movie: "",
    artist: "",
    year: "2019",
    category: "oldSongs",
  },
  {
    song: "Lal Dupptaa",
    url: "./songs/oldSongs/Lal.m4a",
    image:
      "./songs/oldSongs/Lal-Dupatta-Malmal-Ka-Hindi-1990-20221208021455-500x500.jpg",
    movie: "",
    artist: "",
    year: "2019",
    category: "oldSongs",
  },
  {
    song: "Dil",
    url: "./songs/oldSongs/OPriya.m4a",
    image: "./songs/oldSongs/Dil-OPriya.jpg",
    movie: "",
    artist: "",
    year: "2019",
    category: "oldSongs",
  },
  {
    song: "Kalaastar",
    url: "./songs/kalaastar.m4a",
    image: "./songs/kalaastar.jpg",
    movie: "",
    artist: "Yo Yo Honey Singh",
    year: "2020",
    category: "",
  },
  {
    song: "Aao Raja -Gabbar is back",
    url: "./songs/gabbar-is-back.m4a",
    image: "./songs/gabbar-is-back.jpg",
    movie: "",
    artist: "Chirantan Bhatt , Yo Yo Honey Singh , Manj Musik , Neha Kakkar , Sandeep Chowta , Amar Mohile",
    year: "2015",
    category: "",
  },
  {
    song: "Yaalgar",
    url: "./songs/Yalgaar.m4a",
    image: "./songs/Yalgaar.jpg",
    movie: "",
    artist: "Ajey Nagar , Wily Frenzy",
    year: "2020",
    category: "",
  },
];
let artistArray = [
  {
    name: "Arijit Singh",
    fans: "22,824,757 Listeners",
    image: "./images/artists/Arijit_Singh_002_20230323062147_500x500.jpg",
  },

  {
    name: "Sonu Nigam",
    fans: "9,658,291 Listeners",
    image: "./images/artists/Sonu_Nigam_500x500.jpg",
  },
  {
    name: "Diljit Dosanjh",
    fans: "2,240,850 Listeners",
    image: "./images/artists/Diljit_Dosanjh_005_20231025073054_500x500.jpg",
  },
  {
    name: "Pritam",
    fans: "15,333,705 Listeners",
    image: "./images/artists/Pritam_Chakraborty-20170711073326_500x500.jpg",
  },
  {
    name: "Baani Sandhu",
    fans: "1,050,854 Listeners",
    image: "./images/artists/Baani_Sandhu_20191129080739_500x500.jpg",
  },
  {
    name: "Neha Kakkar",
    fans: "8,584,015 Listeners",
    image: "./images/artists/Neha_Kakkar_006_20200822042626_500x500.jpg",
  },
  {
    name: "Justin Bieber",
    fans: "1,039,020 Listeners",
    image: "./images/artists/justinBieber.jpg",
  },
  {
    name: "Yo Yo Honey Singh",
    fans: "6,944,091 Listeners",
    image: "./images/artists/Yo Yo Honey Singh.jpg",
  },
  {
    name: "Anirudh Ravichander",
    fans: "9,866,223 Listeners",
    image: "./images/artists/Anirudh_Ravichander_500x500.jpg",
  },
  {
    name: "Shilpa Rao",
    fans: "8,517,489 Listeners",
    image: "./images/artists/Shilpa_Rao_002_20230321111415_500x500.jpg",
  },
  {
    name: "Stebin Ben",
    fans: "5,685,836 Listeners",
    image: "./images/artists/Stebin_Ben_004_20200930091339_500x500.jpg",
  },
  {
    name: "Vishal Mishra",
    fans: "7,574,947 Listeners",
    image: "./images/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
  },
  {
    name: "Tanishk Bagchi",
    fans: "10,429,341 Listeners",
    image: "./images/artists/tanishk bagchi.jpg",
  },

  {
    name: "Sabri Brothers",
    fans: "718,124 Listeners",
    image: "./images/artists/Sabri_Brothers_500x500.jpg",
  },
  {
    name: "Shreyas Puranik",
    fans: "2,477,140 Listeners",
    image: "./images/artists/Shreyas_Puranik_000_20211202121951_500x500.jpg",
  },

  {
    name: "Sia",
    fans: "1,632,812 Listeners",
    image: "./images/artists/Sia_002_20200921152829_500x500.jpg",
  },

  {
    name: "Nikhita Gandhi",
    fans: "7,076,011 Listeners",
    image: "./images/artists/Nikhita_Gandhi_006_20231025063210_500x500.jpg",
  },
  {
    name: "Manan Bhardwaj",
    fans: "4,804,767 Listeners",
    image: "./images/artists/Manan_Bhardwaj_000_20220326130438_500x500.jpg",
  },

  {
    name: "Karan Aujla",
    fans: "1,482,066 Listeners",
    image: "./images/artists/Karan_Aujla_20190327091154_500x500.jpg",
  },

  {
    name: "Jaani",
    fans: "1,050,54 Listeners",
    image: "./images/artists/Jaani_001_20191128083617_500x500.jpg",
  },
];

// Audio Main File Create

let audio = new Audio();
let currTime = 0;
let currTrack = 0;
let currSong = "";
audio.src = "blank";
let repeatVal = 0;
let autoPlay = 1;
let recentSongArr = [];
let screenWidth = 480;

//SONG RELATED FUNCTIONS

//Set All Fields

const setAllFields = (song) => {
  let bottom_player_songDetails_title = document.querySelector(
    ".bottom_player_songDetails h4"
  );
  bottom_player_songDetails_title.innerHTML = song.song;

  let bottom_player_songDetails_artist = document.querySelector(
    ".bottom_player_songDetails div"
  );
  bottom_player_songDetails_artist.innerHTML = song.artist;

  let bottom_player_songDetails_image = document.querySelector(
    ".bottom_player_songImg img"
  );
  bottom_player_songDetails_image.src = song.image;

  let mainPlayerArea_centerBody_img = document.querySelector(
    ".mainPlayerArea_centerBody img"
  );
  mainPlayerArea_centerBody_img.src = song.image;

  let mainPlayerContainer = document.querySelector(".mainPlayerContainer");
  mainPlayerContainer.style.backgroundImage = `url(${song.image})`;

  let mainPlayerContainer_title = document.querySelector(
    ".mainPlayerContainer_title"
  );
  mainPlayerContainer_title.innerHTML = song.song;

  let mainPlayerContainer_artist = document.querySelector(
    ".mainPlayerContainer_artist"
  );
  mainPlayerContainer_artist.innerHTML = song.artist;

  let bottom_playerArea = document.querySelector(".bottom_playerArea");
  bottom_playerArea.style.display = "flex";

  let mainFrame = document.querySelector(".mainFrame");
  mainFrame.style.height = "88vh";
  if (window.innerWidth <= screenWidth) {
    mainFrame.style.height = "80vh";
  }

  if (window.innerWidth > screenWidth) {
    let demoSpace = document.querySelector(".demoSpace");
    demoSpace.style.height = "80vh";

    let demoDiscImg = document.querySelector(".demoDiscImg");
    demoDiscImg.style.backgroundImage = `url(${song.image})`;
  }

  let likedCheck = checkSongLikedAray(song);
  let likedIcon_mainPlayerArea = document.querySelector(
    ".mainPlayerArea_likedSvg img"
  );
  if (likedCheck == true) {
    likedIcon_mainPlayerArea.setAttribute(
      "src",
      "./images/heartIconFilled.png"
    );
  } else {
    likedIcon_mainPlayerArea.setAttribute("src", "./images/heartIconEmpty.png");
  }
};

//play the song function
let bottomPlayPauseSvg = document.querySelectorAll(".playPauseSvg");
let mainPlayerArea_controls_bottomPlayPauseSvg = document.querySelectorAll(
  ".mainPlayerArea_controls_playPauseSvg"
);
bottomPlayPauseSvg[1].style.display = "none";
mainPlayerArea_controls_bottomPlayPauseSvg[1].style.display = "none";
const playSongFunc = () => {
  if (audio.src.slice(audio.src.length - 5) === "blank") {
    alert("Please select a song first");
  } else if (audio.paused || audio.src == "") {
    if (currTime == 0) {
      let seekSlider = document.querySelector("#seekSlider");
      seekSlider.value = 0;
    }
    audio.currentTime = currTime;
    audio.play();
    bottomPlayPauseSvg[0].style.display = "none";
    bottomPlayPauseSvg[1].style.display = "block";
    mainPlayerArea_controls_bottomPlayPauseSvg[0].style.display = "none";
    mainPlayerArea_controls_bottomPlayPauseSvg[1].style.display = "block";
  } else {
    audio.pause();
    currTime = audio.currentTime;
    bottomPlayPauseSvg[0].style.display = "block";
    bottomPlayPauseSvg[1].style.display = "none";
    mainPlayerArea_controls_bottomPlayPauseSvg[0].style.display = "block";
    mainPlayerArea_controls_bottomPlayPauseSvg[1].style.display = "none";
  }
};

//prev song function
let index = -999;
const prevSongFunc = () => {
  let queue_playlistItemContainer = Array.from(
    document.querySelector(".queue_playlistItemContainer").children
  );
  if (index == -999) {
    for (index = 0; index < queue_playlistItemContainer.length; index++) {
      if (
        queue_playlistItemContainer[index].children[0].children[1].children[0]
          .innerText == currSong.song
      ) {
        break;
      }
    }
  }
  index -= 1;
  if (index <= -1) index = queue_playlistItemContainer.length - 1;
  queue_playlistItemContainer[index].children[0].children[0].click();
};

//next song function
const nextSongFunc = () => {
  let queue_playlistItemContainer = Array.from(
    document.querySelector(".queue_playlistItemContainer").children
  );
  if (index == -999) {
    for (index = 0; index < queue_playlistItemContainer.length; index++) {
      if (
        queue_playlistItemContainer[index].children[0].children[1].children[0]
          .innerText == currSong.song
      ) {
        break;
      }
    }
  }
  index += 1;
  if (queue_playlistItemContainer.length <= index) index = 0;
  queue_playlistItemContainer[index].children[0].children[0].click();
};

// CONTROL BUTTONS
{
  //shuffle button
  // let shuffleBtn = document.getElementById("shuffle");
  // shuffleBtn.addEventListener("click", () => {
  //   console.log("Shuffling the songs");
  // });

  //previous button
  let previousBtn = document.getElementById("prev");
  previousBtn.addEventListener("click", () => {
    prevSongFunc();
  });
  // play button
  let playBtn = document.getElementById("play");
  playBtn.addEventListener("click", () => {
    playSongFunc();
  });

  //next button
  let nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", () => {
    nextSongFunc();
  });

  //loop button
  let loopBtn = document.getElementById("repeat");
  let loopBtnSvg = document.querySelector("#repeat svg");
  let mainLoopBtn = document.getElementById("mainPlayerArea_controls_repeat");
  let mainLoopSvg = document.querySelector(
    "#mainPlayerArea_controls_repeat svg"
  );

  loopBtn.addEventListener("click", () => {
    if (repeatVal == 0) {
      repeatVal = 1;
      loopBtnSvg.style.fill = "red";
      mainLoopSvg.style.fill = "red";
    } else {
      repeatVal = 0;
      loopBtnSvg.style.fill = "white";
      mainLoopSvg.style.fill = "white";
    }
  });

  //volume bar
  let volumeBar = document.getElementById("volumeBar");
  let queue_volumeBar = document.getElementById("queue_volumeBar");
  function volUpdate() {
    let volume = volumeBar.value;
    audio.volume = volume / 200;
  }
  volumeBar.addEventListener("mousemove", () => {
    volUpdate();
  });

  function queue_volUpdate() {
    let queue_volume = queue_volumeBar.value;
    audio.volume = queue_volume / 200;
  }
  queue_volumeBar.addEventListener("mousemove", () => {
    queue_volUpdate();
  });

  //fullscreen button
  let fullscreen = document.getElementById("fullscreen");
  // let allMainContainers = document.querySelector(".mainFrame").children;
  fullscreen.addEventListener("click", () => {
    let mainPlayerContainer = document.querySelector(".mainPlayerContainer");
    if (mainPlayerContainer.style.display == "none") {
      mainPlayerContainer.style.display = "";
    } else {
      mainPlayerContainer.style.display = "none";
    }
  });
  queue_fullscreen.addEventListener("click", () => {
    let mainPlayerContainer = document.querySelector(".mainPlayerContainer");
    if (mainPlayerContainer.style.display == "none") {
      mainPlayerContainer.style.display = "";
    } else {
      mainPlayerContainer.style.display = "none";
    }
  });
}

// MAIN PLAYER AREA CONTROLS
{
  //shuffle button
  // let shuffleBtn = document.getElementById("mainPlayerArea_controls_shuffle");
  // shuffleBtn.addEventListener("click", () => {
  //   console.log("Shuffling the songs");
  // });

  //previous button
  let previousBtn = document.getElementById("mainPlayerArea_controls_prev");
  previousBtn.addEventListener("click", () => {
    prevSongFunc();
  });
  // play button
  let playBtn = document.getElementById("mainPlayerArea_controls_play");
  playBtn.addEventListener("click", () => {
    playSongFunc();
  });

  //next button
  let nextBtn = document.getElementById("mainPlayerArea_controls_next");
  nextBtn.addEventListener("click", () => {
    nextSongFunc();
  });

  //loop button
  let loopBtn = document.getElementById("repeat");
  let loopBtnSvg = document.querySelector("#repeat svg");
  let mainLoopBtn = document.getElementById("mainPlayerArea_controls_repeat");
  let mainLoopSvg = document.querySelector(
    "#mainPlayerArea_controls_repeat svg"
  );

  mainLoopBtn.addEventListener("click", () => {
    if (repeatVal == 0) {
      repeatVal = 1;
      loopBtnSvg.style.fill = "red";
      mainLoopSvg.style.fill = "red";
    } else {
      repeatVal = 0;
      loopBtnSvg.style.fill = "white";
      mainLoopSvg.style.fill = "white";
    }
  });

  //seekbar
  let seekSlider = document.querySelector("#seekSlider");
  seekSlider.addEventListener("click", () => {
    currTime = (seekSlider.value / 100) * audio.duration;
    audio.currentTime = currTime;
    let audioCurrTime = document.querySelector(".curr-time");
    audioCurrTime.innerHTML = Math.trunc(currTime) + "s";
  });

  //autoplay

  let autoPlayBtn = document.querySelector(".toggleSwitch_slider");
  autoPlayBtn.click();
  autoPlayBtn.addEventListener("click", () => {
    if (autoPlay == 0) autoPlay = 1;
    else autoPlay = 0;
  });

  //liked button
  let mainPlayerArea_likedSvg = document.querySelector(
    "#mainPlayerArea_likedSvg"
  );
  mainPlayerArea_likedSvg.style.cursor = "pointer";
  let mainPlayerArea_likedSvg_img = document.querySelector(
    "#mainPlayerArea_likedSvg img"
  );
  mainPlayerArea_likedSvg_img.addEventListener("click", () => {
    if (
      mainPlayerArea_likedSvg_img.src.slice(
        mainPlayerArea_likedSvg_img.src.lastIndexOf("/") + 1,
        mainPlayerArea_likedSvg_img.src.length - 4
      ) == "heartIconEmpty"
    ) {
      mainPlayerArea_likedSvg_img.src = "./images/heartIconFilled.png";
      fillLikedArray(currSong);
    } else {
      mainPlayerArea_likedSvg_img.src = "./images/heartIconEmpty.png";
      removeLikedArray(currSong);
    }
  });
}
//CONTAINER FILLER

//new release section (Punjabi Hits)
{
  //create new release cards
  const createNewReleaseCards = (e) => {
    let newReleaseContainer_cardContainer = document.querySelector(
      ".newReleaseContainer_cardContainer"
    );
    let newReleaseContainer_card = document.createElement("div");
    newReleaseContainer_card.classList.add("newReleaseContainer_card");

    let newReleaseContainer_cardImgContainer = document.createElement("div");
    newReleaseContainer_cardImgContainer.classList.add(
      "newReleaseContainer_cardImgContainer"
    );
    let newReleaseContainer_cardImg = document.createElement("img");
    newReleaseContainer_cardImg.classList.add("newReleaseContainer_cardImg");
    newReleaseContainer_cardImg.setAttribute("src", e.image);
    newReleaseContainer_cardImgContainer.append(newReleaseContainer_cardImg);
    newReleaseContainer_card.append(newReleaseContainer_cardImgContainer);

    let newReleaseContainer_cardTitleContainer = document.createElement("div");
    newReleaseContainer_cardTitleContainer.classList.add(
      "newReleaseContainer_cardTitleContainer"
    );
    let newReleaseContainer_cardTitle = document.createElement("h4");
    newReleaseContainer_cardTitle.classList.add(
      "newReleaseContainer_cardTitle"
    );
    newReleaseContainer_cardTitle.innerHTML = e.song;
    newReleaseContainer_cardTitleContainer.append(
      newReleaseContainer_cardTitle
    );
    newReleaseContainer_card.append(newReleaseContainer_cardTitleContainer);

    //create overlay
    let newReleaseContainer_card_overlay = document.createElement("div");
    newReleaseContainer_card_overlay.classList.add("overlay");

    //CREATING HEART ICON
    let likedSvg = document.createElement("div");
    likedSvg.classList.add("likedSvg");

    let likedImg = document.createElement("img");
    likedImg.src = "./images/heartIconEmpty.png";
    likedImg.classList.add("likedImg");
    likedSvg.appendChild(likedImg);
    likedSvg.addEventListener("click", () => {
      if (
        likedImg.src.slice(
          likedImg.src.lastIndexOf("/") + 1,
          likedImg.src.length - 4
        ) == "heartIconEmpty"
      ) {
        likedSvg.removeChild(likedImg);
        likedImg.src = "./images/heartIconFilled.png";
        likedSvg.appendChild(likedImg);
        fillLikedArray(e);
      } else {
        likedSvg.removeChild(likedImg);
        likedImg.src = "./images/heartIconEmpty.png";
        likedSvg.appendChild(likedImg);
        removeLikedArray(e);
      }
    });
    newReleaseContainer_card_overlay.append(likedSvg);

    //CREATING PLAY ICON
    let playButtonSvg = document.createElement("div");
    playButtonSvg.classList.add("card_playSvg");

    let playButtonImg = document.createElement("img");
    playButtonImg.src = "./images/playButtonIcon.png";
    playButtonImg.classList.add("likedImg");
    playButtonSvg.appendChild(playButtonImg);
    newReleaseContainer_card_overlay.append(playButtonSvg);

    //appending whole overlay
    newReleaseContainer_card.append(newReleaseContainer_card_overlay);

    newReleaseContainer_cardContainer.append(newReleaseContainer_card);

    // playButtonSvg
    playButtonSvg.addEventListener("click", () => {
      audio.title = e.song;
      audio.src = e.url;
      currTime = 0;
      playSongFunc();
      setAllFields(e);
      createQueue(e);
      currSong = e;
      recentSongArr.push(currSong);
      localStorage.setItem("recentSong", JSON.stringify(recentSongArr));

      if (window.innerWidth > screenWidth) {
        let demoDisc = document.querySelector(".demoDisc");
        let bodyWidth = document.body.clientWidth / 2;
        demoDisc.style.top = `${demoDisc.clientHeight + 10}px`;
        demoDisc.style.left = bodyWidth + "px";
        demoDisc.style.transform = "translate(-50%, -50%) scale(1.5)";
        demoDisc.style.display = "block";
      }
    });
  };

  //traverse through array
  let arr234 = Array.from(songsArray);
  for (let index = 0; index < arr234.length; index++) {
    // if (arr234[index].song.slice(arr234[index].song.length - 13) == "(Punjabi Hit)")
    if (arr234[index].category == "punjabi") {
      createNewReleaseCards(arr234[index]);
    }
  }
}

//top 10 songs section

let topSong_listContainer = document.querySelector(".topSong_listContainer");
const topSongsCreate = (e) => {
  let topSong_3 = document.createElement("div");
  topSong_3.classList.add("topSong_3");
  let top_list = document.createElement("div");
  top_list.classList.add("top_list");

  let top_listImgName = document.createElement("div");
  top_listImgName.classList.add("top_listImgName");
  let top_listImg = document.createElement("div");
  top_listImg.classList.add("top_listImg");
  let topListImg = document.createElement("img");
  topListImg.setAttribute("src", e.image);
  top_listImg.appendChild(topListImg);
  top_listImgName.appendChild(top_listImg);
  let top_listName = document.createElement("div");
  top_listName.classList.add("top_listName");
  let topListP = document.createElement("p");
  topListP.innerText = `${e.song} `;
  top_listName.appendChild(topListP);
  top_listImgName.appendChild(top_listName);
  top_list.appendChild(top_listImgName);

  let buttonts = document.createElement("div");
  buttonts.classList.add("buttonts");
  buttonts.innerText = "Play";
  top_list.appendChild(buttonts);
  topSong_3.appendChild(top_list);
  topSong_listContainer.appendChild(topSong_3);

  buttonts.addEventListener("click", () => {
    audio.title = e.song;
    audio.src = e.url;
    currTime = 0;
    playSongFunc();
    setAllFields(e);
    createQueue(e);
    currSong = e;
    recentSongArr.push(currSong);
    localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
  });
};
//fill top 10 songs
for (let i = 1; i <= 10; i++) {
  // let random = Math.floor(Math.random() * (songsArray.length - 1) + 1);
  // topSongsCreate(songsArray[random]);
  topSongsCreate(songsArray[i]);
}

let topSong_headingPlayBtn = document.querySelector(".topSong_headingPlayBtn");
topSong_headingPlayBtn.addEventListener("click", () => {
  let top_listNameList = document.querySelectorAll(".top_listName p");
  let e = "";
  Array.from(top_listNameList).forEach((names) => {
    for (let index = 0; index < songsArray.length; index++) {
      if (songsArray[index].song == names.innerText) {
        createQueue(songsArray[index]);
        if (e == "") e = songsArray[index];
      }
    }
    audio.title = e.song;
    audio.src = e.url;
    currTime = 0;
    playSongFunc();
    setAllFields(e);
    // createQueue(e);
    currSong = e;
    recentSongArr.push(currSong);
    localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
  });
});

//New Release Section (All new songs)
let demoCardContainer = document.querySelector(".demoCardContainer");
const demoCardCreate = (e) => {
  let demoCard = document.createElement("div");
  demoCard.classList.add("demoCard");
  let demoImageContainer = document.createElement("div");
  demoImageContainer.classList.add("demoImage");

  //card image
  let demoImage = document.createElement("img");
  demoImage.setAttribute("src", e.image);
  demoImageContainer.appendChild(demoImage);
  demoCard.appendChild(demoImageContainer);

  let demoTextArea = document.createElement("div");
  demoTextArea.classList.add("demoTextArea");
  let demoText = document.createElement("div");
  demoText.innerText = e.song;
  demoText.classList.add("demoText");
  demoTextArea.appendChild(demoText);

  let demoLikeBtn = document.createElement("div");
  demoLikeBtn.classList.add("demoLikeBtn");
  let demolikedImg = document.createElement("img");
  demolikedImg.setAttribute("src", "./images/heartIconEmpty.png");
  demolikedImg.classList.add("demolikedImg");
  demoLikeBtn.appendChild(demolikedImg);
  demoTextArea.appendChild(demoLikeBtn);
  demoCard.appendChild(demoTextArea);

  demoCardContainer.appendChild(demoCard);

  demoLikeBtn.addEventListener("click", () => {
    if (
      demolikedImg.src.slice(
        demolikedImg.src.lastIndexOf("/") + 1,
        demolikedImg.src.length - 4
      ) == "heartIconEmpty"
    ) {
      demolikedImg.src = "./images/heartIconFilled.png";
      fillLikedArray(e);
    } else {
      demolikedImg.src = "./images/heartIconEmpty.png";
      removeLikedArray(e);
    }
  });
  let demoDisc = document.querySelector(".demoDisc");
  let bodyWidth = document.body.clientWidth / 2;
  demoImage.addEventListener("click", () => {
    demoDisc.style.top = demoCard.offsetTop + demoCard.clientHeight / 2 + "px";
    demoDisc.style.left = demoCard.offsetLeft + demoCard.clientWidth / 2 + "px";
    demoDisc.style.transform = "translate(-50%, -50%) rotate(0deg) scale(1)";
    if (window.innerWidth > screenWidth) {
      demoDisc.style.display = "block";
    }
    setTimeout(() => {
      if (window.innerWidth > screenWidth) {
        demoDisc.style.top = `${demoDisc.clientHeight + 10}px`;
        demoDisc.style.left = bodyWidth + "px";
        demoDisc.style.transform = "translate(-50%, -50%) scale(1.5)";
      }
      audio.title = e.song;
      audio.src = e.url;
      currTime = 0;
      playSongFunc();
      setAllFields(e);
      createQueue(e);
      currSong = e;
      recentSongArr.push(currSong);
      localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
    }, 500);
  });
};

let count = 0;
for (let index = 0; index < songsArray.length; index++) {
  if (count > 5) break;
  if (songsArray[index].year == "2023") {
    demoCardCreate(songsArray[index]);
    count++;
  }
}

//All Songs Section
{
  const createAllSongsCard = (e) => {
    let allSongsCardContainer = document.querySelector(
      ".allSongsCardContainer"
    );

    let newReleaseContainer_card = document.createElement("div");
    newReleaseContainer_card.classList.add("newReleaseContainer_card");
    newReleaseContainer_card.classList.add("allSongsCard");

    let newReleaseContainer_cardImgContainer = document.createElement("div");
    newReleaseContainer_cardImgContainer.classList.add(
      "newReleaseContainer_cardImgContainer"
    );
    let newReleaseContainer_cardImg = document.createElement("img");
    newReleaseContainer_cardImg.classList.add("newReleaseContainer_cardImg");
    newReleaseContainer_cardImg.setAttribute("src", e.image);
    newReleaseContainer_cardImgContainer.append(newReleaseContainer_cardImg);
    newReleaseContainer_card.append(newReleaseContainer_cardImgContainer);

    let newReleaseContainer_cardTitleContainer = document.createElement("div");
    newReleaseContainer_cardTitleContainer.classList.add(
      "newReleaseContainer_cardTitleContainer"
    );
    newReleaseContainer_cardTitleContainer.classList.add(
      "allSongsCardContainerTitle"
    );
    let newReleaseContainer_cardTitle = document.createElement("h4");
    newReleaseContainer_cardTitle.classList.add(
      "newReleaseContainer_cardTitle"
    );
    newReleaseContainer_cardTitle.innerHTML = e.song;
    newReleaseContainer_cardTitleContainer.append(
      newReleaseContainer_cardTitle
    );
    newReleaseContainer_card.append(newReleaseContainer_cardTitleContainer);

    //create overlay
    let newReleaseContainer_card_overlay = document.createElement("div");
    newReleaseContainer_card_overlay.classList.add("overlay");
    newReleaseContainer_card_overlay.classList.add("allSongsCard_overlay");

    //CREATING HEART ICON
    let likedSvg = document.createElement("div");
    likedSvg.classList.add("likedSvg");
    likedSvg.classList.add("allSongsCard_likeSvg");

    let likedImg = document.createElement("img");
    likedImg.src = "./images/heartIconEmpty.png";
    likedImg.classList.add("likedImg");
    likedSvg.appendChild(likedImg);
    likedSvg.addEventListener("click", () => {
      if (
        likedImg.src.slice(
          likedImg.src.lastIndexOf("/") + 1,
          likedImg.src.length - 4
        ) == "heartIconEmpty"
      ) {
        likedSvg.removeChild(likedImg);
        likedImg.src = "./images/heartIconFilled.png";
        likedSvg.appendChild(likedImg);
        fillLikedArray(e);
      } else {
        likedSvg.removeChild(likedImg);
        likedImg.src = "./images/heartIconEmpty.png";
        likedSvg.appendChild(likedImg);
        removeLikedArray(e);
      }
    });
    newReleaseContainer_card_overlay.append(likedSvg);

    //CREATING PLAY ICON
    let playButtonSvg = document.createElement("div");
    playButtonSvg.classList.add("card_playSvg");

    let playButtonImg = document.createElement("img");
    playButtonImg.src = "./images/playButtonIcon.png";
    playButtonImg.classList.add("likedImg");
    playButtonSvg.appendChild(playButtonImg);
    newReleaseContainer_card_overlay.append(playButtonSvg);

    //appending whole overlay
    newReleaseContainer_card.append(newReleaseContainer_card_overlay);

    allSongsCardContainer.append(newReleaseContainer_card);

    // playButtonSvg
    playButtonSvg.addEventListener("click", () => {
      audio.title = e.song;
      audio.src = e.url;
      currTime = 0;
      playSongFunc();
      setAllFields(e);
      createQueue(e);
      currSong = e;
      recentSongArr.push(currSong);
      localStorage.setItem("recentSong", JSON.stringify(recentSongArr));

      let demoDisc = document.querySelector(".demoDisc");
      let bodyWidth = document.body.clientWidth / 2;
      demoDisc.style.top = `${demoDisc.clientHeight + 10}px`;
      demoDisc.style.left = bodyWidth + "px";
      demoDisc.style.transform = "translate(-50%, -50%) scale(1.5)";
      demoDisc.style.display = "block";
    });
  };
  Array.from(songsArray).forEach((e) => {
    createAllSongsCard(e);
  });
}

//Queue Section creation
let queue_playlistItemContainer = document.querySelector(
  ".queue_playlistItemContainer"
);
const createQueue = (e) => {
  let queue_playlistItem = document.createElement("div");
  queue_playlistItem.classList.add("queue_playlistItem");
  let queue_playlistItemSong = document.createElement("div");
  queue_playlistItemSong.classList.add("queue_playlistItemSong");
  let queue_playlistItemImgContainer = document.createElement("div");
  queue_playlistItemImgContainer.classList.add(
    "queue_playlistItemImgContainer"
  );

  let queue_playlistItemImg = document.createElement("img");
  queue_playlistItemImg.classList.add("queue_playlistItemImg");
  queue_playlistItemImg.setAttribute("src", e.image);
  queue_playlistItemImgContainer.appendChild(queue_playlistItemImg);

  let queue_playlistItemPlay = document.createElement("img");
  queue_playlistItemPlay.classList.add("queue_playlistItemPlay");
  queue_playlistItemPlay.setAttribute("src", "./images/playButtonIcon.png");
  queue_playlistItemImgContainer.appendChild(queue_playlistItemPlay);

  queue_playlistItemSong.appendChild(queue_playlistItemImgContainer);

  let queue_playlistItemDetails = document.createElement("div");
  queue_playlistItemDetails.classList.add("queue_playlistItemDetails");

  let queue_playlistItemDetails_title = document.createElement("h3");
  queue_playlistItemDetails_title.innerHTML = e.song;
  queue_playlistItemDetails.appendChild(queue_playlistItemDetails_title);

  let queue_playlistItemDetails_artist = document.createElement("div");
  queue_playlistItemDetails_artist.innerHTML = e.artist;
  queue_playlistItemDetails.appendChild(queue_playlistItemDetails_artist);

  let queue_playlistItemControls = document.createElement("div");
  queue_playlistItemControls.classList.add("queue_playlistItemControls");
  queue_playlistItemControls.style.display = "none";

  //Move Up Button
  let queue_playlistItemControls_moveUp = document.createElement("div");
  queue_playlistItemControls_moveUp.innerHTML = "^";
  queue_playlistItemControls.appendChild(queue_playlistItemControls_moveUp);

  //Move Down Button
  let queue_playlistItemControls_moveDown = document.createElement("div");
  queue_playlistItemControls_moveDown.innerHTML = "^";
  queue_playlistItemControls_moveDown.style.transform = "rotate(180deg)";
  queue_playlistItemControls.appendChild(queue_playlistItemControls_moveDown);

  //Move Down Button
  let queue_playlistItemControls_trash_div = document.createElement("div");
  let queue_playlistItemControls_trash = document.createElement("span");
  queue_playlistItemControls_trash.classList.add("material-symbols-outlined");
  queue_playlistItemControls_trash.innerHTML = "delete";
  queue_playlistItemControls_trash_div.appendChild(
    queue_playlistItemControls_trash
  );
  queue_playlistItemControls.appendChild(queue_playlistItemControls_trash_div);

  queue_playlistItemSong.appendChild(queue_playlistItemDetails);

  queue_playlistItem.appendChild(queue_playlistItemSong);
  queue_playlistItem.appendChild(queue_playlistItemControls);

  queue_playlistItemContainer.append(queue_playlistItem);

  //Play the song
  queue_playlistItemSong.addEventListener("click", () => {
    audio.title = e.song;
    audio.src = e.url;
    currTime = 0;
    playSongFunc();
    setAllFields(e);
    currSong = e;
    recentSongArr.push(currSong);
    localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
    // createQueue(e);
  });

  //move up a song
  queue_playlistItemControls_moveUp.addEventListener("click", (moveUpBtn) => {
    let parent = queue_playlistItem.parentNode;
    parent.insertBefore(queue_playlistItem, queue_playlistItem.previousSibling);
  });

  //move down a song
  queue_playlistItemControls_moveDown.addEventListener(
    "click",
    (moveDownBtn) => {
      let parent = queue_playlistItem.parentNode;
      parent.insertBefore(
        queue_playlistItem,
        queue_playlistItem.nextSibling.nextSibling
      );
    }
  );

  //delete a song
  queue_playlistItemControls_trash_div.addEventListener("click", () => {
    if (
      queue_playlistItem.children[0].children[1].children[0].innerHTML ==
      audio.title
    ) {
      audio.pause();
      audio = new Audio();
      currTime = 0;
    }
    queue_playlistItemContainer.removeChild(queue_playlistItem);
    if (queue_playlistItemContainer.childElementCount == 0) {
      let fullscreen = document.getElementById("fullscreen");
      fullscreen.click();
      let bottom_playerArea = document.querySelector(".bottom_playerArea");
      bottom_playerArea.style.display = "none";

      let mainFrame = document.querySelector(".mainFrame");
      mainFrame.style.height = "100vh";
    }
  });

  queue_playlistItem.addEventListener("mouseover", () => {
    queue_playlistItemDetails.style.display = "none";
    queue_playlistItemControls.style.display = "";
  });
  queue_playlistItem.addEventListener("mouseout", () => {
    queue_playlistItemDetails.style.display = "";
    queue_playlistItemControls.style.display = "none";
  });
};
//Real-Time Updation
{
  const showTime = () => {
    setTimeout(() => {
      let audioCurrTime = document.querySelector(".curr-time");
      let audioTotalTime = document.querySelector(".total-time");
      let seekSlider = document.querySelector("#seekSlider");
      if (
        !audio.paused &&
        audio.currentTime != 0 &&
        audio.currentTime != audio.duration
      ) {
        audioCurrTime.innerHTML = Math.trunc(audio.currentTime) + "s";
        audioTotalTime.innerHTML = Math.trunc(audio.duration) + "s";
        seekSlider.value = (audio.currentTime / audio.duration) * 100;
      } else if (audio.currentTime == audio.duration) {
        if (autoPlay == 1) {
          if (repeatVal == 0) {
            nextSongFunc();
          } else {
            currTime = 0;
            audio.currentTime = currTime;
            audio.play();
          }
        }
      }
      window.requestAnimationFrame(showTime);
    }, 1000);
  };
  window.requestAnimationFrame(showTime);
}

//rotate Disc
let rotateDeg = 0;
const rotateDisc = () => {
  setTimeout(() => {
    let demoDisc = document.querySelector(".demoDisc");
    if (
      !audio.paused &&
      audio.currentTime != 0 &&
      audio.currentTime != audio.duration
    ) {
      demoDisc.style.transform = `translate(-50%, -50%) scale(1.5) rotate(${rotateDeg}deg)`;
      rotateDeg++;
    } else if (audio.currentTime == audio.duration) {
      rotateDeg = 0;
    }
    window.requestAnimationFrame(rotateDisc);
  }, 50);
};
window.requestAnimationFrame(rotateDisc);

//accessing local storage
let demoContainer = document.querySelector(".demoContainer");
if (localStorage.getItem("recentSong") != null) {
  let recentSongLocal = JSON.parse(localStorage.getItem("recentSong"));
  let createRecentCards = (e) => {
    let Demo = document.createElement("div");
    Demo.classList.add("Demo");
    let DemoImg = document.createElement("img");
    DemoImg.setAttribute("src", e.image);
    Demo.appendChild(DemoImg);
    demoContainer.appendChild(Demo);
    Demo.addEventListener("click", () => {
      audio.title = e.song;
      audio.src = e.url;
      currTime = 0;
      playSongFunc();
      setAllFields(e);
      createQueue(e);
      currSong = e;
      recentSongArr.push(currSong);
      localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
    });
  };
  let recentCount = 4;
  Array.from(recentSongLocal).forEach((e) => {
    if (recentCount > 0) {
      createRecentCards(e);
      recentCount--;
    }
  });
} else {
  demoContainer.innerHTML = "Ready to play a new song !";
}

//ARTIST SECTION
let artistCharactersContainer = document.querySelector(
  ".artistCharactersContainer"
);
const createArtistCard = (e) => {
  let CharactersContainer = document.createElement("div");
  CharactersContainer.classList.add("CharactersContainer");
  let CharactersImg = document.createElement("div");
  CharactersImg.classList.add("CharactersImg");

  let CharactersImg_art = document.createElement("img");
  CharactersImg_art.classList.add("art");
  CharactersImg_art.setAttribute("src", e.image);
  CharactersImg.appendChild(CharactersImg_art);

  let CharactersOverlay = document.createElement("div");
  CharactersOverlay.classList.add("CharactersOverlay");
  let playButtonC = document.createElement("div");
  playButtonC.classList.add("playButtonC");

  let playButtonC_img = document.createElement("img");
  playButtonC_img.setAttribute("src", "./images/playButtonIcon.png");
  playButtonC.appendChild(playButtonC_img);

  CharactersOverlay.appendChild(playButtonC);
  CharactersImg.appendChild(CharactersOverlay);

  let CharactersName = document.createElement("div");
  CharactersName.classList.add("CharactersName");
  CharactersName.innerHTML = e.name;

  CharactersContainer.appendChild(CharactersImg);
  CharactersContainer.appendChild(CharactersName);

  artistCharactersContainer.append(CharactersContainer);

  CharactersContainer.addEventListener("click", () => {
    let artistSongList = [];
    Array.from(songsArray).forEach((song) => {
      if (isWordInString(e.name.split(" ")[0], song.artist)) {
        artistSongList.push(song);
      }
    });
    showArtistModal(e, artistSongList);
  });
};

Array.from(artistArray).forEach((e) => {
  createArtistCard(e);
});

function isWordInString(needle, haystack) {
  return haystack.split(" ").some((p) => p === needle);
}

//artist modal
const showArtistModal = (e, artistSongList) => {
  let artistModalContainer = document.querySelector(".artistModalContainer");
  artistModalContainer.style.display = "flex";
  let artistModal_leftSec_img = document.querySelector(
    ".artistModal_leftSec_img"
  );
  let artistModal_details_h1 = document.querySelector(
    ".artistModal_details h1"
  );
  let artistModal_fans = document.querySelector(".artistModal_fans");
  artistModal_fans.innerHTML = e.fans;
  artistModal_leftSec_img.setAttribute("src", e.image);
  artistModal_details_h1.innerHTML = e.name;

  createParticularArtistCards(artistSongList);
  let artistModal_rightSec = document.querySelector(".artistModal_rightSec h1");
  artistModal_rightSec.innerHTML = `Songs by ${e.name}`;
};

const createParticularArtistCards = (artistSongList) => {
  let artistModalPlaylist = document.querySelector(".artistModalPlaylist");
  artistModalPlaylist.innerHTML = "";
  Array.from(artistSongList).forEach((e) => {
    let artistModal_songItem = document.createElement("div");
    artistModal_songItem.classList.add("artistModal_songItem");
    let artistModal_songItem_img = document.createElement("img");
    artistModal_songItem_img.classList.add("artistModal_songItem_img");
    artistModal_songItem_img.setAttribute("src", e.image);
    artistModal_songItem.appendChild(artistModal_songItem_img);
    let artistModal_songItem_songDetails = document.createElement("div");
    artistModal_songItem_songDetails.classList.add(
      "artistModal_songItem_songDetails"
    );
    let artistModal_songItem_songDetails_title = document.createElement("h4");
    artistModal_songItem_songDetails_title.innerHTML = e.song;
    artistModal_songItem_songDetails.appendChild(
      artistModal_songItem_songDetails_title
    );

    let artistModal_songItem__playBtn = document.createElement("div");
    artistModal_songItem__playBtn.classList.add(
      "artistModal_songItem__playBtn"
    );
    artistModal_songItem__playBtn.innerHTML = "Play";
    artistModal_songItem_songDetails.appendChild(artistModal_songItem__playBtn);

    artistModal_songItem.appendChild(artistModal_songItem_songDetails);
    artistModalPlaylist.appendChild(artistModal_songItem);
    artistModal_songItem__playBtn.addEventListener("click", () => {
      audio.title = e.song;
      audio.src = e.url;
      currTime = 0;
      playSongFunc();
      setAllFields(e);
      createQueue(e);
      currSong = e;
      recentSongArr.push(currSong);
      localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
    });
  });

  let artistModal_controls_play = document.querySelector(
    ".artistModal_controls_play"
  );
  artistModal_controls_play.addEventListener("click", () => {
    let queue_playlistItemContainer = document.querySelector(
      ".queue_playlistItemContainer"
    );
    queue_playlistItemContainer.innerHTML = "";
    Array.from(artistSongList).forEach((ele) => {
      createQueue(ele);
    });
    audio.title = artistSongList[0].title;
    audio.src = artistSongList[0].url;
    currTime = 0;
    playSongFunc();
    setAllFields(artistSongList[0]);
    currSong = artistSongList[0];
    recentSongArr.push(currSong);
    localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
  });
};

let closeArtistModal = document.querySelector(".closeArtistModal");
closeArtistModal.addEventListener("click", () => {
  let artistModalContainer = document.querySelector(".artistModalContainer");
  artistModalContainer.style.display = "none";
});

//GENRE SECTION
let genreSection2_leftSec_cardList = Array.from(
  document.querySelectorAll(".genreSection2_leftSec_card")
);
genreSection2_leftSec_cardList.forEach((e) => {
  e.addEventListener("click", () => {
    let id = e.getAttribute("id");
    let sArr = Array.from(songsArray);
    for (let index = 0; index < sArr.length; index++) {
      if (sArr[index].song == id) {
        audio.title = sArr[index].song;
        audio.src = sArr[index].url;
        currTime = 0;
        playSongFunc();
        setAllFields(sArr[index]);
        createQueue(sArr[index]);
        currSong = sArr[index];
        recentSongArr.push(currSong);
        localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
        break;
      }
    }
  });
});

//LIKE SONG SECTIONS
let likedArray = [];
let sideNavItem = document.querySelectorAll(".sideNavItem");
Array.from(sideNavItem).forEach((e) => {
  e.addEventListener("click", () => {
    if (e.children[1].innerHTML == "Liked") {
      console.log(e.children[1].innerHTML);
      initialLikedArray();
    }
  });
});

const checkSongLikedAray = (likedSong) => {
  let index = 0;
  for (index = 0; index < likedArray.length; index++) {
    if (likedArray[index] == likedSong) break;
  }
  if (index == likedArray.length) return false;
  else return true;
};
const fillLikedArray = (likedSong) => {
  let index = 0;
  for (index = 0; index < likedArray.length; index++) {
    if (likedArray[index] == likedSong) break;
  }
  if (index == likedArray.length) {
    likedArray.push(likedSong);
    localStorage.setItem("likedSongs", JSON.stringify(likedArray));
  }
};
const removeLikedArray = (likedSong) => {
  let index = likedArray.indexOf(likedSong);
  if (index > -1) {
    likedArray.splice(index, 1);
    localStorage.setItem("likedSongs", JSON.stringify(likedArray));
  }
};

let likedSec2CardContainer = document.querySelector(".likedSec2CardContainer");
const createLikedCard = (e) => {
  let likedSec2Card = document.createElement("div");
  likedSec2Card.classList.add("likedSec2Card");
  likedSec2Card.style.backgroundImage = `url(${e.image})`;
  likedSec2CardContainer.appendChild(likedSec2Card);

  likedSec2Card.addEventListener("click", (likedSec2CardBtn) => {
    audio.title = e.song;
    audio.src = e.url;
    currTime = 0;
    playSongFunc();
    setAllFields(e);
    createQueue(e);
    currSong = e;
    recentSongArr.push(currSong);
    localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
  });
};

const initialLikedArray = () => {
  let fetch_likedArraySongs = localStorage.getItem("likedSongs");
  if (fetch_likedArraySongs != null) {
    fetch_likedArraySongs = JSON.parse(localStorage.getItem("likedSongs"));
    likedArray = [];
    likedSec2CardContainer.innerHTML = "";
    fetch_likedArraySongs.forEach((e) => likedArray.push(e));
  }
  Array.from(likedArray).forEach((e) => createLikedCard(e));
};

document
  .querySelector(".likedSec2_headingPlayBtn")
  .addEventListener("click", () => {
    let queue_playlistItemContainer = document.querySelector(
      ".queue_playlistItemContainer"
    );
    queue_playlistItemContainer.innerHTML = "";
    Array.from(likedArray).forEach((ele) => {
      createQueue(ele);
    });
    audio.title = likedArray[0].title;
    audio.src = likedArray[0].url;
    currTime = 0;
    playSongFunc();
    setAllFields(likedArray[0]);
    currSong = likedArray[0];
    recentSongArr.push(currSong);
    localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
  });

// open MAIN CONTAINER on click on Bottom Player Song Name
document
  .querySelector(".bottom_player_songArea")
  .addEventListener("click", () => {
    fullscreen.click();
  });

//create new Release Cards

let brandnewNewReleaseSection1_cardsContainer = document.querySelector(
  ".brandnewNewReleaseSection1_cardsContainer"
);
const createBrandNewReleaseCards = (e) => {
  //creating the card
  let brandnewNewReleaseSection1_cards = document.createElement("div");
  brandnewNewReleaseSection1_cards.classList.add(
    "brandnewNewReleaseSection1_cards"
  );
  brandnewNewReleaseSection1_cards.style.backgroundImage = `url(${e.image})`;

  // filling the card
  let brandnewNewReleaseSection1_cards_overlay = document.createElement("div");
  brandnewNewReleaseSection1_cards_overlay.classList.add(
    "brandnewNewReleaseSection1_cards_overlay"
  );

  let brandnewNewReleaseSection1_cards_controls = document.createElement("div");
  brandnewNewReleaseSection1_cards_controls.classList.add(
    "brandnewNewReleaseSection1_cards_controls"
  );

  //adding controls
  //PLAY BUTTON
  let brandnewNewReleaseSection1_cards_controlsPlay =
    document.createElement("span");
  brandnewNewReleaseSection1_cards_controlsPlay.classList.add(
    "brandnewNewReleaseSection1_cards_controlsPlay"
  );
  brandnewNewReleaseSection1_cards_controlsPlay.classList.add(
    "material-symbols-outlined"
  );
  brandnewNewReleaseSection1_cards_controlsPlay.style.fontSize = "56px";
  brandnewNewReleaseSection1_cards_controlsPlay.style.position = "relative";
  // brandnewNewReleaseSection1_cards_controlsPlay.style.top = "15px";
  // brandnewNewReleaseSection1_cards_controlsPlay.style.left = "10px";
  brandnewNewReleaseSection1_cards_controlsPlay.innerText = "play_circle";
  brandnewNewReleaseSection1_cards_controls.appendChild(
    brandnewNewReleaseSection1_cards_controlsPlay
  );

  //LIKE BUTTON
  let brandnewNewReleaseSection1_cards_controlsLike =
    document.createElement("span");
  brandnewNewReleaseSection1_cards_controlsLike.classList.add(
    "brandnewNewReleaseSection1_cards_controlsLike"
  );
  brandnewNewReleaseSection1_cards_controlsLike.classList.add(
    "material-symbols-outlined"
  );
  brandnewNewReleaseSection1_cards_controlsLike.style.fontSize = "26px";
  brandnewNewReleaseSection1_cards_controlsLike.style.fontVariationSettings =
    "'FILL' 0, 'wght' 600, 'GRAD' 0, 'opsz' 48";
  brandnewNewReleaseSection1_cards_controlsLike.innerText = "favorite";
  brandnewNewReleaseSection1_cards_controls.appendChild(
    brandnewNewReleaseSection1_cards_controlsLike
  );

  //adding controls to overlay
  brandnewNewReleaseSection1_cards_overlay.appendChild(
    brandnewNewReleaseSection1_cards_controls
  );

  //TITLE AREA
  let brandnewNewReleaseSection1_cards_title = document.createElement("div");
  brandnewNewReleaseSection1_cards_title.classList.add(
    "brandnewNewReleaseSection1_cards_title"
  );
  brandnewNewReleaseSection1_cards_title.innerHTML = e.song;
  brandnewNewReleaseSection1_cards_overlay.appendChild(
    brandnewNewReleaseSection1_cards_title
  );

  brandnewNewReleaseSection1_cards.appendChild(
    brandnewNewReleaseSection1_cards_overlay
  );

  //adding it to the container
  brandnewNewReleaseSection1_cardsContainer.appendChild(
    brandnewNewReleaseSection1_cards
  );

  //adding functionality to control buttons
  brandnewNewReleaseSection1_cards_controlsPlay.addEventListener(
    "click",
    () => {
      audio.title = e.song;
      audio.src = e.url;
      currTime = 0;
      playSongFunc();
      setAllFields(e);
      createQueue(e);
      currSong = e;
      recentSongArr.push(currSong);
      localStorage.setItem("recentSong", JSON.stringify(recentSongArr));
    }
  );

  brandnewNewReleaseSection1_cards_controlsLike.addEventListener(
    "click",
    () => {
      if (
        brandnewNewReleaseSection1_cards_controlsLike.style
          .fontVariationSettings == '"FILL" 0, "wght" 600, "GRAD" 0, "opsz" 48'
      ) {
        fillLikedArray(e);
        brandnewNewReleaseSection1_cards_controlsLike.style.fontVariationSettings =
          '"FILL" 1, "wght" 600, "GRAD" 0, "opsz" 48';
      } else {
        removeLikedArray(e);
        brandnewNewReleaseSection1_cards_controlsLike.style.fontVariationSettings =
          '"FILL" 0, "wght" 600, "GRAD" 0, "opsz" 48';
      }
    }
  );
};

let newReleaseSongCount = 5;
// createBrandNewReleaseCards();
// createBrandNewReleaseCards();
for (let index = 0; index < songsArray.length; index++) {
  if (songsArray[index].year == "2023")
    createBrandNewReleaseCards(songsArray[index]);
}

// fetch new Release Cards
let brandnewNewReleaseSection1_cards = document.querySelectorAll(
  ".brandnewNewReleaseSection1_cards .brandnewNewReleaseSection1_cards_controlsPlay"
);
let brandnewNewReleaseSection1_discContainer_discImg = document.querySelector(
  ".brandnewNewReleaseSection1_discContainer_discImg"
);
Array.from(brandnewNewReleaseSection1_cards).forEach((releaseCard) => {
  releaseCard.addEventListener("click", () => {
    if (
      brandnewNewReleaseSection1_discContainer_discImg
        .computedStyleMap()
        .get("left").value != -300
    ) {
      brandnewNewReleaseSection1_discContainer_discImg.style.animationName =
        "brandnewNewReleaseSection1_discContainer_discImgAnimeOut";
    }

    setTimeout(() => {
      brandnewNewReleaseSection1_discContainer_discImg.style.animationName =
        "brandnewNewReleaseSection1_discContainer_discImgAnimeIn";
      setTimeout(() => {
        brandnewNewReleaseSection1_discContainer_discImg.style.left = "0%";
      }, 500);
    }, 500);
    let brandnewNewReleaseSection1_cardsContainer = document.querySelector(
      ".brandnewNewReleaseSection1_cardsContainer"
    );
    let brandnewNewReleaseSection1_discContainer = document.querySelector(
      ".brandnewNewReleaseSection1_discContainer"
    );
    if (window.innerWidth > screenWidth) {
      brandnewNewReleaseSection1_cardsContainer.style.width = "60%";
      brandnewNewReleaseSection1_discContainer.style.width = "40%";
      brandnewNewReleaseSection1_cardsContainer.style.borderRight =
        "1px solid white";
    } else {
      brandnewNewReleaseSection1_cardsContainer.style.width = "100%";
      brandnewNewReleaseSection1_discContainer.style.width = "100%";
      brandnewNewReleaseSection1_cardsContainer.style.borderRight = "";
    }
    document.querySelector(
      ".brandnewNewReleaseSection1_discClose"
    ).style.display = "";
  });
});
//closing brand new disc
let brandnewNewReleaseSection1_discClose = document.querySelector(
  ".brandnewNewReleaseSection1_discClose"
);
brandnewNewReleaseSection1_discClose.style.display = "none";
brandnewNewReleaseSection1_discClose.addEventListener("click", () => {
  document.querySelector(
    ".brandnewNewReleaseSection1_cardsContainer"
  ).style.width = "100%";
  document.querySelector(
    ".brandnewNewReleaseSection1_discContainer"
  ).style.width = "0%";
  document.querySelector(
    ".brandnewNewReleaseSection1_cardsContainer"
  ).style.borderRight = "";
  brandnewNewReleaseSection1_discClose.style.display = "none";
});

//rotate Disc
let rotateDeg2 = 0;
const rotateDisc2 = () => {
  setTimeout(() => {
    let demoDisc = document.querySelector(
      ".brandnewNewReleaseSection1_discContainer_discImg"
    );
    if (
      !audio.paused &&
      audio.currentTime != 0 &&
      audio.currentTime != audio.duration
    ) {
      demoDisc.style.transform = `rotate(${rotateDeg2}deg)`;
      rotateDeg2++;
    } else if (audio.currentTime == audio.duration) {
      rotateDeg2 = 0;
    }
    window.requestAnimationFrame(rotateDisc2);
  }, 50);
};
window.requestAnimationFrame(rotateDisc2);

//INTERNATIONAL CARDS

const createInternationalCards = (e) => {
  let newReleaseContainer_cardContainer = document.querySelector(
    ".internationalContainer_cardContainer"
  );
  let newReleaseContainer_card = document.createElement("div");
  newReleaseContainer_card.classList.add("newReleaseContainer_card");

  let newReleaseContainer_cardImgContainer = document.createElement("div");
  newReleaseContainer_cardImgContainer.classList.add(
    "newReleaseContainer_cardImgContainer"
  );
  let newReleaseContainer_cardImg = document.createElement("img");
  newReleaseContainer_cardImg.classList.add("newReleaseContainer_cardImg");
  newReleaseContainer_cardImg.setAttribute("src", e.image);
  newReleaseContainer_cardImgContainer.append(newReleaseContainer_cardImg);
  newReleaseContainer_card.append(newReleaseContainer_cardImgContainer);

  let newReleaseContainer_cardTitleContainer = document.createElement("div");
  newReleaseContainer_cardTitleContainer.classList.add(
    "newReleaseContainer_cardTitleContainer"
  );
  let newReleaseContainer_cardTitle = document.createElement("h4");
  newReleaseContainer_cardTitle.classList.add("newReleaseContainer_cardTitle");
  newReleaseContainer_cardTitle.innerHTML = e.song;
  newReleaseContainer_cardTitleContainer.append(newReleaseContainer_cardTitle);
  newReleaseContainer_card.append(newReleaseContainer_cardTitleContainer);

  //create overlay
  let newReleaseContainer_card_overlay = document.createElement("div");
  newReleaseContainer_card_overlay.classList.add("overlay");

  //CREATING HEART ICON
  let likedSvg = document.createElement("div");
  likedSvg.classList.add("likedSvg");

  let likedImg = document.createElement("img");
  likedImg.src = "./images/heartIconEmpty.png";
  likedImg.classList.add("likedImg");
  likedSvg.appendChild(likedImg);
  likedSvg.addEventListener("click", () => {
    if (
      likedImg.src.slice(
        likedImg.src.lastIndexOf("/") + 1,
        likedImg.src.length - 4
      ) == "heartIconEmpty"
    ) {
      likedSvg.removeChild(likedImg);
      likedImg.src = "./images/heartIconFilled.png";
      likedSvg.appendChild(likedImg);
      fillLikedArray(e);
    } else {
      likedSvg.removeChild(likedImg);
      likedImg.src = "./images/heartIconEmpty.png";
      likedSvg.appendChild(likedImg);
      removeLikedArray(e);
    }
  });
  newReleaseContainer_card_overlay.append(likedSvg);

  //CREATING PLAY ICON
  let playButtonSvg = document.createElement("div");
  playButtonSvg.classList.add("card_playSvg");

  let playButtonImg = document.createElement("img");
  playButtonImg.src = "./images/playButtonIcon.png";
  playButtonImg.classList.add("likedImg");
  playButtonSvg.appendChild(playButtonImg);
  newReleaseContainer_card_overlay.append(playButtonSvg);

  //appending whole overlay
  newReleaseContainer_card.append(newReleaseContainer_card_overlay);

  newReleaseContainer_cardContainer.append(newReleaseContainer_card);

  // playButtonSvg
  playButtonSvg.addEventListener("click", () => {
    audio.title = e.song;
    audio.src = e.url;
    currTime = 0;
    playSongFunc();
    setAllFields(e);
    createQueue(e);
    currSong = e;
    recentSongArr.push(currSong);
    localStorage.setItem("recentSong", JSON.stringify(recentSongArr));

    if (window.innerWidth > screenWidth) {
      let demoDisc = document.querySelector(".demoDisc");
      let bodyWidth = document.body.clientWidth / 2;
      demoDisc.style.top = `${demoDisc.clientHeight + 10}px`;
      demoDisc.style.left = bodyWidth + "px";
      demoDisc.style.transform = "translate(-50%, -50%) scale(1.5)";
      demoDisc.style.display = "block";
    }
  });
};

Array.from(songsArray).forEach((song) => {
  if (song.category == "international") createInternationalCards(song);
});

//OLD SONG CARDS

const createOldSongCards = (e) => {
  let newReleaseContainer_cardContainer = document.querySelector(
    ".oldSongsContainer_cardContainer"
  );
  let newReleaseContainer_card = document.createElement("div");
  newReleaseContainer_card.classList.add("newReleaseContainer_card");

  let newReleaseContainer_cardImgContainer = document.createElement("div");
  newReleaseContainer_cardImgContainer.classList.add(
    "newReleaseContainer_cardImgContainer"
  );
  let newReleaseContainer_cardImg = document.createElement("img");
  newReleaseContainer_cardImg.classList.add("newReleaseContainer_cardImg");
  newReleaseContainer_cardImg.setAttribute("src", e.image);
  newReleaseContainer_cardImgContainer.append(newReleaseContainer_cardImg);
  newReleaseContainer_card.append(newReleaseContainer_cardImgContainer);

  let newReleaseContainer_cardTitleContainer = document.createElement("div");
  newReleaseContainer_cardTitleContainer.classList.add(
    "newReleaseContainer_cardTitleContainer"
  );
  let newReleaseContainer_cardTitle = document.createElement("h4");
  newReleaseContainer_cardTitle.classList.add("newReleaseContainer_cardTitle");
  newReleaseContainer_cardTitle.innerHTML = e.song;
  newReleaseContainer_cardTitleContainer.append(newReleaseContainer_cardTitle);
  newReleaseContainer_card.append(newReleaseContainer_cardTitleContainer);

  //create overlay
  let newReleaseContainer_card_overlay = document.createElement("div");
  newReleaseContainer_card_overlay.classList.add("overlay");

  //CREATING HEART ICON
  let likedSvg = document.createElement("div");
  likedSvg.classList.add("likedSvg");

  let likedImg = document.createElement("img");
  likedImg.src = "./images/heartIconEmpty.png";
  likedImg.classList.add("likedImg");
  likedSvg.appendChild(likedImg);
  likedSvg.addEventListener("click", () => {
    if (
      likedImg.src.slice(
        likedImg.src.lastIndexOf("/") + 1,
        likedImg.src.length - 4
      ) == "heartIconEmpty"
    ) {
      likedSvg.removeChild(likedImg);
      likedImg.src = "./images/heartIconFilled.png";
      likedSvg.appendChild(likedImg);
      fillLikedArray(e);
    } else {
      likedSvg.removeChild(likedImg);
      likedImg.src = "./images/heartIconEmpty.png";
      likedSvg.appendChild(likedImg);
      removeLikedArray(e);
    }
  });
  newReleaseContainer_card_overlay.append(likedSvg);

  //CREATING PLAY ICON
  let playButtonSvg = document.createElement("div");
  playButtonSvg.classList.add("card_playSvg");

  let playButtonImg = document.createElement("img");
  playButtonImg.src = "./images/playButtonIcon.png";
  playButtonImg.classList.add("likedImg");
  playButtonSvg.appendChild(playButtonImg);
  newReleaseContainer_card_overlay.append(playButtonSvg);

  //appending whole overlay
  newReleaseContainer_card.append(newReleaseContainer_card_overlay);

  newReleaseContainer_cardContainer.append(newReleaseContainer_card);

  // playButtonSvg
  playButtonSvg.addEventListener("click", () => {
    audio.title = e.song;
    audio.src = e.url;
    currTime = 0;
    playSongFunc();
    setAllFields(e);
    createQueue(e);
    currSong = e;
    recentSongArr.push(currSong);
    localStorage.setItem("recentSong", JSON.stringify(recentSongArr));

    if (window.innerWidth > screenWidth) {
      let demoDisc = document.querySelector(".demoDisc");
      let bodyWidth = document.body.clientWidth / 2;
      demoDisc.style.top = `${demoDisc.clientHeight + 10}px`;
      demoDisc.style.left = bodyWidth + "px";
      demoDisc.style.transform = "translate(-50%, -50%) scale(1.5)";
      demoDisc.style.display = "block";
    }
  });
};

Array.from(songsArray).forEach((song) => {
  if (song.category == "oldSongs") createOldSongCards(song);
});
