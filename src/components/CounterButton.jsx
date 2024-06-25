import React from 'react'

const CounterButton = ({step, sign, onClick}) => {
    //logic

    // type : increase / decrease

    // view(자바스크립트 코드는 {}안에서)
  return (
    <button type="button" className='bg-blue-800 text-white px-1'
    onClick={() => onClick(sign)}>
            {sign === 'increase' ? '+' : '-'}{step}
    </button>
  )
}

export default CounterButton