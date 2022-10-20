import MvItem from './MvItem';
import mvboxoffice from '../jsonData/mvboxoffice.json';
import './Mvlist.css' ;
import { useState, useRef, useEffect } from 'react';

export default function MvList() {
  //object 
  let mv = mvboxoffice.boxOfficeResult.dailyBoxOfficeList;
  //let mvs = mv.map((m) => <MvItem key={m.movieCd} item={m} />);

  //state 변수 
  let [mvs, setMvs] = useState([]) ;

  //ref변수 선언
  const txtRef = useRef() ;

  //useEffect
  useEffect(() => {
    txtRef.current.focus() ;

    setMvs(mv.map((m) => <MvItem key={m.movieCd} item={m} />)) ;
  } , []) ;


  return (
    <>
      <h1>박스오피스</h1>
      <form className='mvForm'>
        <input type='text' ref={txtRef} name='txt1' placeholder='영화명을 입력하세요.' />
        <button type='submit'>등록</button>
        <button type='reset'>취소</button>
      </form>
      {mvs}


    </>
  );
}