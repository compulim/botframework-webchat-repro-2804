import { render } from 'react-dom';
import React from 'react';
import ReactWebChat from 'botframework-webchat';

(async function() {
  const res = await fetch('https://webchat-mockbot.azurewebsites.net/directline/token', { method: 'POST' });
  const { token } = await res.json();
  const directLine = window.WebChat.createDirectLine({ token });

  render(<ReactWebChat directLine={directLine} />, document.getElementById('webchat'));
})();
