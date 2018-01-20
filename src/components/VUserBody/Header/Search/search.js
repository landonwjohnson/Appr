import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            groups: [],
            projects: []
        };
    }
    

	componentWillMount() {
		const userid = this.props.match.params.userid;
		findDashboardInfo(userid)
			.then( res => {
				res.status !== 200 ? console.log(res) : this.setState(res.data);
			})
			.catch(err => {throw err});
    }


    findMatches(wordsToMatch, oldState) {
        const oldState = this.state
        return oldState.filter((groups, projects) => {
            const regex = RegExp(wordsToMatch, 'gi');
            return this.state.group(regex) || this.state.projects(regex);

        })
    }

    displayMatches() {
        const oldState = this.state;
        const matchArray = findMatches(this.value, oldState);
        const html = matchArray.map((groups, projects)) => {
            const regex = new RegExp(this.value, 'gi');
            const groupName = this.state.groups.name.replace(regex, `<span class="search-hl">${this.value}</span>`);
            const projectName = this.state.project.name.replace(regex, `<span class="search-hl">${this.value}</span>`);

        }

    }
    

render() {
    return(<div></div>);

    }
}

export default Search;