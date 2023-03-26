let dkaam=`Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.`;
let aakaam=`Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space.`;
let vkaam=`Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. `;
let mkaam=`Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.`;
document.getElementById('douglas').onclick=()=>{
  document.getElementById('post').innerHTML=`Commander`;
  document.getElementById('name').innerHTML=`Douglas Hurley`;
  document.getElementById('kaam').innerHTML=dkaam;
  document.getElementById('traveler').src=`assets/crew/image-douglas-hurley.png`;
  document.getElementById('douglas').style.background="white";
  document.getElementById('ansari').style.background="darkgray";
  document.getElementById('victor').style.background="darkgray";
  document.getElementById('mark').style.background="darkgray";
}
document.getElementById('ansari').onclick=()=>{
  document.getElementById('name').innerHTML=`Anousheh ansari`;
  document.getElementById('post').innerHTML=`flight engineer`;
  document.getElementById('kaam').innerHTML=aakaam;
  document.getElementById('traveler').src=`assets/crew/image-anousheh-ansari.png`;
  document.getElementById('ansari').style.background="white";
  document.getElementById('douglas').style.background="darkgray";
  document.getElementById('victor').style.background="darkgray";
  document.getElementById('mark').style.background="darkgray";
}
document.getElementById('victor').onclick=()=>{
  document.getElementById('name').innerHTML=`victor glover`;
  document.getElementById('post').innerHTML=`pilot`;
  document.getElementById('kaam').innerHTML=vkaam;
  document.getElementById('traveler').src=`assets/crew/image-victor-glover.png`;
  document.getElementById('victor').style.background="white";
  document.getElementById('ansari').style.background="darkgray";
  document.getElementById('douglas').style.background="darkgray";
  document.getElementById('mark').style.background="darkgray";
}
document.getElementById('mark').onclick=()=>{
  document.getElementById('post').innerHTML=`Mission Specialist`;
  document.getElementById('name').innerHTML=`Mark Shuttleworth`;
  document.getElementById('kaam').innerHTML=mkaam;
  document.getElementById('traveler').src=`assets/crew/image-mark-shuttleworth.png`;
  document.getElementById('mark').style.background="white";
  document.getElementById('ansari').style.background="darkgray";
  document.getElementById('victor').style.background="darkgray";
  document.getElementById('douglas').style.background="darkgray";
}