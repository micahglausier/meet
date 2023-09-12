import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "14px",
      margin: "10px 0",
      padding: "10px",
      fontWeight: "medium"
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>  
    )
  }
};

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = "black";
        this.bgColor = "#bcdcdb";
    };
};

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "black";
    this.bgColor="#BF4C40";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "black";
    this.bgColor = "#c6ba68";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };