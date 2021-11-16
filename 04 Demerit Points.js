// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12+ points -> Licesnse suspended

checkSpeed(76);

function checkSpeed(Speed) {
  const speedLimit = 70;
  const speedForPoint = 5;
  if (Speed > speedLimit + speedForPoint) {
    const points = Math.floor((Speed - speedLimit) / speedForPoint);
    if (points <= 12) {
      return points;
    } else return "Licesnse suspended";
  } else return "Ok";
}
