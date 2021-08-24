import React from 'react'

class Button extends React.Component {

    render() { 
        console.log(this.props);
        return ( 

            <>
            <input type="text" value={this.props.value} onChange={this.props.onChange} />
            <button onClick={this.props.onClick} >
                {this.props.children}
            </button>
            </>
         );
    }
}
 


export default Button;