const app = require('./app/app')
const PORT = process.env.PORT || 4200;
process.env.TZ = 'Asia/Calcutta';

app.listen(PORT, () => {
    console.log(`Listening on port ${process.env.PORT || 4200}!`);
});