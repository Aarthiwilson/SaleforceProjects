import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Name from '@salesforce/schema/Customer__c.Name';
import Phone from '@salesforce/schema/Customer__c.Phone__c';
import Email from '@salesforce/schema/Customer__c.Email__c';
import Product from '@salesforce/schema/Customer__c.Product_Name__c';
import Street from '@salesforce/schema/Customer__c.Street__c';
import State from '@salesforce/schema/Customer__c.State__c';
import City from '@salesforce/schema/Customer__c.City__c';
import Pincode from '@salesforce/schema/Customer__c.Pincode__c';
import Country from '@salesforce/schema/Customer__c.Country__c';

export default class LightningRecordFormCreateExampleLWC extends LightningElement {
    @api objectApiName;
    fields = [
        Name,
        Phone,
        Email,
        Product,
        Street,
        State,
        City,
        Pincode,
        Country
    ];
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}
