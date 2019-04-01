import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeaService {

  public static fileUploader(file: File) {
    return new Promise<string | null>((resolve, reject) => {
      console.log('Helios uploader method from a static method')
      setTimeout(() => resolve(file.name), Math.random() + 1 * 2000)
    })
  }

  constructor() { }

}
