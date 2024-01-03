const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

const { WebClient } = require('@slack/web-api');
const token = 'xoxb-2323574213729-6434802430400-4nxkMnIe7Tw4xZfmh4rUZtS9'; // Use environment variable in production
const slackClient = new WebClient(token);

app.get('/check-status', async (req, res) => {
    try {
      const result = await slackClient.users.getPresence({ user: 'U029UHX5ZBJ' });
      res.json({ message: `User status is ${result.presence}` });
    } catch (error) {
      console.error("Slack API Error:", error);  // Detailed error logging
      res.status(500).json({ message: 'Error fetching user status' });
    }
  });