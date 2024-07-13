// Hemburger menu
const Mob_menu_icon = document.getElementById("mobMenuIcon");
const MobMenuH1 = document.getElementById("mobmenuh");
const hemMenu = document.getElementById("hemMenu")
let flag =1;
Mob_menu_icon.addEventListener("click",(evnt)=>{
    if(flag==1)
    {
      MobMenuH1.innerHTML="&#10005"
      hemMenu.style.display="flex"
      flag=0;
      
    }else{
      MobMenuH1.innerHTML="&#9776";
    hemMenu.style.display="none";
    flag=1
    }

})


// Welcome animation
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1200,
    easing: "easeOutExpo",
    delay: 10000
  });
  
  
  
  // typing animation
const texts = [
    "In This Site",
    "Fit-Table",
    "You Can Track",
    "Your Self,",
    "Your Shadule,",
    "And Your Improvement."
  ];
  
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  
  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
  
    document.getElementById('typing-text').textContent = letter;
  
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
  
    setTimeout(type, 200); // Adjust typing speed here (in milliseconds)
  }
  
  document.addEventListener('DOMContentLoaded', type);
  