var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('./Codemirror.jsx');

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/clike/clike');
require('codemirror/mode/markdown/markdown');

var defaults = {
	
};

var CodeEditor = React.createClass({
	getInitialState () {
		return {
			code: defaults.markdown,
			readOnly: false,
			mode: 'markdown',
		};
	},
	updateCode (newCode) {
		this.setState({
			code: newCode
		});
	},
	changeMode (e) {
		var mode = e.target.value;
		this.setState({
			mode: mode,
			code: defaults[mode]
		});
	},
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	},
	interact(cm){
		console.log(cm.getValue());
	},
	render () {
		var options = {
			lineNumbers: true,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
		return (
			<div>
				<form role="form" className="col-sm-12">  	
					<div className="form-group">
						<label className="col-sm-2" htmlFor="markup">Select Language:</label>
						<div className="col-sm-10">
							<select className="input-large" onChange={this.changeMode} value={this.state.mode} id="markup">
								<option value="markdown">Markdown</option>
								<option value="javascript">JavaScript</option>
								<option value="text/x-java">Java</option>
								<option value="text/x-objectivec">Objective C</option>				
							</select>
						</div>
					</div>					
				</form>
				<div className="col-sm-12">
					<Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} interact={this.interact}/>
				</div>
			</div>
		);
	}
});

module.exports = CodeEditor;
