import { useRef, useState, memo } from "react";
import "./App.css";
import Signature from "./components/Signature/Signature";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import PhoneInput from "./components/PhoneInput";

function App() {
	const signatureRef = useRef();
	const [fullName, setFullName] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [department, setDepartment] = useState("");
	const [cellNumber, setCellNumber] = useState("");
	const [officeNumber, setOfficeNumber] = useState("");
	const [officeExt, setOfficeExt] = useState("");
	const [email, setEmail] = useState("");
	const [isAlertVisible, setIsAlertVisible] = useState(false);

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

	const resetFieldsHandler = () => {
		setFullName("");
		setJobTitle("");
		setDepartment("");
		setCellNumber("");
		setOfficeNumber("");
		setOfficeExt("");
		setEmail("");
	};

	return (
		<Grid
			container
			style={{
				height: "100vh",
			}}
		>
			{/* Left side */}
			<Grid item md={3}>
				<Box p={4}>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Signature Details
					</Typography>
					<TextField
						label="Full Name"
						placeholder="John Doe"
						style={{ marginTop: 25 }}
						InputLabelProps={{
							shrink: true,
						}}
						fullWidth
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>

					<TextField
						label="Job Title"
						placeholder="Web Designer"
						fullWidth
						style={{ marginTop: 25 }}
						InputLabelProps={{
							shrink: true,
						}}
						value={jobTitle}
						onChange={(e) => setJobTitle(e.target.value)}
					/>

					<TextField
						label="Department"
						placeholder="Marketing"
						fullWidth
						style={{ marginTop: 25 }}
						InputLabelProps={{
							shrink: true,
						}}
						value={department}
						onChange={(e) => setDepartment(e.target.value)}
					/>

					<PhoneInput value={cellNumber} setState={setCellNumber} />

					<PhoneInput
						value={officeNumber}
						setState={setOfficeNumber}
					/>

					<TextField
						label="Ext"
						placeholder="1234"
						fullWidth
						style={{ marginTop: 25 }}
						InputLabelProps={{
							shrink: true,
						}}
						value={officeExt}
						onChange={(e) => setOfficeExt(e.target.value)}
					/>

					<TextField
						label="Email"
						placeholder="john.doe@m-v-t.com"
						fullWidth
						style={{ marginTop: 25 }}
						InputLabelProps={{
							shrink: true,
						}}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Button
						variant="contained"
						style={{
							backgroundColor: "rgb(242, 84, 91)",
							color: "#fff",
							marginTop: 25,
						}}
						fullWidth
						onClick={resetFieldsHandler}
					>
						Reset
					</Button>
				</Box>
			</Grid>

			{/* Right side */}
			<Grid
				item
				md={9}
				style={{
					backgroundColor: "rgb(240,240,240)",
					padding: "20px",
				}}
			>
				{isAlertVisible && (
					<Alert
						severity="info"
						style={{ position: "absolute", right: "20px" }}
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
						backgroundColor: "rgb(51, 71, 91)",
						borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
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
						backgroundColor: "rgb(51, 71, 91)",
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
					style={{ backgroundColor: "#00bda5", color: "#fff" }}
					fullWidth
				>
					Copy Singature
				</Button>
			</Grid>
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
