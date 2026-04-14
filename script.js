let music = document.getElementById("bgmusic");

function startExperience(){
  document.getElementById("intro").style.display = "none";
  document.getElementById("photoSection").style.display = "block";
  document.getElementById("main").style.display = "block";

  // show first question explicitly
  document.getElementById("q1").classList.add("active");

  fadeMusic();
  petals();
}

function fadeMusic(){
  music.volume = 0;
  music.play();

  let v = 0;
  let fade = setInterval(()=>{
    if(v < 1){
      v += 0.02;
      music.volume = v;
    } else {
      clearInterval(fade);
    }
  },100);
}

function showPopup(type){
  let popup = document.getElementById("popup");
  let img = document.getElementById("popupImg");

  popup.style.display = "block";

  if(type === "yes") img.src = "teddy-heart.gif";
  else img.src = "teddy-sad.gif";

  setTimeout(()=> popup.style.display="none",1500);
}

function nextQ(q, ans){
  showPopup(ans ? "yes" : "no");

  document.getElementById("q"+q).classList.remove("active");

  let next = document.getElementById("q"+(q+1));
  if(next){
    next.classList.add("active");
  }
}

function finish(ans){
  showPopup(ans ? "yes" : "no");

  document.getElementById("q4").style.display = "none";
  document.getElementById("finalMsg").style.display = "block";
}

/* PETALS */
function petals(){
  setInterval(()=>{
    let p = document.createElement("div");
    p.innerHTML = "🌺";
    p.classList.add("petal");
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (3 + Math.random() * 5) + "s";
    document.body.appendChild(p);

    setTimeout(()=> p.remove(), 8000);
  },300);
}
