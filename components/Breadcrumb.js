import React, { Component } from "react";

export default class Breadcrumb extends Component {
  render() {
    return (
      <div className="Breadcrumb">
        <ol className="flex leading-none divide-x divide-indigo-400">
          <li className="pr-4">
            <a href={this.props.Link}>{this.props.Name}</a>
          </li>
          <li className="px-4 text-blue-700" aria-current="page">
            {this.props.PathName}
          </li>
        </ol>
      </div>
    );
  }
}
export { Breadcrumb };
