import React from "react";

const PositionAndDepartment = ({ jobTitle, department }) => {
	return (
		<tr>
			<td style={styles.td}>
				{jobTitle} | {department}
			</td>
		</tr>
	);
};

const styles = {
	td: {
		fontFamily: "Arial, sanserif",
		fontWeight: "bold",
		fontSize: "10pt",
		lineHeight: "10pt",
		color: "#c02125",
		paddingBottom: "2.5pt",
	},
};

export default PositionAndDepartment;
