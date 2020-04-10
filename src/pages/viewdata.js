import React from "react";
// import Websocket from 'react-websocket';
import ViewPatientDataSection from "./../components/ViewPatientDataSection";
import Container from "react-bootstrap/Container";
import {registerOnMessageCallback, send, startWebsocketConnection} from "../util/websocket";
import {v4 as uuidv4} from "uuid";


class ViewDataPage extends React.Component {
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

  // handleData(data) {
  //   let result = JSON.parse(data);
  //   console.log("DDDD")
  //   console.log("result: " + data)
  //   // this.setState({count: this.state.count + result.movement});
  // }

  render() {
    return (
      <Container>
        <ViewPatientDataSection
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          title="View Patient Data"
          subtitle=""
          buttonText="Load data"
          buttonColor="primary"
          showNameField={true}
          inputSize="md"
        ></ViewPatientDataSection>
        <div>
          Message: <strong>{this.state.messages}</strong>
        </div>
        {/*  strong <Websocket url={`ws://134.209.241.50:8082/?uuid=${uuidv4()}`}*/}
        {/*                    onMessage={this.handleData.bind(this)}/>*/}
        {/*</div>*/}
      </Container>
    );
  }
}

export default ViewDataPage;
