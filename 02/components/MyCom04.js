import './MyCom04.css';

//export default인 경우 function 앞에 넣을 수 있음
function MyCom() { 
  //스타일 object 변수를 만들어서 사용
  const styleObj = {
    color:'white', 
    backgroundColor : 'green',
    padding : '5px',
    textAlign : 'center',
  };

  return ( 
    <>
      <h1>스타일 변경예제</h1>
      {/* 인라인 스타일은 object 타입으로  
        바깥 {}는 JSX의 표현식을 위한 {}이고 
        안쪽 {}는 자바스크립트의 object 타입 표시 
      */}
      <p style={{
        color:'white', 
        backgroundColor : 'black'
      }}>
        리액트에서 스타일 변경 - 인라인형식으로 
      </p>

      {/* 스타일 object 변수 사용 */}
      <p style={styleObj}>
        리액트에서 스타일 변경 - 인라인형식으로 변수 사용
      </p>

      {/* CSS적용 */}
      <p>
        리액트에서 스타일 변경 - CSS 파일 적용
      </p>

    </>
  );
}

export default MyCom;
