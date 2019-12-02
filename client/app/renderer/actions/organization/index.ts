import { GET_ORGANIZATION, GET_ORGANIZATION_INFO } from "./organizationType";

export type counterActions = GetOrganization | getOrganizationInfo;

interface GetOrganization {
  type: GET_ORGANIZATION,
}

export function get_organization(): GetOrganization {
  return {
    type: GET_ORGANIZATION
  }
}

interface getOrganizationInfo {
  type: GET_ORGANIZATION_INFO,
}

export function get_organization_info(): getOrganizationInfo {
  return {
    type: GET_ORGANIZATION_INFO
  }
}
