import { TextField } from "@material-ui/core";

function phoneInputComponent({ label, value, setState }) {
	const handleInput = (e) => {
		// this is where we'll call our future formatPhoneNumber function that we haven't written yet.
		const formattedPhoneNumber = formatPhoneNumber(e.target.value);
		// we'll set the input value using our setInputValue
		setState(formattedPhoneNumber);
	};

	function formatPhoneNumber(value) {
		// if input value is falsy eg if the user deletes the input, then just return
		if (!value) return value;

		// clean the input for any non-digit values.
		const phoneNumber = value.replace(/[^\d]/g, "");

		// phoneNumberLength is used to know when to apply our formatting for the phone number
		const phoneNumberLength = phoneNumber.length;

		// we need to return the value with no formatting if its less then four digits
		// this is to avoid weird behavior that occurs if you  format the area code to early

		if (phoneNumberLength < 4) return phoneNumber;

		// if phoneNumberLength is greater than 4 and less the 7 we start to return
		// the formatted number
		if (phoneNumberLength < 7) {
			return `${phoneNumber.slice(0, 3)}.${phoneNumber.slice(3)}`;
		}

		// finally, if the phoneNumberLength is greater then seven, we add the last
		// bit of formatting and return it.
		return `${phoneNumber.slice(0, 3)}.${phoneNumber.slice(
			3,
			6
		)}.${phoneNumber.slice(6, 10)}`;
	}

	return (
		<TextField
			label={label}
			placeholder="123.456.7890"
			fullWidth
			style={{ marginTop: 25 }}
			InputLabelProps={{
				shrink: true,
			}}
			value={value}
			onChange={handleInput}
		/>
	);
}

export default phoneInputComponent;
