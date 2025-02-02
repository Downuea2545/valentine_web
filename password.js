// รหัสที่ต้องการให้ผู้ใช้กรอก
const correctPassword = "1234"; // ตัวอย่างรหัสผ่านที่ถูกต้อง

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
