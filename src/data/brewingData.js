// 차 우리는 과정 기본 데이터
// - 화면(UI) 로직 없이 "데이터"만 관리하는 파일입니다.
// - 차 종류별로 우리는 과정을 배열 형태로 담고 있습니다.
// - 각 차 데이터: id, name, temperature(물 온도), brewTime(우림 시간),
//   leafAmount(찻잎 양), steps(단계 배열)
// - 각 step: title(단계 제목), description(설명), caution(주의사항)

const brewingData = [
  {
    id: 1,
    name: "녹차",
    temperature: "70~80℃",
    brewTime: "1~2분",
    leafAmount: "찻잎 2g",
    steps: [
      {
        title: "찻잔과 다구 준비하기",
        description: "차를 마실 찻잔과 다관을 깨끗하게 준비합니다.",
        caution: "물기가 너무 많이 남아 있지 않도록 가볍게 닦아주세요.",
      },
      {
        title: "물 온도 맞추기",
        description: "녹차는 너무 뜨거운 물보다 70~80℃ 정도의 물이 적당합니다.",
        caution: "물이 너무 뜨거우면 쓴맛이 강해질 수 있습니다.",
      },
      {
        title: "찻잎 넣기",
        description: "다관에 찻잎 약 2g을 넣습니다.",
        caution: "찻잎을 너무 많이 넣으면 맛이 진하고 쓸 수 있습니다.",
      },
      {
        title: "차 우리기",
        description: "물을 붓고 1~2분 정도 기다립니다.",
        caution: "너무 오래 우리면 떫은맛이 강해질 수 있습니다.",
      },
      {
        title: "차 따르기",
        description: "우러난 차를 찻잔에 천천히 따릅니다.",
        caution: "마지막 한 방울까지 따르면 맛이 더 고르게 느껴집니다.",
      },
    ],
  },
  {
    id: 2,
    name: "홍차",
    temperature: "90~95℃",
    brewTime: "3~5분",
    leafAmount: "찻잎 2~3g",
    steps: [
      {
        title: "찻잔 예열하기",
        description: "따뜻한 물로 찻잔을 가볍게 데워줍니다.",
        caution: "예열하면 차가 빨리 식는 것을 줄일 수 있습니다.",
      },
      {
        title: "물 끓이기",
        description: "홍차는 90~95℃ 정도의 뜨거운 물이 잘 어울립니다.",
        caution: "물이 너무 식으면 향과 맛이 충분히 우러나지 않을 수 있습니다.",
      },
      {
        title: "찻잎 넣기",
        description: "찻잎 2~3g을 다관이나 티팟에 넣습니다.",
        caution: "취향에 따라 찻잎 양을 조금 조절할 수 있습니다.",
      },
      {
        title: "차 우리기",
        description: "뜨거운 물을 붓고 3~5분 정도 우립니다.",
        caution: "오래 우리면 떫은맛이 강해질 수 있습니다.",
      },
      {
        title: "차 즐기기",
        description: "완성된 홍차를 찻잔에 따르고 향을 느끼며 마십니다.",
        caution: "기호에 따라 우유나 설탕을 넣어도 좋습니다.",
      },
    ],
  },
  {
    id: 3,
    name: "우롱차",
    temperature: "85~90℃",
    brewTime: "2~3분",
    leafAmount: "찻잎 3g",
    steps: [
      {
        title: "다구 준비하기",
        description: "다관과 찻잔을 준비하고 따뜻한 물로 가볍게 데웁니다.",
        caution: "다구를 예열하면 차 향을 더 잘 느낄 수 있습니다.",
      },
      {
        title: "찻잎 넣기",
        description: "우롱차 찻잎 약 3g을 다관에 넣습니다.",
        caution:
          "우롱차는 잎이 펼쳐지므로 공간이 있는 다관을 사용하는 것이 좋습니다.",
      },
      {
        title: "물 붓기",
        description: "85~90℃ 정도의 물을 천천히 부어줍니다.",
        caution: "너무 뜨거운 물은 향을 무겁게 만들 수 있습니다.",
      },
      {
        title: "차 우리기",
        description: "2~3분 정도 기다리며 차가 우러나도록 합니다.",
        caution: "처음에는 짧게 우리고 취향에 따라 시간을 늘려보세요.",
      },
      {
        title: "여러 번 우려 마시기",
        description: "우롱차는 여러 번 우려도 향과 맛이 잘 유지됩니다.",
        caution: "두 번째 우림부터는 시간을 조금씩 늘려도 좋습니다.",
      },
    ],
  },

  {
    id: 4,
    name: "백차",
    temperature: 80,
    brewTime: 240,
    leafAmount: "2g",
    steps: [
      {
        title: "다구 준비",
        description: "찻잔과 다관을 깨끗하게 준비합니다.",
        caution: "강한 세제 향이 남지 않도록 합니다.",
      },
      {
        title: "물 식히기",
        description: "끓인 물을 약 80℃ 정도로 식힙니다.",
        caution: "너무 뜨거운 물은 백차의 섬세한 향을 해칩니다.",
      },
      {
        title: "찻잎 넣기",
        description: "찻잎 약 2g을 넣습니다.",
        caution: "과하게 넣으면 떫은맛이 날 수 있습니다.",
      },
      {
        title: "우려내기",
        description: "약 4분 동안 천천히 우립니다.",
        caution: "향을 충분히 즐기며 기다립니다.",
      },
    ],
  },

  {
    id: 5,
    name: "보이차",
    temperature: 100,
    brewTime: 240,
    leafAmount: "4g",
    steps: [
      {
        title: "다구 예열",
        description: "뜨거운 물로 다관과 잔을 데웁니다.",
        caution: "온도를 충분히 유지합니다.",
      },
      {
        title: "세차하기",
        description: "첫 물은 짧게 헹군 뒤 버립니다.",
        caution: "숙성 중 생긴 먼지를 제거합니다.",
      },
      {
        title: "본 우림",
        description: "100℃ 물로 약 4분 우립니다.",
        caution: "너무 오래 우리면 맛이 무거워질 수 있습니다.",
      },
      {
        title: "음용",
        description: "천천히 향과 깊은 풍미를 즐깁니다.",
        caution: "여러 번 우려 마실 수 있습니다.",
      },
    ],
  },

  {
    id: 6,
    name: "자스민차",
    temperature: 85,
    brewTime: 180,
    leafAmount: "2g",
    steps: [
      {
        title: "찻잔 준비",
        description: "깨끗한 찻잔을 준비합니다.",
        caution: "강한 향의 음식과 멀리 둡니다.",
      },
      {
        title: "찻잎 넣기",
        description: "찻잎 약 2g을 넣습니다.",
        caution: "향이 날아가지 않도록 빠르게 진행합니다.",
      },
      {
        title: "우려내기",
        description: "85℃ 물로 3분 정도 우립니다.",
        caution: "너무 뜨거운 물은 꽃향을 약하게 만들 수 있습니다.",
      },
      {
        title: "향 감상",
        description: "마시기 전 꽃향을 먼저 느껴봅니다.",
        caution: "천천히 향을 즐겨보세요.",
      },
    ],
  },

  {
    id: 7,
    name: "말차",
    temperature: 80,
    brewTime: 60,
    leafAmount: "2g",
    steps: [
      {
        title: "말차 담기",
        description: "말차 2g을 찻그릇에 넣습니다.",
        caution: "체에 걸러 넣으면 더 부드럽습니다.",
      },
      {
        title: "물 붓기",
        description: "80℃ 물을 소량 붓습니다.",
        caution: "끓는 물은 사용하지 않습니다.",
      },
      {
        title: "차선 사용",
        description: "차선으로 빠르게 저어 거품을 냅니다.",
        caution: "손목을 사용해 M자 형태로 움직입니다.",
      },
      {
        title: "음용",
        description: "거품이 형성되면 바로 마십니다.",
        caution: "시간이 지나면 거품이 가라앉습니다.",
      },
    ],
  },

  {
    id: 8,
    name: "캐모마일차",
    temperature: 95,
    brewTime: 300,
    leafAmount: "2g",
    steps: [
      {
        title: "찻잔 준비",
        description: "찻잔을 준비합니다.",
        caution: "향이 강한 차와 분리해 보관합니다.",
      },
      {
        title: "허브 넣기",
        description: "캐모마일 꽃잎 2g을 넣습니다.",
        caution: "너무 많이 넣으면 향이 과해질 수 있습니다.",
      },
      {
        title: "뜨거운 물 붓기",
        description: "95℃ 물을 붓습니다.",
        caution: "천천히 부어 향을 보존합니다.",
      },
      {
        title: "우려내기",
        description: "5분 정도 충분히 우립니다.",
        caution: "뚜껑을 덮어 향이 날아가지 않게 합니다.",
      },
    ],
  },
];

export default brewingData;
