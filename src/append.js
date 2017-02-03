import html from './index.pug';
import '!style-loader!css-loader!sass-loader!./index.scss';

var div = document.createElement('div');
div.innerHTML = html;
document.body.appendChild(div.firstChild);