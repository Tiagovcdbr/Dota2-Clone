import React from 'react'
import styled from 'styled-components'
import { tablet } from '../../responsive'

const Footer = () => {
  return (
    <Container>
      <Content>
        <Link>
          <Logo src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" />
        </Link>
        <Link>
          <Logo src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png" />
        </Link>
      </Content>
      <LegalInfo>
          Dota e o logotipo do Dota são marcas e/ou marcas registadas da Valve Corporation. 2022 Valve Corporation, todos os direitos reservados.
        <br />
        <Note>
          Site feito por fã para desenvolvimento acadêmico com todos os direitos reservados a Valve Corporation.
        </Note>
      </LegalInfo>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  text-align: center;
  width: 100%;
  z-index: 5;
  padding: 30px 100px;
  background-color: black;
  ${tablet({ padding: '20px 30px' })}
`
const Content = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${tablet({ flexDirection: 'column', width: '100%' })}
`
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`
const Logo = styled.img`
  margin: 0 15px 20px 15px;
  max-height: 30px;
`
const LegalInfo = styled.div`
  text-align: center;
  font-size: 14px;
  color: #777;
  width: 500px;
  margin: 0 auto;
  ${tablet({ width: '100%' })}
`
const Note = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  padding-top: 20px;
`
