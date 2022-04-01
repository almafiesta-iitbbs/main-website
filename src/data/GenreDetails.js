import DancePhoto from "../images/final-main-page/events/dance.jpg";
import FashionPhoto from "../images/final-main-page/events/fashion.jpeg";
import FineArtsPhoto from "../images/final-main-page/events/fine_arts.jpg";
import DramaticsPhoto from "../images/final-main-page/events/drams-4.jpg";
import MusicPhoto from "../images/final-main-page/events/music-61.jpg";
import LiteraturePhoto from "../images/final-main-page/events/mun-2.jpg";
import ESportsPhoto from "../images/final-main-page/events/egames.jpg";
import PhotographyPhoto from "../images/final-main-page/events/photography.jpg";

const dance = (
  <div>
    "Dancing is surely the most basic and relevant of all forms of expression.
    Nothing else can so effectively give outward form to an inner experience".{" "}
    <br />–<b>Lynan Watson</b>
    <br />
    <br />
    Team Alma, hereby presents four dance events with the aim to give a
    professional platform for all the dancers out there to come forward and
    showcase their talent. So, if you have the potential to sweep the audience
    right off their feet and dance to the top, get your dancing shoes, record a
    short video of your dance and send us your entries to win exciting prizes.
  </div>
);
const finearts = (
  <>
    "I found I could say things with color and shapes that I couldn't say any
    other way - things I had no words for."
    <br />
    <b> - Georgia O'Keeffe</b>
    <br />
    Art is an expression of life itself, many experiences that cannot be
    described in words are portrayed by art. There is no perfection, art is what
    the eye perceives it to be.
    <br />
    Keeping this in mind, Alma Fiesta'22 with the theme of a utopia presents
    fine art events from different mediums, calling every artist to express
    themselves with their creativity and imagination.
    <br />
  </>
);
const photography = (
  <>
    Your utopia is your own envisioning of the perfect world and a camera aids
    tell the story of your imagination out of reality. So take out your cameras
    and steal some moments of your version of that perfection, since alma fiesta
    is here with a variety of interesting
    <br />
    <b>photography and cinematography events like:</b>
    <br />
    <ul>
      <ol>Photostory (online photojournalism)</ol>
      <ol>Trailor making</ol>
      <ol>Showreel (online short film making)</ol>
      <ol>Photography contest</ol>
      <ol>AD- making competition </ol>
    </ul>
  </>
);
const gaming = (
  <>
    Assemble gamers! because Team Alma Fiesta brings to you exceptional events
    where you can let out your precision and skills and leave the people be
    astonished. Get ready to exhibit your gaming skills.
    <b>Events we have gathered:</b>
    <ul>
      <ol>CSGO</ol>
      <ol>CODM</ol>
      <ol>Valorant</ol>
      <ol>Rocket Leauge</ol>
    </ul>
    <br></br>
    Let's see if you can shoot precisely to the top place! So what are you
    waiting for!! Come n play! It's a call to the gamer in you!
  </>
);
const fashion = (
  <>
    "What you wear is how you present yourself to the world, especially today
    when human contacts are so quick. Fashion is instant language."
    <br />
    <b>-Miuccia Prada.</b>
    <br />
    Alma Fiesta brings you the opportunity to express yourself in this instant
    language. Be it dress designing or ramp walking, “The Vogue Spectra” is a
    competition covering it all. Participate in this competition and get a
    chance to exhibit your fashion aesthetics to the world. For more information
    and registration, visit our website-
  </>
);
const literature = (
  <>
    Gear up your craze for fun-filled literature-based events. Let your inner
    creativity out because Team Alma Fiesta brings to you exceptional events
    where you can let out your talent and skills and leave the people be
    astonished.
    <br />
    <b>Events we have gathered:</b>
    <ul>
      <ol>Gone in 60 seconds</ol>
      <ol>Shipwrecked</ol>
      <ol>Online MUN</ol>
      <ol>Alt-End</ol>
      <ol>Fantasy Quiz</ol>
      <ol>Kavya Path</ol>
    </ul>
  </>
);
const music = (
  <>
    Any festival is incomplete without music. And when it comes to Alma fiesta,
    music is its soul. So, here we bring the most exhilarating and electrifying
    range of music competitions.
    <br />
    <b>The platter includes:</b>
    <ul>
      <ol>Dil Se</ol>
      <ol>Twist the Lyrics</ol>
      <ol>Rock On!</ol>
    </ul>
    Don't be shy, show your talents and get the opportunity to be a rockstar.
    Because it's more than music to us!
  </>
);
const dramatics = (
  <>
    <b>
      "The world's a stage and each one of us an actor. Alma Fiesta's the
      theatre that everyone is after"
    </b>
    <br />
    What's life without emotions and drama? Nothing but a blank canvas void of
    all the colours. Truly depicting the dream of a utopian world, Alma Fiesta
    presents to you a fun set of events celebrating each hue to the human
    emotion that fills our life with the vibrance that it needs.
    <br />
    <b>The event roster includes:</b>
    <ul>
      <ol>Pont des émotions</ol>
      <ol>WordSmith</ol>
      <ol>Spoof-O-Mania</ol>
      <ol>Audio Play</ol>
    </ul>
  </>
);

const genreDetails = [
  {
    imageSrc: MusicPhoto,
    title: "Music",
    description: music,
  },
  {
    imageSrc: DramaticsPhoto,
    title: "Dramatics",
    description: dramatics,
  },
  {
    imageSrc: DancePhoto,
    title: "Dance",
    description: dance,
  },
  {
    imageSrc: LiteraturePhoto,
    title: "Literature",
    description: literature,
  },
  {
    imageSrc: PhotographyPhoto,
    title: "Photography",
    description: photography,
  },
  {
    imageSrc: FineArtsPhoto,
    title: "Fine Arts",
    description: finearts,
  },
  {
    imageSrc: ESportsPhoto,
    title: "ESports",
    description: gaming,
  },
  {
    imageSrc: FashionPhoto,
    title: "Fashion",
    description: fashion,
  },
  // {
  //   // imageSrc: `${imageSrcc}`,
  //   title: "Food",
  //   description: food,
  // },
  // {
  //   // imageSrc: `${imageSrcc}`,
  //   title: "Filler",
  //   description: filler,
  // },
];

export default genreDetails;
