import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel} from '@core/models/movies.model'

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: MovieModel[], args: string | null = null, sort:string = 'asc'): Array<any> {
    console.log('1',value);
    console.log('2', args);
    console.log('3', sort);

    return value
  }

}
