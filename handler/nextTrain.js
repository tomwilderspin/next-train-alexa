
export default function(options) {

  const { buildSpeechResponse } = options;

  return {
    welcomeResponse: welcomeResponse(buildSpeechResponse)
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
