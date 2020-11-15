import React from 'react';
import ReactToPrint from 'react-to-print';
import Table from '../admin/Table';

class ComponentToPrint extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

class Print extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)}>
          {/* <Table /> */}
          {this.props.children}
        </ComponentToPrint>
      </div>
    );
  }
}

export default Print;
