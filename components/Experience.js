import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience mb-8">
        <h4 className="text-lg text-gray-900 font-semibold capitalize mb-1">{this.props.Title}</h4>
        <p className="text-base text-gray-900 capitalize">{this.props.EmploymentType}</p>
        <p className="text-base text-gray-900 capitalize">{this.props.StartEndDate}</p>
        <p className="text-base text-gray-900 mb-1 capitalize">{this.props.Location}</p>
        <p className="text-base text-black">{this.props.Description}</p>
      </div>
    );
  }
}
export { Experience };
