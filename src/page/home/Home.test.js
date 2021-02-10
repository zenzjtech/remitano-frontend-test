import React from 'react';
import { render, screen, fireEvent } from '../../test-utils'
import '@testing-library/jest-dom'
import Home from '../home'
import cst from '../../constants'

const getData = () => {
  const result = window.localStorage.getItem('persist:root')
  if (result) return JSON.parse(result)
  return {}
}
it('Renders the connected app with initialState', () => {
  render(<Home />, { initialState: { app: { page: cst.PAGE_HOME, loading: false, movies: [] } } })

  expect(screen.getByText(/Funny movies/i)).toBeInTheDocument()
  expect(screen.getByText(/Login \/ Register/i)).toBeInTheDocument()
})

test('Login', async () => {
  render(<Home />, { initialState: { app: { page: cst.PAGE_HOME, loading: false, movies: [] } } })

  // fill out the form
  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: 't@t.t' },
  })
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: '1' },
  })

  fireEvent.click(screen.getByText(/login/i))

  expect(screen.getByText(/t@t.t/i)).toBeInTheDocument()
})

test('Login with wrong credential', async () => {
  render(<Home />, { initialState: { app: { page: cst.PAGE_HOME, loading: false, movies: [] } } })

  // Login first
  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: 't@t.t' },
  })
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: '1' },
  })

  fireEvent.click(screen.getByText(/login/i))
  fireEvent.click(screen.getByText(/logout/i))

  // Login with wrong credential
  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: 't@t.t' },
  })
  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: '2' },
  })

  fireEvent.click(screen.getByText(/login/i))

  // Can't login
  expect(screen.getByText(/login/i)).toBeInTheDocument()
})

test('Logout', async () => {
  render(<Home />, {
    initialState: {
      app: {
        page: cst.PAGE_HOME, loading: false, movies: [], user: { email: 't@t.t' },
      },
    },
  })

  expect(screen.getByText(/logout/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText(/logout/i))

  expect(screen.getByText(/login/i)).toBeInTheDocument()
})

test('Navigation', async () => {
  render(<Home />, {
    initialState: {
      app: {
        page: cst.PAGE_HOME, loading: false, movies: [], user: { email: 't@t.t' },
      },
    },
  })

  fireEvent.click(screen.getByText(/share a movie/i))

  expect(screen.getByText(/Share a youtube movie/i)).toBeInTheDocument()

/*  fireEvent.click(screen.getByText(/funny movies/i))
  console.log(screen.getByText(/Share a youtube movie/i))
  expect(screen.getByText(/Share a youtube movie/i)).not.toBeInTheDocument() */
})
