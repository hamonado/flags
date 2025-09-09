// Challenge 1: double encoded
const doubleEnc = btoa(btoa("CTF{encoding_flags}"));
console.log(doubleEnc);


// Challenge 2: scrambled ASCII codes
const scrambled = [67,84,70,123,99,111,110,115,111,108,101,95,112,108,97,121,125];
console.log(scrambled);


// Challenge 3: password-protected
const password = "cwsmnl";
const enc3 = btoa("CTF{password_encoded}");


// Challenge 5: hex array
const hex = [0x43,0x54,0x46,0x7b,0x74,0x61,0x6d,0x70,0x65,0x72,0x5f,0x68,0x61,0x72,0x64,0x7d];


// ✅ Flags
const flags = {
  1: "CTF{encoding_flags}",
  2: "CTF{console_play}",
  3: "CTF{password_encoded}",
  4: "CTF{hidden_text}",
  5: "CTF{tamper_hard}"
};


// Progressive check
function checkFlag(num) {
  const input = document.getElementById(`flag${num}`).value.trim();
  const result = document.getElementById(`result${num}`);
  if (input === flags[num]) {
    result.innerText = "✅ Correct!";
    const next = document.getElementById(`ch${num+1}`);
    if (next) next.style.display = "block";
  } else {
    result.innerText = "❌ Try again!";
  }
}


// Challenge 3 password unlock
function checkPwd() {
  const input = document.getElementById("pwd").value;
  if (input === password) {
    document.getElementById("pwdResult").innerText = "Unlocked! Now submit the flag.";
    document.getElementById("flag3").value = atob(enc3);
  } else {
    document.getElementById("pwdResult").innerText = "Wrong password!";
  }
}


// Challenge 5 reveal
function revealFlag() {
  let flag = String.fromCharCode(...hex);
  document.getElementById("btnResult").innerText = "Unlocked! Now submit the flag.";
  document.getElementById("flag5").value = flag;
}
