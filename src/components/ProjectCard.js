import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button,
} from 'reactstrap';

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <>
        <Card className='project-card m-1'>
          <CardImg className='card-image' top width="100%" src={project.screenshot} alt="Card image cap" />
          <CardBody className='card-body'>
            <div className='card-text'>
              <CardTitle className='card-title' tag="h5">{project.title}</CardTitle>
              <CardText>{project.description}</CardText>
              <Button className='view-project' href={project.url}>View Project</Button>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default ProjectCard;
