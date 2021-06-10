import React from "react";

const Name = ({ fullName }) => {
	return (
		<tr>
			<td style={styles.td}>{fullName}</td>
		</tr>
	);
};

const styles = {
	td: {
		fontFamily: "Arial, sans-serif",
		fontWeight: "bold",
		fontSize: "14pt",
		lineHeight: "14pt",
		paddingBottom: "2pt",
	},
};

export default Name;
