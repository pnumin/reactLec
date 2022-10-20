import mv from '../jsonData/mvInfo.json';
import './Mv.css';
import MvTimer from './MvTimer';

//useState Hook
import { useState, useEffect, useRef } from 'react' ;

function MvInfo() {
  //json 데이터 가져오기
  const mvinfo = mv.movieInfoResult.movieInfo;
  //console.log(mvinfo);

  //화면에 출력할 정보를 오브젝트 생성
  let myinfo = {};
  const key1 = ['movieNm', 'movieCd', 'openDt', 'prdtStatNm', 'showTm',];
  const key2 = ['audits', 'nations', 'directors', 'genres', 'companys'];

  const keys = {
    'movieNm': '영화명',
    'movieCd': '영화코드',
    'openDt': '개봉일자',
    'prdtStatNm': '제작상태',
    'showTm': '상영시간',
    'audits': '관람등급',
    'nations': '제작국가',
    'directors': '감독',
    'genres': '장르',
    'companys': '배급사',
  }

  //key1에 해당하는 값추출
  for (let k of key1) {
    myinfo[keys[k]] = mvinfo[k];
  }

  //key2에 해당하는 값추출 : 배열에서 추출
  for (let k of key2) {
    switch (k) {
      case 'audits':
        myinfo[keys[k]] = mvinfo[k].map((item) => item.watchGradeNm);
        break;
      case 'nations':
        myinfo[keys[k]] = mvinfo[k].map((item) => item.nationNm);
        break;
      case 'directors':
        myinfo[keys[k]] = mvinfo[k].map((item) => item.peopleNm);
        break;
      case 'genres':
        myinfo[keys[k]] = mvinfo[k].map((item) => item.genreNm);
        break;
      default:
        myinfo[keys[k]] = mvinfo[k].filter((item) => item.companyPartNm === '배급사');
        myinfo[keys[k]] = myinfo[keys[k]].map((item) => item.companyNm);
        break;
    }
  }

  //console.log(myinfo);
  //화면에 출력할 내용을 JSX로 만들기
  let lis = [];

  for (let [k, v] of Object.entries(myinfo)) {
    lis.push(<li key={myinfo.movieCd + k} className='infoLi'>
      <span className='infoSpan1'>{k}</span>
      <span className='infoSpan2'>{v}</span>
    </li>);
  }

  //count 제어
  let cntUp = 0 ;
  let cntDown = 0 ;
  
  //state변수
  let [cntUpSt, setCntUpSt] = useState(0) ;
  let [cntDownSt, setCntDownSt] = useState(0) ;
  let [flag, setFalg] = useState(true) ;
  let [flag2, setFalg2] = useState('none') ;
  let [txt1, setTxt1] = useState([]) ;

  //ref변수
  let cntRef = useRef(0) ;
  let txtRef = useRef()  ;

  //이벤트 처리
  const handleUp = () => {
    //console.log('local변수 :', ++cntUp) ;
    
    //state변수 증가
    setCntUpSt(++cntUpSt);
    console.log('state변수(좋아요) : ', cntUpSt) ;
    cntRef.current = cntRef.current + 1 ;

  };

  const handleDown = () => {
    //console.log(++cntDown) ;

    //state변수 증가
    setCntDownSt(++cntDownSt);
    console.log('state변수(싫어요) : ', cntDownSt) ;
    ++cntRef.current;
  };

  //시계아이콘을 클릭하면 flag변수 변경  
  const handleTimer = () => {
    setFalg(!flag) ;
    setFalg2(flag2 === 'none'? 'inline-flex' : 'none') ;
    console.log(flag2)
    
    console.log(cntRef.current) ;
  };

  //form submit 
  const handleSubmit = (e) => {
    e.preventDefault() ;
    console.log(txtRef.current.value);
    setTxt1([<li key={txtRef.current.value} className='refLi'>
      {txtRef.current.value}
      </li>, ...txt1]) ;
  }


  //useEffect Hook: 랜더링시 매번 발생
  useEffect(() => {
    console.log('useEffect 랜더링 발생시 계속 수행 ') ;
  }) ;

  //useEffect Hook : 컴포넌트 생성시 한번 발생
  useEffect(() => {
    console.log('useEffect 컴포넌트 생성시 한번 발생 ') ;
    console.log('ref cnt :' , cntRef.current) ;

    txtRef.current.focus() ;
  }, []) ;

  //useEffect Hook : 관련state변수가 변경될때 실행
  useEffect(() => {
    console.log('useEffect 관련state변수(cntUpSt)가 변경될때 실행 ') ;
  }, [cntUpSt]) ;

  return (
    <>
      <div className='mvList'>
        <h1 className='infoH1'>영화상세</h1>
        <form className='mvForm' onSubmit={handleSubmit}>
          <input type='text' ref={txtRef} placeholder='댓글을 입력하세요.' />
          <button type='submit'>등록</button>
          <button type='reset'>취소</button>
        </form>
        <div className='mvFormList'>
          <ul className='infoUl'>
          {txt1}
          </ul>
        </div>
        <ul className='infoUl'>
          {lis}
        </ul> 
      </div>
      <div className='mvList2'>
        <div onClick={handleUp}>👍</div>
        {/* <div onClick={ () => console(++cntUp) }>👍</div> */}
        <div>{cntUpSt}</div>
        <div onClick={handleDown}>👎</div>
        <div>{cntDownSt}</div>
        <div onClick={handleTimer}>⏰</div>
      </div>
      {/* <div className='mvList3'>{flag && <MvTimer />}</div> */}
      <div className='mvList3' style={{'display':flag2}}>
        <MvTimer  />
      </div>
      
    
      
    </>
  );
}

export default MvInfo;