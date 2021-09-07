// note:  Original Default Code - Keeping For Reference
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { Component } from 'react';
import Header from './Header';
import Feature from './Feature';
import Articles from './Articles';
import './App.css';

class App extends Component {
  render() {
    const articles = [
      {
        title: 'Hello WatchKit',
        body: 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.',
        comments: 12,
        likes: 124
      },
      {
        title: 'Introduction to Swift',
        body: 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.',
        comments: 15,
        likes: 45
      }
    ];

    const feature = {
      title: 'The Curse of the Current Reviews',
      body: 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.'
    };

    return (
      <div className="App">
        <Header />
        <main className="App-Main">
          <Feature feature={feature} />
          <Articles allArticles={articles} />
        </main>
      </div>
    );
  }
}

export default App;
