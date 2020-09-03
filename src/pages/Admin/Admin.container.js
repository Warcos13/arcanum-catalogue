import Admin from './Admin.jsx';
import { connect } from 'react-redux';
import adminSlice from '../../store/admin/admin.slice';

const { setProductInfo } = adminSlice.actions;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  onSetProductInfo: (product) => setProductInfo(product),
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
