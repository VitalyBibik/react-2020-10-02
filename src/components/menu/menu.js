import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import { connect } from 'react-redux';
import styles from './menu.module.css';
import Loader from '../loader';
import { loadProducts, loadRestaurants } from '../../redux/actions';
import {
  productsLoadingSelector,
  productsLoadedSelector,
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../../redux/selectors';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  checkProduct = () => {
    const { loaded, loading, restaurantId, loadProducts } = this.props;
    if (!loading && !loaded) {
      loadProducts(restaurantId);
    }
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    this.checkProduct();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.restaurantId !== this.props.restaurantId) {
      this.checkProduct();
    }
  }

  render() {
    const { menu, loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  { loadProducts }
)(Menu);
