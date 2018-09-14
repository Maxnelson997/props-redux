import React, { Component } from 'react';
import Card from './card';
import Welcome from './welcome';
import AccountInfo from './accountInfo';

export default class App extends Component {
  render() {
    const user = {
      name: 'Jordan',
      about: 'With over a decade of development experience in a number of industries I realized that the typical product creation process between clients and developers was flawed. All too often developers rarely communicate to clients throughout the development stage, resulting in a final product that fails to reach the goal sought by the customer and end user For this reason I decided to utilize a completely different development pattern that focuses on highly focused communication and transparent design patterns. When I take on a project not only do I work to craft the application according to the clients specifications, I give daily updates to ensure that the project is aligning properly with the clients goals. The end result is the right product, delivered on time, and on budget.'
    }
    return (
      <div className='app'>
        <Card title='Welcome Page'>
          <Welcome name={user.name}/>
        </Card>
        <Card title='Account Info Page'>
          <AccountInfo {...user}/>
        </Card>
      </div>
    );
  }
}
