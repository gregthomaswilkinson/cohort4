
def calculate_tax(taxable_income):

    if taxable_income <= 48535:   
        incomeAfterTax = taxable_income * 0.15
    elif taxable_income > 48535 and taxable_income <= 97069:
        incomeAfterTax = ((taxable_income - 48535)*.205) + 7280.25
    elif taxable_income > 97069 and taxable_income <= 150473:
        incomeAfterTax = ((taxable_income - 97069)*0.26) + 9949.47 + 7280.25
    elif taxable_income > 150473 and taxable_income <= 214368:
        incomeAfterTax = ((taxable_income - 150473)*0.29) + 13885.04 + 9949.47 + 7280.25
    elif taxable_income > 214368:
        incomeAfterTax = ((taxable_income - 214368)*0.33) + 18529.55 + 13885.04 + 9949.47 + 7280.25

    print(incomeAfterTax)
    return incomeAfterTax

if __name__ == "__main__":
    taxable_income = int(input("Please give me you taxable income:"))
    calculate_tax(taxable_income)