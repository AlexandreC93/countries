import { name } from 'file-loader';
import Button from './components/Button'
import Card from './components/Card'
import React from 'react'
import './App.scss';

const urlFrance = "https://restcountries.eu/rest/v2/name/france"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      value: ""
     }
  }

  componentDidMount(){
    fetch(urlFrance)
        .then(res => res.json())
        .then( (data)=>{
          this.setState({
            name: data[0].name,
            flag: data[0].flag,
            capital: data[0].capital,
            population: data[0].population,
            region: data[0].region
          })
          }
        
        )
        

        }

  getCountry = (country)=>{
      fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then(res => res.json())
        .then( (data)=>{
          this.setState({
            name: data[0].name,
            flag: data[0].flag,
            capital: data[0].capital,
            population: data[0].population,
            region: data[0].region,
            
          })
          }
        
        )
  }
  onCountryChange = (e) => {
    this.setState({
        value: e.target.value
    })
}

  render() { 
   console.log(this.state.value);
    // console.log(`https://restcountries.eu/rest/v2/name/${"coucou"}`);
    return ( 

      <>
      <Button value={this.state.value} onChange={this.onCountryChange}  onClick={()=>{ this.getCountry(this.state.value)}}>Search</Button>
      {/* <Button onClick={()=>{this.getCountry('brazil')}}>Brazil</Button>
      <Button onClick={()=>{this.getCountry('croatia')}}>Croatia</Button> */}
      <Card 
      id="card" 
      flag={this.state.flag} 
      capital={this.state.capital} 
      region={this.state.region}
      population={this.state.population}
      name={this.state.name}>

      </Card>
      </>

     );
  }
}
 
export default App;
