from time import sleep
n = int(input("Enter a positive number: "))

letters = "abcdefghijklmnopqrstuvwxyz"
letter = 0
capital = True

for i in range(n):
    row = []
    for j in range(i + 1):
        char = letters[letter % len(letters)]  # Wrap around if `letter` exceeds `letters`
        if capital:
            char = char.upper()
        row.append(char)  # Build the row as a list
        capital = not capital
        letter += 1
    print(" ".join(row))  # Join the row into a string and print it
    sleep(.5)
