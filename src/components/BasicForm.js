import React from "react";
import useInput from "../components/hooks/useInput";
const BasicForm = (props) => {
	// const [enteredLastName, setEnteredLastName] = useState("");
	// const [isLastNameTouched, setLastNameTouched] = useState(false);

	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [isEmailTouched, setEmailTouched] = useState(false);

	// const enteredLastNameIsInvalid = enteredLastName.trim() !== "";
	// const inputLastNameIsInvalid = !enteredLastNameIsInvalid && isLastNameTouched;

	// const enteredEmailIsInvalid = enteredEmail.trim().includes("@");
	// const inputEmailIsInvalid = !enteredEmailIsInvalid && isEmailTouched;

	const {
		enteredValue: enteredName,
		enteredValueIsValid: enteredNameValueIsValid,
		inputValueIsInvalid: enteredNameIsInvalid,
		onChangeHandler: onChangeNameHandler,
		onBlurHandler: onBlurNameHandler,
		reset: onResetName,
	} = useInput((value) => value.trim() !== "");
	const {
		enteredValue: enteredLastName,
		enteredValueIsValid: enteredLastNameValueIsValid,
		inputValueIsInvalid: enteredLastNameIsInvalid,
		onChangeHandler: onChangeLastNameHandler,
		onBlurHandler: onBlurLastNameHandler,
		reset: onResetLastName,
	} = useInput((value) => value.trim() !== "");
	const {
		enteredValue: enteredEmail,
		enteredValueIsValid: enteredEmailValueIsValid,
		inputValueIsInvalid: enteredEmailIsInvalid,
		onChangeHandler: onChangeEmailHandler,
		onBlurHandler: onBlurEmailHandler,
		reset: onResetEmail,
	} = useInput((value) => value.trim().includes("@"));

	let formIsValid = false;

	if (
		enteredNameValueIsValid &&
		enteredLastNameValueIsValid &&
		enteredEmailValueIsValid
	) {
		formIsValid = true;
	}
	const submitHandler = (event) => {
		event.preventDefault();
		onResetName();
		onResetEmail();
		onResetLastName();
	};

	const fnameClasses = !enteredNameIsInvalid
		? "form-control"
		: "form-control invalid";
	const lnameClasses = !enteredLastNameIsInvalid
		? "form-control"
		: "form-control invalid";

	const emailClasses = !enteredEmailIsInvalid
		? "form-control"
		: "form-control invalid";

	return (
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={fnameClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						value={enteredName}
						onChange={onChangeNameHandler}
						onBlur={onBlurNameHandler}
					/>
				</div>
				<div className={lnameClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						value={enteredLastName}
						onChange={onChangeLastNameHandler}
						onBlur={onBlurLastNameHandler}
					/>
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
					value={enteredEmail}
					onChange={onChangeEmailHandler}
					onBlur={onBlurEmailHandler}
				/>
			</div>

			<div className="error-block">
				{enteredNameIsInvalid && <p>please enter non-empty first name value</p>}
				{enteredLastNameIsInvalid && (
					<p>please enter non-empty last name value</p>
				)}
				{enteredEmailIsInvalid && <p>please enter valid email </p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
