import React from 'react'; 
import { Link } from 'react-router';


const Main = React.createClass({
    render(){
        return(
            <div>
                <h1>
                    <Link to="/">Reduxtagram</Link>
                </h1>
                {/* using cloneElement becasue we cannot pass props through a component */}
                {React.cloneElement(this.props.children, this.props)} 
            </div>
        )
    }
})

export default Main; 