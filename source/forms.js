import postForms from "../services/postForms";
import writeOnlyNumbers from "./writeOnlyNumbers";
import windowOptions from "./windowOptions";



const forms = () => {
    
    const forms = document.querySelectorAll("form");
    let setWindowOptions = {};
    windowOptions(setWindowOptions);
        
    writeOnlyNumbers('input[name="user_phone"]');
    
    forms.forEach(form => {
        postForms(form, setWindowOptions);
    });
   


};

export default forms;