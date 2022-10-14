//해당 컴포넌트에서만 사용하는 스타일 시트 정의
import './My06.css';

function MyCom() {
  //object 생성
  let obj = new Object();
  //console.log('object 생성 1=>', obj);

  //object 생성2
  let obj2 = {};
  //console.log('object 생성 2=>', obj2);

  //object 생성3
  let mv = {
    "rnum": 1,
    "rank": 1,
    "rankInten": 0,
    "rankOldAndNew": "OLD",
    "movieCd": "20215601",
    "movieNm": "공조2: 인터내셔날",
    "openDt": "2022-09-07",
    "salesAmt": 186527512,
    "salesShare": 23.2,
    "salesInten": -645733705,
    "salesChange": "-77.6",
    "salesAcc": "68000199650",
    "audiCnt": "18989",
    "audiInten": "-61139",
    "audiChange": "-76.3",
    "audiAcc": "6624892",
    "scrnCnt": "979",
    "showCnt": "3048"
  }

  //console.log('object 생성 3=>', mv);
  //console.log('영화명(.) :', mv.movieNm);
  //console.log('영화명([]) :', mv['movieNm']);

  //object 순회1
  for (let k in mv) {
    //console.log(k, '=>', mv[k]) ;
    if (k === "movieNm") break
  }

  console.log('=====')
  for (let [k, v] of Object.entries(mv)) {
    //console.log(k, '=>', v) ;
    if (k === "movieNm") break
  }

  //얕은 복사 
  obj = mv;
  //console.log("얕은 복사 :", obj) ;

  //깊은 복사
  obj2 = { ...mv };
  //console.log("깊은 복사(전개연산자...사용) :", obj2) ;

  //mv 오브젝트 내용 변경
  mv.movieNm = '공조2';

  console.log("얕은 복사 :", obj);
  console.log("깊은 복사(전개연산자...사용) :", obj2);

  //jsx에 들어갈 내용 생성 
  let lis = [] ;
  for(let [k, v] of Object.entries(mv)) {
    lis.push(
    <li key={k}>
      <span className='mvLiK'>{k}</span> 
      <span className='mvLiV'>{v}</span>
    </li>) ;
  }

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
