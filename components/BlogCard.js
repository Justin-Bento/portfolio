import React, { Component } from "react";

export default class BlogCard extends Component {
  render() {
    return (
      <div className="BlogCard">
        <div className="BlogCard-Image">
          <a href={this.props.Action}>
            <img
              src={this.props.Media}
              className="object-cover w-full h-56 bg-center rounded"
              alt={this.props.MediaAlt}
              loading="lazy"
            />
          </a>
        </div>
        {/* end Of Blog Card Image */}
        <div className="BlogCard-Headline">
          <h2 className="my-2 text-lg font-semibold text-gray-900">
            <a href={this.props.Action} className="text-gray-900 hover:text-purple-700">
              {this.props.Headline}
            </a>
          </h2>
        </div>
        {/* end Of Blog Card Headline */}
        <div className="BlogCard-Description">
          <p className="my-2 text-sm font-normal text-gray-500">{this.props.Description}</p>
        </div>
        {/* end Of Blog Card Description */}
        <div className="BlogCard-Meta">
          <p className="text-sm font-normal text-gray-500">
            <a href={this.props.Action} className="font-medium text-gray-900 hover:text-purple-700">
              {this.props.MetaInfo}
            </a>
            • {this.props.MetaDate}
          </p>
        </div>
        {/* end Of Blog Card Description */}
      </div>
    );
  }
}
