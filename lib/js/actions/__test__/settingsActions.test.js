import { saveKey, saveSelectFunction } from '../settingsActions';
import { SAVE_KEY, SAVE_SELECT } from '../types';

describe('settingsActions', () => {
  it('should return correct object when calling saveKey()', () => {
    expect(saveKey('test')).toEqual({
      type: SAVE_KEY,
      payload: 'test',
    });
  });
  it('should return correct object when calling saveSelectFunction()', () => {
    const selectFunction = jest.fn();
    expect(saveSelectFunction(selectFunction)).toEqual({
      type: SAVE_SELECT,
      payload: selectFunction,
    });
  });
});
