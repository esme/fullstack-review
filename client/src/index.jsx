import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import UserRepoList from './components/UserRepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      userRepos: []
    }
  this.getData = this.getData.bind(this);
  this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    console.log('mounted')
    this.getData();
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: { name: term }
    })
    .done(() => {
      this.getData();
      this.getUserData(term);
    })
    .catch((err) => console.log(err))
  }

  getData() {
    $.ajax({
      method: 'GET',
      url: '/repos',
    })
    .done((data) => {
    console.log('mounted data', data)
      this.setState({
        repos: data
      })
    })
    .catch((err) => console.log(err))
  }

  getUserData(term) {
    $.ajax({
      method: 'GET',
      url: '/repos/' + term,
    })
    .done((data) => {
    console.log('one user data', data)
      this.setState({
        userRepos: data
      })
    })
    .catch((err) => console.log(err))
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <UserRepoList repos={this.state.userRepos}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));