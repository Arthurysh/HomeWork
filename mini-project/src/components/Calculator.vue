<template>
<section class="calculator">
    <div>
        <div class="calculator_container">
            <div class="result_block">
                <p class="value">{{ this.currentValueNum }}</p>
            </div>
            <div class="button_block">
                <div @click="this.calculatorOperations('clear')">
                    <p>AC</p>
                </div>
                <div @click="this.calculatorOperations('invert')">
                    <p>+/-</p>
                </div>
                <div @click="this.calculatorOperations('percent')">
                    <p>%</p>
                </div>
                <div @click="this.calculatorOperations('division'), this.addActiveClass(4)">
                    <p>/</p>
                </div>
                <div @click="this.clickNum(7)">
                    <p>7</p>
                </div>
                <div @click="this.clickNum(8)">
                    <p>8</p>
                </div>
                <div @click="this.clickNum(9)">
                    <p>9</p>
                </div>
                <div @click="this.calculatorOperations('multiplication'), this.addActiveClass(8)">
                    <p>x</p>
                </div>
                <div @click="this.clickNum(4)">
                    <p>4</p>
                </div>
                <div @click="this.clickNum(5)">
                    <p>5</p>
                </div>
                <div @click="this.clickNum(6)">
                    <p>6</p>
                </div>
                <div @click="this.calculatorOperations('subtraction'), this.addActiveClass(12)">
                    <p>-</p>
                </div>
                <div @click="this.clickNum(1)">
                    <p>1</p>
                </div>
                <div @click="this.clickNum(2)">
                    <p>2</p>
                </div>
                <div @click="this.clickNum(3)">
                    <p>3</p>
                </div>
                <div @click="this.calculatorOperations('addition'), this.addActiveClass(16)">
                    <p>+</p>
                </div>
                <div @click="this.clickNum(0)">
                    <p>0</p>
                </div>
                <div @click="this.calculatorOperations(',')">
                    <p>,</p>
                </div>
                <div @click="this.calculatorOperations('done')">
                    <p>=</p>
                </div>

            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'CalculatorSection',
    data() {
        return {
            currentValueNum: 0,
            valueNum: 0,
        }
    },
    methods: {
        clickNum(num) {
            this.removeActiveClass();
            if (this.currentValueNum.toString().length < 8) {
                if (this.currentValueNum.toString().includes(".")) {
                    this.currentValueNum = this.currentValueNum + num;
                } else {
                    this.currentValueNum = +`${this.currentValueNum}${num}`
                }
            }
        },
        calculatorOperations(operation) {
            this.removeActiveClass();
            let lastElement = (this.valueNum + +this.currentValueNum).toString().slice(0, -1);
            switch (operation) {
                case "addition": {
                    console.log(this.valueNum);
                    if (!isNaN(lastElement)) {
                        this.valueNum = this.valueNum + +this.currentValueNum + " + ";
                        this.currentValueNum = 0;
                    } else if (isNaN(lastElement)) {
                        this.valueNum = this.valueNum.toString().slice(0, -3) + " + ";
                    }
                    break;
                }
                case "subtraction": {
                    if (!isNaN(lastElement)) {
                        this.valueNum = this.valueNum + +this.currentValueNum + " - ";
                        this.currentValueNum = 0;
                    } else {
                        this.valueNum = this.valueNum.toString().slice(0, -3) + " - ";
                    }
                    break;
                }
                case "multiplication": {
                    if (!isNaN(lastElement)) {
                        this.valueNum = this.valueNum + +this.currentValueNum + " * ";
                        this.currentValueNum = 0;
                    } else {
                        this.valueNum = this.valueNum.toString().slice(0, -3) + " * ";
                    }
                    break;
                }
                case "division": {
                    if (!isNaN(lastElement)) {
                        this.valueNum = this.valueNum + +this.currentValueNum + " / ";
                        this.currentValueNum = 0;
                    } else {
                        this.valueNum = this.valueNum.toString().slice(0, -3) + " / ";
                        this.currentValueNum = 0;
                    }
                    break;
                }
                case "done": {
                    let total = eval(`${this.valueNum}${this.currentValueNum}`);
                    if (total == Infinity) {
                        this.currentValueNum = "Error";
                        this.valueNum = 0;
                    } else if (total < 1 && total.toString().length > 8) {
                        this.currentValueNum = +eval(`${this.valueNum}${this.currentValueNum}`).toFixed(3);
                        this.valueNum = 0;
                    } else if (total.toString().length > 8) {
                        this.currentValueNum = eval(`${this.valueNum}${this.currentValueNum}`).toExponential(2);
                        this.valueNum = 0;
                    } else if (total.toString().length <= 8) {
                        this.currentValueNum = eval(`${this.valueNum}${this.currentValueNum}`);
                        this.valueNum = 0;
                        console.log(this.currentValueNum);
                    }
                    break;
                }
                case "clear": {
                    this.currentValueNum = 0;
                    this.valueNum = 0;
                    break;
                }
                case "invert": {
                    this.currentValueNum = this.currentValueNum * -1;
                    break;
                }
                case ",": {
                    if (!this.currentValueNum.toString().includes(".")) {
                        this.currentValueNum = `${this.currentValueNum}.`
                    }
                    break;
                }
                case "percent": {
                    let lastElement = this.valueNum.toString().slice(-2);
                    if (this.valueNum.toString().slice(-2) == "/ " || lastElement == "* ") {
                        let precentNum = eval(eval(`${this.valueNum} 1`) + "*" + (this.currentValueNum / 100));
                        let precentNumLength = precentNum.toString().length;
                        if (precentNumLength < 8) {
                            this.currentValueNum = precentNum;
                        } else if (precentNumLength >= 8) {
                            this.currentValueNum = precentNum.toExponential(2);
                        }

                    } else if (lastElement == "- " || lastElement == "+ ") {
                        let precentNum = eval(eval(`${this.valueNum} 0`) + "*" + (this.currentValueNum / 100));
                        let precentNumLength = precentNum.toString().length;
                        if (precentNumLength < 8) {
                            this.currentValueNum = precentNum;
                        } else if (precentNumLength >= 8) {
                            this.currentValueNum = precentNum;
                        }
                    } else if (!isNaN(lastElement) == true) {
                        let precentNum = this.currentValueNum * 0.01;
                        let precentNumLength = precentNum.toString().length;
                        if (precentNumLength < 8) {
                            this.currentValueNum = precentNum;
                        } else if (precentNumLength >= 8) {
                            this.currentValueNum = precentNum.toExponential(2);
                        }
                    }
                    break;
                }
            }
        },
        removeActiveClass() {
            let blockArray = document.querySelectorAll(".button_block div")
            blockArray.forEach(element => {
                element.classList.remove('active');
            });
        },
        addActiveClass(value) {
            document.querySelector(`.button_block div:nth-child(${value})`).classList.add('active');
        },
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

section.calculator {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 673px;
}

.calculator_container {
    background-color: black;
    border-radius: 25px;
    padding: 20px 10px 20px 10px;
    max-width: 380px;
    padding-top: 60px;
}

.result_block,
.button_block {
    width: 100%;
}

.result_block {
    height: 30%;
    display: flex;
    justify-content: flex-end;
    padding-top: 60px;
}

.result_block .value {
    padding-right: 27px;
}

.button_block {
    height: 70%;
}

.result_block .value {
    color: #fff;
    font-size: 72px;
    font-family: 'Open Sans';
    font-weight: 100;
    margin-bottom: 0px;
    margin-top: auto;
}

.button_block {
    display: flex;
    flex-wrap: wrap
}

.button_block div {
    background-color: #333333;
    color: #fff;
    width: calc(25% - 34px);
    height: 61px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 7px;
}

.button_block div p {
    margin-top: auto;
    margin-bottom: auto;
    font-weight: 400;
    font-size: 30px;
    font-family: 'Open Sans';
}

.button_block div:hover {
    background-color: #737373;
}

.button_block div:nth-child(-n+3) {
    background-color: #a5a5a5;
    color: #0a0a0a;
}

.button_block div:nth-child(-n+3):hover {
    background-color: #d9d9d9;
}

.button_block div:nth-child(4n),
.button_block div:last-child {
    background-color: #fe9f0a;
    color: #fff;
}

.button_block div:nth-child(4n):hover,
.button_block div:last-child:hover {
    background-color: #fbc78e;
}

.button_block div:nth-child(4n).active,
.button_block div:last-child.active {
    background-color: #fff;
    color: #fe9f0a;
}

.button_block div:nth-child(17) {
    display: flex;
    flex: 2;
    border-radius: 50px;
}
</style>
