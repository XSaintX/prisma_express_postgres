//const app = require('./src/server');
//const app = require('./server');
import app from './server';

app.listen(3001, () => {    
    console.log('Server is running on http://localhost:3001');
});