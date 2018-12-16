import React from "react";
import {
  Button,
  Col,
  Card,
  CardBody,
  Collapse,
  CardText,
  CardTitle,
  Row,
} from 'reactstrap';

export default class Launchpad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        1: "",
        2: "",
      },
      buttonSelected: 0,
    }
  }

  toggleComponentCard() {
    this.setState({ collapse: !this.state.collapse });
  }


  selectButton(id) {
    this.setState({buttonSelected: id});
    this.toggleComponentCard()
  }

  isSelected(id) {
    if (id === this.state.buttonSelected) {
      return "primary"
    } else {
      return ""
    }
  }

  render() {
    return(
      <div>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <CardTitle>Button {this.state.buttonSelected}</CardTitle>
              <CardBody>
                <Button style={{marginRight:"5px"}}>Play Button</Button>
                <Button>Stop Button</Button>
              </CardBody>
            </CardBody>
          </Card>
        </Collapse>

        <Row style={{marginTop:"10px"}}>
          <Col>
            <Button style={{width:"100px", height:"100px", marginRight:"5px"}}
                    color={() => this.isSelected(1)}
                    onClick={() => this.selectButton(1)}
            >
            </Button>{' '}
            <Button style={{width:"100px", height:"100px", marginRight:"5px"}}
                    color={() => this.isSelected(2)}
                    onClick={() => this.selectButton(2)}
            >
            </Button>{' '}
          </Col>
        </Row>
      </div>
    )
  }
}