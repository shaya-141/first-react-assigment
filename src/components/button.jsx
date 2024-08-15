import React from 'react'




function Button({ background, text, data, fun }) {

  return (
    
    <button
      data-custom={data}
      className={`${background} m-4 text-white w-32 hover:border-white`}
      onClick={fun}
    >
      {text}
    </button>
  );
}





export default Button