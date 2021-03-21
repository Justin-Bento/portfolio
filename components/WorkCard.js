import React, { Component } from "react";
import Link from "next/link";

export default class WorkCard extends Component {
  render() {
    return (
      <div className="BlogCard">
        <div className="BlogCard-Image">
          <Link href={"/work/posts/" + this.props.File}>
            <a>
              <img
                src={"/img/work" + this.props.Media}
                className="object-cover w-full h-64 bg-center rounded"
                alt={`${this.props.MediaAlt}`}
                loading="lazy"
              />
            </a>
          </Link>
        </div>
        {/* end Of Blog Card Image */}
        <div className="BlogCard-Headline">
          <h2 className="mt-2 text-lg font-medium leading-tight text-gray-900">
            <a href="#" className="text-gray-900 hover:text-purple-700">
              {this.props.Headline}
            </a>
          </h2>
        </div>
        {/* end Of Blog Card Headline */}
      </div>
    );
  }
}
export { WorkCard };
