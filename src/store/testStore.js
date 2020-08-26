import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TEST_ACTION: (curState, value) => {
      return { products: [...curState.products, ...value] };
    },
  };

  initStore(actions, {
    products: [],
  });
};

export default configureStore;
