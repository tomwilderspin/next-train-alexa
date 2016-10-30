


export default function(config) {

  const { echoAppId } = config;

  return {
    appIsValid: checkEchoId(echoAppId),
    buildSpeechletResponse: buildSpeechResponse
  };

}


const checkEchoId = echoAppId => eventAppId => {
  return echoAppId === eventAppId;
}

const buildSpeechletResponse = (title, output, repromptText, endSession) {
  {
   outputSpeech: getTextOutputSpeech(output),
   card: getOutputCard(title, output),
   reprompt: getRepromptText(repromptText),
   endSession
  }
}


const getRepromptText = text => {
  {
    outputSpeech: getTextOutputSpeech(text);
  };
}

const getOutputCard = (title, output) => {
  {
    type: 'Simple',
    title: `SessionSpeechlet - ${title}`,
    content: `SessionSpeechlet - ${output}`
  };
};

const getTextOutputSpeech = text => {
  {
    type: 'PlainText',
    text: text
  };
};
