import { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  render() {
    return (
      <section id="featureSection">
        <article id="featureArticle">
          <h2>{this.props.feature.title}</h2>
          <p>{this.props.feature.body}</p>
        </article>
      </section>
    );
  }
}

export default Feature;
