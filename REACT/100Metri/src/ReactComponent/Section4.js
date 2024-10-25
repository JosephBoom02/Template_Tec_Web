import React from 'react';

class Section4 extends React.Component{
	constructor(props){
	   super(props);	
	}
	
    render() {
        return (
            <div >
                {
                    this.props.started === true &&
                    <button 
                        onClick={this.props.reset} 
                        style={{ marginTop: '20px', padding: '10px 20px' }}
                    >
                    Reset
                    </button>
                }
            </div>
        );
    }

}
export default Section4;