import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/App'
import registerServiceWorker from './core/registerServiceWorker'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
