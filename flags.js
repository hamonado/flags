// ✅ Correct flags
const flags = {
  1: "CTF{encoding_flags}",
  2: "CTF{console_play}",
  3: "CTF{password_encoded}",
  4: "CTF{hidden_text}",
  5: "CTF{tamper_hard}"
};

// 🔹 Challenge 1: log hidden encoded value
(function(){
  const part1 = "UVFWR2Uy";
  const part2 = "VnVaMjlrdW5ZMmZabHdadmd9";
  const doubleEnc = part1 + part2;
  console.log("Challenge 1 encoded string:", doubleEnc);
})();

// 🔹 Challenge 2: scrambled
const scrambled = [67,84,70,123,99,111,110,115,111,108,101,95,112,108,97,121,125];
console.log("Challenge 2 scrambled array:", scrambled);

// 🔹 Check flag
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

// 🔹 Password logic (Challenge 3)
function checkPwd() {
  const input = document.getElementById("pwd").value;
  const realPwd = String.fromCharCode(99,119,115,109,110,108); // "cwsmnl"
  if (input === realPwd) {
    const enc3 = "Q1RGe3Bhc3N3b3JkX2VuY29kZWR9"; // Base64
    document.getElementById("pwdResult").innerText = "Flag: " + atob(enc3);
  } else {
    document.getElementById("pwdResult").innerText = "Wrong password!";
  }
}

// 🔹 Challenge 5
function revealFlag() {
  const hex = [0x43,0x54,0x46,0x7b,0x74,0x61,0x6d,0x70,0x65,0x72,0x5f,0x68,0x61,0x72,0x64,0x7d];
  let flag = String.fromCharCode(...hex);
  document.getElementById("btnResult").innerText = "Flag: " + flag;
}
