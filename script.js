// מספר וואטסאפ בפורמט בינלאומי, ללא + וללא מקפים
const WHATSAPP_NUMBER = "972507895553";

// כפתור וואטסאפ
document.getElementById("whatsapp-link").href = "https://wa.me/" + WHATSAPP_NUMBER;

// השארת פרטים: הטופס מופיע רק אחרי לחיצה
const showFormButton = document.getElementById("show-form");
const leadForm = document.getElementById("lead-form");

function showForm() {
  if (!document.getElementById("form-message").hidden) return;
  showFormButton.hidden = true;
  leadForm.hidden = false;
}

showFormButton.addEventListener("click", showForm);
document.getElementById("nav-contact").addEventListener("click", showForm);

// שליחת הטופס: מציג הודעת אישור
leadForm.addEventListener("submit", function (e) {
  e.preventDefault();
  leadForm.hidden = true;
  document.getElementById("form-message").hidden = false;
});

// הגדלת / הקטנת כתב
let fontSize = 20;

function setFontSize(size) {
  fontSize = Math.min(32, Math.max(18, size));
  document.documentElement.style.fontSize = fontSize + "px";
  try {
    localStorage.setItem("fontSize", fontSize);
  } catch (e) {}
}

try {
  const saved = parseInt(localStorage.getItem("fontSize"), 10);
  if (saved) setFontSize(saved);
} catch (e) {}

document.getElementById("font-bigger").addEventListener("click", function () {
  setFontSize(fontSize + 2);
});

document.getElementById("font-smaller").addEventListener("click", function () {
  setFontSize(fontSize - 2);
});
