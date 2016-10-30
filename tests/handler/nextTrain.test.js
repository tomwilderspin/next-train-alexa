
import nextTrain from '../../handler/nextTrain';

describe('next train handler', () => {

  const options = {
    buildSpeechResponse: jest.fn()
  }

  const nextTrainMethods = nextTrain(options);

  const callback = jest.fn();

  it('constructs a welcome response', () => {

    const expectedWelcome = {
      title: 'Welcome',
      outputText: 'Welcome to Next Train Please ask me when next train is due',
      repromptText: 'Please tell me which destination you like to travel from and to, for example' +
          'when is the next train from leeds to london',
      endSession: false
    }

    //set speech builder
    options.buildSpeechResponse.mockReturnValueOnce(
      {some:'values'}
    );

    const result = nextTrainMethods.welcomeResponse(callback);

    expect(options.buildSpeechResponse.mock.calls[0][0])
      .toEqual(expectedWelcome);

    expect(callback.mock.calls[0][0])
      .toEqual({});

    expect(callback.mock.calls[0][1])
      .toEqual({some:'values'});
  });

});
