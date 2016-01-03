var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('./Codemirror.jsx');

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/clike/clike');
require('codemirror/mode/markdown/markdown');

require('codemirror/addon/hint/show-hint');
require('codemirror/addon/hint/xml-hint');
require('codemirror/addon/hint/javascript-hint');

var defaults = {
	
};

var CodeEditor = React.createClass({

	getInitialState () {
		return {
			code: defaults.markdown,
			readOnly: false,
			mode: 'markdown',
			extraKeys: {"Ctrl-Space": "autocomplete"}
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
			extraKeys: {"Ctrl-Space": "autocomplete"},
			mode: this.state.mode
		};
		return (
			<div>
				<form role="form" className="row">  	
					<div className="form-group">
						<label className="col-sm-2" htmlFor="markup">Select Language:</label>
						<div className="col-sm-2">
							<select className="input-large" onChange={this.changeMode} value={this.state.mode} id="markup">
								<option value="markdown">Markdown</option>
								<option value="javascript">JavaScript</option>
								<option value="text/x-java">Java</option>
								<option value="text/x-objectivec">Objective C</option>				
							</select>
						</div>
						<div className="col-sm-5">
							<p>Press <strong>ctrl-space</strong> to activate completion.</p>
						</div>
					</div>					
				</form>
				<div className="row">
					<Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} interact={this.interact}/>
				</div>
				<div className="row">
					<button className="btn btn-primary pull-right" value="Submit Solution">Submit Solution</button>
				</div>
			</div>
		);
	}
});

module.exports = CodeEditor;
