const words = {
    "by the way": "кстати",
    "alas": "увы", 
    "hiss": "шипение",
    "bark to the wrong tree": "идти по ложному следу",
    "employ": "нанимать",
    "hug": "обнимать",
    "Idk": "I don't know",
    "in the middle of nowhere": "бог знает где",
    "see eye to eye": "согласиться",
    "when pigs fly": "никогда"
}

let green = document.querySelector(".green")
let red = document.querySelector(".red")
let english_word = document.querySelector(".english_word") 
const keys = Object.keys(words)
let index = 0
english_word.innerHTML = keys[index]

green.addEventListener("click", function() {
    index = index + 1
    if (index > keys.length - 1) {
    index = 0
    }
    english_word.innerHTML = keys[index]
})
red.addEventListener("click", function() {
    let current = keys[index]
    english_word.innerHTML = keys[index] + '-' + words[current]
})