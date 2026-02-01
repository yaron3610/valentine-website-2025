// ============================================
// 💝 התאמה אישית לאתר הוולנטיין שלך 💝
// ============================================

const CONFIG = {

    // השם של הוולנטיין שיופיע בכותרות
    valentineName: "תמרי",

    // הכותרת שמופיעה בלשונית הדפדפן
    pageTitle: "תהיי הוולנטיין שלי? 💝",

    // אימוג'ים מרחפים ברקע
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // שאלות ותשובות
    questions: {

        // שאלה ראשונה
        first: {
            text: "את אוהבת אותי?",
            yesBtn: "כן 💖",
            noBtn: "לא",
            secretAnswer: "לא סתם אוהבת — ממש אוהבת 💕"
        },

        // שאלה שנייה (מד אהבה)
        second: {
            text: "עד כמה את אוהבת אותי?",
            startText: "בערך ככה…",
            nextBtn: "הבא ❤️"
        },

        // השאלה הגדולה
        third: {
            text: "רוצה להיות הוולנטיין שלי ב־14 בפברואר 2026? 🌹",
            yesBtn: "כן!!! 💕",
            noBtn: "לא"
        }
    },

    // הודעות מד האהבה
    loveMessages: {
        extreme: "רגע… זה המון אהבה 😳💝",
        high: "וואו, זה כבר אינסוף 💖🚀",
        normal: "יותר ממה שציפיתי 🥰"
    },

    // הודעות אחרי שהיא אומרת כן
    celebration: {
        title: "איזו שמחה! זכיתי בך 💝🎉",
        message: "עכשיו בואי לקחת את המתנה שלך — חיבוק חזק ונשיקה 💋",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // צבעי האתר
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // אנימציות
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // מוזיקת רקע
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 נגן מוזיקה",
        stopText: "🔇 עצור מוזיקה",
        volume: 0.5
    }
};

// לא לשנות שום דבר מתחת לשורה הזו
window.VALENTINE_CONFIG = CONFIG;
