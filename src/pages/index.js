import styled from 'styled-components'


export default function Home() {

  const Welcome = styled.h1`
    text-align: center;
    color: green;
    background-color: #141414;
    padding: 20px;
  `

  return (
    <>
      <Welcome>Welcome Tenflix</Welcome>
    </>
  )
}
