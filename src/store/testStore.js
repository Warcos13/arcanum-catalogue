import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TEST_ACTION: (curState, value) => {
      console.log(curState);

      return { products: [...curState.products, ...value] };
    },
  };

  initStore(actions, {
    products: [],
  });
};

export default configureStore;
