import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    
   
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) { }
    email: string;
    phone: string;
    comments: string;

    ngOnInit() {
    }
    onClickSubmit(data: any, @Inject('BASE_URL') baseUrl: string) {
        debugger;
        this.email = data.email;
        this.phone = data.phone;
        this.comments = data.comments;
       
        const req = this.http.post(baseUrl +'api/Contact/SendUsermail', {
           
            title: 'foo',
            body: 'bar',
            userId: 1
        })        
            .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
            );
    }

}
