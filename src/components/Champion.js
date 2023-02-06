import {React, useState, useEffect, useRef} from 'react'
import Championcard from './Championcard'
import Championcardbig from './Championcardbig';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addIndex, changeIndex } from '../store.js'
import { useNavigate } from 'react-router-dom';


function Champion() {
    let currentIndex = useSelector((state)=>{ return state.currentIndex })
    let dispatch = useDispatch();
    let navigate = useNavigate();
    
    console.log(currentIndex)

    let champion = ['제트', '레이즈', '브리치', '오멘', '브림스톤', '피닉스', '세이지'];
    let [champions, setChampions] = useState([{

    }]);
    let [current, setCurrent] = useState(0);
    let [count, setCount] = useState(0);
    let [style, setStyle] = useState({
        top: "-90px"
      });
    const divRef = useRef();  

    useEffect(() => {
      axios.get('https://gist.githubusercontent.com/yoyoyoun18/1130d90eb34d2ebb4c7bf975cab38a56/raw/0170d0a7327707839b703f9349f14ceb78735b14/champions.json')
      .then((result)=>{
          setChampions(result.data);
        })
        .catch(()=>{
          console.log('데이터 불러오기 실패');
        })
        console.log(champions[0].details);
  }, []); 

      const moveSlide = (i) => {
        let nextIndex = current + i;

        if (nextIndex > champion.length - 1 ) {
            nextIndex = 0;
        }
    
        setCurrent(nextIndex);
      };
      useEffect(() => {
        setStyle({ top: `-${current * 120 }px` });
    }, [current]);  
    
  return (
    <div className='champ-main' draggable={false}>
        <div className='champ-btn' onClick={()=>{ moveSlide(-1) }}>
            <div style={{color: 'white', opacity: '1'}}>
            ▲
            </div>
        </div>
        <div className='champ-btn' onClick={()=>{ moveSlide(1) }}>
            <div style={{color: 'white', opacity: '1'}}>
            ▼
            </div>
        </div>
        <div className='champ-container' style={style}>
          {            
              champion.map((a, i)=>{
                return <div key={i} style={{width: `400px`}}>
                  <span style={{fontSize: `1rem`, float: `left`}}>{
                  i+1
                  }</span>
                  <div onClick={()=>{
                    moveSlide(i - current);
                    dispatch(changeIndex(i));
                    navigate(`champion${i+1}`)
                  }}
                  className='champ-name'
                  style={{cursor: `pointer`}}
                  >
                    {a}
                  </div>
                </div>;
              })            
          }
          
        </div>
        <div className='image-container'>
          <img src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png" />
        </div>
        <div style={{width: `301px`, height: `auto`, position: `relative`, top: `-1076px`, left: `1300px`, color: `white`}}>
          // 인원 확인하기<br></br><br></br>

          다양한 싸움꾼, 전략가, 사냥꾼과 함께 여러 방법으로 스파이크를 설치하고 적과 맞서 싸우세요.
        </div>
    </div>
  )
}

export default Champion