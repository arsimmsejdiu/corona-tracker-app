import React from "react";

//Styles
import styles from "./App.module.css";
import logo from './images/logo.png';

// or we can import them into a single file and then here as this
import { Cards, Chart, CountryPicker } from "./components/index";

//API
import { fetchData } from "./api/index.api";

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);
    console.log(fetchedData)
    
    //set state
    this.setState({data: fetchedData, country: country});
  }

  render() {
    const { data , country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={logo} alt="hej"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
