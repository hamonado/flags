// ===== flags.js =====
// Put this file in the same folder as index.html and ensure the HTML loads it with:
// <script src="flags.js"></script>

// Encoded flags (single Base64 per flag) - no plain "CTF{...}" visible as plain text
const encFlags = {
  1: "Q1RGe2VuY29kaW5nX2ZsYWdzfQ==", // CTF{encoding_flags}
  2: "Q1RGe2NvbnNvbGVfcGxheX0=",     // CTF{console_play}
  3: "Q1RGe3Bhc3N3b3JkX2VuY29kZWR9", // CTF{password_encoded}
  4: "Q1RGe2hpZGRlbl90ZXh0fQ==",     // CTF{hidden_text}
  5: "Q1RGe3RhbXBlcl9oYXJkfQ=="      // CTF{tamper_hard}
};

// helper to get decoded flag value
window.getFlag = function(n) {
  return atob(encFlags[n]);
};

// CHALLENGE 1: double-encoded string printed directly to console on load
(function(){
  // double-encode the single-base64 for flag 1 (so players must decode twice)
  const single = encFlags[1];                  // Q1RGe2VuY29kaW5nX2ZsYWdzfQ==
  const doubleEncoded = btoa(single);         // UTFSR2UyVnVZMjlrYVc1blgyWnNZV2R6ZlE9PQ==
  // print exactly the blob requested (visible in console immediately)
  console.log(doubleEncoded);
})();

// CHALLENGE 2: scrambled array logged to console on load
(function(){
  const scrambled = [67,84,70,123,99,111,110,115,111,108,101,95,112,108,97,121,125];
  console.log(scrambled);
})();

// Make flag-checker functions global (so inline onclick works)
window.checkFlag = function(num) {
  try {
    const inputEl = document.getElementById('flag' + num);
    const resultEl = document.getElementById('result' + num);
    if (!inputEl || !resultEl) return;

    const value = inputEl.value.trim();
    if (value === window.getFlag(num)) {
      resultEl.classList.remove('incorrect'); resultEl.classList.add('correct');
      resultEl.textContent = "✅ Correct!";
      // reveal next challenge (if exists)
      const next = document.getElementById('ch' + (num + 1));
      if (next) next.style.display = 'block';
    } else {
      resultEl.classList.remove('correct'); resultEl.classList.add('incorrect');
      resultEl.textContent = "❌ Incorrect flag. Try again!";
    }
  } catch (e) {
    console.error('checkFlag error', e);
  }
};

// Password check for Challenge 3 (obfuscated password)
window.checkPwd = function() {
  const pwdEl = document.getElementById('pwd');
  const pwdResult = document.getElementById('pwdResult');
  if (!pwdEl || !pwdResult) return;

  const user = pwdEl.value.trim();
  const passArr = [99,119,115,109,110,108];
  const real = String.fromCharCode(...passArr);

  if (user === real) {
    // reveal flag text but do NOT auto-advance; user must submit it
    pwdResult.classList.remove('incorrect'); pwdResult.classList.add('correct');
    pwdResult.textContent = "Flag revealed: " + window.getFlag(3);
    // set flag3 input value so player can copy/submit quickly (optional)
    const f3 = document.getElementById('flag3');
    if (f3) f3.value = window.getFlag(3);
    // reveal next challenge visually? per your rule only after correct flag submission should proceed.
    // So we DO NOT reveal ch4 here — reveal ch4 only when checkFlag(3) succeeds.
  } else {
    pwdResult.classList.remove('correct'); pwdResult.classList.add('incorrect');
    pwdResult.textContent = "Wrong password!";
  }
};

// Challenge 5 reveal (enable button must be toggled via DevTools by user)
window.revealFlag = function() {
  const btnResult = document.getElementById('btnResult');
  if (!btnResult) return;
  const hex = [0x43,0x54,0x46,0x7b,0x74,0x61,0x6d,0x70,0x65,0x72,0x5f,0x68,0x61,0x72,0x64,0x7d];
  const flag = String.fromCharCode(...hex);
  btnResult.classList.remove('incorrect'); btnResult.classList.add('correct');
  btnResult.textContent = "Flag revealed: " + flag;
  // also populate flag5 input so player can submit it
  const f5 = document.getElementById('flag5');
  if (f5) f5.value = flag;
};
