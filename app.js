const img = React.createElement('img', {src: 'https://via.placeholder.com/400x400'});
const title = React.createElement('h1', null, 'Hi React!');
const container = React.createElement('div', {className: 'content'}, img, title)

ReactDOM.render(container, document.getElementById('container'));