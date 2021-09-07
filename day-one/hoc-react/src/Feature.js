import { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>{this.props.feature.title}</h2>
          <p>{this.props.feature.body}</p>
        </article>
      </section>
    );
  }
}

export default Feature;
