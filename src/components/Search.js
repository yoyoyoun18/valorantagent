import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';


function Search() {
  return (
    <div>
        <FloatingLabel
        controlId="floatingInput"
        label="검색어를 입력하세요."
        className="mb-3 search-input"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
    </div>
  )
}

export default Search