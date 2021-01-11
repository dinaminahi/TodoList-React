import React, { useState } from "react";
import './Item.css'
import { withStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';


const CustomCheckbox = withStyles({
    root: {
        color: deepOrange[400],
        '&$checked': {
            color: deepOrange[500],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


function Item({ task, onDelete }) {

    const [checked, setChecked] = useState(false);
    const label = <p className={`item-text ${checked ? 'completed' : ''}`}>{task}</p>;

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="Item">
            <FormControlLabel
                control={<CustomCheckbox checked={checked} onChange={handleChange} name="checkedC" />}
                label={label}
            />
            <div className="deleteIcon" onClick={() => {onDelete(task)}}><DeleteIcon style={{ marginLeft: 10 }} color="secondary" /></div>
        </div>
    );
}

export default Item;