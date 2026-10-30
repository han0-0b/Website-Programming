//照片放大顯示

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCap = document.getElementById('lb-cap');
const lbClose = document.getElementById('lb-close');

//找到每一張照片所在的figure
document.querySelectorAll('.gallery figure').forEach((fig) => {
    fig.addEventListener('click', () => {
        const img = fig.querySelector('img');
        const cap = fig.querySelector('figcaption');

        lbImg.src = img.src;//圖塞進視窗
        lbCap.textContent = cap ? cap.textContent : '';//說明

        lightbox.showModal();//開啟視窗
    });
});

//關閉鈕
lbClose.addEventListener('click', () => lightbox.close());