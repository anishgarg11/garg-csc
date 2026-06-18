import {
  getUsage,
  increaseUsage,
  isPaymentRequired,
} from "./paymentUtils";

const TOOL_NAME = "passport_photo_downloads";

function handleDownload() {
  if (isPaymentRequired(TOOL_NAME)) {
    alert("Free limit completed. Please pay to continue.");
    return;
  }

  // yahan passport photo download ka actual logic hoga
  increaseUsage(TOOL_NAME);

  alert(`Download successful. Free downloads used: ${getUsage(TOOL_NAME)}/2`);
}