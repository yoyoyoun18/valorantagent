import {React, useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addIndex, changeIndex } from '../store.js'
import { useNavigate } from 'react-router-dom';

function Sage() {
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
    let [videoUrl, setVideoUrl] = useState('https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4')
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
    const url1 = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4';
    const url2 = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4'
    const url3 = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4'
    const url4 = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4'

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
      possesion = champions[currentIndex.index].jett[0].possesion;
      
      details = champions[currentIndex.index].jett[0].details;
      qName = champions[currentIndex.index].jett[0].q[0].name;
      qDetails = champions[currentIndex.index].jett[0].q[0].details;
      eName = champions[currentIndex.index].jett[0].e[0].name;
      eDetails = champions[currentIndex.index].jett[0].e[0].details;
      cName = champions[currentIndex.index].jett[0].c[0].name;
      cDetails = champions[currentIndex.index].jett[0].c[0].details;
      xName = champions[currentIndex.index].jett[0].x[0].name;
      xDetails = champions[currentIndex.index].jett[0].x[0].details;
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
          <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png" />
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

export default Sage