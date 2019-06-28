import React from 'react';

const Repo = (props) => (
  <div>
    <a href={props.repo.html_url}>{props.repo.full_name}</a>
    {/* <p>{props.repo.stargazers_count}</p>
    <p>{props.repo.forks_count}</p> */}
  </div>
)

export default Repo;