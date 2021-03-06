import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import getAllProjects from '../helpers/data/ProjectData';

class Portfolio extends Component {
  state = {
    projects: [],
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => getAllProjects().then((response) => {
    this.setState({ projects: response });
  })

  render() {
    const showProjects = () => (
      this.state.projects.map((project) => <ProjectCard key={project.url} project={project}/>)
    );

    return (
      <div className='main'>
        <h1 className='title'>Portfolio</h1>
        <div className='text'>
          <div className='d-flex flex-wrap'>{showProjects()}</div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
