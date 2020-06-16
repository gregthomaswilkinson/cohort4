

const workingWithArrays = {


    addButton: (newValue, array) => {
        
        array.push(newValue);
        return array;
    
    },

    showTotal: (array, total) => {
        for(let i in array) { total += array[i]; }
        return total;
    },

};

export default workingWithArrays;