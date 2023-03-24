let blockNumber = 43;
blockNumber = 50;
blockNumber = 34; 
function distanceFromHqInBlocks(blockNumber) {
    const hqBlock = 42;
    return Math.abs(blockNumber - hqBlock);
  }
  
  function distanceFromHqInFeet(blockNumber) {
    const blockLength = 264;
    return distanceFromHqInBlocks(blockNumber) * blockLength;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264;
    return Math.abs(startBlock - endBlock) * blockLength;
  }

  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  }

  
  
