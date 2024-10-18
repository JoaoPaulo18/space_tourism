const Locations = document.querySelectorAll('.DestinationUl a');
const NamePlanet = document.querySelector('#NamePlanet');
const imgPlanet = document.querySelector('.DestinationImg img');
const DescPlanet = document.querySelector('#DescPlanet');
const DistancePlanet = document.querySelector('.DescDistance');
const TimePlanet = document.querySelector('.DescTime');

const Texts = {
  Moon : {
    url : './assets/destination/image-moon.png',
    Title : 'MOON',
    Text : 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    Distance : '384,400 KM',
    Time : '3 DAYS'
  },
  Mars : {
    url : './assets/destination/image-mars.png',
    Title : 'MARS',
    Text : 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    Distance : '225 MIL. KM',
    Time : '9 MONTHS'
  },
  Europa : {
    url : './assets/destination/image-europa.png',
    Title : 'EUROPA',
    Text : 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    Distance : '628 MIL. KM',
    Time : '3 YEARS'
  },
  Titan : {
    url : './assets/destination/image-titan.png',
    Title : 'TITAN',
    Text : 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    Distance : '1.6 BIL. KM',
    Time : '7 YEARS'
  },
}

Locations.forEach(local =>{
  local.addEventListener('click',(e)=> Change(e))
})

function Change(e){
const point = e.target.id;
NamePlanet.innerHTML = Texts[point].Title;
imgPlanet.setAttribute('src', `${Texts[point].url}`);
DescPlanet.innerHTML = Texts[point].Text;
DistancePlanet.innerHTML = Texts[point].Distance;
TimePlanet.innerHTML = Texts[point].Time;
}