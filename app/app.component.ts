import {Component} from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'appComponent',
	template: `
	<div style="margin-left : 10px">
		<h1>Test download</h1>
		<input type="text" placeholder="Input the file path from app.component.ts" [(ngModel)]="filePath" style="width:400px" class="form-control"/><br>
		<input type="text" placeholder="Input the name to save the file as" [(ngModel)]="fileName" style="width:400px" class="form-control"/><br>
		<button (click)="takeFile()" class="btn btn-default">Download file</button><br>
	</div>
	`
})

export class AppComponent{

    filePath : string = "";
    fileName : string = "";
   
    takeFile(){
        console.log("Will upload a file");
        this.getFile(this.filePath,this.fileName);
    }
    
    getFile (url,fileName){
        let xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
        
            if (xhr.readyState == XMLHttpRequest.DONE) {
                console.log(xhr.response);
                saveAs(xhr.response,fileName);
                console.log("File downloaded.");
            }
            
        }
        
        xhr.open('GET', url, true);
        xhr.responseType = "blob"
        xhr.send(null);
    }
}