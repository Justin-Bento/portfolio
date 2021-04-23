import React, { Component } from 'react';

let headline_primary = 'my-4 text-4xl md:text-5xl font-bold';
let headline_secondary = 'mb-4 text-3xl font-bold capitalize';
let headline_tertiary = 'mb-1 font-semibold text-lg';
let body_lg = 'prose-xl pr-5';
let body = 'my-2 prose 2xl:prose-xl';

export default class Article extends Component {
  render() {
    return (
      <div className="Article">
        <div className="Article-Title">
          <h1 className={headline_primary}>{this.props.Headline}</h1>
          <h2 className={headline_tertiary}>{this.props.Subtitle}</h2>
        </div>
        {/* End Of Article Title  */}
        <div className="Article-Meta mb-16">
          <p className={body}>{this.props.Meta}</p>
        </div>
        {/* End Of Article Meta-Data  */}
      </div>
    );
  }
}
export { Article };
