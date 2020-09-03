import Catalogue from './Catalogue.jsx';
import { connect } from 'react-redux';
import generalSlice from '../../store/general/general.slice';
import catalogueSlice from '../../store/catalogue/catalogue.slice';

const { setIsLoading } = generalSlice.actions;
const { getProducts } = catalogueSlice.actions;

const mapStateToProps = (state) => ({
  isLoading: state.general.isLoading,
  products: state.catalogue.products,
});

const mapDispatchToProps = {
  onGetProducts: () => getProducts(),
  onSetIsLoading: (isLoading) => setIsLoading(isLoading),
};

console.log('Container');
export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);