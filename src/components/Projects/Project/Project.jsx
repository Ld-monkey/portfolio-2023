/* eslint-disable react/prop-types */
import Icon from '../../Icons/Icons';
import './Project.css';

function Project({ values }) {
  return (
    <div className="project-container">
      <div className="project-preview">
        <a href={values.link} target="_blank" rel="noreferrer">
          <img
            src={values.previewImage}
            alt={values.alt}
            className="project-img"
          />
        </a>
      </div>
      <div className="project-content">
        <h4>
          {values.title} {values.period && <span>({values.period})</span>}
        </h4>
        <p>{values.description}</p>
        <div className="references-container">
          <ul>
            {values.codes && (
              <>
                {values.codes.map((code) => (
                  <li key={code.label}>
                    <p>{code.label}</p>
                    <a href={code.source} target="_blank" rel="noreferrer">
                      <Icon icon={code.icon} size={24} color="white" />
                    </a>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        <div className="technologies-container">
          {values.technologies && (
            <>
              <p>Technologies</p>
              <ul>
                {values.technologies.map((tech) => (
                  <li key={tech.label}>
                    <a
                      href={tech.source}
                      title={tech.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon
                        icon={tech.icon}
                        size={tech.size || 32}
                        color="white"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
