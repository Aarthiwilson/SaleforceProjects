import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Customer__c.Name';
import PHONE_FIELD from '@salesforce/schema/Customer__c.Phone__c';
import EMAIL_FIELD from '@salesforce/schema/Customer__c.Email__c';
import PRODUCT from '@salesforce/schema/Customer__c.Product_Name__c';
import ADDRESS from '@salesforce/schema/Customer__c.Address__c';

export default class LightningRecordFormCreateExampleLWC extends LightningElement {
    // objectApiName is "Account" when this component is placed on an account record page
    @api objectApiName;
    fields = [NAME_FIELD, PHONE_FIELD, EMAIL_FIELD, PRODUCT, ADDRESS];
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}
