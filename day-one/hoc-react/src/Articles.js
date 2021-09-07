import { Component } from 'react';

class Articles extends Component {
  render() {
    const articleList = this.props.allArticles.map((article, index) => {
      return (
        <article key={index}>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <span>{article.comments} comments</span>
          <span>{article.likes} likes</span>
        </article>
      );
    });
    return <section>{articleList}</section>;
  }
}

export default Articles;
