import Reveal from 'react-awesome-reveal'
import styled from 'styled-components'
import { keyframes } from '@emotion/react'
import HomeChooseHeroes from '../HomeChooseHeroes/HomeChooseHeroes'
import { mobile, tablet } from '../../responsive'

const HomepageChooseSection = () => {
  return (
    <Container>
      <ChooseContainer>
        <ChooseFadeTopContainer>
          <ChooseFadeTop />
        </ChooseFadeTopContainer>
        <ChooseFadeBottomContainer>
          <ChooseFadeBottom />
        </ChooseFadeBottomContainer>
      </ChooseContainer>
      <ContentContainer>
        <Reveal
          keyframes={fadeTop}
          duration={1500}
          style={{ pointerEvents: 'none' }}
        >
          <WhoWillYou>QUEM IRÁS </WhoWillYou>
          <Title>ESCOLHER?</Title>
        </Reveal>
        <Hr />
        <Desc>
        De estrategas mágicos a brutamontes ferozes e assassinos astutos,
        a seleção de heróis do Dota 2 é gigantesca e de uma diversidade 
        sem limites. Usa habilidades incríveis e Ultimates devastadores 
        na tua jornada para a vitória.
        </Desc>
        <LinkBtn>
          <LinkBtnText>VÊ TODOS OS HERÓIS</LinkBtnText>
        </LinkBtn>
      </ContentContainer>
      <HeroSlide>
        <HomeChooseHeroes />
      </HeroSlide>
    </Container>
  )
}

export default HomepageChooseSection

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 2000px;
  background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/heroes_full.jpg');
  background-size: 3500px;
  background-position: center top;
  background-repeat: no-repeat;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 40;
`
const ChooseContainer = styled.div``
const ChooseFadeTopContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`
const ChooseFadeTop = styled.div`
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
`
const ChooseFadeBottomContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`
const ChooseFadeBottom = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0)
    linear-gradient(
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.733) 90%,
      rgb(0, 0, 0) 100%
    )
    repeat scroll 0% 0%;
`

const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  position: relative;
  margin-top: 900px;
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
const WhoWillYou = styled.div`
  font-family: 'Lora', sans-serif;
  font-size: 50px;
  color: #e2dace90;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 700;
  line-height: 105%;
  text-transform: uppercase;
  ${tablet({ fontSize: '40px', width: '80%', margin: 'auto' })}
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
  ${tablet({ fontSize: '60px' })}
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
  ${tablet({ fontSize: '21px' })}
  ${mobile({ width: '90%' })}
`
const LinkBtn = styled.a`
  font-family: 'Urbanist', sans-serif;
  text-align: center;
  text-transform: uppercase;
  max-width: 1000px;
  text-decoration: none;
  margin-top: 30px;
  padding-bottom: 40px;
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
const HeroSlide = styled.div`
  width: 80%;
  margin: auto;
  z-index: 3;
  min-height: 8;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
`
