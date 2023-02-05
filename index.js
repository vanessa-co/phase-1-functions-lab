function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
  }
  
  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(distanceFromHqInFeet(destination) - distanceFromHqInFeet(start));
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
      return "cannot travel that far";
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400) {
      return (distance - 400) * 0.02;
    } else {
      return 0;
    }
  }