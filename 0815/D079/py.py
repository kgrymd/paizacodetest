input_word = input("パスワードを入力してください")

def check_password(input_word):
    same_word_list = [char for char in input_word if char == input_word[0]]
    if len(same_word_list) == len(input_word):
        return "NG"
    return "OK"

print(check_password(input_word))