import React from "react";
export default class Image extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.src}
          alt={this.props.text}
          width={this.props.width}
          height={this.props.height}
        ></img>
      </div>
    );
  }
}
