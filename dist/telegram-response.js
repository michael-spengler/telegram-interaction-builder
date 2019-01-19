"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triggeringEvents;
(function (triggeringEvents) {
    triggeringEvents["text"] = "text";
    triggeringEvents["callbackQuery"] = "callbackQuery";
    triggeringEvents["wildCard"] = "*";
})(triggeringEvents = exports.triggeringEvents || (exports.triggeringEvents = {}));
class TelegramResponse {
    constructor(target, text, actions) {
        this.target = target;
        this.text = text;
        this.actions = actions;
    }
    getTarget() {
        return this.target;
    }
    getText() {
        return this.text;
    }
    getActions() {
        return this.actions;
    }
}
exports.TelegramResponse = TelegramResponse;
