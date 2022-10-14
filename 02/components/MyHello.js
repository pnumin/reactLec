import './My.css';

//export default인 경우 function 앞에 넣을 수 있음
export default function MyHello(probs) { 
  //이부분이 함수의 내용을 작성하는 부분
  //console.log(probs.name);
  //console.log(probs['name']);
  console.log(probs);

  return ( 
    //div -> h1, h2
    //JSX에서는 class선택자는 반드시 className으로 만들어야함
    <div className='divHello'>
      <h1>
        Hello React!!       
      </h1>
      <h2>
        <span className='spanHello'>{probs.name}</span>
        {/* 조건부 랜더링 */}
        <span className='numHello'>{probs.num % 2 === 1 ? '홀수' : '짝수'}</span>
        <span className='spanHello'>{probs.ck || '❤️'}</span>
        <span className='numHello'>{probs.ck ?'👍' : '👎' }</span>
      </h2>
    </div>
  );
}