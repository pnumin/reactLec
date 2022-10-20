import { useState, useEffect} from "react";
export default function MvTimer() {
  let [t , setT ] = useState(null) ;
  
  useEffect(() => {
    const timer = setInterval(() => {
      setT(new Date().toLocaleTimeString()) ;
    }, 1000 ) ;

    return () => {clearInterval(timer)} ;
  } ,  []);

  return  (
    <span>{t}</span>
  );
}