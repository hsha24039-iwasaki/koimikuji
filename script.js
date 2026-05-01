const fortunes =[
    "大吉　素敵な出会いがあるかも！",
    "中吉　少し勇気を出すと良いことが起きる",
    "吉　普段通り過ごせば今日は安泰",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう"
];

const button = document.getElementById("iwa");
const result = document.getElementById("iwasi");
const advice = document.getElementById("advice");

button.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText = fortunes[(randomNumber)];

    result.textContent = fortunes[(randomNumber)];

    if(resultText.includes("大吉")){
       result.style.color = "red";
       advice.textContent = "今日は積極的に行動しよう";
    }
    if(resultText.includes("中吉")){
       result.style.color = "green";
    }
    if(resultText.includes("安泰")){
       result.style.color = "black";
    }
    if(resultText.includes("小吉")){
       result.style.color = "yelow";
    }
    if(resultText.includes("凶")){
       result.style.color = "bule";
    }
});