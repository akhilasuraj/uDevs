import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { AuthenticationService } from '../user/authentication.service';

export interface xx{
    no:number
}
export interface ViewProjectObject{
    project_ID: number,
    client_ID: number,
    developer_ID:number
}

export interface ViewDeveloperObject{
    user_ID: number,
    skill_ID: number
}


export interface bidResponseDetails{
    developer_ID: number,
    project_ID: number,
    bid_value: number,
    isViewed: boolean,
    isAccepted: boolean
}


export interface requestDetails{
    developer_ID: number,
    project_ID: number,
    isViewed: boolean,
    isAccepted: boolean
}

export interface requestDeveloperDetails{
    client_ID:number
    developer_ID: number,
    project_ID: number,
    isViewed: boolean,
    isAccepted: boolean
}




@Injectable()
export class AuthHomeService {

    constructor(private http: HttpClient, private router: Router, private auth: AuthenticationService) {}

    img_link = "http://localhost:3000/"

    //developer
  
    public webProject(): Observable<any> {
        return this.http.get(`/users/dev_home/webProject`)
    }

    public mobProject(): Observable<any> {
        return this.http.get(`/users/dev_home/mobProject`)
    }

    public dataProject(): Observable<any> {
        return this.http.get(`/users/dev_home/dataProject`)
    }

    public softProject(): Observable<any> {
        return this.http.get(`/users/dev_home/softProject`)
    }

    public blockchain(): Observable<any> {
        return this.http.get(`/users/dev_home/blockchain`)
    }

    public machlearn(): Observable<any> {
        return this.http.get(`/users/dev_home/machlearn`)
    }

    public natlang(): Observable<any> {
        return this.http.get(`/users/dev_home/natlang`)
    }

    public digimark(): Observable<any> {
        return this.http.get(`/users/dev_home/digimark`)
    }

    public multiDesign(): Observable<any> {
        return this.http.get(`/users/dev_home/multiDesign`)
    }

    public robot(): Observable<any> {
        return this.http.get(`/users/dev_home/robot`)
    }
    


    public dev_getProject(details): Observable<any> {
        return this.http.post(`/users/dev_home/dev_getProject`,details)
    }

    public dev_getClient(details: ViewProjectObject): Observable<any> {
        return this.http.post(`/users/dev_home/dev_getClient`,details)
    }

    public dev_getBid(details: ViewProjectObject): Observable<any> {
        return this.http.post(`/users/dev_home/dev_getBid`,details)
    }


    public sendBid(bid:bidResponseDetails):Observable<any>{
        return this.http.post(`/users/dev_home/sendBid`,bid)
    }

    public getBid(bid: ViewProjectObject):Observable<any>{
        return this.http.post(`/users/dev_home/getBid`,bid)
    }

    public editBid(bid:bidResponseDetails):Observable<any>{
        return this.http.post(`/users/dev_home/editBid`,bid)
    }

    public deleteBid(bid: ViewProjectObject):Observable<any>{
        return this.http.post(`/users/dev_home/deleteBid`,bid)
    }

    public sendRequest(request:requestDetails):Observable<any>{
        return this.http.post(`/users/dev_home/sendRequest`,request)
    }


    public cancleRequest(request:requestDetails):Observable<any>{
        return this.http.post(`/users/dev_home/cancleRequest`,request)
    }

    public getRequest(request:ViewProjectObject):Observable<any>{
        return this.http.post(`/users/dev_home/getRequest`,request)
    }



    //client

    public webDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/webDeveloper`)
    }

    public mobDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/mobDeveloper`)
    }

    public dataDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/dataDeveloper`)
    }

    public softDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/softDeveloper`)
    }

    public blockDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/blockDeveloper`)
    }

    public machineDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/machineDeveloper`)
    }

    public langDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/langDeveloper`)
    }

    public digiMarkDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/digiMarkDeveloper`)
    }

    public multiDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/multiDeveloper`)
    }

    public robotDeveloper(): Observable<any> {
        return this.http.get(`/users/cli_home/robotDeveloper`)
    }


    public cli_getDeveloper(details): Observable<any> {
        return this.http.post(`/users/cli_home/cli_getDeveloper`,details)
    }

    public cli_getTechno(details): Observable<any> {
        return this.http.post(`/users/cli_home/cli_getTechno`,details)
    }

    public cli_sendRequest(request:requestDeveloperDetails):Observable<any>{
        return this.http.post(`/users/cli_home/sendRequest`,request)
    }


    public cli_cancleRequest(request:requestDeveloperDetails):Observable<any>{
        return this.http.post(`/users/cli_home/cancleRequest`,request)
    }

    public cli_getAllRequest(request:requestDeveloperDetails):Observable<any>{
        return this.http.post(`/users/cli_home/getAllRequest`,request)
    }

}