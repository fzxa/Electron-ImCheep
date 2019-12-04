import { GET_ORGANIZATION, GET_ORGANIZATION_INFO } from "./organizationType";

export type counterActions = GetOrganization | GetOrganizationInfo;

interface GetOrganization {
  type: GET_ORGANIZATION,
}

export function get_organization(): GetOrganization {
  return {
    type: GET_ORGANIZATION
  }
}

interface GetOrganizationInfo {
  type: GET_ORGANIZATION_INFO,
}

export function get_organization_info(): GetOrganizationInfo {
  return {
    type: GET_ORGANIZATION_INFO
  }
}
