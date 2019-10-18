import React from "react";
import {connect} from 'react-redux';

const EditExpensePage = props => {
  // console.log(props);
  return (
    <div>
      <button onClick={e => props.history.goBack()}>Back</button>
      <p> Editing the expense : {props.match.params.id} </p>
    </div>
  );
};

export default connect()(EditExpensePage);
