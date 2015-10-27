let React = require('react')
let TestUtils = require('react/lib/ReactTestUtils')
let expect = require('expect')
import TodoApp from './TodoApp'

describe('root', () => {
  it('renders without problems', () => {
    let root = TestUtils.renderIntoDocument(<TodoApp />)
    expect(root).toExist()
  })
})
