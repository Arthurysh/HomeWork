<template>
<section class="randomize_section">
    <div class="container">
        <div class="input_data_container">
            <input type="number" placeholder="min" v-model="min">
            <input type="number" placeholder="max" v-model="max">
            <input type="number" placeholder="amount" v-model="num">
            <div class="checkbox_block">
                <input type="checkbox" id="checkbox-1" v-model="unique">
                <label for="checkbox-1">Unique</label>
            </div>
            <div class="result_btn" @click="this.generateRandNum(this.min, this.max, this.num)">Generate</div>
        </div>
        <div class="result_container">
            <p class="error_message">{{this.errorMessage}}</p>
            <h2 v-if="result">Result</h2>
            <div class="num_block">
                <div class="num_container">
                    <p>{{ this.result }}</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'RandomizerSection',
    data() {
        return {
            result: null,
            min: null,
            max: null,
            num: null,
            unique: false,
            errorMessage: null,
        }
    },
    methods: {
        generateRandNum(min, max, num) {
            this.errorMessage = "";
            if (min > max) {
                return this.errorMessage = "The lower limit value needs to be smaller than the upper limit value.";
            } else if (num > 999) {
                return this.errorMessage = "The maximum number of generated numbers is 999.";
            } else if (num <= 0) {
                return this.errorMessage = "Amount of numbers can only be positive.";
            } else if (this.unique === true) {
                if ((max - min + 1) < num) {
                    return this.errorMessage = "Cannot generate more numbers in one set than exist in the range unless you select to Unique.";
                } else {
                    const arr = [];
                    for (let i = 0; i < num; i++) {
                        const num = Math.floor(Math.random() * (max - min + 1)) + min;
                        if (arr.indexOf(num) === -1) {
                            arr.push(num);
                        } else {
                            i--;
                        }
                    }
                    this.result = arr.join(' ');
                }
            } else {
                if (this.unique === false) {
                    const arr = [];
                    for (let i = 0; i < num; i++) {
                        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
                    }
                    this.result = arr.join('  ');
                }
            }
        },
    },
}
</script>

<style scoped>
* {
    font-family: 'Open Sans';
}

.container {
    height: 100vh;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.input_data_container {
    display: flex;
    justify-content: center;
    padding-top: 120px;
}

.input_data_container input {
    width: 10%;
    height: 30px;
    border-radius: 20px;
    padding: 5px;
    margin: 0 5px 0 5px;
    font-weight: 500;
    font-size: 20px;
}

.input_data_container .result_btn {
    width: 10%;
    min-height: 100%;
    font-size: 20px;
    background: #000;
    color: #fff;
    border-radius: 20px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #000 solid 2px;
}

.input_data_container .result_btn:hover {
    background: #fff;
    color: #000;
}

.result_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    width: 100%;
}

.result_container h2 {
    font-size: 32px;
    text-align: center;
}

.result_container .num_block {
    display: flex;
    justify-content: center;
    word-wrap: break-word;
}

.num_container {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.result_container .num_block p {
    font-size: 20px;
    font-weight: 500;
    max-width: 100%;
}

.error_message {
    color: red;
    text-align: center;
    font-weight: 500;
}

input[type=checkbox] {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

input[type=checkbox]+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
}

input[type=checkbox]+label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    border-radius: 50%;
    border-color: #000;
}

input[type=checkbox]:checked+label::before {
    background-color: rgb(12, 140, 0);
}

input[type=checkbox]:disabled+label::before {
    background-color: #ffff;
}

.checkbox_block {
    display: flex;
    align-items: center;
    margin: 0 5px 0 5px;
}
</style>
