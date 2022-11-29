import React, { useEffect, useState, useRef } from 'react'
import jsonfile from '../champion.json';


function Searchrank() {

    let [ranking,setRanking] = useState(['바이퍼', '사이퍼', '브림스톤']);
    let [count, setCount] = useState(0);
    localStorage.setItem('data', jsonfile)


    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

      useInterval(() => {
        count > 2 ? setCount(0) : setCount(count++);
      }, 1000)

  return (
    <div className='container-rank'>
        <span style={{ margin: '20px', fontSize: '10px' }}>실시간 검색어</span>
        <div className='container-rank-grade'>
            <div style={{marginLeft: '10px', marginRight: '30px', color: 'black'}}>1</div>
            <div style={{color: 'black'}}>{ranking[count]}</div>
        </div>
    </div>
  )
}

export default Searchrank