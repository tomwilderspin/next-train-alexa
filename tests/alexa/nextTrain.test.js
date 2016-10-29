import { run } from '../../functions/alexa/nextTrain.js';



describe('alexa next train event handler', () => {

  it('accepts an event and executes the callback response',  () => {

    const mockCallback = jest.fn();

    const mockEvent = {
      key: 'value',
      anotherKey: 'value2'
    };

    const result =  run(mockEvent, {}, mockCallback);

    expect(mockCallback.mock.calls[0][1]).toBe('test');
  })

});
