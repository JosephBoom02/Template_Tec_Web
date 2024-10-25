import React from 'react';

class Form extends React.Component {

	render() {
		return (
			<form>
				<label>
					Email:
				  <input type="text" name="email" value={this.props.email} onChange={this.props.onChange}/>
				</label>
				<label>
					Password:
				  <input type="password" name="password" value={this.props.password} onChange={this.props.onChange}/>
				</label>
				<label>
					Nazione:
				  <select value={this.props.nazione} name="nazione" onChange={this.props.onChange}>
						<option value="Italia">Italia</option>
						<option value="Francia">Francia</option>
						<option value="Spagna">Spagna</option>
						<option value="Germania">Germania</option>
					</select>
				</label>
				<button onClick={this.props.onClick}>Iscrivimi</button>
			</form>
		);
	}
}

export default Form;
