import { OpenPage } from "./urlPageCMSP";

class AlertCMSP extends OpenPage{
    get passAlert (){
        return browser.$("//div[contains(text(),'Login Successfully.')]");
    }
}

module.exports = AlertCMSP


