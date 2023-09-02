import {ref} from "vue";
import { projectAuth } from "@/firebase/config";

const user=ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(_user =>{
    
    user.value = _user
})

const getUSer =() =>{
    return {user}
};

export default getUSer;