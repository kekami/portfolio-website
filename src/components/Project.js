import React, { Component } from 'react'
import placeholder from '../images/placeholder.png';
import '../styles/Project.css';

class Project extends Component {
  render() {
    return (
      <article className="project">
        <img src={this.props.image} alt="Portfolio Item" />
        <div className="project__info">
          <h2>{this.props.title}</h2>
          { (this.props.githubURL && this.props.liveURL) ?
            <h6>
              <a href={this.props.githubURL}>GitHub</a>
              <a href={this.props.liveURL}>Live</a>
            </h6> :
            null
          }
          <h4>{this.props.description}</h4>
        </div>
      </article>
    );
  }
}

export default Project;

Project.defaultProps = {
  image: placeholder,
  title: 'Lorem ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum temporibus ipsum! Sequi a numquam alias omnis hic at quam. Odio minus obcaecati mollitia sint ex quis voluptatum temporibus! Molestias.'
};
