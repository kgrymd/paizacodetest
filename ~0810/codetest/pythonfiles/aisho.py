# アルファベットと対応する数字の辞書を作成
dic = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
}

# 入力を受け取ってsとtに入れる
s, t = input("二人の名前をスペースで区切って入力したら相性を判定するよ").split()

# 相性を計算する関数
# 名前を足した文字列を引数にとって、リスト内包表記で一文字ずつ対応する数字にしていれた配列を作る
# その配列の長さが1以上の間はこれも同じくリスト内包表記で、隣り合う数字を足して101で割った余り入れた配列を作る
# そのwhileを抜けたときのnumsが相性の数字なのでnums[o]をreturn
def calc_compatibility(name):
  nums = [dic[char] for char in name]

  while len(nums) > 1:
  #   # nums = [(nums[i] + nums[i+1]) % 101 for i in range(len(nums)-1)]
    kari_nums = []

    for i in range(len(nums) - 1):
        kari_nums.append((nums[i] + nums[i+1]) % 101)
        print(kari_nums)
    nums = kari_nums



  return nums[0]

# 2パターンの名前でcalc_compatibility()した結果のおっきい方を出力
print(max((calc_compatibility(s + t), calc_compatibility(t + s))))
