const testSyntax = {
    //DEFINE ATTRIBUTES
    //DEFINE VARIABLE
    isVariable: (x) => {
        x.isVariable === true;
        return "I'm indeed a variable";
    },

    //DEFINE NUMBER
    isNumber: (value) => {
        if (typeof(value) === "number") {
            return true;
        } else {
            return false;
    }},

    //DEFINE STRING
    isString: (value) => {
        if (typeof(value) === "string") {
            return true;
        } else {
            return false;
    }},

    //DEFINE BOOLEAN
    isBoolean: (value) => {
        if (typeof(value) === "boolean") {
            return true;
        } else {
            return false;
    }},

    //DEFINE ARRAY
    isArray: (value) => {
        if (value.constructor === Array) {
            return true;
        } else {
            return false;
    }},

    //DEFINE OBJECT
    isObject: (value) => {
    if (value.constructor === Object) {
        return true;
    } else {
        return false;
    }},

    //DEFINE UNDEFINED
    isUndefined: (value) => {
    if (typeof(value) === "undefined") {
        return true;
    } else {
        return false;
    }},

    //SAMPE IF ELSE STATEMENT(should I go to the park or play on the
    //computer.... depends on if its raining or not)
    parkOrGame: (value) => {
    if (value === "Raining") {
        return "Time to stay indoor and play video games";
    } else {
        return "I should get out for a walk";
    }},

    //SAMPLE ARRAY(arrays add a value to the front, add a value to the end, update values)
    ModifyArray: (value) => {
        let x = value[0];
        //let y = value[value.last];
        value.unshift("Test");
        if (x === value[0]) {
            return "the value failed to push because its the same as the original";
        } else {
            return "the values are different because we pushed a new value to the front of the array";
        }
    },

    //SAMPLE LOOPS(for loop, for/in loop, while loop, do while loop, forEach (with array and function))
    ForLoop: (value) => {
        for (let i = 0; i < 5; i++) {
            value = value + i;
        }
        return value;
    },

    ForInLoop: (value) => {
        let item;
        for (item in value) {
        }
        return item;
    },

    WhileLoop: (value) => {
        let i = 0;
        while (i < 4) {
            value = value + i;
            i++;
        }
        return value;
    },

    DoWhileLoop: (value) => {
        for (let i = 0; i < 5; i++) {
            value = value + i;
        }
        return value;
    },

    ForEachLoop: (value) => {
        let answer;
        value.forEach(myfunction);

        function myfunction (item) {
            answer = item;
        }
        return answer;
    },

    //SAMPLE OBJECTS(create object and lookup value)
    ObjectLookup: (value) => {
        let keys = Object.keys(value);
        return keys;
    }
    
};

export default testSyntax;