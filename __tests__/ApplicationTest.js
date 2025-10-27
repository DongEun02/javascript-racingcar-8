import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('이동 횟수가 1 미만이거나 숫자가 아닐 경우 에러 발생', async () => {
    // given
    const invalidCounts = ['0', '-2', 'a'];

    for (const count of invalidCounts) {
      const inputs = ['pobi,woni', count];
      mockQuestions(inputs);
    }

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다.'
    );
  });

  test('자동차 이름이 비어있거나 공백만 있을 경우 에러 발생', async () => {
    // given
    const inputs = ['', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 자동차 이름을 입력해야 합니다.'
    );
  });

  test('허용되지 않은 문자가 포함된 경우 에러 발생', async () => {
    // given
    const inputs = ['pobi;java', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 자동차 이름은 쉼표(,)로 구분해야 합니다.'
    );
  });

  test('빈 이름이 포함된 경우 에러 발생', async () => {
    // given
    const inputs = ['pobi,,woni', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 빈 자동차 이름이 포함되어 있습니다.'
    );
  });

  test('이름이 5자를 초과할 경우 에러 발생', async () => {
    // given
    const inputs = ['pobi,javaji', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.'
    );
  });

  test('중복된 이름이 있을 경우 에러 발생', async () => {
    // given
    const inputs = ['pobi,pobi,woni', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 중복된 자동차 이름이 있습니다.'
    );
  });
});
