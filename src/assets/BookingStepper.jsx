import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

export default function BookingStepper({ expanded }) {
  const steps = [
    "Pick a Service",
    "Date and Time",
    "Task Description",
    "Frequency",
    "Review Your Order",
    "Payment",
  ];
  // Determine the active step based on the expanded accordion
  const getActiveStep = () => {
    switch (expanded) {
      case "panel-services":
        return 0;
      case "panel-date_time":
        return 1;
      case "panel-tasks":
        return 2;
      case "panel-frequency":
        return 3;
      case "panel-review-order":
        return 4;
      case "panel-payment":
        return 5;
      default:
        return 0;
    }
  };
  return (
    <Box sx={{ width: "100%" }} className="stepper">
      <Stepper activeStep={getActiveStep()} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
