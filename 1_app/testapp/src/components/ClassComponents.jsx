import React, { Component } from 'react';

class ClassComponents extends Component {
  constructor(props) {
    super(props);

    // Step 1: Create a ref
    this.buttonRef = React.createRef();
  }

  // Step 2: Use the ref in componentDidMount
  componentDidMount() {
    console.log("ClassComponents mounted with initial count:", this.props.count);

    // Focus the button element when the component mounts
    if (this.buttonRef.current) {
      this.buttonRef.current.focus();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      console.log("ClassComponents updated: count changed to", this.props.count);
    }
  }

  componentWillUnmount() {
    console.log("ClassComponents will unmount");
  }
  
  render() {
    const { setCount } = this.props;
    return (
      <div>
        <h1>Hello {this.props.name}, this is a class component!</h1>
        
        {/* Step 3: Attach the ref to a DOM element */}
        <button
          ref={this.buttonRef} // Attach the ref here
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          Decrease
        </button>
      </div>
    );
  }
}

export default ClassComponents;
