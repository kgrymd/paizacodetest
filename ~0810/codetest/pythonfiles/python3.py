# 日数を取得
a_num_of_days = int(input("日数を入力せい"))

# とりあえず1日ごとの始値、終値、高値、安値の辞書(オブジェクト)のリスト(配列)を作成して返す関数
def get_daily_four_types_of_stock_prices_list(num):
    s_e_h_l_list =[]
    for _ in range(num):
        list_of_prices = list(map(int, input("始値、終値、高値、安値を入力せい").split()))
        print("list_of_prices", list_of_prices)
        obj = {'start': list_of_prices[0],
               'end': list_of_prices[1],
               'highest': list_of_prices[2],
               'lowest': list_of_prices[3]
               }
        print("これがobj:", obj )
        s_e_h_l_list.append(obj)
        print("s_e_h_l_list", s_e_h_l_list)
    return s_e_h_l_list

# 全日数での始値、終値、高値、安値の辞書(オブジェクト)を作成して返す関数
def get_total_four_types_of_stock_prices(s_e_h_l_list):
    result_obj = {'start': s_e_h_l_list[0]['start'],
           'end': s_e_h_l_list[-1]['end']}
    highest = s_e_h_l_list[0]['highest']
    lowest = s_e_h_l_list[0]['lowest']
    for obj in s_e_h_l_list:
        if obj['highest'] >= highest:
            # highest = obj['highest'] 
            result_obj['highest'] = obj['highest']

        if obj['lowest'] <= lowest:
            # lowest = obj['lowest']
            result_obj['lowest'] = obj['lowest']

    # result_obj['highest'] = highest
    # result_obj['lowest'] = lowest
    return result_obj

# 結果を出力する関数
def print_result(obj):
    print(f"{obj['start']} {obj['end']} {obj['highest']} {obj['lowest']}")


print_result(get_total_four_types_of_stock_prices(get_daily_four_types_of_stock_prices_list(a_num_of_days)))
