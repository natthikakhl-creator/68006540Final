// สร้าง SVG จาก data-lucide ใน HTML
lucide.createIcons();

// ใช้ความสูงหน้าจอเป็น px เพื่อให้หน้าเปิดเต็มจอบนมือถือ
function updateScreenHeight() {
    document.documentElement.style.setProperty("--screen-height",
        window.innerHeight + "px");
}
updateScreenHeight();
window.addEventListener("resize", updateScreenHeight);