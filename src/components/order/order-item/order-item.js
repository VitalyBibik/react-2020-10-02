import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../../redux/actions';

const OrderItem = ({
  product,
  amount,
  increment,
  remove,
  decrement,
  fetchData,
}) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
  }, []); // eslint-disable-line

  const price = product.price * amount;

  return (
    <div data-id="order-item">
      <h5>{product.name}</h5>
      <p>Количество: {amount}</p>
      <div>{price} $</div>
      <div>
        <button
          onClick={() => decrement(product.id)}
          data-id="product-decrement"
        >
          -
        </button>
        <button
          onClick={() => increment(product.id)}
          data-id="product-increment"
        >
          +
        </button>
        <button onClick={() => remove(product.id)} data-id="product-remove">
          x
        </button>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});
const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
