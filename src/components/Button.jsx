import React from 'react'

// text를 인자로 받아와서 {} 안에 넣고 동적으로 추가
const Button = ({text, color}) => {
// const phone = ["apple", "galaxy"];
  return (
    <>
        <button type="button" className={`text-white rounded py-1 px-2 ${color}`}>
            {text} 
        </button>
        {/* <ul>
            {phone.map((item) => (
                <li>{item}</li>
            ))}
        </ul> */}
    </>
  );
};

export default Button