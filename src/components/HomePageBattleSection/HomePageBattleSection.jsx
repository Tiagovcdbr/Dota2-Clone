import styled from 'styled-components'
import { Reveal } from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'
import { mobile, tablet } from '../../responsive'

const HomepageBattleSection = () => {
  return (
    <Container>
      <BattleBGImgContainer>
        <BattleBGFadeContainer>
          <BattleBGFade />
        </BattleBGFadeContainer>
        <BattleBGImgBig src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg" />
        <BattleBGImgSmall src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/battle_mobile.jpg" />
      </BattleBGImgContainer>
      <ContentContainer>
        <Reveal
          keyframes={fadeTop}
          duration={1500}
          style={{ pointerEvents: 'none' }}
        >
          <JoinThe>Junta-te À</JoinThe>
          <Title>BATALHA DOS ANCIENTS</Title>
        </Reveal>
        <Hr />
        <Desc>
        Todos os dias, milhões de jogadores do mundo inteiro
         entram no campo de batalha como um de mais de cem
        heróis em confrontos entre duas equipas de 5 jogadores
        cada. O Dota 2 é o RTS de ação multijogador mais
        complexo de todos os tempos e há sempre uma estratégia
        ou tática nova por descobrir. É completamente
        grátis para jogar e assim permanecerá. Começa já
        hoje a defender o teu Ancient.
        </Desc>
        <LinkBtn>
          <LinkBtnText>Vê o que há de novo</LinkBtnText>
        </LinkBtn>
      </ContentContainer>
    </Container>
  )
}

export default HomepageBattleSection

const Container = styled.div`
  width: 100%;
  min-height: 764px;
  position: relative;
  margin-bottom: 100px;
  color: #fff;
  overflow: hidden;
`
const BattleBGImgContainer = styled.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`
const BattleBGImgBig = styled.img`
  width: 100%;
  opacity: 0.6;
  z-index: -1;
  ${tablet({ display: 'none' })}
`
const BattleBGImgSmall = styled.img`
  opacity: 0.6;
  z-index: -1;
  display: none;

  ${tablet({ display: 'block' })}
  ${mobile({ width: '100%' })}
`
const BattleBGFadeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`
const BattleBGFade = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0)
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.733) 90%,
      rgb(0, 0, 0) 100%
    )
    repeat scroll 0% 0%;
  position: absolute;
  ${tablet({
    background: `rgba(0, 0, 0, 0)
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.733) 90%,
      rgb(0, 0, 0) 100%
    )
    repeat scroll 0% 0%`,
  })}
`
const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  position: relative;
`
const fadeTop = keyframes`
  from{
    opacity: 0;
    transform: translateY(50px)
    
  }
  to{
    opacity: 1;
    transform: translateY(0)
  }
`

const JoinThe = styled.div`
  font-family: 'Lora', sans-serif;
  font-size: 50px;
  color: #e2dace90;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 700;
  line-height: 105%;
  text-transform: uppercase;
  ${tablet({ fontSize: '40px' })}
`
const Title = styled.div`
  font-family: 'Lora', sans-serif;
  text-align: center;
  font-size: 100px;
  font-weight: 700;
  color: #e2dace;
  line-height: 105%;
  margin-bottom: 20px;
  text-transform: uppercase;
  ${tablet({ fontSize: '60px', width: '85%', margin: '0 auto 20px auto' })}
  ${mobile({ fontSize: '50px' })}
`
const Hr = styled.div`
  width: 80px;
  height: 3px;
  min-height: 3px;
  background-color: #ff6046;
  border-radius: 1px;
`
const Desc = styled.div`
  font-family: 'Urbanist', sans-serif;
  text-align: center;
  margin-top: 30px;
  max-width: 1000px;
  color: #e2dace;
  font-size: 24px;
  line-height: 115%;
  font-weight: 400;
  ${tablet({ fontSize: '21px', margin: '30px 20px 0 20px' })}
`
const LinkBtn = styled.a`
  font-family: 'Urbanist', sans-serif;
  text-align: center;
  text-transform: uppercase;
  max-width: 1000px;
  text-decoration: none;
  margin-top: 30px;
`
const LinkBtnText = styled.div`
  border: 3px solid #ffffff50;
  padding: 15px 20px;
  margin: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    border: 3px solid #ff6046;
  }
`
