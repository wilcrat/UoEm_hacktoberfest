x = int(input("Enter first Number: "))
y = int(input("Enter Second Number: "))
sign = input("Choose an Operator: ")
if sign == '+':
        print(f"Sum of {x} and {y} is {x + y}")
elif sign == '-':
        print(f"Sum of {x} and {y} is {x - y}")
elif sign == '*':
        print(f"Product of {x} and {y} is {x * y}")
elif sign == '/':
        print(f"Quotient of {x} and {y} is {x / y}")
else:
        print("Invalid Operator!!")