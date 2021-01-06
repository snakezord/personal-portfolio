import React from "react"
import { FaCompass, FaGithub } from "react-icons/fa"
import { ProjectType } from "../../types"
import { oneOf } from "prop-types"

const ProjectIcon = ({ icon }) =>
  icon === "github" ? (
    <FaGithub className="w-6 h-6" />
  ) : (
    <FaCompass className="w-6 h-6" />
  )

ProjectIcon.propTypes = {
  icon: oneOf(Object.keys(ProjectType.icons)),
}

export default ProjectIcon
