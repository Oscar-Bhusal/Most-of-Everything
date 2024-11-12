print("This is a text encrypter!")
text = input("Enter any text: ")
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
encrypted_text = ''

for char in text.lower():
    if char == ' ':
        encrypted_text += char
    else:
        index = alphabet.find(char)
        new_index = (index + shift) % 36
        encrypted_text += alphabet[new_index]

print("The encrypted text for " + text + " is " + encrypted_text.capitalize())

print("This is a encrypted text reverter!")
encrypted_text=input("Enter the encrypted text: ")
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
text = ''

for char in encrypted_text.lower():
    if char == ' ':
        text += char
    else:
        index = alphabet.find(char)
        new_index = (index - shift) % 36
        text += alphabet[new_index]

print("The reverted text for " + encrypted_text + " is " + text.capitalize())