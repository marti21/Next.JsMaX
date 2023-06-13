import { colors } from '@/styles/theme'

export default function Button ({ children, onClick, disabled }) {
  return (
        <>
        <button disabled={disabled} onClick={onClick}>
            {children}
        </button>

        <style jsx>{`
            button {
                border: 0;
                background: ${colors.black};
                color: #fff;
                border-radius: 9999px;
                font-weight: 800;
                padding: 8px 24px;
                font-size: 16px;
                cursor: pointer;
                transition: opacity .3s ease;
                display: flex;
                align-items: center;
            }

            button[disabled] {
                opacity: 0.2;
                pointer-events: none;
            }

            button > :global(svg) {
                margin-right: 8px;
            }

            button:hover {
                opacity: .7;
            }

        `}</style>

        </>
  )
}
