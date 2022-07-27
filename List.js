import React from "react";

const List = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        const { id, name, info, image, link } = project;
        return (
          <article key={id} className="project">
            <a href={link}>
              <img src={image} alt={name} />
            </a>
            <div className="aboutProject">
              <h4 className="h4">{name}</h4>
              <p>{info}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
