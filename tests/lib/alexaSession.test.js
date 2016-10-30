
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

});
