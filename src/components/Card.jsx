import React from 'react'

class Card extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div id={this.props.id}>
                <img className="flag" src={this.props.flag} alt="" />
                <h1>Countries: <br /> {this.props.name}</h1>
                <h3>Capital: {this.props.capital}</h3>
                <p> <i></i> Region: <br /> {this.props.region}</p>
                <p> <i></i> Population: <br /> {this.props.population} </p>
            </div>

         );
    }
}
 
export default Card;