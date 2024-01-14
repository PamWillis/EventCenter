const db = require('../config/connection');
const { Demo, User } = require('../models');

const demoData = require('./demoData.json');
const userData = require('./userData.json');

const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Event', 'events');
    await cleanDB('Demo', 'demos');
    await cleanDB('User', 'users');

    await User.create(userData); 
    await Demo.create(demoData);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});