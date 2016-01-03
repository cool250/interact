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


var CodeEditor = React.createClass({

    getInitialState () {
        return {
            readOnly: false,
            mode: 'markdown',
            extraKeys: {"Ctrl-Space": "autocomplete"}
        };
    },

    changeMode (e) {
        var mode = e.target.value;
        this.setState({
            mode: mode,
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
                <div className="row">
                    <label className="col-sm-2" htmlFor="markup">Select Language:</label>
                    <div className="col-sm-2">
                        <select className="form-control" onChange={this.changeMode} value={this.state.mode} id="markup">
                            <option value="markdown">Markdown</option>
                            <option value="javascript">JavaScript</option>
                            <option value="text/x-java">Java</option>
                            <option value="text/x-objectivec">Objective C</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-info">Press <strong>ctrl-space</strong> to activate completion.</p>
                    </div>
                </div>
                <div className="row">
                    <Codemirror className="col-sm-8" ref="editor"/>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <button className="btn btn-primary pull-right" value="Submit Solution">Submit Solution</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CodeEditor;
