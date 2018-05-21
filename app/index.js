import '../style/main.scss';
import generateText from './sub';

var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(generateText());
document.body.appendChild(app);