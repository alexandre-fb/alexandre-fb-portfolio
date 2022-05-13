import styled from 'styled-components'

export const Footer = () => {
    return (
        <P>Desenvolvido por 👉 <a href="https://www.linkedin.com/in/alexandre-fb/" target="_blank">Alexandre Bisognin</a></P>
    )
}

const P = styled.p`

        font-size: 0.8rem;

        a{
            cursor: pointer;

            &:hover {
                color: var(--light-green)
            }
        }
        

`
