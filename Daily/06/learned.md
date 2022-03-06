'''html
    <feTurbulence id="turbulence" baseFrequency="0.1 0.1" numOctaves="2" seed="3"></feTurbulence>
''' 

- SVG 필터 프리미티브 는 Perlin 난류 기능 을 사용하여 이미지를 생성합니다 . 구름이나 대리석과 같은 인공 질감을 합성
- baseFrequency, numOctaves, seed, stitchTiles, type
- 비오는 날 기름 낀 도로에 물웅덩이, 교회 창문 패턴, 고배율 스테레오 화면

<br>

'''html
    <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
''' 

- SourceGraphic 그리고 소스 텍스트에 변위 맵을 적용하기를 원하기 때문에 in속성이 SourceGraphic값에 대해 가질 것임을 의미합니다.
- 덧 씌우기? SVG는 어렵다.

<br>

'''html
    <animate attributeName="baseFrequency" dur="10s" values="0.1 0.1;0.2 0.2" repeatCount="indefinite"></animate>
'''

- <animate attributeName="" values="" dur="" repeatCount="" /> 형식
- attributeName animation all 같은 효과를 받을 그거 지정인듯
- values 강도 조절 해보면 알더라구요
- repeatCount 횟수 조절 indefinite가 무한인듯