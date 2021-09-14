import Header from './Header';

function BaseLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default BaseLayout;
