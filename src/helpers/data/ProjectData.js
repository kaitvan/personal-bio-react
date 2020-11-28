import axios from 'axios';

const baseUrl = 'https://personal-bio-ea514.firebaseio.com/';

const getAllProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`).then((response) => {
    const projects = [];
    Object.values(response.data).forEach((project) => {
      projects.push(project);
    });
    resolve(projects);
  }).catch((error) => reject(error));
});

export default getAllProjects;
