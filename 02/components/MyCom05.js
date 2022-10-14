//해당 컴포넌트에서만 사용하는 스타일 시트 정의
import style from './My.module.css';

//export default인 경우 function 앞에 넣을 수 있음
function MyCom() { 
  return ( 
    <>
      <h1>스타일 변경예제</h1>
      {/* 각 컴포넌트에 서로 다른 스타일 시트 적용 */}
      <p className={style.p1}>스타일 시트</p>
    </>
  );
}

export default MyCom;
