import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import { unmountComponentAtNode } from 'react-dom'
import Main from './components/main'
import reducers from './reducers'
import { act } from 'react-dom/test-utils'

let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("root")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

function Wrapper(children) {
  return <Provider store={createStore(reducers)}>{children}</Provider>
}

test('Initial components render okay', () => {
  render(Wrapper(<App />))

  // Timer loads
  const linkElement = screen.getByText(/Start Timer/i)
  expect(linkElement).toBeInTheDocument()

  // Intro Modal Loads with button text
  const modalElementButtonText = screen.getByText(/Start Video Now/i)
  expect(modalElementButtonText).toBeInTheDocument()

  // Search Component displays
  const searchText = screen.getByText(/Type to search for videos.../i)
  expect(searchText).toBeInTheDocument()
})
