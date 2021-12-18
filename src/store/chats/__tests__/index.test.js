import { initState } from '../index';
import { chatsReducer } from '../reducer';

describe('chatsReducer', () => {

  it('вызов редьюсера без экшена вернет initState', () => {

    const result = chatsReducer();

    expect(result).toEqual(initState);
  })
})