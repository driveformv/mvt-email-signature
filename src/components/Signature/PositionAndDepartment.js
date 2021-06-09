import React from "react";

const PositionAndDepartment = ({ jobTitle, department }) => {
	return (
		<tr style={styles.tr}>
			<td style={styles.td}>
				{jobTitle} | {department}
			</td>
		</tr>
	);
};

const styles = {
    tr: {
        marginBottom: "2pt" 
    },
    td: {
        fontFamily: "Arial, sanserif", 
        fontWeight: "bold", 
        fontSize: "10pt", 
        lineHeight: "12pt", 
        color: "#c02125"
    }
}

export default PositionAndDepartment;
