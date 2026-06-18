export const FREE_LIMIT = 2;

export function getUsage(toolName) {
  return Number(localStorage.getItem(toolName)) || 0;
}

export function increaseUsage(toolName) {
  const current = getUsage(toolName);
  localStorage.setItem(toolName, current + 1);
}

export function isPaymentRequired(toolName) {
  return getUsage(toolName) >= FREE_LIMIT;
}


export function unlockPaidDownload(toolName) {
  localStorage.setItem(`${toolName}_paid`, "true");
}

export function isPaidUnlocked(toolName) {
  return localStorage.getItem(`${toolName}_paid`) === "true";
}
