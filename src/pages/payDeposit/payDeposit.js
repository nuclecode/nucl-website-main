import React from "react";
import Layout from "../../layout/layout";
import { Typography } from "@mui/material";

import "./payDeposit.scss";

function PayDeposit() {
	return (
		<Layout>
			<div className="pay-deposit-page-container page-top-space">
				<div className="container">
					<Typography variant="h1">Pay Deposit</Typography>
				</div>
			</div>
		</Layout>
	);
}

export default PayDeposit;
