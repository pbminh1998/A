var yesBtn, noBtn, img, question;
var yesBtnScale = 1, noBtnX = 0, imgY = 0, imgIndex = 0;
var imgList = ["heart1.gif", "shocked1.gif", "think1.gif", "angry1.gif", "crying1.gif", "hug1.gif"];
var noList = ["Không", "Suy nghĩ lại đi", "Gặp nhau đi mà", "Không được chọn cấy ni", "Không :)))"];

document.addEventListener("DOMContentLoaded", function (event) {
    
});

function yesFunc() {
    img = document.getElementById("mainImage");
    noBtn = document.getElementById("no");
    yesBtn = yesBtn = document.getElementById("yes");
    question = document.getElementById("question");

    img.src = "./"+ imgList[imgList.length - 1];
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    question.innerText = "Nhắn cho anh qua mess nha"
}

function noFunc() {
    yesBtnScale += 1.2;
    noBtnX += 50;
    imgY -= 25;
    imgIndex = imgIndex + 1 >= imgList.length - 1 ? imgIndex : imgIndex + 1;

    yesBtn = document.getElementById("yes");
    noBtn = document.getElementById("no");
    img = document.getElementById("mainImage");
    question = document.getElementById("question");

    yesBtn.style.transform = "scale("+ yesBtnScale +")";
    noBtn.style.transform = "translateX("+ noBtnX +"px)";
    img.style.transform = "translateY("+ imgY +"px)";
    question.style.transform = "translateY("+ imgY +"px)";
    img.src = "./"+ imgList[imgIndex];
    noBtn.innerText = noList[imgIndex];
}