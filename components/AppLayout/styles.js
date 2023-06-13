import { breakpoints, colors, fonts } from '@/styles/theme'
import { addOPacityToColor } from '../../styles/utils'
import css from 'styled-jsx/css'

const backgroundColor = addOPacityToColor(colors.primary, 0.3)

export default css`
div {
    display: grid;
    place-items: center;
    height: 100vh;
}

main {
    background: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
    border-radius: 10px;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    flex-direction: column;
    display: flex;
}

@media (min-width: ${breakpoints.mobile}){
    main {
        width: ${breakpoints.mobile};
        height: 90vh;
    }
}`

export const globalStyles = css.global`
    html,
    body {
        background-image: radial-gradient(${backgroundColor} 1px, transparent 1px), radial-gradient(${backgroundColor}  1px, transparent 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        padding: 0;
        margin: 0;
        font-family: ${fonts.base};
        overflow: hidden;
    }
    * {
        box-sizing: border-box;
    }
    textarea, input {
        font-family: ${fonts.base}
    }
`
