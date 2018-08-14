import {Polygon}from"./polygon"

class Square extends Polygon {
  constructor(dim = 5) {
    super(dim, dim);
    this.name = 'Square';
  }
}


export {Square};
