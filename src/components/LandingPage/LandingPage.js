import React from "react";
import axios from "../../config/axios_config";
import Card from "../Card/Card";
import Content from "../Content/Content";
import Tabs from "../Tabs/Tabs";
import "./LandingPage.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      tabs: [],
      activeTab: {},
    };
  }

  async componentDidMount() {
    this.getTabs();
  }

  getTabs = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get("/tabs", {
        params: {},
      });
      console.log("response-->", response);
      this.setState({
        tabs: response.data.filter((item) => {
          return item.label;
        }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  selectTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };
  render() {
    if (this.state.isLoading) {
      return "Loading ...";
    }

    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="text">
            <p className="h1">Please select one font</p>
          </div>
          <div>
            <Tabs onChange={this.selectTab} tabs={this.state.tabs} />
          </div>
        </div>

        <Card>
          <Content endPoint={this.state.activeTab.content_endpoint} />
        </Card>
      </div>
    );
  }
}
export default LandingPage;
