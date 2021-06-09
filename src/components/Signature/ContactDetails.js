import React from "react";

const ContactDetails = ({ officeNumber, officeExt, email }) => {
	return (
		<>
			<tr style={{ marginBottom: "2pt" }}>
				<td
					style={{
						verticalAlign: "top",
					}}
					valign="top"
				>
					<span
						style={{
							fontFamily: "Arial, sans-serif",
							fontSize: "10pt",
							lineHeight: "12pt",
						}}
					>
						<strong
							style={{
								color: "#c02125",
							}}
						>
							Office:{" "}
						</strong>
						{officeNumber}{" "}
					</span>
					<span
						style={{
							fontFamily: "Arial, sans-serif",
							fontSize: "10pt",
							lineHeight: "12pt",
						}}
					>
						<span
							style={{
								color: "#c02125",
							}}
						>
							<strong>Ext: </strong>
						</span>
						{officeExt}
					</span>
				</td>
			</tr>
			<tr style={{ marginBottom: "2pt" }}>
				<td
					style={{
						verticalAlign: "top",
					}}
					valign="top"
				>
					<span
						style={{
							fontFamily: "Arial, sans-serif",
							fontSize: "10pt",
							lineHeight: "12pt",
						}}
					>
						<strong
							style={{
								color: "#c02125",
							}}
						>
							Email:{" "}
						</strong>
						{email}
					</span>
				</td>
			</tr>
		</>
	);
};

export default ContactDetails;
