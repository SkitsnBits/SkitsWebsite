import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(public http: HttpClient) {
    this.asyncConstructor();
  }

  async asyncConstructor() {
    await this.fetchData();
  }

  async fetchData() {
    this.staffList = await this.http.get("data/staff_list.json").toPromise() || {};
    this.platformLinks = await this.http.get("data/platform_links.json").toPromise() || {};
    
  }

  staffList: any = []
  platformLinks: any = []

}
