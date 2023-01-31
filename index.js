// Code your solution in this file!
const distanceFromHqInBlocks = (blocks) => Math.abs(blocks - 42);

const distanceFromHqInFeet = (blocks) => distanceFromHqInBlocks(blocks) * 264;

const distanceTravelledInFeet = (start, destination) => Math.abs(start - destination) * 264;

const calculatesFarePrice = (start, destination) => {
    let feetTraveled = distanceTravelledInFeet(start, destination);
    
    if (feetTraveled <= 400) {
        return 0;
    } else if (feetTraveled > 400 && feetTraveled <= 2000) {
        return (feetTraveled - 400) * .02;
    } else if (feetTraveled > 2000 && feetTraveled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

console.log(distanceFromHqInBlocks(34));

console.log(calculatesFarePrice(34,32));