# circle.onchain.js
A micro JS library (210 bytes) with circle-related utility functions.

This library is intended for use in environments where the available storage
space is very limited; like blockchains for example. Everything is stripped down
to the bare essentials.

## Usage

### Point on circle
Calculate the point on a circle at a given angle in radians:

```js
Circle.pt([150, 150], 100, 0)
// => [250, 150]
Circle.pt([150, 150], 100, Math.PI)
// => [50, 150]
```

### Random point on circle
Calculate a point on a circle at a random angle:

```js
Circle.ptR([150, 150], 100)
// => [x, y]
```

This will use JavaScript's built-in `Math.random()` function. An alternative
random generator function can be passed as the third argument:

```js
// Seedable pseudorandom number generator found at onchainjs/prng.onchain.js:
const prng = Pr.ng(123)
Circle.ptR([150, 150], 100, prng)
// => [173.19276030705356, 52.726694980896426]
```

### Random point in circle
Calculate a point on a circle at a random angle and at a random radius, between
zero and the given radius:

```js
Circle.ptInR([150, 150], 100)
// => [x, y]
```

This will use JavaScript's built-in `Math.random()` function. An alternative
random generator function can be passed as the third argument:

```js
const prng = Pr.ng(123)
Circle.ptInR([150, 150], 100, prng)
// => [184.1699846891807, 220.92293938474594]
```

**Note**: The seedable pseudorandom number generator used in the example above,
can be found at
[onchainjs/prng.onchain.js](https://github.com/onchainjs/prng.onchain.js).

Additionally, an easing function can be passed as the fourth argument to create
a non-linear falloff:

```js
Circle.ptInR([150, 150], 100, prng, p => Math.sqrt(1 - Math.pow(p - 1, 2)))
// => [192.41049610777876, 238.02687715810964]
```

**Tip**: Have a look at
[onchainjs/easing.onchain.js](https://github.com/onchainjs/easing.onchain.js)
for more useful easing equasions.

## Extensions
Copy and paste them into your code after including this library.

### Circle of points
Can also be found in `circle.onchain/points.js`.

```js
Circle.pts = (c, r, s = 32, a = Math.PI * 2, o = 0) => [...Array(s)]
  .map((_, i) => Circle.pt(c, r, o + a / s * i))
```

Generate points on a circle with a radius of `100`:

```js
let pts = Circle.pts([150, 150], 100)
```

Generate `64` points on a circle with a radius of `100`:

```js
let pts = Circle.pts([150, 150], 100, 64)
```

Generate `24` points on a third of circle with a radius of `100`:

```js
let pts = Circle.pts([150, 150], 100, 64, Math.PI * 2 / 3)
```

Generate `24` points on a third of circle with an offset of half a quarter of a
circle and a radius of `100`:

```js
let pts = Circle.pts([150, 150], 100, 64, Math.PI * 2 / 3, Math.PI / 2)
```
