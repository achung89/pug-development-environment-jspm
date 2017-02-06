import html from './index.jade!';
import '/index.scss!';

var div = document.createElement('div');
div.innerHTML = html;
document.body.appendChild(div);

System.import('./script.js');