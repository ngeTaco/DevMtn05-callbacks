describe('first', function () {
  it('should exist and be a function', function () {
    expect(first).toBeDefined();
    expect(first).toEqual(jasmine.any(Function));
  });
  it('should return the first item of a passed array to the callback', function () {
    const arr = ['test', 'no'];
    const callback = jasmine.createSpy(function (str) {
      return str;
    });
    first(arr, callback);
    expect(callback).toHaveBeenCalledWith('test');
  });
});
describe('last', function () {
  it('should exist and be a function', function () {
    expect(last).toBeDefined();
    expect(last).toEqual(jasmine.any(Function));
  });
  it('should return the last item of a passed array to the callback', function () {
    const arr = ['test', 'no'];
    const callback = jasmine.createSpy(function (str) {
      return str;
    });
    last(arr, callback);
    expect(callback).toHaveBeenCalledWith('no');
  });
});
describe('multiply', function () {
  it('should exist and be a function', function () {
    expect(multiply).toBeDefined();
    expect(multiply).toEqual(jasmine.any(Function));
  });
  it('should multiply the first two parameters and pass the result to the callback', function () {
    const callback = jasmine.createSpy(function (num) {
      return num;
    });
    multiply(25, 4, callback);
    expect(callback).toHaveBeenCalledWith(100);
  });
});
describe('contains', function () {
  let arr, callback;
  beforeEach(function () {
    callback = jasmine.createSpy(function (bool) {
      return bool;
    });
    arr = ['tester', 'stuart', 'jim'];
  });
  it('should exist and be a function', function () {
    expect(contains).toBeDefined();
    expect(contains).toEqual(jasmine.any(Function));
  });

  it('should return a boolean to the callback', function () {
    contains(arr, 'tester', callback);
    expect(callback).toHaveBeenCalledWith(jasmine.any(Boolean));
  });
  it('should return true to the callback if the name is in the array', function () {
    contains(arr, 'tester', callback);
    expect(callback).toHaveBeenCalledWith(true);
  });
  it('should return false to the callback if the name is not in the array', function () {
    contains(arr, 'craig', callback);
    expect(callback).toHaveBeenCalledWith(false);
  });
});
describe('each', function () {
  let arr, callback;
  beforeEach(function () {
    callback = jasmine.createSpy(function (item, index) {
      return;
    });
    arr = ['tester', 'alice', 'bob', 'tester', 'charlie', 'danielle', 'tester', 'charlie', 'alice'];
  });
  it('should exist and be a function', function () {
    expect(each).toBeDefined();
    expect(each).toEqual(jasmine.any(Function));
  });
  it('should return an item and an index to the callback', function () {
    each(arr, callback);
    expect(callback).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Number));
  });
  it('should call the callback once for each item in the array', function () {
    each(arr, callback);
    expect(callback.calls.count()).toBe(arr.length);
  });
});
describe('getUserById', function () {
  let arr, callback;
  beforeEach(function () {
    callback = jasmine.createSpy(function (obj) {
      return;
    });
    arr = [
      {
        id: '12d',
        email: 'test@gmail.com',
        name: 'Tester 1',
        address: '167 East 500 North',
      },
      {
        id: '15a',
        email: 'test2@gmail.com',
        name: 'Tester 2',
        address: '135 East 320 North',
      },
      {
        id: '16t',
        email: 'test3@gmail.com',
        name: 'Tester 3',
        address: '192 East 32 North',
      },
    ];
  });
  it('should exist and be a function', function () {
    expect(getUserById).toBeDefined();
    expect(getUserById).toEqual(jasmine.any(Function));
  });
  it('should pass an object to the callback', function () {
    getUserById(arr, '16t', callback);
    expect(callback).toHaveBeenCalledWith(jasmine.any(Object));
  });
  it('should pass an object with email, address, and name properties to the callback', function () {
    getUserById(arr, '16t', callback);
    expect(callback.calls.argsFor(0)[0].hasOwnProperty('email')).toBe(true);
    expect(callback.calls.argsFor(0)[0].hasOwnProperty('address')).toBe(true);
    expect(callback.calls.argsFor(0)[0].hasOwnProperty('name')).toBe(true);
  });
});

describe('evens', () => {
  it('function should exist', () => {
    expect(evens).toBeDefined();
    expect(typeof evens).toBe('function');
  });
  it('should return an array of just the even numbers', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = evens(array);
    expect(result.length).toBe(3);
    expect(result.includes(2)).toBe(true);
    expect(result.includes(4)).toBe(true);
    expect(result.includes(6)).toBe(true);
    expect(array.length).toBe(6);
  });
});

describe('startWithLetterA', () => {
  it('function should exist', () => {
    expect(startWithLetterA).toBeDefined();
    expect(typeof startWithLetterA).toBe('function');
  });
  it('should return an array of all words starting with the letter a', () => {
    const array = ['Apple', 'acorn', 'banana', 'peach'];
    const result = startWithLetterA(array);
    expect(result.length).toBe(2);
    expect(result.includes('Apple')).toBe(true);
    expect(result.includes('acorn')).toBe(true);
    expect(array.length).toBe(4);
  });
});

describe('formalGreeting', () => {
  const names = ['Indiana', 'Vader', 'Ursula'];
  it(`should return an array with "Hello, " before each name in the original array`, () => {
    const result = formalGreeting(names);
    expect(result.length).toBe(3);
    expect(result[0]).toBe('Hello, Indiana');
    expect(result[1]).toBe('Hello, Vader');
    expect(result[2]).toBe('Hello, Ursula');
  });
});

describe('sortNumbers', () => {
  it('should sort the numbers correctly', () => {
    expect(sortNumbers([40, 1, 5, 200])).toEqual([1, 5, 40, 200]);
    expect(sortNumbers([5, -2, 6, -3, 11])).toEqual([-3, -2, 5, 6, 11]);
  });
});

describe('findProgrammer', () => {
  it('should return the correct object associated with the programmer from the employees array', () => {
    const result = findProgrammer(employees);
    expect(result.job).toBe('programmer');
    expect(result.name).toBe('Steve');
    const employees2 = [
      { name: 'Christina', job: 'programmer' },
      { name: 'Bryant', job: 'lawyer' },
      { name: 'Jennifer', job: 'sales rep' },
    ];
    const result2 = findProgrammer(employees2);
    expect(result2.name).toBe('Christina');
    expect(result.job).toBe('programmer');
  });
});

describe('orderTotals', () => {
  it('should exist', () => {
    expect(orderTotals).toBeDefined();
  });
  it('should be an array', () => {
    expect(orderTotals.length).toBeDefined();
  });
  it('should have 10 elements', () => {
    expect(orderTotals.length).toBe(10);
  });
  it('should have the correct prices', () => {
    for (let i = 0; i < orders.length; i++) {
      const answer = orders[i].price * (1 + orders[i].tax);
      expect(orderTotals[i]).toBeCloseTo(
        answer,
        2,
        `Expected orderTotals index ${i} to be ${answer}, got ${orderTotals[i]}`,
      );
      if (orderTotals[i] !== answer) {
        break;
      }
    }
  });
});

describe('sortMenuItems', () => {
  it('should sort the items by price from smallest to largest', () => {
    const sortedMenuItems = sortMenuItems(exampleMenuItems);
    expect(sortedMenuItems.length).toBe(4);
    expect(sortedMenuItems[0]).toEqual({ item: 'Caesar salad', price: 6 });
    expect(sortedMenuItems[1]).toEqual({ item: 'Pasta primavera', price: 17 });
    expect(sortedMenuItems[2]).toEqual({ item: 'Sirloin steak', price: 24 });
    expect(sortedMenuItems[3]).toEqual({ item: 'Bottle of fine wine', price: 104 });
  });
});

describe('productOfArray', () => {
  const numbers = [1, 2, 3, 4, 5];
  const numbers2 = [2, 8, 10];
  const randNum1 = Math.floor(Math.random() * 10) + 1;
  const randNum2 = Math.floor(Math.random() * 10) + 1;
  const randNum3 = Math.floor(Math.random() * 10) + 1;
  it(`should return the correct product outcome`, () => {
    expect(productOfArray(numbers)).toBe(120);
    expect(productOfArray(numbers2)).toBe(160);
    expect(productOfArray([randNum1, randNum2, randNum3])).toBe(randNum1 * randNum2 * randNum3);
  });
});
