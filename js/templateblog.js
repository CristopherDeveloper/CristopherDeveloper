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

//------------------------------

const simpleactionfunctiontoggle = (variable, action, valueCss) => {
    variable.addEventListener(action, () => {
        variable.classList.toggle(valueCss);
    })
}

const buttonHouse = document.getElementById("buttonHouse");

setTimeout(() => {
    buttonHouse.classList.toggle('showhousebutton')
}, 2000)

simpleactionfunctiontoggle(buttonHouse, "mouseenter", 'opacitybuttonhouse');
simpleactionfunctiontoggle(buttonHouse, "mouseleave", 'opacitybuttonhouse');

const iconHouse = document.getElementById("iconHouse");

const simpleFuctionIconFill = (variable, action, valueSetAttribute) => {
    variable.addEventListener(action, () => {
        variable.setAttribute("src", valueSetAttribute)
    })
};

simpleFuctionIconFill(iconHouse, "mouseenter", "../img/icon/home-icons-fill.svg");
simpleFuctionIconFill(iconHouse, "mouseleave", "../img/icon/home-icons.svg");

const asideAlertRecomend = document.getElementById("asideAlertRecomend");
const buttonRedClose = document.getElementById("buttonRedClose");

buttonRedClose.addEventListener("click", () => {
    asideAlertRecomend.classList.toggle("opentheaside");
});

setTimeout(() => {
    asideAlertRecomend.classList.toggle("opentheaside");
}, 60000);
