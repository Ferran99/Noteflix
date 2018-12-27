import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ordenarPerPelicula"
})
export class OrdenarPerPelicula implements PipeTransform {
  transform(array: Array<any>, args?) {

    if (array) {
      let ordernarPerValor = args[0]
      let perValor = 1
      if (ordernarPerValor.charAt(0) == "!") {
        perValor = -1
        ordernarPerValor = ordernarPerValor.substring(1)
      }
     
      array.sort((a: any, b: any) => {
        if (a[ordernarPerValor] < b[ordernarPerValor]) {
          return -1 * perValor;
        } else if (a[ordernarPerValor] > b[ordernarPerValor]) {
          return 1 * perValor;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
}