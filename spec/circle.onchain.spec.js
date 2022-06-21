import {Circle} from '../circle.onchain.js'
import {Pr} from 'prng.onchain.js'

describe(Circle, () => {
  describe('.pt', () => {
    it('generates a point on a circle at a given angle in radians', () => {
      expect(Circle.pt([150, 150], 100, 0)).toEqual([250, 150])
      expect(Circle.pt([150, 150], 100, Math.PI / 2)).toEqual([150, 250])
      expect(Circle.pt([150, 150], 100, Math.PI)).toEqual([50, 150])
    })
  })

  describe('.ptR', () => {
    it('generates a point at a random angle with a fixed radius', () => {
      const pt1 = Circle.ptR([150, 150], 100)
      const pt2 = Circle.ptR([150, 150], 100)

      expect(pt1).not.toEqual(pt2)
      expect(pt1[0]).toBeGreaterThanOrEqual(0)
      expect(pt1[1]).toBeGreaterThanOrEqual(0)
    })

    it('generates a point at a random angle with a fixed radius and a prng', () => {
      const pt1 = Circle.ptR([150, 150], 100, Pr.ng(0))
      const pt2 = Circle.ptR([150, 150], 100, Pr.ng(0))

      expect(pt1).toEqual(pt2)
      expect(pt1[0]).toBeGreaterThanOrEqual(0)
      expect(pt1[1]).toBeGreaterThanOrEqual(0)
    })
  })

  describe('.ptInR', () => {
    it('generates a point at a random position within a circle', () => {
      const pt1 = Circle.ptInR([150, 150], 100)
      const pt2 = Circle.ptInR([150, 150], 100)

      expect(pt1).not.toEqual(pt2)
      expect(pt1[0]).toBeGreaterThanOrEqual(0)
      expect(pt1[1]).toBeGreaterThanOrEqual(0)
    })

    it('generates a point at a random position within a circle with a prng', () => {
      const pt1 = Circle.ptInR([150, 150], 100, Pr.ng(0))
      const pt2 = Circle.ptInR([150, 150], 100, Pr.ng(0))

      expect(pt1).toEqual(pt2)
      expect(pt1[0]).toBeGreaterThanOrEqual(0)
      expect(pt1[1]).toBeGreaterThanOrEqual(0)
    })

    it('generates a point at a random position within a custom easing equasion', () => {
      const equasion = x => 0.5 + x * 0.5
      const pt1 = Circle.ptInR([150, 150], 100, Pr.ng(0), equasion)
      const pt2 = Circle.ptInR([150, 150], 100, Pr.ng(0), equasion)

      expect(pt1).toEqual(pt2)
      expect(pt1[0]).toBeGreaterThanOrEqual(0)
      expect(pt1[1]).toBeGreaterThanOrEqual(0)
    })
  })

  describe('.d2r', () => {
    it('converts degrees to radians', () => {
      expect(Circle.d2r(0)).toBeCloseTo(0)
      expect(Circle.d2r(90)).toBeCloseTo(Math.PI / 2)
      expect(Circle.d2r(180)).toBeCloseTo(Math.PI)
      expect(Circle.d2r(360)).toBeCloseTo(Math.PI * 2)
    })
  })
})