import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MvInfoMain() {
  const mvcd = useParams().mvcd;

  const [mv, setMv] = useState() ;
  
  useEffect(() => {
    let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=' + mvcd ;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
      }) 
      .catch((err) => console.log(err))
  }, []);
  
    
  return (
    <>
      <h1>
      MvInfoMain
      </h1>
      {mvcd}

      <button><Link to='/'>홈으로</Link></button>
    </>
  );
}