// 차 기본 데이터 파일
// - 화면 로직 없이 "데이터"만 관리한다.
// - 다른 기능(추천, 퀴즈 등)에서도 재사용할 수 있도록 순수 배열 형태로 작성한다.
// - 각 차 객체는 고유한 id 를 가지며, 학습에 필요한 정보를 모두 담고 있다.

const teaData = [
  {
    id: 1,
    name: "녹차",
    description: "산뜻하고 깔끔한 맛이 특징인 대표적인 차",
    waterTemp: "70~80℃",
    steepTime: "1~2분",
    taste: "깔끔함, 은은한 쌉싸름함",
    aroma: "풀잎 향, 신선한 향",
    tip: "너무 뜨거운 물을 사용하면 쓴맛이 강해질 수 있다."
  },
  {
    id: 2,
    name: "홍차",
    description: "깊고 진한 향과 맛을 가진 발효차",
    waterTemp: "90~95℃",
    steepTime: "3~5분",
    taste: "진함, 묵직함, 약간의 떫은맛",
    aroma: "달콤한 향, 묵직한 향",
    tip: "우유나 설탕과 함께 마셔도 잘 어울린다."
  },
  {
    id: 3,
    name: "우롱차",
    description: "녹차와 홍차의 중간 정도로 발효된 차",
    waterTemp: "85~90℃",
    steepTime: "2~3분",
    taste: "부드러움, 구수함",
    aroma: "꽃향, 고소한 향",
    tip: "여러 번 우려 마셔도 향과 맛이 잘 유지된다."
  },
  {
    id: 4,
    name: "허브차",
    description: "허브, 꽃, 과일 등을 이용해 만든 향 중심의 차",
    waterTemp: "90~100℃",
    steepTime: "5~7분",
    taste: "부드러움, 은은한 단맛",
    aroma: "꽃향, 과일향, 허브향",
    tip: "카페인이 없는 종류가 많아 저녁에 마시기 좋다."
  },
  {
    id: 5,
    name: "보이차",
    description: "숙성 과정을 거쳐 깊고 구수한 맛을 내는 차",
    waterTemp: "95~100℃",
    steepTime: "2~4분",
    taste: "깊음, 구수함, 묵직함",
    aroma: "흙내음, 나무 향, 숙성 향",
    tip: "처음 마실 때는 짧게 우려 맛을 조절하는 것이 좋다."
  }
];

export default teaData;
