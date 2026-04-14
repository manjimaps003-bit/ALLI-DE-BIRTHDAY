window.onload = function(){

let music = document.getElementById("bgmusic");

/* START */
window.startExperience = function(){
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").style.display = "block";

  fadeMusic();
  petals();
};

/* MUSIC */
function fadeMusic(){
  music.volume = 0;
  music.play();

  let v = 0;
  let fade = setInterval(()=>{
    if(v < 1){
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  },100);
}

/* POPUP */
function showPopup(type){
  let popup = document.getElementById("popup");
  let img = document.getElementById("popupImg");

  popup.style.display = "block";

  if(type === "yes"){
    img.src = "teddy-heart.gif";
  } else {
    img.src = "teddy-fight.gif";

    let msg = document.createElement("div");
    msg.innerHTML = "💗 Please choose YES to continue 💕";
    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.background = "white";
    msg.style.padding = "10px 15px";
    msg.style.borderRadius = "12px";
    msg.style.color = "#d63384";
    msg.style.zIndex = "9999";

    document.body.appendChild(msg);

    setTimeout(()=>msg.remove(),2000);
  }

  setTimeout(()=>popup.style.display="none",1500);
}

/* QUESTIONS → ONLY YES MOVES FORWARD */
window.nextQ = function(q, ans){

  showPopup(ans ? "yes" : "no");

  // ❌ IF NO → STOP (DO NOT MOVE)
  if(!ans){
    return;
  }

  document.getElementById("q"+q).classList.remove("active");

  let next = document.getElementById("q"+(q+1));
  if(next){
    next.classList.add("active");
  }
};

/* FINAL */
window.finish = function(ans){

  showPopup(ans ? "yes" : "no");

  if(!ans) return;

  document.getElementById("q4").style.display = "none";
  document.getElementById("photoSection").style.display = "block";
  document.getElementById("finalMsg").style.display = "block";
};

/* PETALS */
function petals(){
  setInterval(()=>{
    let p = document.createElement("div");
    p.innerHTML = "🌺";
    p.style.position = "fixed";
    p.style.left = Math.random()*100 + "vw";
    p.style.top = "-10px";
    p.style.fontSize = "18px";
    p.style.animation = "fall 6s linear";
    document.body.appendChild(p);

    setTimeout(()=>p.remove(),6000);
  },300);
}

}
