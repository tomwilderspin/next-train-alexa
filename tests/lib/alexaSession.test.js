
import alexaSession from '../../lib/alexaSession';


describe(' alexa session', () => {

  const mockConfig = {
    echoAppId : 'some.echo.id'
  };

  const sessionMethods = alexaSession(mockConfig);

  it('checks event app id matches echo app id', () => {

    expect(sessionMethods.appIsValid(mockConfig.echoAppId))
    .toBe(true);

  });

  it('checks event id does not match echo app id', () => {

    expect(sessionMethods.appIsValid('some.id'))
    .toBe(false);
  });

  it('constructs a speechlet response', () => {

    let input = {
      title: 'title',
      ouputText: 'some text',
      repromptText: 'some more text',
      endSession: true,
    };

    let expected = {
      card: {
        type: 'Simple',
        title: 'SessionSpeechlet - '+input.title,
        content: 'SessionSpeechlet - '+input.outputText,
      },
      outputSpeech: {
        type: 'PlainText',
        text: input.outputText
      },
      reprompt: {
        outputSpeech: {
          type: 'PlainText',
          text: input.repromptText
        }
      },
      shouldEndSession: input.endSession
    };

    expect(sessionMethods.buildSpeechletResponse(input))
      .toEqual(expected);

  });

});
