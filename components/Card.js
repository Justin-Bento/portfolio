import React, { Component } from 'react';
import Link from 'next/link';

let headline_primary = 'my-4 text-4xl md:text-5xl font-bold';
let headline_secondary = 'mb-4 text-3xl font-bold capitalize';
let headline_tertiary = 'mb-1 font-semibold text-lg';
let body_lg = 'prose-xl pr-5';
let body = 'my-2 prose 2xl:prose-xl';
let body_sm = 'my-1 prose-sm 2xl:prose-xl';

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="img">
          <Link href={`${this.props.Link}`}>
            <img
              src={`${this.props.Thumbnail}`}
              className="object-cover w-full h-56 bg-center rounded-lg my-2"
              alt={this.props.ThumbnailAlt}
              loading="lazy"
            />
          </Link>
        </div>
        <h2 className={headline_tertiary}>
          <Link href={`${this.props.Link}`}>
            <a className="text-black hover:text-green-600">{this.props.Headline}</a>
          </Link>
        </h2>
        <div className="description">
          <Link href={`${this.props.Link}`}>
            <a>
              <p className={body_sm}>{this.props.Content}</p>
              <p className={body_sm}>{this.props.Meta}</p>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
