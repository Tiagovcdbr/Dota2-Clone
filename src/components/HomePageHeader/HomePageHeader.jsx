import styled from 'styled-components'
import Reveal from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'
import { mobile } from '../../responsive'

import Audio from '../../audio/Dota 2 - Main Menu Flute Theme.mp3'

const HomepageHeader = () => {
  return (
    <Container>
      <Wrapper>
        <VideoContainer>
          <Video
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
            type="video/webm"
            autoPlay
            loop
          />
          <audio
            src={Audio}
            type="audio"
            autoPlay={true}
            loop
          ></audio>
        </VideoContainer>
        <ContentContainer>
          <Reveal keyframes={fadeRight} duration={1500} triggerOnce>
            <HeaderTitle>“UMA OBRA-PRIMA DOS JOGOS MULTIJOGADOR MODERNOS.”</HeaderTitle>
            <HeaderSubtitle>- Destructoid</HeaderSubtitle>
            <HeaderHr />
          </Reveal>
          <HeaderPlayForFreeContainer>
            <HeaderPlayForFreeContainerWrapper>
              <HeaderPlayForFreeLeft>
                <StreamLogo src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam.svg" />
              </HeaderPlayForFreeLeft>
              <HeaderPlayForFreeRight>
                <ContentTitle>Joga Grátis</ContentTitle>
                <ContentSubtitle>Faz o Download no Steam</ContentSubtitle>
              </HeaderPlayForFreeRight>
            </HeaderPlayForFreeContainerWrapper>
          </HeaderPlayForFreeContainer>
        </ContentContainer>
      </Wrapper>
    </Container>
  )
}

export default HomepageHeader

const Container = styled.div`
  font-family: 'Lora', sans-serif;
  height: 75vh;
  width: 100%;
  position: relative;
  margin-bottom: -90px;
  overflow: hidden;
  display: block;

  text-transform: uppercase;
  color: #fff;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset 0 -20px 20px -5px #000;
`
const VideoContainer = styled.div`
  object-fit: cover;
  height: 100%;
  width: 100vw;
  opacity: 0.5;
  z-index: -2;
  position: absolute;
`
const Video = styled.video``
const ContentContainer = styled.div`
  height: 100%;
  width: fit-content;
  max-width: 60%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: auto;
  ${mobile({ paddingLeft: '5%' })}
`
const fadeRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(-100px)
    
  }
  to{
    opacity: 1;
    transform: translateY(0)
  }
`
const HeaderTitle = styled.h1`
  font-size: 60px;
  display: flex;
  margin-top: 40px;
  line-height: 113%;
  letter-spacing: 5px;
  font-weight: 600;
  color: #ffffffee;
  text-shadow: 0 0 20px #000;

    @media(max-width:768px) {
      display: flex;
      font-size: 30px;
    }

    @media(max-width:1400px) {
      display: flex;
      font-size: 40px;
      margin-top: 10px;
    }

    @media(max-width:1620px) {
      display: flex;
      font-size: 40px;
      margin-top: 10px;
    }
  
`
const HeaderSubtitle = styled.p`
  font-family: 'Reaver',serif;
  font-size: 20px;
  letter-spacing: 2px;
  color: #ffffff90;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 20px;
`
const HeaderHr = styled.hr`
  width: 80px;
  height: 3px;
  min-height: 3px;
  background-color: #ff6046;
  border-radius: 1px;
  border: none;
`
const HeaderPlayForFreeContainer = styled.a`
  text-decoration: none;
  color: inherit;
`
// HeaderPlayForFreeContainerWrapper

const HeaderPlayForFreeLeft = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 8px;
`
const StreamLogo = styled.img`
  width: 100%;
  height: 100%;
`
const HeaderPlayForFreeRight = styled.div`
  flex-grow: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`
const ContentTitle = styled.h2`
  font-style: 22px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 3px #000;
  font-weight: 600;
`
const ContentSubtitle = styled.p`
  font-family: 'Urbanist', sans-serif;
  font-style: 15px;
  color: #858585;
  letter-spacing: 2px;
  text-shadow: 2px 2px 3px #000;
`
const HeaderPlayForFreeContainerWrapper = styled.div`
  min-width: 288px;
  height: 78px;
  border-radius: 6px;
  border: 3px solid #ffffff90;
  box-shadow: 0 0 5px #000;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    transition-duration: 0.2s;
    &:hover ${ContentSubtitle} {
      color: #a5a5a5;
    }
  }
`
