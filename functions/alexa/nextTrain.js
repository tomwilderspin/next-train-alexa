
import alexaSession from '../../lib/alexaSession';

import nextTrain from '../../handler/nextTrain';

const sessionConfig = {
  echoAppId = process.env.ECHO_APP_ID,
  lauchRequestHandler:
};

export const run =  (event, context, callback) => {

  //add config to session methods
  const { appIsValid, sessionStart, onLaunch }
    = alexaSession(sessionConfig);

  // info from  event
  const { session, request } = event;

  //check amazon app id
  if (!appIsValid(session.application.applicationId)){

    callback('invalid application id');
    return context.fail('invalid application id');
  }

  //check if new session
  if (event.session.new) {
    sessionStart();
  }

  //handle session request
  switch (request.type) {
    case 'LaunchRequest':
      //todo on launch ...

      break;
    default:

  }






}
