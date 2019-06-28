import React from 'react';
import Repo from './Repo.jsx';

const UserRepoList = (props) => (
  <div>
    <h4> Current User Repos </h4>
    <p>{props.repos.length} new repos imported from {props.repos[0].login}</p>
    <div>
      {props.repos.map(el => <Repo repo={el}/>)}
    </div>
  </div>
)

export default UserRepoList;