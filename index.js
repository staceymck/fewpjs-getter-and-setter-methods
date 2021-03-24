class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  set diameter(diameter) {
    if (diameter > 0) {
      this.radius = diameter/2;
    } else {
      console.warn("Diameter must be greater than 0")
    }   
  }

  set area(area) {
    if (area > 0) {
      this.radius = Math.sqrt(area/Math.PI); 
    } else {
      throw new Error('The area must be greater than 0')
    }
  }

  set circumference(circumference) {
    if (circumference > 0) {
      this.radius = (circumference/2)/Math.PI;
    } else {
      throw new Error('The circumference must be greater than 0')
    }
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.radius * 2 * Math.PI;
  }

  get area() {
    return Math.PI * this.radius * this.radius;
  }
}