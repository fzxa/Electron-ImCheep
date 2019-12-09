import { counterActions } from '../actions/organization';
import { OrganizationSchemaState, OrganizationState} from '../types';
import {GET_ORGANIZATION, GET_ORGANIZATION_INFO} from '../actions/organization/organizationType';
import UserArr from './users';

const INITIAL_ITEM = {
    ID:"000001",
    FullName: "王振",
    NickName: "zanewang",
    PhoneNumber: "",
    Landline: "",
    PinYin: "",
    Level: "",
    Position: "",
    Workstation: "",
    Sex: "",
    Avatar: "/image/avatar.png",
    Profile: "",
    Department: "",
};

const INITIAL_STATE = {
    Profile: INITIAL_ITEM,
    OrganizationTree: {},
}


function CreateProfile(ID:string, FullName: string, NickName: string,  PhoneNumber: string, Landline: string, PinYin: string, Level: string, Position: string, Workstation: string, Sex: string, Avatar: string, Profile:string, Department: string): OrganizationState {
    return { ID, FullName, NickName, PhoneNumber, Landline, PinYin, Level, Position, Workstation, Sex, Avatar, Profile, Department };
}

function GetOrganization(state = INITIAL_STATE): OrganizationSchemaState {

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
    state.OrganizationTree = Org;
    return state;
}

function GetOrganizationInfo(state = INITIAL_STATE, uid = '0'): OrganizationSchemaState {

    let User:any = UserArr.find(user => user.uid === uid);
    if ( User ) {
        let Profile:OrganizationState = CreateProfile(User.uid, User.name, User.courtesyName, '','837402', User.pinyin, User.rank, User.devoteFor, User.nativePlace, User.gender, User.avatar, User.otherInfo, User.otherInfo);
        state.Profile = Profile;
    }

    return state;
}



export default function Organization(state= INITIAL_STATE, action: counterActions):OrganizationSchemaState {
    switch (action.type) {
        case GET_ORGANIZATION:
            return GetOrganization(state);

        case GET_ORGANIZATION_INFO:
            let uid:string = action.uid;
            return GetOrganizationInfo(state, uid);

        default:
            return state
    }
}
