## 일렉트론으로 개발 시작하기

electron과 react로 간단하게 Firebase를 이용해서 채팅 앱을 만들어보는 샘플 예제입니다.

electron와 react의 개발 환경 설정을 위해 [react-electron-boilerplate](https://github.com/chentsulin/electron-react-boilerplate.git) 코드를 이용하였습니다.

## 실행

실행은 크게 2가지의 경우로 나뉩니다.

- Hot Module Reload(HMR): 개발 시

파일들을 실시간으로 업데이트 해 줍니다. Webpack의 dev-server 모듈과 HMR 모듈을 이용해서 업데이트 됩니다. JS 파일 업데이트 시에는 상황에 따라 새로고침을 해 주어야 하며(F5 / Ctrl+R), Stylesheet 파일 업데이트 시에는 새로고침 하지 않고 대개 자동으로 업데이트 됩니다. 이에 관해서는 HMR과 관련된 문서를 참조해주세요.

```bash
$ npm run dev
```

- Build

파일들을 빌드시킵니다. 이 경우 파일들이 실시간으로 업데이트 되지 않습니다.

```bash
$ npm run build
$ npm start
```

_2017년 3월 30일 Electron 세미나 자료, written by Kesus Kim_