<template>
<section class="millionaire_section">
    <div class="container">
        <div class="line_one">
            <div>
                <div countdown="30">30</div>
            </div>
            <div class="millionaire_img">
                <div class="bonus_block">
                    <div>
                        <img src="../assets/50-50.png" alt="50_50_answer" @click="this.useBonus('fifty')" v-if="fiftyToFifty">
                        <img src="../assets/50-50-used.png" alt="50_50_answer" v-if="!fiftyToFifty">
                    </div>
                    <div>
                        <img src="../assets/ask-the-audience.png" alt="ask_the_audience" @click="this.useBonus('audience')" v-if="askAudience">
                        <img src="../assets/ask-the-audience-used.png" alt="ask_the_audience" v-if="!askAudience">
                    </div>
                    <div>
                        <img src="../assets/phone-a-friend.png" alt="phone_a_friend" @click="this.useBonus('friend')" v-if="phoneFriend">
                        <img src="../assets/phone-a-friend-used.png" alt="phone_a_friend" v-if="!phoneFriend">
                    </div>
                </div>
                <img src="../assets/millionaire.png" alt="millionaire_image">
            </div>
            <div class="winning_amounts">
                <div class="amount">
                    <p>15</p>
                    <p>₴ 1 000 000</p>
                </div>
                <div class="amount">
                    <p>14</p>
                    <p>₴ 500 000</p>
                </div>
                <div class="amount">
                    <p>13</p>
                    <p>₴ 250 000</p>
                </div>
                <div class="amount">
                    <p>12</p>
                    <p>₴ 125 000</p>
                </div>
                <div class="amount">
                    <p>11</p>
                    <p>₴ 64 000</p>
                </div>
                <div class="amount">
                    <p>10</p>
                    <p>₴ 32 000</p>
                </div>
                <div class="amount">
                    <p>9</p>
                    <p>₴ 16 000</p>
                </div>
                <div class="amount">
                    <p>8</p>
                    <p>₴ 8 000</p>
                </div>
                <div class="amount">
                    <p>7</p>
                    <p>₴ 4 000</p>
                </div>
                <div class="amount">
                    <p>6</p>
                    <p>₴ 2 000</p>
                </div>
                <div class="amount">
                    <p>5</p>
                    <p>₴ 1 000</p>
                </div>
                <div class="amount">
                    <p>4</p>
                    <p>₴ 500</p>
                </div>
                <div class="amount">
                    <p>3</p>
                    <p>₴ 300</p>
                </div>
                <div class="amount">
                    <p>2</p>
                    <p>₴ 200</p>
                </div>
                <div class="amount current_win_amount">
                    <p>1</p>
                    <p>₴ 100</p>
                </div>
            </div>
        </div>
        <div class="line_two">
            <div class="question_block">
                <p>{{ this.questions[currentQuestion].question }}</p>
            </div>
            <div class="answers_block">
                <div class="answer_block" @click="selectAnswer(currentQuestion, 0)" id="answer_0">
                    <p v-if="this.questions[currentQuestion].content[0]">A:</p>
                    <p>{{ this.questions[currentQuestion].content[0] }}</p>
                </div>
                <div class="answer_block" @click="selectAnswer(currentQuestion, 1)" id="answer_1">
                    <p v-if="this.questions[currentQuestion].content[1]">B:</p>
                    <p>{{ this.questions[currentQuestion].content[1] }}</p>
                </div>
                <div class="answer_block" @click="selectAnswer(currentQuestion, 2)" id="answer_2">
                    <p v-if="this.questions[currentQuestion].content[2]">C:</p>
                    <p>{{ this.questions[currentQuestion].content[2] }}</p>
                </div>
                <div class="answer_block" @click="selectAnswer(currentQuestion, 3)" id="answer_3">
                    <p v-if="this.questions[currentQuestion].content[3]">D:</p>
                    <p>{{ this.questions[currentQuestion].content[3] }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" v-if="visibilityModal">
        <div class="modal_box loss">
            <p>{{this.modalTextNotification}}</p>
            <div @click="reloadPage()" class="btn">Вийти</div>
        </div>
    </div>
    <div class="modal" v-if="visibilityModalbonus">
        <div class="modal_box bonus" id="modal_bonus">
            <p>{{ this.modalTextBonus }}</p>
            <div @click="this.visibilityModalbonus = false" class="btn">Закрити</div>
        </div>
    </div>
</section>
</template>

<script>
import questions from '../assets/questions.json';
import soundRight from '../assets/sound_right.mp3';
import soundWrong from '../assets/sound_wrong.mp3';
import soundBackground from '../assets/sound_background.mp3';

export default {
    name: 'MillionaireSection',
    data() {
        return {
            questions: questions.questions,
            currentQuestion: 0,
            visibilityModal: false,
            visibilityModalbonus: false,
            currentWinnings: 0,
            phoneFriend: true,
            askAudience: true,
            fiftyToFifty: true,
            questionsTimer: null,
            modalTextBonus: null,
            modalTextNotification: null,
            randomNumOne: null,
            audioBackground: new Audio(soundBackground),
            audioRight: new Audio(soundRight),
            audioWrong: new Audio(soundWrong),
        }
    },
    methods: {

        selectAnswer(questionIndex, answerIndex) {
            document.querySelector("#answer_" + answerIndex).classList.add("selected");
            let objQuestion = this.questions[questionIndex];
            document.querySelector("#answer_" + objQuestion.correct).classList.add("correct");
            this.soundBackground(false);
            if (answerIndex == objQuestion.correct) {
                this.soundRight();
                return setTimeout(() => this.switchQuestions(), 3000);
            } else {
                this.soundWrong();
                return setTimeout(() => this.viewLossModal(), 3000);
            }
        },
        switchQuestions() {
            if (this.currentQuestion >= 14) {
                this.currentWinnings = this.currentWinnings + 1000000;
                return this.viewLossModalWin();
            }
            if (this.currentQuestion == 4) {
                this.currentWinnings = this.currentWinnings + 1000;
            }
            if (this.currentQuestion == 9) {
                this.currentWinnings = this.currentWinnings + 32000;
            }
            this.removeClassQuestions();
            this.currentQuestion = this.currentQuestion + 1;
            let currentQuestionAmount = this.currentQuestion + 1;
            document.querySelector(".amount:nth-last-child(" + currentQuestionAmount + ")").classList.add("current_win_amount");
            clearInterval(this.questionsTimer);
            this.timerActivation();
            this.soundBackground(true);
        },
        reloadPage() {
            document.location.reload();
        },
        removeClassQuestions() {
            document.querySelector("#answer_" + this.questions[this.currentQuestion].correct).classList.remove("correct");
            document.querySelector("#answer_0").classList.remove("selected");
            document.querySelector("#answer_1").classList.remove("selected");
            document.querySelector("#answer_2").classList.remove("selected");
            document.querySelector("#answer_3").classList.remove("selected");
            document.querySelector(".amount.current_win_amount").classList.remove("current_win_amount");
        },
        viewLossModal() {
            this.modalTextNotification = `На жаль ви програли :( Ваш виграш  ${this.currentWinnings} грн.`;
            this.visibilityModal = true;
            this.soundWrong();
        },
        viewLossModalWin() {
            this.modalTextNotification = `Вітаємо! Ви виграли 1 000 00 грн.`;
            this.visibilityModal = true;
        },
        soundRight() {
            this.audioRight.autoplay = false;
            this.audioRight.loop = false;
            this.audioRight.play();
        },
        soundWrong() {
            this.audioWrong.autoplay = false;
            this.audioWrong.loop = false;
            this.audioWrong.play();
            console.log("=")
        },
        soundBackground(action) {
            this.audioBackground.autoplay = false;
            this.audioBackground.loop = false;
            if (action === true) {
                this.audioBackground.play();
            }
            if (action === false) {
                this.audioBackground.pause();

            }
        },
        randomNum() {
            let n = this.questions[this.currentQuestion].correct;
            let rand1 = Math.floor(Math.random() * 4);
            let rand2 = Math.floor(Math.random() * 4);
            if (rand1 === n || rand2 === n || rand1 === rand2) {
                return this.randomNum();
            }
            this.randomNumOne = [rand1, rand2];
        },
        useBonus(type) {
            switch (type) {
                case "friend": {
                    this.visibilityModalbonus = true;
                    this.phoneFriend = false;
                    return this.modalTextBonus = "Друг каже що він відповів би " + this.questions[this.currentQuestion].content[Math.floor(Math.random() * 3)];
                }
                case "audience": {
                    this.visibilityModalbonus = true;
                    this.askAudience = false;
                    return this.modalTextBonus = "Більшість глядачів вважає за правильний варіант " + this.questions[this.currentQuestion].content[this.questions[this.currentQuestion].correct];
                }
                case "fifty": {
                    this.randomNum();
                    delete this.questions[this.currentQuestion].content[this.randomNumOne[0]];
                    delete this.questions[this.currentQuestion].content[this.randomNumOne[1]];

                    this.fiftyToFifty = false;
                }
                break;
            }
        },
        timerActivation() {
            let oCount = document.querySelector("div[countdown]");
            oCount.innerText = oCount.countValue = +oCount.getAttribute("countdown");
            oCount.countRatio = 360 / oCount.countValue;
            oCount.countColor = 100 / oCount.countValue;
            oCount.countLight = oCount.countValue / 20;
            this.questionsTimer = setInterval(fCountdown.bind(oCount), 1000);
            let modalLoss = this;

            function fCountdown() {
                let nCount = this.countValue;
                if (nCount > 0) {
                    nCount--;
                    this.innerText = this.countValue = nCount;
                    this.style.setProperty("--deg", 361 - nCount * this.countRatio);
                    this.style.setProperty("--col", `hsla(${nCount * this.countColor}, 100%, ${50 - nCount / this.countLight}%, 1)`);
                } else {
                    clearInterval(modalLoss.questionsTimer);
                    modalLoss.soundBackground(false);
                    modalLoss.viewLossModal();
                }
            }
        }
    }
}
</script>

<style scoped>
* {
    font-family: 'Open Sans', sans-serif;
}

.millionaire_section {
    background: #000;
    width: 100%;
    height: 100vh;
    min-height: 817px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.millionaire_img img {
    max-width: 400px;
}

.millionaire_section .container {
    width: 1200px;
}

.millionaire_section .container .line_one {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
}

.winning_amounts .amount {
    display: flex;
    color: #e1a02e;
    padding: 0 10px 0 10px;
}

.winning_amounts .amount:nth-child(5n+1) {
    color: #fff;
}

.winning_amounts .amount p {
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.winning_amounts .amount p:last-child {
    margin-left: 10px;
}

.current_win_amount {
    background: #e1a02e;
    border-radius: 20px;
}

.current_win_amount p {
    color: #000;
}

body {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-image: radial-gradient(#aef, #000);
}

div[countdown] {
    --deg: -1;
    --col: hsla(0, 100%, 50%, 1);
    height: 120px;
    width: 120px;
    border-radius: 50%;
    text-align: center;
    font: bold 36px/120px monospace;
    background-image: radial-gradient(#fff 49px, #f000 51px), conic-gradient(var(--col) calc(var(--deg) * 1deg - 1deg), transparent calc(var(--deg) * 1deg + 1deg)), radial-gradient(#fff3 40px, #4441 60px);
    box-shadow: inset 0 0 10px -5px #000a;
}

.question_block {
    background: url('../assets/quest.png') no-repeat center;
    background-size: contain;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    height: 91px;
}

.question_block p {
    color: #fff;
    max-width: 700px;
}

.answers_block {
    display: flex;
    flex-wrap: wrap;
}

.answer_block {
    display: flex;
    justify-content: center;
    width: 50%;
    background: url('../assets/quest.png') no-repeat center;
    justify-content: center;
    background-size: contain;
    min-height: 53.5px;
}

.answer_block:hover,
.answer_block.selected {
    background: url('../assets/quest_yellow.png') no-repeat center;
    background-size: contain;
}

.answer_block.correct {
    background: url('../assets/quest_green.png') no-repeat center;
    background-size: contain;
}

.answer_block:first-child,
.answer_block:nth-child(2) {
    margin-bottom: 20px;
}

.answer_block:first-child,
.answer_block:nth-child(3) {
    background-position-x: 25px;
}

.answer_block:last-child,
.answer_block:nth-child(2) {
    background-position-x: -25px;

}

.answer_block:first-child p:last-child,
.answer_block:nth-child(3) p:last-child {
    margin-right: -50px;
}

.answer_block:last-child p:first-child,
.answer_block:nth-child(2) p:first-child {
    margin-left: -50px;
}

.answer_block p {
    color: #fff;
}

.answer_block p:first-child {
    margin-right: 10px;
}

/* modal */
.modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
}

.modal_box {
    width: 400px;
    height: 220px;
    background: #000;
    border: #fff solid 1px;
    border-radius: 30px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;

}

.modal_box p {
    color: #e1a02e;
    font-size: 28px;
}

.modal_box .btn {
    color: #e1a02e;
    font-size: 21px;
    padding: 10px 20px 10px 20px;
    border: #fff solid 1px;
    border-radius: 30px;
    text-align: center;
    margin: 0;
}

.modal_box .btn:hover {
    color: #000;
    background: #e1a02e;
    ;
}

/* end */
.bonus_block {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

.bonus_block div:hover {
    color: #fff;
    transform: scale(0.95);
}
</style>
