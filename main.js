const emojiArr = ['🐘','🦁','🐱','🐭','🐶','🐯','🐵','🐍','🦅', '🦜', '🐢', '🐱‍🐉']
const fighterOneEl = document.getElementById('fighter-1')
const fighterTwoEl = document.getElementById('fighter-2')
const ringContainerEl = document.querySelector('.ring-container')
const btnEl = document.querySelector('.btn')

function generateRandomNum(){
    const randomNum = Math.floor(Math.random() * emojiArr.length)
    return randomNum
}

function renderGame() {
    const fighterOne = emojiArr[generateRandomNum()]
    const fighterTwo = emojiArr[generateRandomNum()]
    fighterOneEl.textContent = fighterOne
    fighterTwoEl.textContent = fighterTwo 
    ringContainerEl.classList.remove('inactive')
}

btnEl.addEventListener('click', renderGame)

// I want to explore the git features 