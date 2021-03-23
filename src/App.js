/* eslint-disable */
import React, { useState } from 'react';//react라이브러리에서 state를 사용
import logo from './logo.svg';
import './App.css';  //CSS

//리액트:웹앱
function App() {
  let posts = "후쿠오카 고기 맛집"
  let [title, title_status] = useState(["남자 봄 코디", "남자 여름 코디", "남자 가을 코디"])
  let [cnt, cnt_status] = useState(1)
  let [repeat1, repeat_status1] = useState(["반복문이란?", "맵이란?"])
  let [repeat2, repeat_status2] = useState(["리액트란?", "장고란?"])
  let [rcnt, rcnt_status] = useState([0, 0])
  let [modal, modal_status] = useState(false)
  let [ui,ui_status]=useState(0)// UI 클릭시 상태 저장을 위해 사용

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
    let arr = [...title] //  [..ArrValue]  ES6딥카피
    arr[0] = "어린이 코트 추천"
    title_status(arr)
  }

  function showModal() {
    modal_status(!modal)
  }

  //리액트 일반적인 반복문
  function repeatFunc() {
    let arr=[]
    let rcnt_deepcopy=[...rcnt]//object,array는 deepCopy해서 사용

    for (let i = 0; i < repeat2.length; i++) {
      rcnt_deepcopy[i]+=1

      arr.push(
        <div className="list">
          <h4 onClick={showModal}>{repeat2[i]}
            <span onClick={e => { rcnt_status(rcnt_deepcopy) }}>👍</span>{rcnt[i]}
          </h4>
          <p>일반 for문 테스트</p>
          <hr />
        </div>
      )
    }
    return (
      arr
    );
  }

  /* 1. return (<div></div>) 안에는 한쌍의 엘리먼트만 허용 
   *    그래서 state변동이 일어나면 그 한쌍의 엘리먼트가 갱신된다
   * 2. {jsx내용}
  */
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      <button style={{display:"none"}} onClick={e => { title_status(["여자 봄 코디", "남자 여름 코디", "남자 가을 코디"]) }}>여성메뉴</button>
      <button style={{display:"none"}} onClick={changeTitle}>어린이메뉴</button>
      
      {title.map((e,i)=>{
        return (
          <div className="list">
          <h4 onClick={()=>{ui_status(i)}}>{e} <span onClick={e => { cnt_status(cnt + 1) }}>👍</span>{cnt}</h4>
          <p>동적인 ui_State 테스트</p>
          <hr />
        </div>
        );  
      })}

      {repeat1.map((e,i) => {
        //map을 이용한 반복문
        return (
          <div className="list">
            <h4 onClick={showModal}>{e}</h4>
            <p>for문 맵 테스트입니다</p>
            <hr />
          </div>
        );
      })}

      {repeatFunc()}
      
      <button onClick={()=>{modal_status(!modal)}}>열기</button>
      {/* <button onClick={()=>{ui_status(0)}}>1번버튼</button>
      <button onClick={()=>{ui_status(1)}}>2번버튼</button>
      <button onClick={()=>{ui_status(2)}}>3번버튼</button> */}

      {
        //prop전송시 전송할이름={state명} (부모->자식 컴포넌트)  
        modal === true ?
          <Modal title_props={title} ui_props={ui}/> :
          null //텅빈 html이란 뜻, react는 if문이 아닌 삼항연산자사용 , modal은 app의 자식컴포넌트 
      }

    </div>
  );
}

/*Component문법. 1.첫글자대문자*/
/*적절한사용:반복되는 HTML,자주변경되는 HTML,페이지이동*/
function Modal(props) {

  return (
    <div className="modal">
      <h2>{props.title_props[props.ui_props]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
