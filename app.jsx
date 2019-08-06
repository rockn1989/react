/* var jsx = React.createClass({
	render: function () {
		return(
			<div className="container">
				<img src="https://via.placeholder.com/400x400"/>
				<h1>React</h1>
				<p>Первый запуск реакт</p>
			</div>
		)
	}
});


ReactDOM.render(jsx, document.getElementById('container')); */

function Jsx(props) {
	return (
		<div className="container">
			<img src="https://via.placeholder.com/400x400" />
			<h1>React</h1>
			<p>Первый запуск реакт</p>
		</div>
	)
}

ReactDOM.render(<Jsx />, document.getElementById('container'));