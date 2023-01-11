import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setInputValue] = useState("");
	const [isTouchedInput, setIsTouchedInput] = useState(false);

	const enteredNameIsValid = enteredName.trim().length !== 0;
	const nameInputIsInvalid = !enteredNameIsValid && isTouchedInput;

	let formIsValid = false;

	if (enteredNameIsValid) {
		formIsValid = true;
	}

	const submitHandler = (event) => {
		event.preventDefault();
		setIsTouchedInput(true);
		if (!enteredNameIsValid) {
			return;
		}
		console.log(enteredName);
		setIsTouchedInput(false);

		setInputValue("");
	};

	const blurHandler = () => {
		setIsTouchedInput(true);
	};
	const classes = !nameInputIsInvalid ? "form-control" : "form-control invalid";
	return (
		<form onSubmit={submitHandler}>
			<div className={classes}>
				<label htmlFor="name">Your Name</label>
				<input
					onChange={(event) => {
						setInputValue(event.target.value);
					}}
					onBlur={blurHandler}
					value={enteredName}
					type="text"
					id="name"
				/>
			</div>
			{nameInputIsInvalid && <p>please enter valid non-empty name</p>}

			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
