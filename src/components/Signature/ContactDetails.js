import React from "react";

const ContactDetails = ({ cellNumber, officeNumber, officeExt, email }) => {
	return (
		<>
			<tr>
				<td
					style={{
						fontFamily: "Arial, sans-serif",
						fontSize: "10pt",
						lineHeight: "10pt",
						paddingBottom: "2.5pt",
					}}
				>
					<span>
						<strong style={{ color: "#c02125" }}>Office: </strong>
						{officeNumber}{" "}
					</span>
					{officeExt ? (
						<span>
							<span style={{ color: "#c02125" }}>
								<strong>Ext: </strong>
							</span>
							{officeExt}
						</span>
					) : null}
				</td>
			</tr>
			{cellNumber ? (
				<tr>
					<td
						style={{
							fontFamily: "Arial, sans-serif",
							fontSize: "10pt",
							lineHeight: "10pt",
							paddingBottom: "2.5pt",
						}}
					>
						<span>
							<strong style={{ color: "#c02125" }}>
								Cell Number:{" "}
							</strong>
							{cellNumber}
						</span>
					</td>
				</tr>
			) : null}
			<tr>
				<td
					style={{
						fontFamily: "Arial, sans-serif",
						fontSize: "10pt",
						lineHeight: "10pt",
						paddingBottom: "2.5pt",
					}}
				>
					<span>
						<strong style={{ color: "#c02125" }}>Email: </strong>
						{email}
					</span>
				</td>
			</tr>
		</>
	);
};

export default ContactDetails;
