import React from "react";
import Websocket from 'react-websocket';
import { v4 as uuidv4 } from 'uuid';
import ViewPatientDataSection from "./../components/ViewPatientDataSection";
import Container from "react-bootstrap/Container";


class ViewDataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleData(data) {
    let result = JSON.parse(data);
    console.log("result: " + data)
    // this.setState({count: this.state.count + result.movement});
  }

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
          Count: <strong>{this.state.count}</strong>

          <Websocket url={`ws://134.209.241.50:8082/?uuid=${uuidv4()}`}
                     onMessage={this.handleData.bind(this)}/>
        </div>
      </Container>
    );
  }
}

export default ViewDataPage;
