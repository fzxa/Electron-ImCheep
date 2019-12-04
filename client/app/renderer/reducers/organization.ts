import { counterActions } from '../actions/organization';
import { OrganizationState, OrganizationStoreState} from '../types';
import { GET_ORGANIZATION } from '../actions/organization/organizationType';
// import userArr from './users';

const INITIAL_ITEM = {
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

const INITIAL_STATE = {
    Organization:[INITIAL_ITEM],
}


function CreateOrganization(ID:number, FullName: string, PhoneNumber: string, Landline: string, PinYin: string, Level: string, Position: string, Workstation: string, Sex: string, Avatar: string, Profile:string, Department: string): OrganizationState {
    return { ID, FullName, PhoneNumber, Landline, PinYin, Level, Position, Workstation, Sex, Avatar, Profile, Department };
}

function GetOrganization(): OrganizationState[] {
    return [
        CreateOrganization(1, '王振','13693067204', '837402', 'wangzhen','T10','高级工程师','web开发','1','1.jpg','hello','简介')
    ];
}

// function GetOrganizationInfoByID( UserArr: any, ID: number ): OrganizationState {
//     return UserArr.find(Organization => Organization.ID === ID);
// }



export default function Organization(state= INITIAL_STATE, action: counterActions):OrganizationStoreState {
    switch (action.type) {
        case GET_ORGANIZATION:

            return {
                Organization: GetOrganization()
            };

        default:
            return state
    }
}
