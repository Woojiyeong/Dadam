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
        title: "다구 준비 및 온도 맞추기",
        description: "다관을 준비하고 물 온도를 70~80℃ 정도로 맞춥니다.",
        caution: "물이 너무 뜨거우면 녹차 특유의 쓴맛이 강해질 수 있습니다.",
      },
      {
        title: "찻잎 넣기",
        description: "다관에 찻잎 약 2g을 넣습니다.",
        caution: "찻잎 양이 너무 많으면 맛이 과하게 진해질 수 있습니다.",
      },
      {
        title: "물 붓기",
        description: "준비된 따뜻한 물을 다관에 천천히 붓습니다.",
        caution: "찻잎이 고르게 젖도록 부어주세요.",
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
        title: "예열 및 물 끓이기",
        description: "찻잔을 데우고 물을 90~95℃로 뜨겁게 끓입니다.",
        caution: "홍차는 높은 온도의 물에서 향이 더 잘 살아납니다.",
      },
      {
        title: "찻잎 넣기",
        description: "찻잎 2~3g을 티팟에 넣습니다.",
        caution: "취향에 따라 찻잎 양을 조금 조절할 수 있습니다.",
      },
      {
        title: "물 붓기",
        description: "뜨거운 물을 티팟에 가득 붓습니다.",
        caution: "물이 식기 전에 빠르게 붓는 것이 좋습니다.",
      },
      {
        title: "차 우리기",
        description: "3~5분 정도 충분히 우립니다.",
        caution: "시간을 엄수해야 홍차 특유의 떫은맛을 조절할 수 있습니다.",
      },
      {
        title: "차 즐기기",
        description: "완성된 홍차를 잔에 따르고 향을 즐깁니다.",
        caution: "기호에 따라 우유나 설탕을 추가해 보세요.",
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
        title: "다구 준비 및 예열",
        description: "다관과 찻잔을 따뜻한 물로 가볍게 데웁니다.",
        caution: "다구를 예열하면 우롱차의 화려한 향을 더 잘 느낄 수 있습니다.",
      },
      {
        title: "찻잎 넣기",
        description: "우롱차 찻잎 약 3g을 다관에 넣습니다.",
        caution: "잎이 펼쳐질 수 있도록 여유 있는 크기의 다관을 권장합니다.",
      },
      {
        title: "물 붓기",
        description: "85~90℃ 정도의 물을 천천히 부어줍니다.",
        caution:
          "첫 물을 바로 버리는 '세차' 과정을 추가하면 맛이 더 깔끔합니다.",
      },
      {
        title: "차 우리기",
        description: "2~3분 정도 기다리며 차가 우러나도록 합니다.",
        caution: "우롱차는 여러 번 우릴 수 있으니 첫 우림은 가볍게 가져가세요.",
      },
      {
        title: "여러 번 우려 마시기",
        description: "두 번째 우림부터는 시간을 조금씩 늘려가며 즐깁니다.",
        caution: "매 우림마다 변하는 향과 맛의 변화를 느껴보세요.",
      },
    ],
  },
  {
    id: 4,
    name: "백차",
    temperature: "80℃",
    brewTime: "4분",
    leafAmount: "찻잎 2g",
    steps: [
      {
        title: "다구 준비",
        description: "깨끗하게 세척된 찻잔과 다관을 준비합니다.",
        caution: "강한 세제 향이 남지 않도록 주의하세요.",
      },
      {
        title: "물 식히기",
        description: "끓인 물을 백차에 적합한 80℃ 정도로 식힙니다.",
        caution: "너무 뜨거운 물은 백차의 섬세한 향을 파괴합니다.",
      },
      {
        title: "찻잎 넣기",
        description: "찻잎 약 2g을 다관에 넣습니다.",
        caution: "백차는 잎이 크므로 부서지지 않게 살살 다뤄주세요.",
      },
      {
        title: "차 우리기",
        description: "약 4분 동안 천천히 우려냅니다.",
        caution: "백차는 우릴수록 단맛이 올라오니 느긋하게 기다립니다.",
      },
    ],
  },
  {
    id: 5,
    name: "보이차",
    temperature: "100℃",
    brewTime: "4분",
    leafAmount: "찻잎 4g",
    steps: [
      {
        title: "다구 예열 및 준비",
        description: "뜨거운 물로 다관과 잔을 충분히 데웁니다.",
        caution: "보이차는 높은 온도를 유지하는 것이 핵심입니다.",
      },
      {
        title: "찻잎 넣기",
        description: "보이차 찻잎 약 4g을 넣습니다.",
        caution: "뭉쳐 있는 잎은 가볍게 풀어서 넣어주세요.",
      },
      {
        title: "세차하기",
        description: "뜨거운 물을 붓고 바로 버려 찻잎을 깨웁니다.",
        caution: "이 과정은 먼지를 제거하고 차맛을 열어주는 역할입니다.",
      },
      {
        title: "차 우리기",
        description: "100℃ 물로 약 4분간 본격적으로 우립니다.",
        caution: "숙성 정도에 따라 시간을 조절해 보세요.",
      },
    ],
  },
  {
    id: 6,
    name: "자스민차",
    temperature: "85℃",
    brewTime: "3분",
    leafAmount: "찻잎 2g",
    steps: [
      {
        title: "찻잔 준비",
        description: "꽃향을 담을 수 있는 깨끗한 잔을 준비합니다.",
        caution: "주변의 강한 냄새가 차 향을 방해하지 않게 합니다.",
      },
      {
        title: "물 온도 맞추기",
        description: "물을 85℃ 내외로 준비합니다.",
        caution: "너무 뜨거우면 꽃향기가 금방 날아갈 수 있습니다.",
      },
      {
        title: "찻잎 넣기",
        description: "자스민 찻잎 약 2g을 넣습니다.",
        caution: "향이 보존되도록 뚜껑이 있는 다관이 좋습니다.",
      },
      {
        title: "차 우리기",
        description: "약 3분 정도 향이 배어 나오게 우립니다.",
        caution: "마시기 전 코로 먼저 향을 즐겨보세요.",
      },
    ],
  },
  {
    id: 7,
    name: "말차",
    temperature: "80℃",
    brewTime: "1분",
    leafAmount: "가루 2g",
    steps: [
      {
        title: "말차 준비",
        description: "말차 2g을 곱게 체에 걸러 찻그릇에 담습니다.",
        caution: "체에 거르면 덩어리 없이 부드러운 거품이 납니다.",
      },
      {
        title: "물 붓기",
        description: "80℃ 정도의 물을 소량(약 60~70ml) 붓습니다.",
        caution: "일반 차보다 물의 양을 훨씬 적게 잡아야 합니다.",
      },
      {
        title: "차선으로 젓기",
        description: "차선을 이용해 손목 스냅으로 M자를 그리며 저어줍니다.",
        caution: "바닥을 긁지 말고 수면 위에서 빠르게 움직이세요.",
      },
      {
        title: "차 우리기(격불)",
        description: "고운 거품이 일어날 때까지 약 1분간 저어 완성합니다.",
        caution: "거품이 충분히 나야 맛이 부드럽고 고소합니다.",
      },
    ],
  },
  {
    id: 8,
    name: "캐모마일차",
    temperature: "95℃",
    brewTime: "5분",
    leafAmount: "꽃잎 2g",
    steps: [
      {
        title: "찻잔 및 허브 준비",
        description: "찻잔을 준비하고 캐모마일 꽃잎 2g을 담습니다.",
        caution: "허브차는 향이 강하므로 다른 차와 섞이지 않게 보관하세요.",
      },
      {
        title: "물 끓이기",
        description: "95℃ 이상의 팔팔 끓는 물을 준비합니다.",
        caution: "허브의 성분은 뜨거운 물에서 더 잘 추출됩니다.",
      },
      {
        title: "물 붓기",
        description: "꽃잎 위로 뜨거운 물을 천천히 붓습니다.",
        caution: "증기와 함께 올라오는 향을 느껴보세요.",
      },
      {
        title: "차 우리기",
        description: "뚜껑을 덮고 5분 정도 충분히 우립니다.",
        caution: "뚜껑을 덮어야 유효한 향기 성분이 날아가지 않습니다.",
      },
    ],
  },
];

export default brewingData;
