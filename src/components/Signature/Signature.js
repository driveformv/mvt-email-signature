import ContactDetails from "./ContactDetails";
import Logo from "./Logo";
import Name from "./Name";
import PositionAndDepartment from "./PositionAndDepartment";
import Website from "./Website";
import SocialMediaIcons from "./SocialMediaIcons";

const Signature = ({ signatureRef, signatureDetails }) => {
	const { fullName, jobTitle, department, cellNumber, officeNumber, officeExt, email } = signatureDetails;

	return (
		<div ref={signatureRef}>
			<table cellPadding="0" cellSpacing="0" style={{ backgroundColor: "white", width: "525px" }}>
				<tbody>
					<tr>
						<td
							width="80"
							rowSpan={6}
							style={{
								borderRight: "3px solid #c02125",
								padding: "0 20px",
								width: "80",
							}}
						>
							<Logo />
						</td>
						<td style={{ paddingLeft: "20px" }}>
							<table cellPadding="0" cellSpacing="0">
								<tbody>
									<Name fullName={fullName || "Your Full Name"} />
									<PositionAndDepartment
										jobTitle={jobTitle || "Your Title"}
										department={department || "Your Department"}
									/>
									<ContactDetails
										officeNumber={officeNumber || "123.456.7890"}
										cellNumber={cellNumber}
										officeExt={officeExt}
										email={email || "youremail@m-v-t.com"}
									/>
									<Website />
									<SocialMediaIcons />
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Signature;
