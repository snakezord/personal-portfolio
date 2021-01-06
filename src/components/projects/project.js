import Img from "gatsby-image";
import React from "react";
import { ProjectType } from "../../types";
import ProjectIcons from "./project-icons";
import ProjectStatus from "./project-status";
import ProjectTags from "./project-tags";

const Project = (props) => {
  const { name, image, url, description, status, tags, icons } = props;
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6 hover:shadow-md transition-shadow duration-150">
      {image && (
        <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
          <Img fluid={image.childImageSharp.fluid} alt={name} />
        </div>
      )}
      <div className="lg:flex-1 w-full">
        <h4 className="font-bold">{name}</h4>
        {url && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {url}
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">
          {status && <ProjectStatus status={status} />}
          {tags && <ProjectTags tags={tags} />}
        </ul>

        {icons && <ProjectIcons icons={icons} />}
      </div>
    </div>
  );
};

Project.propTypes = ProjectType;

export default Project;
