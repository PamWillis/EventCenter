const db = require('../config/connection');
const { Event, Demo, Users } = require('../models');
const eventData = require('./eventData.json');
const demoData = require('./demoData.json');
const userData = require('./userData.json');

const cleanDB = require('./cleanDB');

db.once('open', async () => {
    await cleanDB('Event', 'events');
    await cleanDB('Demo', 'demos');
    await cleanDB('User', 'users');
    
  
    await Event.insertMany(eventData);
  
    console.log('Technologies seeded!');
    process.exit(0);
  });