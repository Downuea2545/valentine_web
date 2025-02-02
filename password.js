// รหัสที่ต้องการให้ผู้ใช้กรอก
const correctPassword = "100966"; // ตัวอย่างรหัสผ่านที่ถูกต้อง

let enteredPassword = ""; // ตัวแปรเก็บรหัสที่กรอก

// ฟังก์ชันสำหรับเพิ่มตัวเลขที่ผู้ใช้กด
function appendDigit(digit) {
    enteredPassword += digit;

    // ตรวจสอบว่ารหัสที่กรอกถูกต้องหรือไม่
    if (enteredPassword === correctPassword) {
        document.getElementById("passwordForm").style.display = "none"; // ซ่อนฟอร์มกรอกรหัส
        // เปลี่ยนเส้นทางไปยังหน้า days.html
        window.location.href = 'days.html'; 
    }
}

// ฟังก์ชันสำหรับเคลียร์รหัส
function clearPassword() {
    enteredPassword = "";
}

// การเล่น/หยุดเพลง
const backgroundMusic = document.getElementById('backgroundMusic');

// ตรวจสอบปุ่มเล่น/หยุดเพลง
if (musicButton) {
    musicButton.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicButton.innerText = 'หยุดเพลง';
        } else {
            backgroundMusic.pause();
            musicButton.innerText = 'เล่นเพลง';
        }
    });
}