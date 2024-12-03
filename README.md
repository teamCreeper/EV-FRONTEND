# 프로젝트 이름: Project EV

Project EV는 다양한 전기차 모델에 대한 정보를 제공하는 웹 애플리케이션입니다. 사용자는 전기차 모델을 검색하고, 각 모델에 대한 상세 정보와 배터리 정보를 확인할 수 있으며, 전기차 관련 최신 뉴스를 제공받을 수 있습니다.

## 주요 기능

### 1. **전기차 모델 조회**

- **전기차 검색**: 사용자는 검색창을 통해 원하는 전기차 모델을 검색할 수 있습니다. 브랜드별 필터링을 통해 더 쉽게 원하는 차량을 찾을 수 있습니다.
- **브랜드별 전기차 모델 보기**: 메인 페이지에서 현대, 기아, 아우디, BMW 등 다양한 브랜드의 전기차 모델을 스와이프 형식으로 탐색할 수 있습니다.

### 2. **전기차 모델 검색**

- **검색 결과 표시**: 사용자가 입력한 검색어에 맞는 전기차 모델들이 리스트 형식으로 표시됩니다. 
- **모델 클릭 시 상세 페이지로 이동**: 각 검색 결과 카드에서 모델을 클릭하면 해당 차량의 상세 페이지로 이동합니다. 

### 3. **전기차 상세 정보 조회**

- **차량 옵션 선택**: 차량 상세 페이지에서 사용자는 다양한 옵션(배터리 용량, 주행 거리 등)을 선택하여 각 옵션에 대한 정보를 확인할 수 있습니다. 
- **제원 정보 제공**: 배터리 용량, 주행 거리, 최고 속도, 모터 타입 등 차량에 대한 자세한 제원을 제공하여 사용자가 차량의 성능을 이해할 수 있도록 합니다. 

### 4. **전기차 관련 뉴스 조회**

- **최신 뉴스 제공**: 전기차와 관련된 최신 뉴스 기사를 제공합니다. 사용자는 뉴스 페이지를 통해 전기차 산업의 동향과 최신 기술에 대한 정보를 얻을 수 있습니다.

## 기술 스택

- **Frontend**: vite, React.js, css 애니메이션을 이용한 인터랙션 개선
- **Backend**: Java Spring Boot (API 호출을 통해 전기차 정보 제공)
- **Deployment**: github.io 프론트엔드 배포, 클라우드 서버에서 백엔드 호스팅

## 설치 및 실행 방법

1. 리포지토리를 클론합니다.
   ```bash
   git clone [repository_url]
   ```
2. 프론트엔드 디렉토리로 이동하여 필요한 패키지를 설치합니다.
   ```bash
   cd frontend
   npm install
   ```
3. 개발 서버를 실행합니다.
   ```bash
   npm run dev
   ```
4. 빌드 및 배포
   ```bash
   npm run build
   npm run preview
   ```
5. 백엔드 서버는 클라우드에서 이미 실행되고 있으므로 별도의 실행 작업이 필요하지 않습니다.

## 사용된 API

- **검색 API**: 사용자가 입력한 검색어에 맞는 전기차 모델을 반환합니다.

```json
응답 형식:
{
  "carId": Long,
  "carName": String,
  "carBrandId": Long
}

```

- **차량 상세 정보 API**: 선택한 차량의 상세 제원과 옵션을 반환합니다.

```json
응답형식:
[
  {
    "carId": 101,
    "batteryId": 1,
    "carPrice": "4700",
    "motoType": "RWD",
    "useableBattery": "60 kWh",
    "topSpeed": "185 km/h",
    "carRange": "330 km",
    "efficiency": "182 Wh/km",
    "batteryName": "Litium-ion",
    "batteryBrandName": "No Data",
    "batteryBrandCountry": "No Data",
    "ztoHundred": "8.5 sec"
  },
  {
    "carId": 101,
    "batteryId": 1,
    "carPrice": "5700",
    "motoType": "RWD",
    "useableBattery": "80 kWh",
    "topSpeed": "185 km/h",
    "carRange": "430 km",
    "efficiency": "186 Wh/km",
    "batteryName": "Litium-ion",
    "batteryBrandName": "No Data",
    "batteryBrandCountry": "No Data",
    "ztoHundred": "7.5 sec"
  }
]
```

- **배터리 정보 API**: 전기차에 사용된 배터리의 상세 정보를 제공합니다.

- **뉴스 API**: 전기차 관련 최신 뉴스를 반환합니다.

```js
const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: query, // 검색어
          apiKey: process.env.VITE_NEWS_API_KEY // News API에서 발급받은 키
          language: 'ko', // 한국어 기사만
          sortBy: 'publishedAt', // 최신 뉴스 기준 정렬
        },
      });
)
```

## 주요 폴더 구조

```
/EV-FRONTEND
│   
├── src
│   ├── components
│   │   ├── Main.jsx
│   │   ├── MainCar.jsx
│   │   ├── Nav.jsx
│   │   ├── Searchbar.jsx
│   │   ├── SearchResult.jsx
│   │   ├── CarSwiper.jsx
│   │   ├── CarDetail.jsx
│   │   ├── Carbattery.jsx
│   │   ├── Carnews.jsx
│   │   ├── Footer.jsx
│   │   └── ElectricVehicles.js
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── App.jsx
│   └── index.html
├── .env
├── .gitignore
├── index.html // vite Migration 때문에 index.html을 최상단으로
├── package.json
└── README.md
```

## 스크린샷

- 메인 페이지

![메인1](https://github.com/user-attachments/assets/1fa5f59a-a4b0-4648-bba3-82552bd463bd) |![메인2](https://github.com/user-attachments/assets/ee6a82c5-ae74-49e1-b2ec-8ef941546836)
--- | --- | 

- 검색 결과 페이지

![전체검색](https://github.com/user-attachments/assets/c07571b7-2925-497e-9f94-97aacd9edab9) |![제네시스검색](https://github.com/user-attachments/assets/98c0704c-4627-49c5-8c97-5d0766a13d2f)
--- | --- | 

- 차량 상세 페이지


![차량상세](https://github.com/user-attachments/assets/9df91429-8399-4823-a6dc-64be6f4b5480) |![차량제원상세](https://github.com/user-attachments/assets/675443df-fee2-4593-bb75-b004dd497109)
--- | --- | 

- 배터리 조회 페이지
![배터리조회](https://github.com/user-attachments/assets/18e733e6-e78f-4602-bc71-67de3a4a5476)

- 뉴스 페이지
![차량뉴스](https://github.com/user-attachments/assets/5dc01556-aeaa-4116-b293-ab8dfebaadc0) |![뉴스모달](https://github.com/user-attachments/assets/4f869792-c55c-43fd-aabf-cc514bd7670b)
--- | --- | 
