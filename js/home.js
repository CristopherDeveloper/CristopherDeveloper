const dropdownmenu = document.getElementById("dropdownmenu");
const buttonOpenDropDowMenu = document.getElementById("buttonOpenDropDowMenu");

buttonOpenDropDowMenu.addEventListener("click", () => {
    buttonOpenDropDowMenu.classList.toggle("opendrowmenuanimation");
    dropdownmenu.classList.toggle("opendropwmenu");
});

const setting = document.getElementById("setting");
const settingLogin = document.getElementById("settingLogin");
const settingALink = document.getElementById("settingALink");
const settingButton = document.getElementById("settingButton");

const dropDownMenuSettingIcon = document.getElementById("dropDownMenuSettingIcon");

const groudForHidden = [setting, settingLogin, settingALink, settingButton];

dropDownMenuSettingIcon.addEventListener("click", () => {
    dropdownmenu.classList.toggle("alertmenu--animation");
    if(setting.hasAttribute("hidden") === true){
        for(i = 0; i < 4; i++){
            groudForHidden[i].removeAttribute("hidden");
        };

    }else if(setting.hasAttribute("hidden") === false){
        for(i = 0; i < 4; i++){
            groudForHidden[i].setAttribute("hidden", "");
        };
    }
});



//---------------------------------------------------------------------------------------------------------------------------------------------------

const buttonShowDescription = document.querySelectorAll(".blog__template");

const buttonShowTheDescriptionFunctions = (buttonHtml, action, value) => {
    buttonHtml.forEach((Element) => {
        Element.addEventListener(action, () => {
            Element.firstElementChild.classList.toggle(value);
        })
    })
}

buttonShowTheDescriptionFunctions(buttonShowDescription, "mouseenter", "show");
buttonShowTheDescriptionFunctions(buttonShowDescription, "mouseleave", "show");