import hello from '../hello'

it('runs a test', () => {
  const request = {}
  const response = {
    statusCode: 0,
    json: jest.fn(),
  }
  hello(request, response)
  expect(response.statusCode).toBe(200)
})
