
const canadianTaxes = {
        
    calculateIncome: (taxableincome, incomeAfterTax) => {
        
        if (taxableincome <= 48535) {  
            incomeAfterTax = taxableincome * 0.15;
        } else if  (taxableincome > 48535 && taxableincome <= 97069) {
            incomeAfterTax = ((taxableincome - 48535)*.205) + 7280.25;
        } else if (taxableincome > 97069 && taxableincome <= 150473) {
            incomeAfterTax = ((taxableincome - 97069)*0.26) + 9949.47 + 7280.25;
        } else if (taxableincome > 150473 && taxableincome <= 214368) {
            incomeAfterTax = ((taxableincome - 150473)*0.29) + 13885.04 + 9949.47 + 7280.25;
        } else { (taxableincome > 214368) 
            incomeAfterTax = ((taxableincome - 214368)*0.33) + 18529.55 + 13885.04 + 9949.47 + 7280.25;
        }
        return incomeAfterTax;
    }

}

    //15% of 48,535 = 7,280.25
    //20.5% of 48,534 = 9,949.47
    //26% of 53,404 = 13,885.04
    //29% of 63,895 = 18,529.55

export default canadianTaxes;