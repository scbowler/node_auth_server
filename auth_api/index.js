const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');
const ENV = process.env.ENV || 'test';


// App Setup
//app.use(morgan('combined')); // Disable for production
app.use(cors());
app.use(express.json({ type: '*/*' }));
router(app);

if(ENV === 'test'){
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log('Server running on PORT:', PORT);
    });
}

exports.app = app;
