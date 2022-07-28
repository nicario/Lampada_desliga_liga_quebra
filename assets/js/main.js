const turnOnOff = document.querySelector("#turnOnOff");
let lamp = document.querySelector("#lamp");

function isLampBroken () {
  return lamp.src.indexOf("quebrada") > -1; 
}

function lampOn () {
  if(!isLampBroken ()) {
  lamp.src = "./assets/img/ligada.jpg"
  }
}

function lampOff () {
  if(!isLampBroken ()){
  lamp.src = "./assets/img/desligada.jpg"
  }
}

function lampOnOff(){
  if(turnOnOff.textContent === 'Ligar'){
    lampOn();
    turnOnOff.textContent = 'Desligar';
  } else {
    lampOff();
    turnOnOff.textContent = 'Ligar';
  }
}

function lampBroken () {
  lamp.src = "./assets/img/quebrada.jpg"
}

turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("mouseover", lampOnOff);
lamp.addEventListener("mouseleave", lampOnOff);
lamp.addEventListener("dblclick", lampBroken);