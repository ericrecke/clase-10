import React from "react";
export default class Sound extends React.Component {
  render() {
    let isAutoplay = this.props.autoplay === true ? "autoplay" : "";
    return (
      <div>
        <audio controls autoplay={isAutoplay}>
          <source src={this.props.src} type={this.props.type}></source>
        </audio>
      </div>
    );
  }
}
