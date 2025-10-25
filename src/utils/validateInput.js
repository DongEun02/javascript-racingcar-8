const ERROR_MESSAGES = {
  COUNT_ERROR: '[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다.',
  EMPYY_INPUT: '[ERROR] 자동차 이름을 입력해야 합니다.',
  INVALID_CHAR: '[ERROR] 자동차 이름은 쉼표(,)로 구분해야 합니다.',
  EMPTY_NAME: '[ERROR] 빈 자동차 이름이 포함되어 있습니다.',
  NAME_LENGTH_EXCEEDED: '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.',
  DUPLICATE_NAME: '[ERROR] 중복된 자동차 이름이 있습니다.',
};

const validateInput = (carNames, count) => {
  if (count < 1 || isNaN(count)) {
    throw new Error(ERROR_MESSAGES.COUNT_ERROR);
  }

  if (!carNames || !carNames.trim()) {
    throw new Error(ERROR_MESSAGES.EMPYY_INPUT);
  }
  if (/[^a-zA-Z0-9,]/.test(carNames)) {
    throw new Error(ERROR_MESSAGES.INVALID_CHAR);
  }
  const nameArray = carNames.split(',').map((name) => name.trim());

  if (nameArray.some((name) => name === '')) {
    throw new Error(ERROR_MESSAGES.EMPTY_NAME);
  }

  if (nameArray.some((name) => name.length > 5)) {
    throw new Error(ERROR_MESSAGES.NAME_LENGTH_EXCEEDED);
  }

  const nameSet = new Set(nameArray);
  if (nameSet.size !== nameArray.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
  }
};

export default validateInput;
