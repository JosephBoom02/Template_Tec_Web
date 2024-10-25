//Big button
<button 
onClick={this.props.reset} 
style={{ marginTop: '20px', padding: '10px 20px' }}
>
Reset
</button>

//Two section to show data
class TwoSection extends React.Component{
	constructor(props){
	   super(props);	
	}
	
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ textAlign: 'center' }}>
                    <h3>Posizioni:</h3>
                    {this.props.posizioni.map((posizione, corridore) => (
                        <div key={corridore}>
                            Corridore {corridore + 1}:   
                            <input 
                                type="text" 
                                readOnly 
                                value={`${posizione}`} 
                            /> 
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginLeft: '20px' }}>
                    <h3>Classifica:</h3>
                    {/* Assuming you have a prop called 'classifica' that is an array */}
                    {this.props.classifica.map((corridore, index) => (
                        <div key={index}>
                            Corridore {index + 1}:   
                            <input 
                                type="text" 
                                readOnly 
                                value={`${corridore}`} 
                            /> 
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


//Run a function every x seconds
startInterval = () => {
    // Check if an interval is already running
    if (this.state.intervalId) return;

    // Set up the interval
    const intervalId = setInterval(() => {
      this.avanza();
    }, 1000); // 4000 milliseconds = 4 seconds

    // Update the state with the interval ID
    this.setState({ intervalId });
  };

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    const { intervalId } = this.state.intervalId;
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

