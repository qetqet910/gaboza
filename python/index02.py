import requests as re

url="http://api.vworld.kr/req/address?"
# 디버깅 - Params에 URL GET 오류
params='service=address&request=getcoord&version=2.0&crs=epsg:4326&refine=true&simple=false&format=json&type='
road_type='ROAD'
number_type='PARCEL'
address='&address='
key='&key='
primary_key='FAC47DA3-B363-397D-BD3D-4573B009CAC5'

def request_geo(road):
    page = re.get(url+params+road_type+address+road+key+primary_key)
    json_data=page.json()
    
    if json_data['response']['status'] == "OK":
        x = json_data['response']['result']['point']['x']
        y = json_data['response']['result']['point']['y']
        return x, y
    else:
        x = 0
        y = 0
        return x, y

print(request_geo('인천광역시 연수구 아카데미로 119 (송도동, 인천대학교)'))



# 지석썜 코드

# import requests

# url = 'http://api.vworld.kr/req/address?'
# params = 'service=address&request=getcoord&version=2.0&crs=epsg:4326&refine=true&simple=false&format=json&type='
# road_type = 'ROAD'
# road_type2 = 'PARCEL'
# address = '&address='
# keys = '&key='
# primary_key = 'FAC47DA3-B363-397D-BD3D-4573B009CAC5'

# def request_geo(road):
#     page  = requests.get(url+params+road_type+address+road+keys+primary_key)
#     json_data=page.json()
#     print(json_data)

#     if json_data['response']['status'] == 'OK':
#         x = json_data['response']['result']['point']['x']
#         y = json_data['response']['result']['point']['y']
#         return x,y
#     else:
#         x = 0
#         y = 0
#         return x,y

# x,y = request_geo("인천광역시 연수구 아카데미로 119 (송도동, 인천대학교)")

# print(x,y)