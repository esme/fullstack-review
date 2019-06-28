import React from 'react';
import Repo from './Repo.jsx';

const UserRepoList = (props) => (
  <div>
    <h4> Current User Repos </h4>
    <div>
      {props.repos.map(el => <Repo repo={el}/>)}
    </div>
  </div>
)

export default UserRepoList;