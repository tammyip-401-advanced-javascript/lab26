import React from 'react';

//if condition is true, renden the children.
//else render nothing

function If(props) {

  if (props.condition)
    return <>{props.children}</>
  else
    return null;
}

export default If;