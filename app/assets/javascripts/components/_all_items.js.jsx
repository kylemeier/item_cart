var AllItems = React.createClass({
  getInitialState() {
    return { items: [] };
  },

  componentDidMount() {
    fetch("/api/v1/items.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ items: data });
      });
  },

  render() {
    var items = this.state.items.map(item => {
      return (
        <div key={item.id}>
          <h3>
            {item.name}
          </h3>
          <p>
            {item.description}
          </p>
        </div>
      );
    });

    return (
      <div>
        {items}
      </div>
    );
  }
});
