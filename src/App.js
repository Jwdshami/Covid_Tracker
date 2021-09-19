import { Box, Typography, withStyles } from '@material-ui/core';
import img from './img/img.jpg';
import { Component } from 'react';
import './App.css';
import Cards from './component/Cards';
import Chart from './component/Chart';
import { fetchData } from './Service/Api';
import Countries from './component/Countries';



const style = {
  img: {
    width: 100 ,
    marginTop: 2

},

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'

  },
  header: {
    
    marginTop: 15,
    with: 400,
    textAlign: 'center',
    fontSize: 40,
    padding: 10,
    Font: 'bold',
    color: 'black'


  },
  lastUpdated: {
    backgroundColor: 'pink',
    marginTop: 10

  }

}
class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
    console.log(fetchedData);

  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
    console.log(fetchedData);
  }





  render() {
    const { data } = this.state;
    return (
      <Box className={this.props.classes.container}>
        <Box className={this.props.classes.header}>Covid-19 Coronavirus Pandamic</Box>

        <Typography className={this.props.classes.lastUpdated}> Last Update:{data.lastUpdate && new Date(data.lastUpdate).toDateString()} </Typography>

        <img src={img} alt="covid" />

        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} />

      </Box>


    )
  }
}

export default withStyles(style)(App);
