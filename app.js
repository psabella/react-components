// TODO
/* Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of ap */

// what will go in the app div
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['cucumbers', 'kale', 'candy']}/>
  </div>
);

// what's in the GroceryList component
var GroceryList = (props) => {

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item}/>
      )}
    </ul>
  );
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onItemMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onItemMouseLeave() {
    this.setState({
      hover: false
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return(
      <li style={style} onMouseEnter={this.onItemMouseEnter.bind(this)} onMouseLeave={this.onItemMouseLeave.bind(this)}>{this.props.item}</li>
    );
  }
}

var Cucumbers = () => (
  <li>cucumbers</li>
);

var Kale = () => (
  <li>kale</li>
);

// render the app div
ReactDOM.render(<App/>, document.getElementById("app"));




