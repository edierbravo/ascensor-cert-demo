export const getInitials = (label) => {
  return label
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}; 