import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-section1' style={{color: `white`}}>
            <div style={{margin: `15px`, cursor: `pointer`}}>
                게임 다운로드
            </div>
            <div style={{margin: `15px`, cursor: `pointer`}}>
                라이엇 모바일 컴패니언 앱 다운로드
            </div>
        </div>
        <div className='footer-section2'>
            <div className='footer-logo'>
            </div>
            <div style={{textAlign: `center`, margin: `10px`, width: `650px`}}>
                © 2022 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.
            </div>
            <div style={{textAlign: `center`}}>
                라이엇게임즈코리아 유한회사 서울특별시 강남구 테헤란로 521 30층 (삼성동, 파르나스타워)<br/>
                대표자 : 조혁진 | 대표전화 : 02-0000-0000 | FAX : 02-0000-0000<br/>
                사업자등록번호 : 120-87-00000 |사업자등록번호 : 120-87-00000 |
            </div>
        </div>  
    </div>
  )
}

export default Footer