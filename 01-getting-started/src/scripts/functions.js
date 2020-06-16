
const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num === 101) return "extra large";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    isFalse: (num) => {
        return num % 2;
    }


};

export default functions;
