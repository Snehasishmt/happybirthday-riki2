const openBtn=document.getElementById("openBtn");
const musicBtn=document.getElementById("musicBtn");
const bgMusic=document.getElementById("bgMusic");
const giftBtn=document.getElementById("giftBtn");
const finalMessage=document.getElementById("finalMessage");

openBtn.addEventListener("click",()=>{
  document.getElementById("birthday").scrollIntoView({behavior:"smooth"});
  burstPetals(18);
});

musicBtn.addEventListener("click",async()=>{
  try{
    if(bgMusic.paused){await bgMusic.play();musicBtn.innerHTML="♫ <span>playing</span>";}
    else{bgMusic.pause();musicBtn.innerHTML="♫ <span>music</span>";}
  }catch(e){alert("Add your song as assets/song.mp3 first.");}
});

giftBtn.addEventListener("click",()=>{
  finalMessage.classList.add("show");
  giftBtn.style.display="none";
  burstPetals(35);
  finalMessage.scrollIntoView({behavior:"smooth",block:"center"});
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
},{threshold:.12});
document.querySelectorAll(".section-hidden").forEach(el=>observer.observe(el));

function createPetal(){
  const p=document.createElement("span");
  p.className="petal";
  p.style.left=Math.random()*100+"vw";
  p.style.animationDuration=(5+Math.random()*7)+"s";
  p.style.animationDelay=(Math.random()*2)+"s";
  p.style.transform=`rotate(${Math.random()*360}deg)`;
  document.querySelector(".petals").appendChild(p);
  setTimeout(()=>p.remove(),14000);
}
setInterval(createPetal,900);

function burstPetals(n){
  for(let i=0;i<n;i++)setTimeout(createPetal,i*45);
}