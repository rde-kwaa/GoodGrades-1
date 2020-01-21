import  React, { Component } from  'react'
import {render} from  'react-dom';

export  default  class  App  extends  Component {

render() {

return (
		<div>
			<h1>Welcome to React</h1>
		</div>
		)
		}
}

render(<App  />, document.getElementById('app'));