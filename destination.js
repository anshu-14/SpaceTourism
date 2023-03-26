let mdescription=`See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.`;
let marsdescription=`Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!`;
let europadescription=`The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`;
let titandescription=`The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.`;

document.getElementById('moon').onclick=()=>{
  document.getElementById('planet-description').innerHTML=mdescription;
  document.getElementById('planet-name').innerHTML=`moon`;
  document.getElementById('avg-distance').innerHTML=`384,400 km`;
  document.getElementById('est-time').innerHTML=`3 days`;
  document.getElementById('gola').src="assets/destination/image-moon.png";
  document.getElementById('moon').style.cssText=`border:1px inset #00ff00;
  padding:0.5em`;
  document.getElementById('mars').style.cssText=`border:none;`;
  document.getElementById('europa').style.cssText=`border:none`;
  document.getElementById('titan').style.cssText=`border:none`;
  
}
document.getElementById('mars').onclick=()=>{
  document.getElementById('planet-description').innerHTML=marsdescription;
  document.getElementById('planet-name').innerHTML=`mars`;
  document.getElementById('avg-distance').innerHTML=`225 mil. km`;
  document.getElementById('est-time').innerHTML=`9 months`;
  document.getElementById('gola').src="assets/destination/image-mars.webp";
  document.getElementById('mars').style.cssText=`border:1px inset #00ff00;
  padding:0.5em`;
  document.getElementById('moon').style.cssText=`border:none;`;
  document.getElementById('europa').style.cssText=`border:none`;
  document.getElementById('titan').style.cssText=`border:none`;
}
document.getElementById('europa').onclick=()=>{
  document.getElementById('planet-description').innerHTML=europadescription;
  document.getElementById('planet-name').innerHTML=`europa`;
  document.getElementById('avg-distance').innerHTML=`628 mil. km`;
  document.getElementById('est-time').innerHTML=`3 years`;
  document.getElementById('gola').src="assets/destination/image-europa.png";
  document.getElementById('europa').style.cssText=`border:1px inset #00ff00;
  padding:0.5em`;
  document.getElementById('mars').style.cssText=`border:none;`;
  document.getElementById('moon').style.cssText=`border:none`;
  document.getElementById('titan').style.cssText=`border:none`;
}
document.getElementById('titan').onclick=()=>{
  document.getElementById('planet-description').innerHTML=titandescription;
  document.getElementById('planet-name').innerHTML=`titan`;
  document.getElementById('avg-distance').innerHTML=`1.6 bil. km`;
  document.getElementById('est-time').innerHTML=`7 years`;
  document.getElementById('gola').src="assets/destination/image-titan.png";
  document.getElementById('titan').style.cssText=`border:1px inset #00ff00;
  padding:0.5em`;
  document.getElementById('mars').style.cssText=`border:none;`;
  document.getElementById('europa').style.cssText=`border:none`;
  document.getElementById('moon').style.cssText=`border:none`;
}