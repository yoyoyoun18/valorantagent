import {React, useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addIndex, changeIndex } from '../store.js'
import { useNavigate } from 'react-router-dom';

function Omen() {
  let currentIndex = useSelector((state)=>{ return state.currentIndex })
  let dispatch = useDispatch();
  let navigate = useNavigate();

    let champion = ['제트', '레이즈', '브리치', '오멘', '브림스톤', '피닉스', '세이지'];
    let [current, setCurrent] = useState(0);
    let [champions, setChampions] = useState([{

    }]);
    let [count, setCount] = useState(0);
    let [style, setStyle] = useState({
        top: `-${ 100 }px`
      });
    let [currentSkill, setCurrentSkill] = useState(1);
    let [videoUrl, setVideoUrl] = useState('https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4')
    let possesion = '';
    let details = '';
    let qName = '';
    let qDetails = '';
    let eName = '';
    let eDetails = '';
    let cName = '';
    let cDetails = '';
    let xName = '';
    let xDetails = '';
    const url1 = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4';
    const url2 = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4'
    const url3 = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4'
    const url4 = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4'

    useEffect(() => {
      axios.get('https://gist.githubusercontent.com/yoyoyoun18/35a37602a5cba3f76fbbca9313a8eaf3/raw/31faf424b250bb02d2bbf5a6a2e111802d10ac82/champ.json')
      .then((result)=>{
          setChampions(result.data);
        })
        .catch(()=>{
          console.log('데이터 불러오기 실패');
        })
  }, []); 

    if(champions.length > 3) {
      possesion = champions[currentIndex.index].omen[0].possesion;
      
      details = champions[currentIndex.index].omen[0].details;
      qName = champions[currentIndex.index].omen[0].q[0].name;
      qDetails = champions[currentIndex.index].omen[0].q[0].details;
      eName = champions[currentIndex.index].omen[0].e[0].name;
      eDetails = champions[currentIndex.index].omen[0].e[0].details;
      cName = champions[currentIndex.index].omen[0].c[0].name;
      cDetails = champions[currentIndex.index].omen[0].c[0].details;
      xName = champions[currentIndex.index].omen[0].x[0].name;
      xDetails = champions[currentIndex.index].omen[0].x[0].details;
    }

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

    useEffect(() => {
      moveSlide(currentIndex.index)
    }, [])

    
  return (
    <div className='champ-main' draggable={false}>
      <div className='main-bg'>
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
                    navigate(`/champion${i+1}`)
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
        </div>
        <div className='image-container'>
          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png" />
        </div>
        <div style={{width: `302px`, height: `auto`, position: `relative`, top: `-1482px`, left: `1200px`, color: `white`}}>
          // 역할
          <h2 style={{fontSize: "3rem"}}>
            {
              `
              ${possesion}`
            }
          </h2>
          // 배경<br></br><br></br>
          <p>
            {
              `
              ${details}
              `
            }
          </p>
        </div>
        <div className='champ-details'>
          <div style={{width: "700px", height:"480px", textAlign: "center"}}>
          <div style={{fontWeight: "1000", fontSize: "3rem", textAlign: "left"}}>특수스킬</div>
          <div className='skill-div'>
          <div onClick={()=>{setCurrentSkill(1); setVideoUrl(url1);}} className="skill-box">Q</div>
            <div onClick={()=>{setCurrentSkill(2); setVideoUrl(url2);}} className="skill-box">E</div>
            <div onClick={()=>{setCurrentSkill(3); setVideoUrl(url3);}} className="skill-box">C</div>
            <div onClick={()=>{setCurrentSkill(4); setVideoUrl(url4);}} className="skill-box">X</div>
          </div>
          {
            currentSkill === 1 
            ? <div className='skill-details'>
              <div style={{fontWeight: "bold", fontSize: "1.5rem"}}>
                {`Q - ${qName}`}
              </div>
              <p>{`${qDetails}`}</p>
              </div>
            : ( currentSkill === 2 )
            ? <div className='skill-details'>
            <div style={{fontWeight: "bold", fontSize: "1.5rem"}}>
              {`E - ${eName}`}
            </div>
            <p>{`${eDetails}`}</p>
            </div>
            : ( currentSkill === 3 )
            ? <div className='skill-details'>
            <div style={{fontWeight: "bold", fontSize: "1.5rem"}}>
              {`C - ${cName}`}
            </div>
            <p>{`${cDetails}`}</p>
            </div>
            : ( currentSkill === 4 )
            ? <div className='skill-details'>
            <div style={{fontWeight: "bold", fontSize: "1.5rem"}}>
              {`X - ${xName}`}
            </div>
            <p>{`${xDetails}`}</p>
            </div>
            : null
          }
          </div>
          <div style={{width: "700px", height:"480px", marginLeft:"50px"}}>
            <video autoPlay={true} muted={true} loop={true} src={videoUrl} style={{width:"700px"}}>
            </video>
          </div>
        </div>
    </div>
  )
}

export default Omen