
import DatePickerPlugin from 'src/plugin/date-picker/date-picker.plugin';
import DomAccess from 'src/helper/dom-access.helper'

export default class ExtendDatePickerPlugin extends DatePickerPlugin{
    init(){
        super.init();
        this.initializeHiddenFields();
    }


    initializeHiddenFields(){
        this.inputDay = DomAccess.querySelector(document, this.options.selectors.inputDay);
        this.inputMonth = DomAccess.querySelector(document, this.options.selectors.inputMonth);
        this.inputYear = DomAccess.querySelector(document, this.options.selectors.inputYear);


        this.flatpickrElement.config.onChange.push((function(selectedDates){
            const birthdayDate = selectedDates[0]
            this.inputDay.value = birthdayDate.getDate();
            this.inputMonth.value = birthdayDate.getMonth() + 1;
            this.inputYear.value = birthdayDate.getFullYear();
        }).bind(this));
    }
}