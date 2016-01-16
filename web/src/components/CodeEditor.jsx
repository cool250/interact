import React from 'react';
import CodeMirror from './CodeMirror.jsx';
import {Grid, Row, Col, Button, Input} from 'react-bootstrap';

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

    changeMode(e) {
        var mode = e.target.value;
        this.setState({
            mode: mode
        });
    }

    toggleReadOnly() {
        this.setState({
            readOnly: !this.state.readOnly
        }, () => this.refs.editor.focus());
    }

    interact(cm) {
        console.log(cm.getValue());
    }

    render() {
        var options = {
            lineNumbers: true,
            readOnly: this.state.readOnly,
            extraKeys: {"Ctrl-Space": "autocomplete"},
            mode: this.state.mode
        };
        return (

            <Grid >
                <Row className="vertical-align">
                    <Col md={2}>
                        <label htmlFor="markup">Select Language:</label>
                    </Col>
                    <Col md={2}>
                        <Input type="select" onChange={this.changeMode} value={this.state.mode} id="markup">
                            <option value="markdown">Markdown</option>
                            <option value="javascript">JavaScript</option>
                            <option value="text/x-java">Java</option>
                            <option value="text/x-objectivec">Objective C</option>
                        </Input>
                    </Col>
                    <Col md={8}>
                        <p className="text-info">Press <strong>ctrl-space</strong> to activate completion.</p>
                    </Col>
                </Row>
                <Row>
                    <CodeMirror ref="editor" options={options} interact={this.interact}/>
                </Row>
                <Row>
                    <Button bsStyle="primary">Submit Solution</Button>
                </Row>
            </Grid>
        );
    }
}
;

export default CodeEditor;
