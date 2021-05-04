import React, { Component } from 'react';

let headline_primary = 'text-4xl md:text-4xl font-bold mb-4';
let headline_secondary = 'mb-4 text-3xl font-bold capitalize';
let headline_tertiary = 'mb-1 font-semibold text-lg';
let body_lg = 'prose-xl pr-5 text-gray-600';
let body = 'prose 2xl:prose-xl';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="Footer mt-24">
          <div className="bg-gray-100 py-12">
            <div className="w-11/12 mx-auto md:max-w-6xl">
              <h2 className={headline_secondary}>Let’s Work Together</h2>
              <p className={body}>
                I'm available for full time opportunities and I'm always open to chat about design and find new ways to
                collaberate with people.
              </p>
              <button
                className="flex items-center h-10 mt-8 px-4 text-gray-50 duration-150 bg-gray-600 rounded focus:shadow-outline hover:bg-gray-700"
                onClick={() => navigator.clipboard.writeText('hello@justinbento.ca')}
              >
                hello@justinbento.ca
              </button>
            </div>
          </div>
        </div>
        {/* end of Footer */}
      </div>
    );
  }
}
