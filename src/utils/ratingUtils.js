export const ratingLabels = ["Poor", "Okay", "Fair", "Good", "Great", "Excellent"];

export const getRatingColor = (value) => {
  const colors = ["#ff0000", "#ff6600", "#ffaa00", "#ffcc00", "#66cc33", "#008000"];
  return colors[value];
};
