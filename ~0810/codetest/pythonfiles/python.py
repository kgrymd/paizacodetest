num = int(input("nを入力せい"))
G = input("Gを入力せい")


def get_str_list(num):
    list = [input() for _ in range(num)]
    print(list)
    return list



def get_filtered_list(list):
    filtered_list = [str for str in list if G in str]
    if len(filtered_list) == 0:
        return ["None"]
    else:
        return filtered_list
    
def print_result(list):
    for str in list:
        print(str)

print_result(get_filtered_list(get_str_list(num)))