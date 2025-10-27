const parseCarNames = (carNames) => {
  return carNames.split(`,`).map((name) => name.trim());
};

export default parseCarNames;
