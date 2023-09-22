import { create } from 'zustand';

export const loginUserState = create(set => ({
    id: '',
    name: '김싸피',
    email: 'traveler@gmail.com',
    profileUrl: require('asset/images/profile.png').default,
    date: '2023-09-11',
    setId: data => set(state => ({ id: data })),
    setName: data => set(state => ({ name: data })),
    setEmail: data => set(state => ({ email: data })),
    setProfileUrl: data => set(state => ({ profileUrl: data })),
    setLoginUser: data =>
        set(state => ({
            id: data.id,
            name: data.name,
            email: data.email,
            profileUrl: data.profileUrl,
            date: data.date,
        })),
    setName: data => set(state => ({ name: data })),
    setProfileUrl: data => set(state => ({ profileUrl: data })),
}));

export const detailState = create(set => ({
    detailLocation: {},
    viewDetail: false,
    setDetailLocation: data => set(state => ({ detailLocation: data })),
    setViewDetail: data => set(state => ({ viewDetail: data })),
}));

export const dateState = create(set => ({
    selectedDate: [],
    setSelectedDate: data => set(state => ({ selectedDate: data })),
}));

export const modalState = create(set => ({
    view: false,
    message: '',
    response: '',
    type: '',
    setView: data => set(state => ({ view: data })),
    setMessage: data => set(state => ({ message: data })),
    setResponse: data => set(state => ({ response: data })),
    setType: data => set(state => ({ type: data })),
}));

export const albumState = create(set => ({
    selectedCountry: [],
    selectedAlbum: '0',
    selectedImage: { albumId: '0', imageUrl: '' },
    albumList: [
        {
            albumId: '1',
            albumName: '정말 즐겁습니다',
            imageUrl: [
                { imageId: '1', url: require('asset/images/pink-8053329_1280.jpg').default },
                { imageId: '2', url: require('asset/images/rainbow-8221835_1280.jpg').default },
                { imageId: '3', url: require('asset/images/green-sea-turtle-8199770_1280.jpg').default },
                { imageId: '4', url: require('asset/images/mountain-8207212_1280.jpg').default },
                { imageId: '5', url: require('asset/images/rose-8200460_1280.jpg').default },
                { imageId: '6', url: require('asset/images/squirrel-8219439_1280.jpg').default },
            ],
        },
        {
            albumId: '2',
            albumName: '너무 행복해요',
            imageUrl: [
                { imageId: '1', url: require('asset/images/rose-8200460_1280.jpg').default },
                { imageId: '2', url: require('asset/images/squirrel-8219439_1280.jpg').default },
            ],
        },
        {
            albumId: '3',
            albumName: '짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱짱긴이름',
            imageUrl: [],
        },
        {
            albumId: '4',
            albumName: '정말 즐겁습니다',
            imageUrl: [
                { imageId: '1', url: require('asset/images/pink-8053329_1280.jpg').default },
                { imageId: '2', url: require('asset/images/rainbow-8221835_1280.jpg').default },
                { imageId: '3', url: require('asset/images/green-sea-turtle-8199770_1280.jpg').default },
                { imageId: '4', url: require('asset/images/mountain-8207212_1280.jpg').default },
                { imageId: '5', url: require('asset/images/rose-8200460_1280.jpg').default },
                { imageId: '6', url: require('asset/images/squirrel-8219439_1280.jpg').default },
            ],
        },
        {
            albumId: '5',
            albumName: '정말 즐겁습니다',
            imageUrl: [
                { imageId: '1', url: require('asset/images/pink-8053329_1280.jpg').default },
                { imageId: '2', url: require('asset/images/rainbow-8221835_1280.jpg').default },
                { imageId: '3', url: require('asset/images/green-sea-turtle-8199770_1280.jpg').default },
                { imageId: '4', url: require('asset/images/mountain-8207212_1280.jpg').default },
                { imageId: '5', url: require('asset/images/rose-8200460_1280.jpg').default },
                { imageId: '6', url: require('asset/images/squirrel-8219439_1280.jpg').default },
            ],
        },
        {
            albumId: '6',
            albumName: '정말 즐겁습니다',
            imageUrl: [
                { imageId: '1', url: require('asset/images/pink-8053329_1280.jpg').default },
                { imageId: '2', url: require('asset/images/rainbow-8221835_1280.jpg').default },
                { imageId: '3', url: require('asset/images/green-sea-turtle-8199770_1280.jpg').default },
                { imageId: '4', url: require('asset/images/mountain-8207212_1280.jpg').default },
                { imageId: '5', url: require('asset/images/rose-8200460_1280.jpg').default },
                { imageId: '6', url: require('asset/images/squirrel-8219439_1280.jpg').default },
            ],
        },
    ],
    setSelectedAlbum: data => set(state => ({ selectedAlbum: data })),
    setAlbumList: data => set(state => ({ albumList: data })),
    setImageList: data => set(state => ({ imageList: data })),
    setSelectedCountry: data => set(state => ({ selectedCountry: data })),
}));

export const recommendationState = create(set => ({
    totalRecommendation: [
        {
            id: 1,
            country: '노르웨이',
            city: '트롬쇠',
            estimatedClimate: '12',
            estimatedExchangeRate: '123.69',
            currency: '크로네',
            safety: '8.6',
            imageUrl: require('asset/images/troms.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 2,
            country: '프랑스',
            city: '파리',
            estimatedClimate: '21',
            estimatedExchangeRate: '1430.15',
            currency: '유로',
            safety: '8.8',
            imageUrl: require('asset/images/paris.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 3,
            country: '미국',
            city: '콜로라도',
            estimatedClimate: '25',
            estimatedExchangeRate: '1317.61',
            currency: '달러',
            safety: '9.1',
            imageUrl: require('asset/images/colorado.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
    ],
    currencyRecommendation: [
        {
            id: 1,
            country: '노르웨이',
            city: '트롬쇠',
            estimatedClimate: '12',
            estimatedExchangeRate: '123.69',
            currency: '크로네',
            safety: '8.6',
            imageUrl: require('asset/images/troms.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 2,
            country: '프랑스',
            city: '파리',
            estimatedClimate: '21',
            estimatedExchangeRate: '1430.15',
            currency: '유로',
            safety: '8.8',
            imageUrl: require('asset/images/paris.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 3,
            country: '미국',
            city: '콜로라도',
            estimatedClimate: '25',
            estimatedExchangeRate: '1317.61',
            currency: '달러',
            safety: '9.1',
            imageUrl: require('asset/images/colorado.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
    ],
    weatherRecommendation: [
        {
            id: 1,
            country: '노르웨이',
            city: '트롬쇠',
            estimatedClimate: '12',
            estimatedExchangeRate: '123.69',
            currency: '크로네',
            safety: '8.6',
            imageUrl: require('asset/images/troms.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 2,
            country: '프랑스',
            city: '파리',
            estimatedClimate: '21',
            estimatedExchangeRate: '1430.15',
            currency: '유로',
            safety: '8.8',
            imageUrl: require('asset/images/paris.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 3,
            country: '미국',
            city: '콜로라도',
            estimatedClimate: '25',
            estimatedExchangeRate: '1317.61',
            currency: '달러',
            safety: '9.1',
            imageUrl: require('asset/images/colorado.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
    ],
    safetyRecommendation: [
        {
            id: 1,
            country: '노르웨이',
            city: '트롬쇠',
            estimatedClimate: '12',
            estimatedExchangeRate: '123.69',
            currency: '크로네',
            safety: '8.6',
            imageUrl: require('asset/images/troms.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 2,
            country: '프랑스',
            city: '파리',
            estimatedClimate: '21',
            estimatedExchangeRate: '1430.15',
            currency: '유로',
            safety: '8.8',
            imageUrl: require('asset/images/paris.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 3,
            country: '미국',
            city: '콜로라도',
            estimatedClimate: '25',
            estimatedExchangeRate: '1317.61',
            currency: '달러',
            safety: '9.1',
            imageUrl: require('asset/images/colorado.png').default,
            cart: false,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
    ],
    setTotalRecommendation: data => set(state => ({ totalRecommendation: data })),
    setCurrencyRecommendation: data => set(state => ({ currencyRecommendation: data })),
    setWeatherRecommendation: data => set(state => ({ weatherRecommendation: data })),
    setSafetyRecommendation: data => set(state => ({ safetyRecommendation: data })),
}));

export const cartState = create(set => ({
    cartLocation: [
        {
            id: 1,
            country: '노르웨이',
            city: '트롬쇠',
            estimatedClimate: '12',
            estimatedExchangeRate: '123.69',
            currency: '크로네',
            safety: '8.6',
            imageUrl: require('asset/images/troms.png').default,
            cart: true,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 2,
            country: '프랑스',
            city: '파리',
            estimatedClimate: '21',
            estimatedExchangeRate: '1430.15',
            currency: '유로',
            safety: '8.8',
            imageUrl: require('asset/images/paris.png').default,
            cart: true,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 3,
            country: '미국',
            city: '콜로라도',
            estimatedClimate: '25',
            estimatedExchangeRate: '1317.61',
            currency: '달러',
            safety: '9.1',
            imageUrl: require('asset/images/colorado.png').default,
            cart: true,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 4,
            country: '노르웨이',
            city: '트롬쇠',
            estimatedClimate: '12',
            estimatedExchangeRate: '123.69',
            currency: '크로네',
            safety: '8.6',
            imageUrl: require('asset/images/troms.png').default,
            cart: true,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
        {
            id: 5,
            country: '프랑스',
            city: '파리',
            estimatedClimate: '21',
            estimatedExchangeRate: '1430.15',
            currency: '유로',
            safety: '8.8',
            imageUrl: require('asset/images/paris.png').default,
            cart: true,
            estimated_traveler: '100',
            ticketPrice: '1741400',
            start_date: '2023-08-31',
            end_date: '2023-09-13',
        },
    ],
    compareLocation: [-1, -1],
    setCartLocation: data => set(state => ({ cartLocation: data })),
    setCompareLocation: data => set(state => ({ compareLocation: data })),
}));

export const stampState = create(set => ({
    mainStampId: 1,
    setMainStampId: data => set(state => ({ mainStampId: data })),
    stamp: [
        {
            id: 1,
            name: '푸바오 사랑해',
            detail: '중국을 많이 간 사람에게 주는 스탬프임',
            imageUrl: require('asset/images/main-stamp.png').default,
            obtained: true,
        },
        {
            id: 2,
            name: '고양이 대장',
            detail: '고양이의 나라 5개 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: true,
        },
        {
            id: 3,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp2.png').default,
            obtained: true,
        },
        {
            id: 4,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: false,
        },
        {
            id: 5,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: true,
        },
        {
            id: 6,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: false,
        },
        {
            id: 7,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: false,
        },
        {
            id: 8,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: false,
        },
        {
            id: 9,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: false,
        },
        {
            id: 10,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: false,
        },
        {
            id: 11,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: false,
        },
        {
            id: 12,
            name: '코알라 짱',
            detail: '코알라가 사는 나라에 3번 이상 방문',
            imageUrl: require('asset/images/stamp3.png').default,
            obtained: false,
        },
    ],
    setStamp: data =>
        set(state => {
            const updatedStamps = state.stamp.map(stamp =>
                stamp.id === data.id ? { ...stamp, obtained: data.obtained } : stamp,
            );
            return { stamp: updatedStamps };
        }),
}));

export const landingState = create(set => ({
    landingLocation: [
        {
            country: '노르웨이',
            city: '트롬쇠',
            estimatedClimate: '12',
            estimatedExchangeRate: '123.69',
            currency: '크로네',
            safety: '8.6',
            imageUrl: require('asset/images/troms.png').default,
        },
        {
            country: '프랑스',
            city: '파리',
            estimatedClimate: '21',
            estimatedExchangeRate: '1430.15',
            currency: '유로',
            safety: '8.8',
            imageUrl: require('asset/images/paris.png').default,
        },
        {
            country: '미국',
            city: '콜로라도',
            estimatedClimate: '25',
            estimatedExchangeRate: '1317.61',
            currency: '달러',
            safety: '9.1',
            imageUrl: require('asset/images/colorado.png').default,
        },
    ],
    // setlandingLocation: data => set(state => ({ landingLocation: data })),
}));

export const mbtiState = create(set => ({
    questions: [
        {
            no: 1,
            question: `여행을 마치고 한국으로 돌아가는 비행기 안 여행지에서 봤던 사람이 옆자리에 앉았다.`,
            ans1: '오! 성당 앞에서 제 사진 찍어주셨죠?”이것도 인연! 친근하게 말을 건넨다. ',
            ans2: '설마 기억 못하겠지...” 모르는 척하며 혼자만의 여행 마무리 시간을 가져 본다.',
        },
        {
            no: 2,
            question: `미리 조사한 곳은 모두 둘러본 것 같은데, 우리가 모르는 숨은 명소가 또 있을까?`,
            ans1: '"좀 더 찾아봐야겠어” 검색사이트, 여행 카페 등 추가 웹서핑으로 찾아본다. ',
            ans2: '"여기 주변에 현지인만 가는 핫플이 있나요?" 근처 가게 주인에게 다가가 추천 장소를 물어본다.',
        },
        {
            no: 3,
            question: `친구와 단둘이 떠나기로 한 여행 ,, \n친구가 갑자기 “내 친구도 같이 가고 싶다는데 같이 가도 괜찮을까?” 라는데 이럴때 나는?`,
            ans1: '사람 많을수록 재밌지 ! ',
            ans2: '불편할거같은데.. 우리끼리 가면 안될까? 모르는 사람과 편하게 즐길수 없을거같다.',
        },
        {
            no: 4,
            question: `무사히 비행기 탑승! \n승무원이 기내 안전 수칙에 대한 이야기를 시작한다.`,
            ans1: '"줄을 당기면 조끼에 공기가 찬다고? 어떻게?" 승무원의 말 한마디에 이런 저런 생각이 꼬리를 문다. ',
            ans2: '"네 알겠습니다~” 들은 것만 기억하는 편 (사실 까먹을 것 같다)',
        },
        {
            no: 5,
            question: `"꿈에 그리던 곳, 실제로 가 보니 어땠어?” \n여행 다녀온 뒤 누군가 감상을 물어올 때 나의 대답은?`,
            ans1: '"첫날은 박물관을 갔는데, 입장료가 좀 비싸더라고?" 일정별, 스팟별로 사실적이면서 상세하게 이야기한다. ',
            ans2: '사람들도 친절하고, 특히 일몰이 정말 멋졌어" 여행의 전체적인 느낌과 의미를 이야기한다.',
        },
        {
            no: 6,
            question: `세계에서 가장 높은 건물 중 하나라는 관광 명소. \n하늘 높이 솟은 빌딩 앞에 서 있다! \n당신의 반응은?`,
            ans1: '"와 진짜 높다! 고개를 젖혀도 다 안 보이는데?" 엄청난 장관에 소름이 돋는다. ',
            ans2: '"높은 곳에서 자면 고산병 걸리려나? 꼭대기에 누군가 살고 있나?" 별 게 다 궁금해진다. ',
        },

        {
            no: 7,
            question: `설레는 여행 당일! \n공항 오는 길에 사고가 나서 수습하느라 늦게 도착한 친구. \n가장 먼저 드는 생각은? `,
            ans1: '"다친 곳은 없어? 아무 일 없어서 다행이야 ㅠ" 친구 걱정이 제일 먼저 떠오른다. ',
            ans2: '"무슨 사고? 정리는 잘 된 거야? 보험 처리는?" 사고 처리는 잘 하고 온 건지 궁금하다. ',
        },
        {
            no: 8,
            question: `어느덧 여행의 막바지 일정 내내 무사고 운전한 렌트카를 반납까지 완료! \n나에게 기분 좋은 칭찬은?`,
            ans1: '"여행 내내 정말 고생했어! 덕분에 편하게 여행 잘했어! 최고!” ',
            ans2: '"운전은 누구한테 배운 거야? 코너를 정말 부드럽게 잘 돌더라 너무 편해서 침대인 줄?”',
        },
        {
            no: 9,
            question: `다음 장소로 이동 중 우연히 친구가 평소 좋아하던 캐릭터샵 발견! \n하지만 나는 별로 관심이 없는데...?`,
            ans1: '"같이 하는 게 여행이지~ 나도 가자!" 친구와 같이 들어가서 구경한다. ',
            ans2: '"나는 먼저 가 있을게. 천천히 보고 와~" 효율적으로 각자의 시간을 활용한다. ',
        },
        {
            no: 10,
            question: `너무 가고 싶었던 여행지 대박 초특가 ! \n하지만 출발 날짜는 당장 일주일뒤 .. 음 어쩌지?`,
            ans1: '아무런 준비 없이 떠나는 여행은 불안한데 .. 아쉽지만 포기할까? ',
            ans2: '두번 다시 없을 기회 ! 고민없이 떠나자 ! ',
        },
        {
            no: 11,
            question: `꿈에 그리던 여행지 도착! 도착하자마자 나는 무엇을 하고 있을까?`,
            ans1: '"일단 숙소 체크인 먼저!”호텔로 이동 후 짐을 풀고 계획했던 다음 장소로 간다. ',
            ans2: '"상상하던 것보다 더 좋잖아 ㅠㅠ”눈길 발길 닿는 대로 GO! 일정은 나중에 수정하지 뭐~',
        },
        {
            no: 12,
            question: `금강산도 식후경! \n슬슬 배가 고플 시간 여행에는 맛있는 음식도 중요한데, 나의 선택은?`,
            ans1: '"여기가 평점 4.2 맛집! 꼭 가봐야 해! 할인카드도 있지~" 유명 스폿과 맛집 등 미리 알아보고 왔다. ',
            ans2: '"사람 많은 거 보니 맛집인데? 들어가 보자" 그때그때 끌리는 곳으로 향한다. ',
        },
    ],
    answers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    result: '',
    images: [
        { mbti: 'ENFJ', imageUrl: require('asset/images/ENFJ.png').default },
        { mbti: 'ENFP', imageUrl: require('asset/images/ENFP.png').default },
        { mbti: 'ENTJ', imageUrl: require('asset/images/ENTJ.png').default },
        { mbti: 'ENTP', imageUrl: require('asset/images/ENTP.png').default },
        { mbti: 'ESFJ', imageUrl: require('asset/images/ESFJ.png').default },
        { mbti: 'ESFP', imageUrl: require('asset/images/ESFP.png').default },
        { mbti: 'ESTJ', imageUrl: require('asset/images/ESTJ.png').default },
        { mbti: 'ESTP', imageUrl: require('asset/images/ESTP.png').default },
        { mbti: 'INFJ', imageUrl: require('asset/images/INFJ.png').default },
        { mbti: 'INFP', imageUrl: require('asset/images/INFP.png').default },
        { mbti: 'INTJ', imageUrl: require('asset/images/INTJ.png').default },
        { mbti: 'INTP', imageUrl: require('asset/images/INTP.png').default },
        { mbti: 'ISFJ', imageUrl: require('asset/images/ISFJ.png').default },
        { mbti: 'ISFP', imageUrl: require('asset/images/ISFP.png').default },
        { mbti: 'ISTJ', imageUrl: require('asset/images/ISTJ.png').default },
        { mbti: 'ISTP', imageUrl: require('asset/images/ISTP.png').default },
    ],
    setQuestions: data => set(state => ({ questions: data })),
    setAnswers: data => set(state => ({ answers: data })),
    setResult: data => set(state => ({ result: data })),
}));
