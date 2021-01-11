import React from "react";
import "./AddItem.css";
import SubjectIcon from '@material-ui/icons/Subject';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

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

function AddItem({ handleEnter, value, handleValue }) {

  return (
    <div className="AddItem">
      <ValidationTextField color="secondary" value={value}
        onChange={handleValue} onKeyPress={handleEnter}
        id="outlined-basic" label="Add a task..." variant="outlined" />
    </div>
  );
}

export default AddItem;