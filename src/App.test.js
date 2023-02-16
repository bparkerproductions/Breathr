import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import reducers from './reducers'

test('Renders timer with text', () => {
  render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
  )
  const linkElement = screen.getByText(/Start Timer/i)
  expect(linkElement).toBeInTheDocument()
});