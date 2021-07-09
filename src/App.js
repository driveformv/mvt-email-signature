import { useRef, useState, memo } from "react";
import Alert from "@material-ui/lab/Alert";
import {
	Grid,
	Box,
	Typography,
	TextField,
	Select,
	MenuItem,
	Button,
	useMediaQuery,
} from "@material-ui/core";

import Signature from "./components/Signature/Signature";

import "./App.css";

import PhoneNumberInput from "./components/PhoneNumberInput";

function App() {
	const [fullName, setFullName] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [department, setDepartment] = useState("");
	const [cellNumber, setCellNumber] = useState("");
	const [officeNumber, setOfficeNumber] = useState("");
	const [officeExt, setOfficeExt] = useState("");
	const [email, setEmail] = useState("");
	const [isAlertVisible, setIsAlertVisible] = useState(false);

	const formRef = useRef();
	const signatureRef = useRef();

	const matches = useMediaQuery("(max-width:1024px)");

	const handleClick = () => {
		setIsAlertVisible(true);
		const copyBoxElement = signatureRef.current;
		copyBoxElement.contentEditable = true;
		copyBoxElement.focus();
		document.execCommand("selectAll");
		document.execCommand("copy");
		copyBoxElement.contentEditable = false;
		getSelection().empty();

		setTimeout(() => {
			setIsAlertVisible(false);
		}, 3000);
	};

	const generateSignatureHandler = (e) => {
		e.preventDefault();
		const {
			fullName,
			jobTitle,
			department,
			cellNumber,
			officeNumber,
			ext,
			email,
		} = formRef.current;

		setFullName(fullName.value);
		setJobTitle(jobTitle.value);
		setDepartment(department.value);
		setCellNumber(cellNumber.value);
		setOfficeNumber(officeNumber.value);
		setOfficeExt(ext.value);
		setEmail(email.value);

		// Save user signature details to excel
		fetch("https://api.apispreadsheets.com/data/14266/", {
			method: "POST",
			body: JSON.stringify({
				data: {
					fullName: fullName.value,
					jobTitle: jobTitle.value,
					department: department.value,
					email: email.value,
					officeNumber: officeNumber.value,
					ext: ext.value,
					cellNumber: cellNumber.value,
				},
			}),
		}).then((res) => {
			if (res.status === 201) {
				// SUCCESS
				console.log("Successfully saved data");
			} else {
				// ERROR
				console.log("Error saving data");
			}
		});
	};

	const resetFieldsHandler = () => {
		const {
			fullName,
			jobTitle,
			department,
			cellNumber,
			officeNumber,
			ext,
			email,
		} = formRef.current;

		fullName.value = "";
		jobTitle.value = "";
		department.value = "";
		cellNumber.value = "";
		officeNumber.value = "";
		ext.value = "";
		email.value = "";
	};

	return (
		<Grid
			container
			style={{
				height: "100vh",
			}}
		>
			{/* Mobile */}
			{matches ? (
				<Grid
					item
					sm={12}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#bf3a30",
						backgroundImage:
							"linear-gradient(315deg, #e15c20 0%, #bf3a30 74%)",
					}}
				>
					<Typography
						variant="h6"
						style={{
							textAlign: "center",
							width: "75%",
							color: "#fff",
						}}
					>
						The MVT email signature generator is not available on
						mobile devices. Please navigate to our desktop version.
					</Typography>
				</Grid>
			) : (
				<>
					{/* Left side */}
					<Grid item md={3}>
						<Box p={4}>
							<Typography
								variant="h5"
								style={{ fontWeight: "500", color: "#4a515d" }}
							>
								Signature Details
							</Typography>
							<form
								ref={formRef}
								onReset={resetFieldsHandler}
								onSubmit={generateSignatureHandler}
							>
								<TextField
									name="fullName"
									label="Full Name"
									placeholder="John Doe"
									style={{ marginTop: 15 }}
									InputLabelProps={{ shrink: true }}
									fullWidth
									required
								/>
								<TextField
									name="jobTitle"
									label="Job Title"
									placeholder="Your Title"
									style={{ marginTop: 15 }}
									InputLabelProps={{ shrink: true }}
									fullWidth
									required
								/>
								<TextField
									name="department"
									label="Department"
									placeholder="Your Department"
									style={{ marginTop: 15 }}
									InputLabelProps={{ shrink: true }}
									fullWidth
									required
								/>
								<TextField
									name="email"
									label="Email"
									placeholder="john.doe@m-v-t.com"
									style={{ marginTop: 15 }}
									InputLabelProps={{ shrink: true }}
									fullWidth
									required
								/>
								{/* <PhoneNumberInput
									name="officeNumber"
									label="Office Number"
									placeholder="915.791.4000"
									style={{ marginTop: 15 }}
									InputLabelProps={{ shrink: true }}
									fullWidth
									required
								/> */}
								<Select
									name="officeNumber"
									displayEmpty
									inputProps={{
										"aria-label": "Without label",
									}}
									defaultValue=""
									fullWidth
									style={{ marginTop: 15 }}
									required
								>
									<MenuItem value="">
										<em>Select office number</em>
									</MenuItem>
									<MenuItem value="575.524.2835">
										575.524.2835 (Las Cruces Office)
									</MenuItem>
									<MenuItem value="915.791.4000">
										915.791.4000 (El Paso Terminal)
									</MenuItem>
									<MenuItem value="915.791.8730">
										915.791.8730 (El Paso Recruiting)
									</MenuItem>
									<MenuItem value="615.691.4367">
										615.691.4367 (Nashville Terminal)
									</MenuItem>
									<MenuItem value="303.426.4174">
										303.426.4174 (Denver Terminal)
									</MenuItem>
									<MenuItem value="956.717.9849">
										956.717.9849 (Laredo Terminal)
									</MenuItem>
								</Select>

								<TextField
									name="ext"
									label="Ext (optional)"
									placeholder="1234"
									fullWidth
									style={{ marginTop: 15 }}
									InputLabelProps={{ shrink: true }}
								/>
								<PhoneNumberInput
									name="cellNumber"
									label="Cell Number (optional)"
									placeholder="123.456.7890"
									style={{ marginTop: 15 }}
									fullWidth
									InputLabelProps={{ shrink: true }}
								/>
								<Button
									variant="contained"
									color="primary"
									style={{ marginTop: 15 }}
									fullWidth
									type="submit"
								>
									Generate Signature
								</Button>
								<Button
									variant="contained"
									color="secondary"
									style={{ marginTop: 15 }}
									fullWidth
									onClick={resetFieldsHandler}
								>
									Reset
								</Button>
							</form>
						</Box>
					</Grid>

					{/* Right side */}
					<Grid
						item
						md={9}
						style={{
							backgroundColor: "rgb(240,240,240)",
							padding: "20px",
							position: "relative",
						}}
					>
						{isAlertVisible && (
							<Alert
								severity="success"
								variant="filled"
								style={{
									position: "absolute",
									right: 20,
									left: 20,
								}}
							>
								Successully copied your new signature
							</Alert>
						)}

						{/* First Bar */}
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								padding: "1rem",
								backgroundColor: "#4a515d",
								borderBottom:
									"1px solid rgba(255, 255, 255, 0.1)",
								borderRadius: "8px 8px 0px 0px",
							}}
						>
							{[
								"rgb(242, 84, 91)",
								"rgb(245, 194, 107)",
								"rgb(0, 189, 165)",
							].map((bc, i) => (
								<div
									key={i}
									style={{
										height: "0.5rem",
										width: "0.5rem",
										borderRadius: "50%",
										marginRight: "0.5rem",
										backgroundColor: bc,
									}}
								/>
							))}
						</div>
						{/* Second Bar */}
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								padding: "1rem 2rem",
								fontWeight: "500",
								color: "rgb(255, 255, 255)",
								backgroundColor: "#4a515d",
							}}
						>
							<Typography variant="subtitle2">
								To: Your Recipient
							</Typography>
							<Typography variant="subtitle2">
								Subject: Check out my new Email Signature
							</Typography>
						</div>
						{/* Mail Content Area */}
						<div
							style={{
								backgroundColor: "#fff",
								height: "50%",
								display: "flex",
								flexDirection: "column",
								padding: "30px 20px",
								justifyContent: "space-between",
								marginBottom: "10px",
							}}
						>
							<GhostLines />
							<Signature
								signatureRef={signatureRef}
								signatureDetails={{
									fullName,
									jobTitle,
									department,
									cellNumber,
									officeNumber,
									officeExt,
									email,
								}}
							/>
						</div>
						<Button
							onClick={handleClick}
							variant="contained"
							color="primary"
							fullWidth
						>
							Copy Singature
						</Button>
					</Grid>
				</>
			)}
		</Grid>
	);
}

export default App;

const GhostLines = memo(() => {
	return (
		<div>
			{[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
				<div
					key={i}
					style={{
						height: "10px",
						backgroundColor: "#E0E0E0",
						width: Math.floor(Math.random() * 500) + 150,
						marginBottom: "15px",
					}}
				/>
			))}
		</div>
	);
});
