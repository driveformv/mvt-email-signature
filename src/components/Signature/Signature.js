import { useRef } from "react";
import ContactDetails from "./ContactDetails";
import Logo from "./Logo";
import Name from "./Name";
import PositionAndDepartment from "./PositionAndDepartment";
import Quote from "./Quote";
import SocialMediaIcons from "./SocialMediaIcons";

const Signature = (props) => {
    const { fullName, jobTitle, department, officeNumber, officeExt, email } = props;

	const handleClick = () => {
		const copyBoxElement = signatureRef.current;
		copyBoxElement.contentEditable = true;
		copyBoxElement.focus();
		document.execCommand("selectAll");
		document.execCommand("copy");
		copyBoxElement.contentEditable = false;
		getSelection().empty();
	};
	const signatureRef = useRef();

	return (
		<>
			<button onClick={handleClick}>copy</button>
			<div ref={signatureRef}>
				<table cellPadding="0" cellSpacing="0" style={{ backgroundColor: "white"}}>
					<tbody>
						<tr>
							<td style={{ borderRight: "3px solid #c02125", padding: "0 20px" }}>
								<Logo />
							</td>
							<td style={{ paddingLeft: "20px" }}>
								<table cellPadding="0" cellSpacing="0">
									<tbody>
										<Name fullName={fullName} />
										<PositionAndDepartment jobTitle={jobTitle} department={department} />
										<ContactDetails officeNumber={officeNumber} officeExt={officeExt} email={email} />
										<Quote />
										<SocialMediaIcons />
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Signature;
