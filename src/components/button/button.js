import React from 'react';
import './button.css';

function Button(props) {
  const [toggled, setToggled] = React.useState(false);
  return (
    <button
        onClick={() => setToggled(!toggled) }
      >
        {toggled ? 'Toggled' : props.children}
      </button>
  )
}

export default Button;
