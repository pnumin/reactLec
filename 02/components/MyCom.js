//해당 컴포넌트에서만 사용하는 스타일 시트 정의
import './My08.css';

//useState Hook 사용
import { useState } from 'react' ;

function MyCom(probs) {
  const myMv = {...probs.item} ;
  // 순위	 : rank
  // 영화명	: movieNm
  // 매출액	: salesAmt
  // 관객수	: audiCnt
  // 관객수 증감 : audiInten
  // 영화코드 : movieCd
  const keys = ['rank', 'movieNm'] ;
  const lis = keys.map((k) => 
    <span key={k + myMv['movieCd']} className= {k}>{myMv[k]}</span>
  ) ;

  //state 변수
  let [cnt, setCnt] = useState(0) ;

  const upCnt = () => {
    setCnt(cnt++);
    console.log(cnt);
  }

  return (
    <div className='mainDiv'>
      <ul>
      <li className='mvLi'>
        {lis}
      </li>   
      </ul>
      <div>
        {/* <span onClick={()=>{
          cnt++;
          console.log(cnt)
        }}>❤️</span> */}
        <span onClick={upCnt}>❤️</span>
        <span>{cnt}</span>
      </div>
    </div>
  );
}

export default MyCom;
