import React from 'react';
import CodeMirror from './CodeMirror.jsx';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/xml-hint';
import 'codemirror/addon/hint/javascript-hint';

class CodeEditor extends React.Component {

    constructor() {
        super();
        this.state = {
            readOnly: false,
            mode: 'markdown'
        };
        this.changeMode = this.changeMode.bind(this);
    }

    changeMode (e) {
        var mode = e.target.value;
        this.setState({
            mode: mode
        });
    }

    toggleReadOnly () {
        this.setState({
            readOnly: !this.state.readOnly
        }, () => this.refs.editor.focus());
    }

    interact(cm){
        console.log(cm.getValue());
    }

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
                    <CodeMirror className="col-sm-8" ref="editor" options={options} interact={this.interact}/>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <button className="btn btn-primary pull-right" value="Submit Solution">Submit Solution</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default CodeEditor;
