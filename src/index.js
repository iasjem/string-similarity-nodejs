require('./config/env/dotenv'); // show config variables

var url = require('url');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet({ contentSecurityPolicy: false })); // This disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/string-compare.routes'));

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));