import React from 'react';
import { render, screen } from '../../test-utils'
import '@testing-library/jest-dom'
import Home from '../home'
import cst from '../../constants'

it('Renders the connected app with initialState', () => {
  render(<Home />, { initialState: { app: { page: cst.PAGE_HOME, loading: false, movies: [] } } })

  expect(screen.getByText(/Funny movies/i)).toBeInTheDocument()
  expect(screen.getByText(/Login \/ Register/i)).toBeInTheDocument()
})
