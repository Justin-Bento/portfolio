import React, { Component } from 'react';

let headline_primary = 'text-4xl md:text-5xl font-bold mb-4';
let headline_secondary = 'mb-6 text-3xl font-bold';
let headline_tertiary = 'mb-1 font-semibold text-lg';
let body_lg = 'prose-xl pr-5';
let body = 'prose 2xl:prose-xl max-w-6xl';

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience mb-8">
        <h4 className={headline_tertiary}>{this.props.Title}</h4>
        <p className={body}>{this.props.EmploymentType}</p>
        <p className={body}>{this.props.StartEndDate}</p>
        <p className={body}>{this.props.Location}</p>
        <p className={body}>{this.props.Description}</p>
      </div>
    );
  }
}
export { Experience };
