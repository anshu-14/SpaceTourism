let ohead=`Launch vehicle`;
let odes=`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!`;
let thead=`Space capsule`;
let tdes=`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.`;
let threehead=`Spaceport`;
let threedes=`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.`;
document.getElementById('one').onclick=()=>{
  document.getElementById('main-heading').innerHTML=ohead;
  document.getElementById('description').innerHTML=odes;
  document.getElementById('imgg').src="assets/technology/image-launch-vehicle-landscape.jpg";
  document.getElementById('one').style.cssText=`background:white;
  color:black;
  `;
  document.getElementById('two').style.cssText=`background:black;
  color:white;
  `;
  document.getElementById('three').style.cssText=`background:black;
  color:white;
  `;
}
document.getElementById('two').onclick=()=>{
  document.getElementById('main-heading').innerHTML=thead;
  document.getElementById('description').innerHTML=tdes;
  document.getElementById('imgg').src="assets/technology/image-space-capsule-landscape.jpg";
  document.getElementById('two').style.cssText=`background:white;
  color:black;
  `;
  document.getElementById('one').style.cssText=`background:black;
  color:white;
  `;
  document.getElementById('three').style.cssText=`background:black;
  color:white;
  `;
}
document.getElementById('three').onclick=()=>{
  document.getElementById('main-heading').innerHTML=threehead;
  document.getElementById('description').innerHTML=threedes;
  document.getElementById('imgg').src="assets/technology/image-spaceport-landscape.jpg";
  document.getElementById('three').style.cssText=`background:white;
  color:black;
  `;
  document.getElementById('two').style.cssText=`background:black;
  color:white;
  `;
  document.getElementById('one').style.cssText=`background:black;
  color:white;
  `;
}