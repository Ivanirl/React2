import { useState } from 'react';

function ToDo(props) {
    function StiffHandler() {
        console.log('Clicked ' + props.text)
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={StiffHandler}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
