/* =========================================================
   CONFIG
   ========================================================= */
const SECRET_CODE = "454009";
 
/* =========================================================
   LOGIN-SUCCESS EMAIL NOTIFICATION — sends YOU an email only
   when someone enters the CORRECT password. Powered by EmailJS
   (free, no backend server needed). Fill in the 3 values below
   from your EmailJS dashboard — see the setup steps shared in chat.
   ========================================================= */
const EMAILJS_PUBLIC_KEY  = "cYXOkpADj7HPcW-bE";    // Account → General → Public Key
const EMAILJS_SERVICE_ID  = "service_0y93y63";    // Email Services → your service
const EMAILJS_TEMPLATE_ID = "template_wpecrn3";   // Email Templates → your template
const NOTIFY_TO_EMAIL     = "mrrk.rk18@gmail.com";
 
let loginEmailSent = false; // guard so it only fires once per visit
 
function sendLoginSuccessEmail(){
  if (loginEmailSent) return;       // already sent once this visit
  if (typeof emailjs === "undefined") return;          // SDK didn't load
  if (EMAILJS_PUBLIC_KEY.startsWith("YOUR_")) return;   // IDs not filled in yet
  loginEmailSent = true;
 
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
 
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    to_email: NOTIFY_TO_EMAIL,
    name: "Birthday Website",
    email: NOTIFY_TO_EMAIL,
    message: "sjl has logged into the website by entering the correct password.",
    login_time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
  }).catch((err) => console.log("Login notification email failed:", err));
}
 
const NOTE_TEXT = "👉🏻 आधी तर तू कशी आहे shejuu 😍 बरी आहे ना ☺️ नेहेमी बरिच राहा plzz 😌🙇🏻‍♂️ आठवण वैगेरे तर येतच नाही ना shejuu ला 🤭 पण मला खूप येते 💯 आणि मी नेहेमी profile चेक करतो 😜 आणि last seen सुद्धा clg off व्हायचा आधी late seen खूप वाढले 🤨 आणि आता बरोबर आहे 👍🏻 बरं shejuu मला हे सांग माझा कृष्णा 😍😘 कसा आहे आणि काय त्याला बॅग मध्ये घेऊन कुठे aa 🧐 बडा सुंदर बघत होता 😘 पन आशु 😍 ला नाही दाखवला न ठेवशील न स्टेटस ला aa 😌 बरं shejuu बोलायचे तर खूप काही आहे ☹️ पन इथे बोलू शकत नाही ही तर website आहे 😅 पन तुला website कशी वाटली shejuu 🤩 आणि नेहेमी सारखी website secure आहे 💯 aa आणि आधी तर password protected आहे 😜 tension नको घेऊ उद्याला server वरुण remove होऊन जाईल aa मी काय बोलत आहो पागला सारखं 🤦🏻‍♂️ Shejuu गौराई 🌺 खूप खूप खूपच सारा Happy Birthday Bituuuuuuu....!! 🌺♥️✨💯 खूप Happy राहा मज्जा करा 🥳 रडायचे कधीच नाही 😙 रुसायच नेहेमी फुगायच्या नेहेमी फुगूबाई 🤭👌🏻 Sorry nn shejuu Sorry nn bituu 🙇🏻‍♂️🌺 रागायला नाही येऊ aa माझी लाल सारी 😍🌺✨ बरं जातो aa मी नाही नाही Sorry Shejuu येतो aa गौराई 🌺✨ येतो मानायच म्हटले होते न 🙇🏻‍♂️ Sorry Bituu. 🌍🌺✨💯";
 
/* =========================================================
   PHOTO PLACEHOLDER — shows a friendly hint until a real
   image link is pasted into the src attribute
   ========================================================= */
document.querySelectorAll(".photo-card img").forEach((img) => {
  const placeholder = img.parentElement.querySelector(".photo-placeholder");
  function handleError(){
    img.classList.add("broken");
    if (placeholder) placeholder.classList.add("show");
  }
  img.addEventListener("error", handleError);
  // the image may have already failed to load before this script ran
  if (img.complete && img.naturalWidth === 0){
    handleError();
  }
});
 
/* =========================================================
   SCREEN HELPERS
   ========================================================= */
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
 
/* =========================================================
   AMBIENT BACKGROUND — falling hearts & flowers
   ========================================================= */
const bgFx = document.getElementById("bgFx");
const FX_EMOJIS = ["❤️","💗","🌸","🌺","🌹","✨"];
 
function spawnAmbientParticle(){
  const p = document.createElement("span");
  p.className = "fx-particle";
  p.textContent = FX_EMOJIS[Math.floor(Math.random() * FX_EMOJIS.length)];
  const size = 12 + Math.random() * 16;
  p.style.fontSize = size + "px";
  p.style.left = Math.random() * 100 + "vw";
  const duration = 6 + Math.random() * 7;
  p.style.animationDuration = duration + "s";
  bgFx.appendChild(p);
  setTimeout(() => p.remove(), duration * 1000 + 200);
}
setInterval(spawnAmbientParticle, 450);
for (let i = 0; i < 10; i++) setTimeout(spawnAmbientParticle, i * 200);
 
/* =========================================================
   CONFETTI BURST (used on unlock + candle blow)
   ========================================================= */
const fxLayer = document.getElementById("fxLayer");
const CONFETTI_COLORS = ["#ff5f8d","#ffd166","#9be7ff","#c6f6a4","#ffffff","#ff8fb3"];
 
function burstConfetti(count = 60){
  for (let i = 0; i < count; i++){
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const size = 6 + Math.random() * 6;
    piece.style.width = size + "px";
    piece.style.height = (size * 1.6) + "px";
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    piece.style.left = Math.random() * 100 + "vw";
    const duration = 1.8 + Math.random() * 1.6;
    piece.style.animationDuration = duration + "s";
    piece.style.animationDelay = (Math.random() * 0.4) + "s";
    fxLayer.appendChild(piece);
    setTimeout(() => piece.remove(), (duration + 0.6) * 1000);
  }
}
 
/* =========================================================
   LOGIN SCREEN LOGIC
   ========================================================= */
const codeInput   = document.getElementById("codeInput");
const eyeBtn      = document.getElementById("eyeBtn");
const dots        = document.querySelectorAll("#dotsIndicator span");
const errorMsg    = document.getElementById("errorMsg");
const unlockBtn   = document.getElementById("unlockBtn");
const loginCard   = document.querySelector(".login-card");
 
codeInput.addEventListener("input", () => {
  // numbers only
  codeInput.value = codeInput.value.replace(/[^0-9]/g, "").slice(0, 6);
  updateDots();
  errorMsg.classList.remove("show");
});
 
codeInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") attemptUnlock();
});
 
function updateDots(){
  const len = codeInput.value.length;
  dots.forEach((dot, i) => dot.classList.toggle("filled", i < len));
}
 
eyeBtn.addEventListener("click", () => {
  const isPassword = codeInput.type === "password";
  codeInput.type = isPassword ? "text" : "password";
  eyeBtn.textContent = isPassword ? "🙈" : "👁️";
});
 
unlockBtn.addEventListener("click", attemptUnlock);
 
function attemptUnlock(){
  if (codeInput.value === SECRET_CODE){
    showScreen("mainScreen");
    burstConfetti(70);
    sendLoginSuccessEmail();
  } else {
    errorMsg.classList.add("show");
    loginCard.classList.remove("shake");
    // restart shake animation
    requestAnimationFrame(() => loginCard.classList.add("shake"));
    codeInput.value = "";
    updateDots();
    setTimeout(() => loginCard.classList.remove("shake"), 500);
  }
}
 
/* =========================================================
   MAIN CELEBRATION SCREEN LOGIC
   ========================================================= */
const blowBtn   = document.getElementById("blowBtn");
const noteBtn   = document.getElementById("noteBtn");
const flame     = document.getElementById("flame");
let candleBlown = false;
 
blowBtn.addEventListener("click", () => {
  if (candleBlown) return;
  candleBlown = true;
  flame.classList.add("out");
  burstConfetti(55);
  blowBtn.textContent = "Wish Made 💚";
  blowBtn.classList.add("done");
});
 
noteBtn.addEventListener("click", () => {
  showScreen("noteScreen");
  startTypewriter();
});
 
/* =========================================================
   NOTE SCREEN LOGIC — typewriter effect
   ========================================================= */
const noteBody = document.getElementById("noteBody");
let typewriterStarted = false;
 
function startTypewriter(){
  if (typewriterStarted) return; // only type once per visit
  typewriterStarted = true;
 
  noteBody.textContent = "";
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  noteBody.appendChild(cursor);
 
  // Split by Unicode code points (not UTF-16 code units) so emoji made of
  // surrogate pairs / skin-tone modifiers / ZWJ sequences never get cut
  // in half mid-character while typing.
  const chars = Array.from(NOTE_TEXT);
  let i = 0;
  const speed = 16; // ms per character — adjust for faster/slower reveal
 
  function typeNext(){
    if (i < chars.length){
      cursor.insertAdjacentText("beforebegin", chars[i]);
      i++;
      setTimeout(typeNext, speed);
    } else {
      cursor.remove();
    }
  }
  typeNext();
}
 
document.getElementById("backBtn").addEventListener("click", () => {
  showScreen("mainScreen");
});
 