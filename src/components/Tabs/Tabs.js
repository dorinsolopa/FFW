import React from "react";
import "./Tabs.css";
class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
    };
  }

  onSelect = (index, item) => {
    this.setState({ activeItem: index });
    this.props.onChange(item);
  };

  render() {
    const { tabs } = this.props;

    return (
      <div>
        {tabs.map((item, index) => {
          return (
            <a
              onClick={() => this.onSelect(index, item)}
              key={index}
              className={`tab ${
                index === this.state.activeItem ? "tab-active" : ""
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    );
  }
}
export default Tabs;
