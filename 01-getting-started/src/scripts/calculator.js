
    const calculator = {

        add: (number1, number2, answer) => {
            answer= number1+number2;
            console.log(answer);
            return answer;
            
        },

        subtract: (number1, number2, answer) => {
            answer= number1-number2;
            console.log(answer);
            return answer;
        },

        multiply: (number1, number2, answer) => {
            answer= number1*number2;
            console.log(answer);
            return answer;
        },

        divide: (number1, number2, answer) => {
            answer= number1/number2;
            console.log(answer);
            return answer;
        }

}


export default calculator;