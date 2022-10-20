//해당 컴포넌트에서만 사용하는 스타일 시트 정의
import './Mvlist.css';

//useState Hook 사용
import { useState } from 'react' ;

function MvItem(probs) {
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
  let [dspFlag, setDspFlag] = useState('none') ;
  // let [dspFlag, setDspFlag] = useState(false) ;

  const upCnt = () => {
    setCnt(++cnt);
    console.log(cnt);
  }

  const handleShow = (e) => {
    e.stopPropagation(); 
    setDspFlag('flex'); 
  }

  const handleShowOut = (e) => { 
    e.stopPropagation(); 
    setDspFlag('none'); 
  }

  return ( 
    <>
    <div className='mainDiv'>
      <ul>
      <li className='mvLi' onMouseEnter={handleShow} onMouseLeave={handleShowOut}>
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
    <div className='mainDiv2' style={{'display': dspFlag}}> 
        <ul>
          <li>영화명 : {myMv.movieNm}</li>
          <li>매출액 : {myMv.salesAmt}</li>
          <li>관객수 : {myMv.audiCnt}</li>
          <li>증감율 : {myMv.salesInten}</li>
        </ul>
    </div>
    </>
  );
}

export default MvItem;
