def arithmetic_arranger(problems, show_answers=False):
    result = []
    count = 0
    for problem in problems:
        count += 1
        if count> 5:
            return 'Error: Too many problems.'
        else:
            digit_list = []
            for digit in problem:
                digit_list.append(digit)
                # print(digit_list)
            for each in digit_list:
                num1 = []
                num2 = []
                if each.isdigit():
                    num1.append(each)
                    # print(num1,end="")
                elif each == "+" or each == "-":    
                    print("\n")
                    num1Value = " ".join(num1)
                    num2.append(each)
                    num2.append(" ".join(problem.split()[2:]))
                    print(num2,end="")
                    print("\n______")        
                else:
                    print("\n______")        
                    print("\n")
    return problems

print(f'\n{arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])}')