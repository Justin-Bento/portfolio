import React, { Component } from "react";

export default class Article extends Component {
  render() {
    return (
      <div className="Article">
        <div className="Article-Title">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl capitalize">
            {this.props.Headline}
          </h1>
          <h2 className="text-xl tracking-wide capitalize">{this.props.Subtitle}</h2>
        </div>
        {/* End Of Article Title  */}
        <div className="Article-Meta">
          <p className="my-3 text-base font-normal tracking-wide text-gray-500 capitalize">{this.props.Meta}</p>
        </div>
        {/* End Of Article Meta-Data  */}
        <div className="Article-Divider">
          <hr />
        </div>
        {/* End Of Article Divider  */}
      </div>
    );
  }
}
export { Article };
