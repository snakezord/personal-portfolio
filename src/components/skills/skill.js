import React from "react"
import { number, string } from "prop-types"
import SkillSvg from "./skill.svg"

const Skill = ({ skill, i }) => (
  <li
    className={`relative flex justify-center items-center rounded-full border-2 border-skill-${i}`}
  >
    <span
      className="absolute font-header font-semibold text-front text-sm md:text-base px-2 text-center"
      style={{ zIndex: 3 }}
    >
      {skill}
    </span>
    <SkillSvg
      className={`w-full text-skill-${i} opacity-75 m-2 animate-spin`}
    />
  </li>
)

Skill.propTypes = {
  skill: string.isRequired,
  i: number.isRequired,
}

export default Skill
