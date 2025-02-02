// กำหนดวันที่เริ่มต้น (วันที่เริ่มต้นของความสัมพันธ์)
const startDate = new Date('2023-09-10T00:00:00'); // ปรับวันที่ให้เป็นวันเริ่มต้นความสัมพันธ์ของคุณ

// ฟังก์ชันที่คำนวณระยะเวลาและอัปเดตทุกๆ 1 วินาที
function updateTime() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate; // หาความแตกต่างระหว่างวันที่ปัจจุบันและวันเริ่มต้น

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // แปลงเป็นวัน
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // แปลงเป็นชั่วโมง
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // แปลงเป็นนาที
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // แปลงเป็นวินาที

    // แสดงเวลาในหน้า HTML
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// เรียกใช้ฟังก์ชันทุกๆ 1 วินาที
setInterval(updateTime, 1000);

// ฟังก์ชันไปที่หน้าเนื้อหาหลัก
function goToMainContent() {
    window.location.href = 'love.html'; // เปลี่ยนไปยังหน้าเนื้อหาหลัก
}
