import { Component } from 'react';
import './Articles.css';

class Articles extends Component {
  render() {
    const articleList = this.props.allArticles.map((article, index) => {
      return (
        <article key={index} className="articles">
          <h1 className="articleTitles">{article.title}</h1>
          <p>{article.body}</p>
          <div className="socialBtns">
            <span>{article.comments} comments</span>
            <span>{article.likes} likes</span>
          </div>
        </article>
      );
    });
    return <section id="articleSection">{articleList}</section>;
  }
}

export default Articles;
