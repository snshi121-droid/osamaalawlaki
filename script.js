// أبيات الشعر — بدّلها بأبياتك أنت، وأضف منها كم تبي
const verses = [
  "ما ضاقَ صدرٌ بالرجاءِ وأهلِهِ\nإلا وفُتِّحَ بابُ نورٍ في الدُّجى",
  "وللحرفِ في قلبي مقامٌ مهيبُ\nكأنّ المدى في سطرِهِ يستجيبُ",
  "سأمضي وإن طالَ الطريقُ بخطوتي\nفمن صدقَ العزمَ استطالَ مداهُ",
  "كتبتُ على صمتِ الليالي قصيدتي\nفأصغى لها ضوءُ القمرْ",
  "إذا ما جَرى حبرُ القصيدِ بخافقي\nتعلّمتُ أنّ الحرفَ أصدقُ من يدي"
];

const verseEl = document.getElementById("verse");
const verseBtn = document.getElementById("verseBtn");
let lastIndex = -1;

// يختار بيت عشوائي ولا يكرر نفس البيت مرتين ورا بعض
function pickVerse() {
  let i;
  do {
    i = Math.floor(Math.random() * verses.length);
  } while (i === lastIndex && verses.length > 1);
  lastIndex = i;
  return verses[i];
}

function showVerse() {
  verseEl.classList.add("fade");
  setTimeout(() => {
    verseEl.innerHTML = pickVerse().replace("\n", "<br>");
    verseEl.classList.remove("fade");
  }, 250);
}

verseBtn.addEventListener("click", showVerse);

// أول بيت يطلع مباشرة بدون تأخير
verseEl.innerHTML = pickVerse().replace("\n", "<br>");

// سنة الفوتر
document.getElementById("year").textContent = new Date().getFullYear();