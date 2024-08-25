# Tour of Heroes
[Angular Tutorial - 히어로들의 여행](https://www.angular.kr/tutorial/tour-of-heroes/toh-pt6) 코드 수행

## 기존 튜토리얼과의 차이점
1. 호환성 문제로 인해, [`angular-in-memory-web-api`](https://www.npmjs.com/package/angular-in-memory-web-api) 대신 [`json-server`](https://www.npmjs.com/package/json-server)를 사용
    - 검색(Search) 기능을 제공하지 않아, 일부 기능에 오류가 있을 수 있다.
2. `NgModule` 대신, `StandAlone Component` 사용
    - 현재 Angular CLI는 워크스페이스 생성(`ng new`) 시, StandAlone 컴포넌트와 Router를  기본으로 제공한다.
