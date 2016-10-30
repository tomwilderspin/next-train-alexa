
export default function(options) {

  const { buildSpeechResponse } = options;

  return {
    welcomeResponse: getWelcomeResponse(buildResponse);
  };
}

const getWelcomeResponse = buildSpeechResponse => callback => {

  const speechResponse = buildSpeechResponse(
    'Welcome',
    'Welcome to Next Train please ask me when the next train is coming',
    'Please tell me which destination you like to travel from and to for example' +
        ' when is the next train from leeds to london'
  );

  callback({}, speechResponse);
};
