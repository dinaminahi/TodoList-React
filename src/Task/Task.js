import React from 'react';
import './Task.css';
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

function Task({ task, onDelete, checkTheBox }) {
	const label = <p className={`task-text ${task.done ? 'completed' : ''}`}>{task.text}</p>;

	return (
		<div className="Task">
			<FormControlLabel
				control={
					<CustomCheckbox
						checked={task.done}
						onChange={(e) => {
							checkTheBox(e, task.id);
						}}
						name="checkedC"
					/>
				}
				label={label}
			/>
			<div
				className="deleteIcon"
				onClick={() => {
					onDelete(task);
				}}
			>
				<DeleteIcon style={{ marginLeft: 10 }} color="secondary" />
			</div>
		</div>
	);
}

export default Task;