import React from 'react';
import './YoutubeRecastly.css';

function YoutubeRecastly() {
  const Submit = () => {
    console.log('검색');
  };

  return (
    <div>
      <input type="text" placeholder="검섹어 입력" className="input01" />
      <button onClick={Submit} className="button01">
        검색
      </button>
    </div>
  );
}

export default YoutubeRecastly;
