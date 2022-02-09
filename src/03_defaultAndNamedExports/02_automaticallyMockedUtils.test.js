import defaultMethod, { p1, p2, p3 } from './utils.js'

jest.mock('./utils.js')

describe('default and named exports - automatically mocked file with no return values', () => {
  it('returns the correct value for p1', () => {
    expect(p1()).not.toBe('You have called p1')
    expect(p1()).toBe(undefined)
  })

  it('returns the correct value for p2', () => {
    expect(p2()).not.toBe('You have called p2')
    expect(p1()).toBe(undefined)
  })

  it('returns the correct value for p3', () => {
    expect(p3()).not.toBe('You have called p3')
    expect(p1()).toBe(undefined)
  })

  it('returns the correct value for Default Method', () => {
    expect(defaultMethod()).not.toBe('You have called the Default Method')
    expect(defaultMethod()).toBe(undefined)
  })
})
