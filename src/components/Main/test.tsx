import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderizar o componente
    const { container } = render(<Main />)
    //busco o elmento e verifico a existencia
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    //renderizo o component
    const { container } = render(<Main />)

    //verifico se o background-color esta correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
