import { counterActions } from '../actions/organization';
import { OrganizationState } from '../types';
import { GET_ORGANIZATION, GET_ORGANIZATION_INFO } from '../actions/organization/organizationType';
import userArr from './users';

const INITIAL_STATE = {
    ID:0,
    FullName: "",
    PhoneNumber: "",
    Landline: "",
    PinYin: "",
    Level: "",
    Position: "",
    Workstation: "",
    Sex: "",
    Avatar: "",
    Profile: "",
    Department: "",
};



export default function Organization(state = INITIAL_STATE, action: counterActions):OrganizationState {
    switch (action.type) {
        case GET_ORGANIZATION:
            console.log('org...')
            console.log(userArr);
            return state;
        case GET_ORGANIZATION_INFO:
            console.log(GET_ORGANIZATION_INFO);
            return state;
        default:
            return state;
    }
}
