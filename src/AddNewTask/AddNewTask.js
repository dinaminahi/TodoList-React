import React from "react";
import "./AddNewTask.css";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#525252',
      borderWidth: 1,
    },
    '& input:valid:hover + fieldset': {
      borderColor: '#525252',
      borderWidth: 1
    },
    '& label': {
      color: '#525252'
    },
  },
})(TextField);

function AddNewTask({ handleEnter, value, handleValue }) {

  return (
    <div className="AddNewTask">
      <ValidationTextField color="secondary" value={value}
        onChange={handleValue} onKeyPress={handleEnter}
        id="outlined-basic" label="Add a task..." variant="outlined" />
    </div>
  );
}

export default AddNewTask;