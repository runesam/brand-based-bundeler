import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';
import { AppContainer } from 'react-hot-loader'

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		document.getElementById('app')
	);
};

const App = () => <div className='app'>Hello React!</div>;

render(App);

module.hot.accept();
