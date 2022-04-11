import React from "react";
export default class List extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.items.props.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
}
