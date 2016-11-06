
export default function(options) {

  const { buildSpeechResponse } = options;

  return {
    welcomeResponse: welcomeResponse(buildSpeechResponse),
    sessionEndResponse: sessionEndResponse(buildSpeechResponse)
  };
}

const welcomeResponse = buildSpeechResponse => callback => {

  const response = {
    title: 'Welcome',
    outputText: 'Welcome to Next Train Please ask me when next train is due',
    repromptText: 'Please tell me which destination you like to travel from and to, for example' +
        'when is the next train from leeds to london',
    endSession: false
  }

  callback({}, buildSpeechResponse(response));
};

const sessionEndResponse = buildSpeechResponse => callback => {
  const response = {
    title: 'Session Ended',
    outputText: 'Thank you. Have a nice day',
    endSession: true
  };

  callback({}, buildSpeechResponse(response));
}
