import React from "react";

const Name = ({ fullName }) => {
	return (
		<tr style={styles.tr}>
			<td style={styles.td}>
				<span style={styles.td}>{fullName}</span>
			</td>
		</tr>
	);
};

const styles = {
    tr: { 
        marginBottom: "2pt",
        fontFamily: "Arial, sans-serif" 
    },
    td: {
        fontWeight: "bold", 
        fontSize: "14pt", 
        lineHeight: "16pt" 
    }
}

export default Name;
