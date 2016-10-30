


export default function(config) {

  const { echoAppId } = config;

  return {
    appIsValid: checkEchoId(echoAppId),
    buildSpeechletResponse: constructSpeechlet
  };

}


const checkEchoId = echoAppId => eventAppId => {
  return echoAppId === eventAppId;
}

const constructSpeechlet = (reponse) => {

  const { title, outputText, repromptText, endSession } = reponse;

  //builds up a speechlet object
  return {
    card: getOutputCard(title, outputText),
    outputSpeech: getTextOutput(outputText),
    reprompt: { outputSpeech: getTextOutput(repromptText) },
    shouldEndSession: endSession
  };
}

const getOutputCard = (title, output) => {
  return {
    type: 'Simple',
    title: `SessionSpeechlet - ${title}`,
    content: `SessionSpeechlet - ${output}`
  };
};

const getTextOutput = text => {
  return {
    type: 'PlainText',
    text: text
  };
};
