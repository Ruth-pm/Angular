import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const date = new Date(value);
    const now = new Date();
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const Day = hours * 24;

    const timeElapsed = Math.round(Math.abs(now.getTime() - date.getTime()));

    if (timeElapsed < hours) {
      return Math.round(timeElapsed / minutes).toString() + ' min ago';
    }
    else if (timeElapsed < Day) {
      return Math.round(timeElapsed / hours).toString() + ' hrs ago';
    }
    else if (timeElapsed < Day * 10) {
      return Math.round(timeElapsed / Day).toString() + ' days ago';
    }
    else {
      return date.toLocaleDateString('es-ES',{ 
        day:'numeric',month: 'short',
      });
    }
  }
}
