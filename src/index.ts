function formatString(input: string, toUpper?: boolean): string {
   return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}

function filterByRating(
   items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
   return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]) {
   return arrays.flat();
}

class Vehicle {
   constructor(private make: string, public year: number) {}

   getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
   }
}

class Car extends Vehicle {
   constructor(make: string, year: number, private model: string) {
      super(make, year);
   }

   getModel(): string {
      return `Model: ${this.model}`;
   }
}

function processValue(value: string | number): number {
   return typeof value === 'string' ? value.length : value * 2;
}

interface Product {
   name: string;
   price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
   return products.length > 0
      ? products.reduce((maxProduct, currentProduct) =>
           currentProduct.price > maxProduct.price ? currentProduct : maxProduct
        )
      : null;
}

enum Day {
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
   Sunday,
}

function getDayType(day: Day): string {
   switch (day) {
      case Day.Monday:
      case Day.Tuesday:
      case Day.Wednesday:
      case Day.Thursday:
      case Day.Friday:
         return 'Weekday';
      case Day.Saturday:
      case Day.Sunday:
         return 'Weekend';
      default:
         return 'Invalid Date';
   }
}

async function squareAsync(n: number): Promise<number> {
   return new Promise((resolve, reject) => {
      if (n < 0) {
         reject('Number cannot be negative');
      } else {
         setTimeout(() => {
            resolve(n * n);
         }, 1000);
      }
   });
}
