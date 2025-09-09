// ✅ Correct flag list
const flags = {
  1: "CTF{encoding_flags}",
  2: "CTF{console_play}",
  3: "CTF{password_encoded}",
  4: "CTF{hidden_text}",
  5: "CTF{tamper_hard}"
};

// Challenge progression
window.checkFlag = function(num) {
  const input = document.getElementById(`flag${num}`).value.trim();
  const result = document.getElementById(`result${num}`);

  if (input === flags[num]) {
    result.innerText = "✅ Correct!";
    const next = document.getElementById(`ch${num+1}`);
    if (next) next.style.display = "block";
  } else {
    result.innerText = "❌ Try again!";
  }
};

// Password logic for Challenge 3
window.checkPwd = function() {
  const input = document.getElementById("pwd").value;
  // obfuscated password: cwsmnl
  const encodedPwd = "Y3dzbW5s"; // base64 of cwsmnl
  const realPwd = atob(encodedPwd);

  if (input === realPwd) {
    const enc3 = "Q1RGe3Bhc3N3b3JkX2VuY29kZWR9"; // Base64 flag
    document.getElementById("pwdResult").innerText = "Flag: " + atob(enc3);
  } else {
    document.getElementById("pwdResult").innerText = "Wrong password!";
  }
};

// Reveal flag for Challenge 5
window.revealFlag = function() {
  const hex = [0x43,0x54,0x46,0x7b,0x74,0x61,0x6d,0x70,0x65,0x72,0x5f,0x68,0x61,0x72,0x64,0x7d];
  let flag = String.fromCharCode(...hex);
  document.getElementById("btnResult").innerText = "Flag: " + flag;
};
