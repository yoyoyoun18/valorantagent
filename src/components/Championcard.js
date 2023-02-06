import React from 'react'

function Championcard(props) {
  return (
    <div className={'card-sm ' + props.size}  >
        {props.name}
    </div>
  )
}

// axios로 json 파일 불러온 후 props로 받아온 id를 이용하여 포지션을 출력해보자

export default Championcard