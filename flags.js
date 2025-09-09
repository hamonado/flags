// Correct flag list
const flags = [
  "CTF{encoding_flags}",   // Challenge 1
  "CTF{console_play}",     // Challenge 2
  "CTF{password_encoded}", // Challenge 3
  "CTF{hidden_text}",      // Challenge 4
  "CTF{tamper_hard}"       // Challenge 5
];

// Show Challenge 1 encoded string (double encoded)
console.log("Challenge 1 Encoded:", "UTFSR2UyVnVZMjlrYVc1blgyWnNZV2R6ZlE9PQ==");

// Show scrambled Challenge 2 flag
console.log("Challenge 2 Scrambled:", [67,84,70,123,99,111,110,115,111,108,101,95,112,108,97,121,125]);

// Generic flag checker
function checkFlag(challenge, input) {
  const cleanedInput = input.trim();
  const result = document.getElementById(`result${challenge}`);
  if (cleanedInput === flags[challenge - 1]) {
    result.innerText = "✅ Correct!";
    // Show next challenge without any alert
    const next = document.getElementById(`ch${challenge + 1}`);
    if (next) next.style.display = "block";
  } else {
    result.innerText = "❌ Incorrect flag. Try again!";
  }
}

// Password logic for Challenge 3
function checkPwd() {
  const input = document.getElementById("pwd").value.trim();
  if (input === "cwsmnl") {
    const enc3 = "Q1RGe3Bhc3N3b3JkX2VuY29kZWR9"; // Base64
    document.getElementById("pwdResult").innerText = "Flag: " + atob(enc3);
    document.getElementById("ch4").style.display = "block";
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
