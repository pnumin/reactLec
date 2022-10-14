import './My.css';
import MyHello from './MyHello';

//export default인 경우 function 앞에 넣을 수 있음
function MyCom() { 
  return ( 
    <>
    {/* 속성값을 만들수 있음 => 
        MyHello 컴포넌트에서 probs 매개변수(object type)에 전달 */}
      <MyHello name='PNU' num='1' ck='' />
      <MyHello name='K-digital' num='2' ck='1'/>
      <MyHello name='부산대학교' num='3' ck='' />
    </>
  );
}

export default MyCom;
