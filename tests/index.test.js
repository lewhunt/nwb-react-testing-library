import React from 'react';
import { render } from '@testing-library/react';
import Component from '../src'

describe("Component", () => {

  test("exists", () => {
    expect(Component).toBeDefined()
  })

  test('matches Snapshot', async () => {
    const { container } = render(<Component />)
    expect(container).toMatchSnapshot()
  })

  test('displays a welcome message', async () => {
    const { getByText } = render(<Component />)
    expect(getByText('Welcome to React components')).toBeInTheDocument()
  })

});