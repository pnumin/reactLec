//해당 컴포넌트에서만 사용하는 스타일 시트 정의
import './My06.css';

function MyCom(probs) {
  const myMv = {...probs.item} ;
  

  // map()함수 : 배열의 항목을 가져와서 새로운 배열 생성
  // let arr = [1,2,3] ;
  // arr = arr.map((item) => item * 2)
  // console.log(arr)

  
  //jsx에 들어갈 내용 생성 
  //map() 함수를 이용해서 배열 생성 
  const lis = Object.entries(myMv).map((item) => 
    (
    <li key={item[0]}>
      <span className='mvLiK'>{item[0]}</span> 
      <span className='mvLiV'>{item[1]}</span>
    </li>)
  )
  //console.log(lis)
  return (
    <>
      <h1>Object 타입 연습</h1>
      <ul>
        {lis}
      </ul>
    </>
  );
}

export default MyCom;
