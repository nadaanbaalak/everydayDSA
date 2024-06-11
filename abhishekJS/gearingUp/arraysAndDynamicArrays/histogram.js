// given height of 'N' pillars, find the total height of water trapped in rain
const pillarHeights = [0, 1, 0, 2, 1, 3, 0, 2];
// [0, 1, 0, 2, 0, 1, 0, 2];
const prefixMax = [];
const suffixMax = [].fill(0, 0, pillarHeights.length);

function getSuffixMax() {
  const pillarCount = pillarHeights.length;
  suffixMax[pillarCount - 1] = pillarHeights[pillarCount - 1];
  let maxTillNow = pillarHeights[pillarCount - 1];
  for (let i = pillarCount - 2; i >= 0; i--) {
    if (pillarHeights[i] > maxTillNow) {
      maxTillNow = pillarHeights[i];
    }
    suffixMax[i] = maxTillNow;
  }
}

function getPrefixMax() {
  const pillarCount = pillarHeights.length;
  prefixMax[0] = pillarHeights[0];
  let maxTillNow = pillarHeights[0];
  for (let i = 1; i < pillarCount; i++) {
    if (pillarHeights[i] > maxTillNow) {
      maxTillNow = pillarHeights[i];
    }
    prefixMax[i] = maxTillNow;
  }
}

getSuffixMax(); // O(N)
getPrefixMax(); // O(N)

let totalWaterTrapped = 0;
for (let i = 1; i < pillarHeights.length; i++) {
  const waterTrapped =
    Math.min(prefixMax[i - 1], suffixMax[i + 1]) > pillarHeights[i]
      ? Math.min(prefixMax[i - 1], suffixMax[i + 1]) - pillarHeights[i]
      : 0;
  totalWaterTrapped += waterTrapped;
}

console.log(totalWaterTrapped);
