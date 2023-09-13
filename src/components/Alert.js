import {
  Component
} from "react";

class Alert extends Component {
  constructor(props) {
      super(props);
      this.color = null;
      this.bgColor = null;
  }

  getStyle = () => {
      return {
          backgroundColor: this.bgColor,
          textAlign: "center",
          fontSize: "14px",
          margin: "10px 0",
          padding: "0px",
          fontWeight: "medium"
      };
  };

  render() {
      return ( <
          div className = "Alert" >
          <
          p style = {
              this.getStyle()
          } > {
              this.props.text
          } < /p> <
          /div>  
      )
  }
};

class InfoAlert extends Alert {
  constructor(props) {
      super(props);
      this.color = "white";
      this.bgColor = "#f34c19";
  };
};

class ErrorAlert extends Alert {
  constructor(props) {
      super(props);
      this.color = "white";
      this.bgColor = "#f34c19";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
      super(props);
      this.color = "white";
      this.bgColor = "#f34c19";
  }
}

export {
  InfoAlert,
  ErrorAlert,
  WarningAlert
};