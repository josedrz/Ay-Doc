import React from 'react'
var request = require('request');

class Debug extends React.Component {

  constructor() {
    super()
    this.state = {
      output: "",
      display: "none"
    }
  }

  handleToggleReadOnly = (e)=> {
    e.preventDefault()
    this.props.editor.toggleEditable()
    return false
  }

  handleTestEmitAndDecode = (e)=> {
    e.preventDefault()
    setTimeout(enviar,500)
    function enviar() {
      var theoutput = String(localStorage.getItem('Ouput'));
      var theoutput1 = /"/gi;
      var theoutput2 = theoutput.replace(theoutput1, '\\\"')
      var axiosbody ="{\r\n\"txt\": \"'" + theoutput2 + "'\"\r\n}";
      console.log(axiosbody);
      var options = {
        'method': 'PUT',
        'url': 'https://aydoc-peru-default-rtdb.firebaseio.com/borrador.json',
        'headers': {
          'Content-Type': 'text/plain'
        },
        body: axiosbody
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        localStorage.setItem('estadogeneral1','1')
        document.getElementById('btnpublish').style="background-color: #03a87c",
        console.log(response.body);
      });
    };
    return this.testEmitAndDecode()
  }

  handleTestEmitTEXT = (e)=> {
    e.preventDefault()
    return this.testEmitTEXT()
  }

  testEmitAndDecode = (e)=> {
    const raw_as_json = this.props.editor.emitSerializedOutput()
    this.props.editor.setState({
      editorState: this.props.editor.decodeEditorContent(raw_as_json) },
      this.logState(JSON.stringify(raw_as_json)))
    return false
  }

  testEmitTEXT =()=> {
    const text = this.props.editor.getTextFromEditor()
    return this.logState(text)
  }

  logState =(raw)=> {
    return this.setState({ output: raw }, this.open)
  }

  toggleDisplay = (e)=> {
    e.preventDefault()
    const d = this.state.display === "block" ? "none" : this.state.display
    return this.setState({
      display: d })
  }

  open =()=> {
    return this.setState({
      display: "block" })
  }

  render() {
    return (
      <div>
        <div className="footer-app-nuevo">
          <ul className="footer-app-nuevo-grid">
            <li className="footer-app-nuevo1">
              <a>
              ©2021 AyDoc
              </a>
            </li>
            <li className="footer-app-nuevo2">
              <a
                onClick={ this.handleTestEmitAndDecode }>
                GUARDAR
              </a>
            </li>
          </ul>
        </div>
        <div className="debugZone" style={ { display: this.state.display } }>
          <div className="debugOutput">
            {
              localStorage.setItem('Ouput', this.state.output)
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Debug

