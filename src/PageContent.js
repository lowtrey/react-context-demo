import React from 'react';

class PageContent extends React.Component {
  render() {
    const styles = {
      backgroundColor: 'white',
      height: '100vh',
      width: '100vw'
    };
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  }
}

export default PageContent;