const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const activityRoutes = require('./routes/weekly-status');
const activityMonthlyRoutes = require('./routes/monthly-blog');
const projectReview = require('./routes/project-review');
const weeklySpNgoCommunication = require('./routes/communication-sp-ngo');
const monthlyT4dNgoCommunication = require('./routes/communication-t4d-ngo');
const overdueTaskReminder = require('./routes/task-management');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use('/weeklystatus', activityRoutes);
app.use('/monthlystatus', activityMonthlyRoutes);
app.use('/activitystatus', projectReview);
app.use('/weeklycommunicationstatus',weeklySpNgoCommunication);
app.use('/monthlycommunicationstatus',monthlyT4dNgoCommunication);
app.use('/taskmanagement',overdueTaskReminder);

module.exports = app;