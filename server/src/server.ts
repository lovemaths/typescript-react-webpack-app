import * as express from 'express';
import * as path from "path";

var app = express();

app.use(express.static(path.join(__dirname, "/../../front_end/index.html")));
app.use(express.static(path.join(__dirname, "/../../front_end/dist/bundle.js")));
app.use(express.static(path.join(__dirname, "/../../node_modules/react/umd/react.development.js")));
app.use(express.static(path.join(__dirname, "/../../node_modules/react-dom/umd/react-dom.development.js")));

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/../../front_end/index.html"));
});

app.listen(3000);