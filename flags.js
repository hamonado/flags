// ✅ Correct flag list
const flags = {
  1: "CTF{encoding_flags}",
  2: "CTF{console_play}",
  3: "CTF{password_encoded}",
  4: "CTF{hidden_text}",
  5: "CTF{tamper_hard}"
};

// 🔐 Challenge 1 - correct double Base64 encoded string
// Step 1: CTF{encoding_flags} → Q1RGe2VuY29kaW5nX2ZsYWdzfQ==
// Step 2: encode again → UTFSR2UyVnVZMjlrYVc1blgyWnNZV2R6ZlE9PQ==
const doubleEnc = "UTFSR2UyVnVZMjlrYVc1blgyWnNZV2R6ZlE9PQ==";
window.__ch1_doubleEnc = doubleEnc; // used in Challenge 1

// Challenge progression
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

// Password logic for Challenge 3
function checkPwd() {
  const input = document.getElementById("pwd").value;
  // obfuscated "cwsmnl"
  const passArr = [99,119,115,109,110,108];
  const password = String.fromCharCode(...passArr);

  if (input === password) {
    const enc3 = "Q1RGe3Bhc3N3b3JkX2VuY29kZWR9"; // Base64
    document.getElementById("pwdResult").innerText = "Flag: " + atob(enc3);
  } else {
    document.getElementById("pwdResult").innerText = "Wrong password!";
  }
}

// Reveal flag for Challenge 5
function revealFlag() {
  const hex = [0x43,0x54,0x46,0x7b,0x74,0x61,0x6d,0x70,0x65,0x72,0x5f,0x68,0x61,0x72,0x64,0x7d];
  let flag = String.fromCharCode(...hex);
  document.getElementById("btnResult").innerText = "Flag: " + flag;
}
