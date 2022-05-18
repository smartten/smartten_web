import React from 'react'

function IncreasingNumber({title, number, }) {

    let numberStart = 0
    setInterval(() => {
        numberStart+=1
    },10);
    
  return (
    <div>
        <i class="la la-check-circle"></i>
        <h3><span class="counter">{numberStart}</span>+</h3>
        <h5>Project Complete</h5>
	</div>
  )
}

export default IncreasingNumber