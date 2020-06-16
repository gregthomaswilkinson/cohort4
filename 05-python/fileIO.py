import os

def file_info():
    reader = open('syntax.js', 'r')
    try:
        # number_of_characters = len(reader)
        lines = 0
        else_count = 0
        for line in reader:
            lines += 1
            found = line.find('else')
            if found != -1 and found != 0:
                else_count += 1
        print(reader.read())
        print("Number of lines", {lines})
        # print("Number of characters in file", number_of_characters)
        print("Number of times the word 'else' shows up", else_count)
    finally:
        reader.close()

def dir_data():
    data = os.listdir("/Users/gregwilkinson/code/cohort4/05-python")
    data_size = os.stat("/Users/gregwilkinson/code/cohort4/05-python/test_cantax.py").st_size
    print(data, data_size)

def excel_spreadsheet():
    reader = open('Census_by_Community_2018.csv', 'r')
    try:
        lines = 0
        for lines in reader:
            lines += 1
        print(reader.read())
        print(lines)
    finally:
        reader.close()

excel_spreadsheet()

