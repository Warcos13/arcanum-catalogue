import React from 'react';

import { Button } from 'semantic-ui-react';

import { history } from '../../helpers/history';

const handleBackToCatalogue = () => {
  history.push('/catalogue');
};


const Checkout = () => {
    return (
      <React.Fragment>
        <h1>CHECKOUT</h1>
        <Button icon onClick={handleBackToCatalogue}>
          <i className={`las la-dragon`} />
        </Button>
        </React.Fragment>
        

    );
}
 
export default Checkout;