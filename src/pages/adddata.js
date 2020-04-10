import React from "react";
import AddPatientDataSection from "./../components/AddPatientDataSection";
import {registerOnMessageCallback, send, startWebsocketConnection} from "../util/websocket";
import {v4 as uuidv4} from "uuid";
import Container from "react-bootstrap/Container";

class AddDataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    startWebsocketConnection(`ws://134.209.241.50:8082/?uuid=${uuidv4()}`)
    registerOnMessageCallback(this.onMessageReceived.bind(this))

  }

  onMessageReceived(msg) {
    const data = JSON.parse(msg)
    console.log("Message received!")
    console.log("result: " + data)
    this.setState({
      messages: this.state.messages.concat(data)
    })
  }

  sendMessage(text) {
    const message = {
      username: this.state.username,
      text: text
    }
    send(JSON.stringify(message))
  }

  render() {
    return (
      <Container>
        <div>
          <AddPatientDataSection
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Fill in patient data"
            subtitle=""
            buttonText="Send data"
            buttonColor="primary"
            showNameField={true}
            inputSize="md"
          ></AddPatientDataSection>
          Message: <strong>{this.state.messages}</strong>
        </div>
      </Container>
    );
  }

}

export default AddDataPage;