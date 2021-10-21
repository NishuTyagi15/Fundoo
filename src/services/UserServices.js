import AxiosService from './AxiosService';

const obj = new AxiosService();
const baseurl = "http://fundoonotes.incubation.bridgelabz.com/api/"
const token = localStorage.getItem("token");
const headerconfig = {
    headers: {
    Authorization: token,
    }
};

class UserServices {
    signup(data) {
        let response = obj.postMeth(`${baseurl}user/userSignUp`, data);
        return response;
    }
    signin(data) {
        let response = obj.postMeth(`${baseurl}user/login`, data);
        return response;
    }
    forgot(data) {
        let response = obj.postMeth(`${baseurl}user/reset`, data);
        return response;
    }
    reset(data) {
        let response = obj.postMeth(`${baseurl}user/reset-password`, data, headerconfig);
        return response;
    }
    notes(data) {
        let response = obj.postMeth(`${baseurl}notes/addNotes`, data, headerconfig);
        return response;
    }
    displayNotes(){
        let response = obj.getMethod(`${baseurl}notes/getNotesList`, headerconfig);
        return response;
    }
    changeColor(data){
        let response = obj.postMeth(`${baseurl}notes/changesColorNotes`, data, headerconfig);
        return response;
    }
    archiveNotes(data){
        let response = obj.postMeth(`${baseurl}notes/archiveNotes`, data, headerconfig);
        return response;
    }
    deleteNotes(data){
        let response = obj.postMeth(`${baseurl}notes/trashNotes`, data, headerconfig);
        return response;
    }
    updateNotes(data){
        let response = obj.postMeth(`${baseurl}notes/updateNotes`, data, headerconfig);
        return response;
    }
}

export default UserServices
