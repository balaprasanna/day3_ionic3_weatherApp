import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from "@ionic/storage";

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  API_KEY :string= "3af4185f06b6f8d839b72273c3d006f4"

  readonly CITIES:string = "cities"

  constructor(
        public http: HttpClient,
        private storage: Storage) {
    console.log('Hello WeatherProvider Provider');
    
  }

  loadCities(): Promise<any> {
    return (this.storage.get(this.CITIES))
  }

  saveCities(cities: string[]):Promise<any> {
    return (this.storage.set(this.CITIES,cities))
  }

  addACity(city: string):Promise<any> {

    const p = new Promise((resolve, reject) => {

      this.loadCities()
            .then((data) => {
              if (data.length > 0) {
                data.push(city);
                this.saveCities(data);
                return (data)
              }
            })
            .then((data_retured) => { 
              resolve(data_retured)
              console.log("The data_retured comes from , `data` variable inside load cities then function")
             })
            .catch((error) => {
              reject(error);
            })
    });

   return (p);
  }


}
