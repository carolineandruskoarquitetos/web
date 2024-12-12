import {
  comercialCorporativoProjects,
  comercialCorporativoProjectDetails,
} from "./comercialCorporativo";
import { mostrasProjectDetails, mostrasProjects } from "./mostras";
import { residencialProjectDetails, residencialProjects } from "./residencial";

const projects = [
  ...comercialCorporativoProjects,
  ...mostrasProjects,
  ...residencialProjects,
];

const projectDetails = [
  ...comercialCorporativoProjectDetails,
  ...mostrasProjectDetails,
  ...residencialProjectDetails,
];

export { projects, projectDetails };
