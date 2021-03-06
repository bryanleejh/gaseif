// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: products,
//       name: "",
//       price: 0,
//       description: "Describe this item",
//       isHiring: true
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.toggleHiring = this.toggleHiring.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     const newItem = {
//       name: this.state.name,
//       price: this.state.price,
//       description: this.state.description
//     };
//     this.setState({
//       products: [newItem, ...products],
//       name: "",
//       price: 0,
//       description: "Describe this item"
//     });
//   }
//   toggleHiring() {
//     this.setState({ isHiring: !this.state.isHiring });
//     console.log(this.state.isHiring);
//   }
//   render() {
//     return (
//       <div>
//         <h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
//         {!this.state.isHiring ? (
//           <h2>Yes, we are hiring </h2>
//         ) : (
//           <h2>Sorry, try again tomorrow</h2>
//         )}
//         <form onSubmit={this.handleSubmit}>
//           <label for="name">Name</label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//             id="name"
//           />
//           <br />
//           <label for="price">Price</label>
//           <input
//             type="number"
//             value={this.state.price}
//             onChange={this.handleChange}
//             id="price"
//           />
//           <br />
//           <label for="description">Description</label>
//           <textarea
//             value={this.state.description}
//             onChange={this.handleChange}
//             id="description"
//           />
//           <input type="submit" />
//         </form>
//         <div>
//           <h2>Preview our new item</h2>
//           <h3>{this.state.name}</h3>
//           <h4>{this.state.price}</h4>
//           <h5>{this.state.description}</h5>
//         </div>
//         <ul>
//           {this.state.products.map(product => {
//             return (
//               <li>
//                 {product.name} {product.price}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// console.log(products);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      name: "",
      price: 0,
      description: "Describe this item",
      isHiring: true,
      cartItems: []
    };
  }
  // handleChange = event => {
  //   console.log(event.target.value);
  //   this.setState({ value: event.target.value });
  // };
  addToCart = item => {
    this.setState({ cartItems: [item, ...this.state.cartItems] });
  };

  removeFromCart = item => {
    alert("Remove from cart");
  };

  toggleHiring = () => {
    this.setState({ isHiring: !this.state.isHiring });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    };

    //this.state.products = [newItem, ...this.state.products];
    this.setState({
      products: [newItem, ...this.state.products],
      name: "",
      price: 0,
      description: "Describe this item"
    });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
        {this.state.isHiring ? (
          <h2>Yes, we are hiring </h2>
        ) : (
          <h2>Sorry, try again tomorrow</h2>
        )}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            placeholder="name of product"
          />
          <br />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
            id="price"
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
          />
          <input type="submit" />
        </form>
        <div className="preview">
          <h2>Preview our new item</h2>
          <h3>{this.state.name}</h3>
          <h4>{this.state.price}</h4>
          <h5>{this.state.description}</h5>
        </div>
        <div className="products">
          <h3>Please Purchase our Excellent Products</h3>
          <ul>
            {this.state.products.map(product => (
              <li>
                <ProductList
                  product={product}
                  addToCart={this.addToCart}
                  removeFromCart={this.removeFromCart}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="cart">
          <h3> Shopping Cart </h3>
          <ul>
            {this.state.cartItems.map(item => {
              return <ShoppingCart product={item} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
