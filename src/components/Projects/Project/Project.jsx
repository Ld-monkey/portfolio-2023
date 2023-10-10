/* eslint-disable react/prop-types */
import Icon from '../../Icons/Icons';
import './Project.css';

function Project({values}) {
  return (
    <div className="project-container">
      <a href={values.link} target="_blank" rel="noreferrer">
        <img src={values.previewImage} alt={values.alt} className="project-img" />
      </a>
      <div className="project-content">
        <h4>{values.title}</h4>
        <p>{values.description}</p>
        <div className="references-container">
          <ul>
            {values.codes.frontEnd && (
              <li>
                <p>Front end</p>
                <a href={values.codes.frontEnd} target="_blank" rel="noreferrer">
                  <Icon icon="github" size={24} color="white" />
                </a>
              </li>
            )}
            {values.codes.backEnd && (
              <li>
                <p>Back end</p>
                <a href={values.codes.backEnd} target="_blank" rel="noreferrer">
                  <Icon icon="github" size={24} color="white" />
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="technologies-container">
          <p>Technologies</p>
          <ul>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <Icon icon="react" size={32} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
