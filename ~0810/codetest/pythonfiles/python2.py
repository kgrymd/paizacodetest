# 自分のやつ
xc, yc, r_1, r_2 = map(int, input("中身x, 中身y, 半径1, 半径2を入力してくれ").split())
n = int(input("人の座標の数を入力してくれ"))

# 座標のリストのリストを作成する関数
def get_coordinate_arry():

    coordinate_arrys = []

    for i in range(n):
        x, y = map(int, input("人の座標を入力してくれ").split())
        coordinate_arrys.append([x, y])

    return coordinate_arrys
    
    
# 暴風域ないかどうかを判定する関数
def get_calc_within_range_results(coordinate_arrys, xc, yc,r_1, r_2):
    results = []
    
    for coordinate_arry in coordinate_arrys:
        if r_1**2 <= (coordinate_arry[0] - xc)**2 + (coordinate_arry[1] - yc)**2 <= r_2**2:
            results.append('yes')
        else:
            results.append('no')
    return results
    

# 結果を出力する関数
def print_result(results):
    for result in results:
        print(result)
        

print_result(get_calc_within_range_results(get_coordinate_arry(), xc, yc, r_1, r_2))


# 入力例1
# 0 0 1 2
# 3
# 0 0
# 1 1
# 4 2
# 出力例1
# no
# yes
# no
# 入力例2
# 47 19 57 80
# 3
# 62 -52
# 35 -70
# -81 2
# 出力例2
# yes
# no
# no