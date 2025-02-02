// การแสดงสไลด์โชว์
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// ฟังก์ชันสำหรับการแสดงสไลด์
function showSlide(index) {
    // ซ่อนภาพทั้งหมด
    slides.forEach(slide => slide.classList.remove('active'));

    // แสดงภาพปัจจุบัน
    slides[index].classList.add('active');
}

// ฟังก์ชันสำหรับสไลด์ถัดไป
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // เปลี่ยนรูปในสไลด์
    showSlide(slideIndex);
}

// แสดงสไลด์แรก
showSlide(slideIndex);

// เปลี่ยนภาพทุกๆ 3 วินาที
setInterval(nextSlide, 3000);

// การเล่น/หยุดเพลง
const musicButton = document.getElementById('musicButton');
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

// การแสดง/ซ่อนข้อความเซอร์ไพรส์
const surpriseButton = document.getElementById('surpriseButton');
const surpriseText = document.getElementById('surpriseText');

// เมื่อคลิกปุ่ม "Click me" จะแสดงหรือซ่อนข้อความเซอร์ไพรส์
surpriseButton.addEventListener('click', () => {
    // เช็คว่าข้อความเซอร์ไพรส์กำลังแสดงอยู่หรือไม่
    if (surpriseText.classList.contains('hidden')) {
        surpriseText.classList.remove('hidden'); // แสดงข้อความเซอร์ไพรส์
    } else {
        surpriseText.classList.add('hidden'); // ซ่อนข้อความเซอร์ไพรส์
    }
});
