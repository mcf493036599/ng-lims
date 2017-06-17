import {Injectable} from '@angular/core';
import {Department} from '../class/department';
import {User} from '../class/user';
import {Instrument} from '../class/instrument';
import {Reservation} from '../class/reservation';
import {Observable} from "rxjs/Observable";
import {Http, Response, Headers, ResponseOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LimsRestService {
  private restUrl = 'http://localhost:8000/api'

  constructor(private http: Http) {
  }
  private fetchData(url: String): any {
    let urlStr = `${this.restUrl}/${url}`;
    return this.http.get(urlStr);
  }
  getDepartmentList(): Observable<Department[]> {
    return this.fetchData('department')
      .map(this.extractDataList)
      .catch(this.handleError);
  }

  getInstrument(id: number): Observable<Instrument> {
    return this.fetchData(`instrument/${id}`)
      .map(this.extractData)
      .catch(this.handleError)
  }
  getInstrumentList(): Observable<Instrument[]> {
    return this.fetchData(`instrument`)
      .map(this.extractDataList)
      .catch(this.handleError);
  }
  getUser(userID: number): Observable<User> {
    return this.fetchData(`user/${userID}`)
      .map(this.extractData)
      .catch(this.handleError)
  }
  getInstrumentListByDepartment(departmentID: number): Observable<Instrument[]> {
    if (departmentID === 0) {
      return this.getInstrumentList();
    }
    else {
      let urlStr = `${this.restUrl}/instrument/?department=${departmentID}`;
      return this.http.get(urlStr)
        .map(this.extractDataList)
        .catch(this.handleError);
    }
  }

  private extractDataList(res: Response) {
    let body = res.json();
    return body.results || {};
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
