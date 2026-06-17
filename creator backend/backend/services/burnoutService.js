const calculateBurnout = (data) => {
  let score = 0;

  if (data.sleepHours < 6) score += 25;
  if (data.workHours > 10) score += 25;
  if (data.stressLevel > 7) score += 30;
  if (data.motivationLevel < 4) score += 20;

  let risk = "Low";

  if (score > 60) risk = "High";
  else if (score > 30) risk = "Moderate";

  return { score, risk };
};

module.exports = calculateBurnout;