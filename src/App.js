/* eslint-disable */
import React, { useState } from 'react';//react라이브러리에서 state를 사용
import logo from './logo.svg';
import './App.css';  //CSS

//리액트:웹앱
function App() {
  let posts = "후쿠오카 고기 맛집"
  let [title, title_status] = useState(["남자 봄 코디", "남자 여름 코디", "남자 가을 코디"])
  let [cnt, cnt_status] = useState(1) 
  /*
  1.리액트데이터저장방식 
  2. 반환형 array [값,상태변경함수] , ES6신문법으로 변수저장 
  3.사용이유? 변경시 새로고침없이 html재랜더링
  4.title_status([]) 매개변수가 통채로 대체되는 데이터.(갈아치움) 
  */

  //State의 요소 값을 하나만 변경하고싶을때, 배열을 딥카피 후 변경 후 넣어줌.
  function changeTitle(params) {
    //Object , Array 을 복사할땐  Deepcopy를 사용 해야한다, sallowCopy를 하면 값을 공유하게 됨
    //DeepCopy, 독립적인 값을 가지는 복사
    let arr= [...title] //  [..ArrValue]  ES6딥카피
    arr[0]="어린이 코트 추천"
    title_status(arr)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      <button onClick={e=>{title_status(["여자 봄 코디", "남자 여름 코디", "남자 가을 코디"])}}>여성메뉴</button>
      <button onClick={changeTitle}>어린이메뉴</button>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>3월 22일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{title[1]} <span onClick={e => { cnt_status(cnt + 1) }}>👍</span>{cnt}</h4>
        <p>3월 22일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>3월 22일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
