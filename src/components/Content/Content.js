import React from "react";
import axios from "../../config/axios_config";
import ColorCards from "../Card/ColorCards";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: false };
  }

  componentDidMount() {
    this.getData(this.props.endPoint);
  }

  componentDidUpdate(prevProps) {
    if (this.props.endPoint !== prevProps.endPoint) {
      this.getData(this.props.endPoint);
    }
  }

  getData = async (endPoint) => {
    if (!endPoint) {
      return null;
    }
    this.setState({ loading: true });
    try {
      const response = await axios.get(`/${endPoint}`, {
        params: {},
      });
      console.log("responseA-->", response);
      this.setState({ data: response.data.content });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { data, loading } = this.state;
    if (loading) {
      return "Loading";
    }
    return (
      <div>{!Array.isArray(data) ? data : <ColorCards cards={data} />}</div>
    );
  }
}
export default Content;
