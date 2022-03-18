# weareneverthat

<img width="789" alt="스크린샷 2022-01-07 오후 1 16 57" src="https://user-images.githubusercontent.com/90169703/148521986-5e50c8a5-a59d-444f-adce-863c7257613b.png">

**🔗  Repository Links**

[back-end](https://github.com/goomg93/fullstack3-1st-weareneverthat-backend)

[front-end](https://github.com/goomg93/fullstack3-1st-weareneverthat-frontend)

---

## 📜 서비스 내용

온라인 쇼핑몰 thisisneverthat을 모티브로 한 웹페이지 제작 프로젝트

- 메인페이지
- 리스트페이지
- 디테일페이지
- top 20 페이지

## 🛠 기술 스택

- Front : react.js, Sass
- Back : node.js, express, MYSQL, AWS

## 🖥 개발 내용

### 데이터베이스 모델링

 ![image](https://user-images.githubusercontent.com/87692499/148669964-0b122018-4261-4944-9015-8f63ac483735.png)

### 디테일 페이지 API

- 리스트 페이지에서 디테일 페이지로 넘어올때 상품id, color 를 parameter로 전달 받아 api 호출
    - 공통적인 상품정보 전달
    - color에 따라 상품 이미지 전달
    - 디테일 페이지에서 사이즈 선택 시 사이즈별 수량 상세 정보 전달

### 로그인 / 회원가입 UI

- input 입력 조건을 설정하여 입력 조건에 따라 오류메세지 알림 기능
- jwt를 활용하여 로그인 기능 (세션스토리지에 저장)

### nav / footer UI

- nav 컴포넌트에 슬라이트 메뉴바 구현 (반응형 고려)
- 장바구니 모달창 슬라이드 기능
- 페이지 전환시 clean up useEffect로 side Effect 정리

## 💡 성장 경험

### 협업

처음 경험해보는 팀 프로젝트인 만큼 협업이라는 것이 쉽지 않음을 느꼈습니다.

소통은 물론이고 협업 툴에 대해서 많이 익숙해질 필요가 있음을 느꼈습니다.

github를 이용해서 공용 repository를 사용하였습니다.

또한 매일 아침 standup meeting을 진행하며 scrum 방식의 일정 관리를 경험해 볼 수 있었습니다.

### 배포 경험

AWS EC2/RDS를 이용해서 배포를 해보는 경험을 해보았습니다.

아직은 개념이나 흐름이 익숙하지는 않지만 처음 배포를 해본 경험자체가 개발자로써 시작을 스스로에게

느끼게 해준 경험이었습니다.

### structure 설계의 중요성

프로젝트를 진행하면서 database의 모델링이 정말 많이 수정되었습니다.

생각했던 기능을 구현하기 위해 잘못된 설계로 인해서 수정을 반복하였는데, 처음에 무작정 개발을 하는 것보다

방향과 구조를 설계하고 진행하는 것이 중요하다는것을 느낄 수 있었던 프로젝트였습니다.

## 👀 서비스 화면

링크 - https://www.youtube.com/watch?v=fBO8YbO596U](https://www.youtube.com/watch?v=fBO8YbO596U)
