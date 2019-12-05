import { counterActions } from '../actions/organization';
import { OrganizationListState } from '../types';
import { GET_ORGANIZATION } from '../actions/organization/organizationType';
import UserArr from './users';

// const INITIAL_ITEM = {
//     ID:0,
//     FullName: "",
//     PhoneNumber: "",
//     Landline: "",
//     PinYin: "",
//     Level: "",
//     Position: "",
//     Workstation: "",
//     Sex: "",
//     Avatar: "",
//     Profile: "",
//     Department: "",
// };

const INITIAL_STATE = {

}


// function CreateOrganization(ID:number, FullName: string, PhoneNumber: string, Landline: string, PinYin: string, Level: string, Position: string, Workstation: string, Sex: string, Avatar: string, Profile:string, Department: string): OrganizationState {
//     return { ID, FullName, PhoneNumber, Landline, PinYin, Level, Position, Workstation, Sex, Avatar, Profile, Department };
// }

function GetOrganization(): OrganizationListState {

    let devoteForArr: Array<string> = ['蜀','吴','袁绍','东汉','在野','董卓','西晋','刘表','起义军','少数民族','刘璋','袁术','其他'];
    let Org:any = {};
    UserArr.map((value: any, index: number)=>{
        devoteForArr.map((devote: any, i:number)=>{
            if(value.devoteFor == devote) {
                if(Org[value.devoteFor] == undefined) {
                    Org[value.devoteFor] = [];
                }
                Org[value.devoteFor].push(value);
            }
        });
    });
    return Org;
    // return [
    //     CreateOrganization(1, '王振','13693067204', '837402', 'wangzhen','T10','高级工程师','web开发','1','1.jpg','hello','简介')
    // ];
}

// function GetOrganizationInfoByID( UserArr: any, ID: number ): OrganizationState {
//     return UserArr.find(Organization => Organization.ID === ID);
// }



export default function Organization(state= INITIAL_STATE, action: counterActions):OrganizationListState {
    switch (action.type) {
        case GET_ORGANIZATION:
            console.log('action...', action.type);
            return GetOrganization();
        default:
            return state
    }
}
