import styled from 'styled-components'
import Reveal from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'
import { tablet } from '../../responsive'

const HomeProCircuitSection = () => {
  return (
    <Container
      bgImg={
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg'
      }
    >
      <ContentContainer>
        <DPCImgContainer>
          <Reveal keyframes={fadeTop} duration={1000} triggerOnce>
            <DPCImg1 src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_1.jpg" />
          </Reveal>
          <Reveal keyframes={fadeTop} duration={1500} triggerOnce>
            <DPCImg2 src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_2.jpg" />
          </Reveal>
          <Reveal keyframes={fadeTop} duration={2000} triggerOnce>
            <DPCImg3 src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_3.jpg" />
          </Reveal>
        </DPCImgContainer>
        <DPCIcon src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg" />
        <Content>
          {/*<JoinThe>O</JoinThe>*/}
          <Title>Dota Pro Circuit</Title>
        </Content>
        <Hr />
        <Desc>
          Enquanto não estiveres a subir nas classificações, 
          podes aprender com os melhores. O Dota Pro Circuit 
          conta com competições de Dota 2 do mais alto nível 
          a serem transmitidas no jogo, no Twitch e na Steam.TV. 
          Culminando no maior campeonato de e-sports do mundo, 
          The International, as competições profissionais de Dota 2 
          são algo que não queres perder.
        </Desc>
      </ContentContainer>
    </Container>
  )
}

export default HomeProCircuitSection

const Container = styled.div`
  background-image: url('${(prop) => prop.bgImg}');
  background-size: 2000px;
  background-position: top;
  background-repeat: no-repeat;
  min-height: 1150px;
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`

const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const DPCImgContainer = styled.div`
  width: 100%;
  height: calc(100%-50px);
  ${tablet({ display: 'none' })}
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

const DPCImg1 = styled.img`
  position: absolute;
  max-width: 17.5%;
  left: 250px;
  top: 50px;
`
const DPCImg2 = styled.img`
  position: absolute;
  max-width: 30%;
  top: 200px;
  right: -70px;
`
const DPCImg3 = styled.img`
  position: absolute;
  max-width: 22%;
  left: -50px;
  top: 330px;
`

const Content = styled.div`
  text-align: center;
  margin-top: 25px;
  pointer-events: none;
`
const DPCIcon = styled.img`
  min-width: 96px;
  min-height: 96px;
  margin-top: 550px;
`

/*const JoinThe = styled.div`
  font-family: 'Lora', sans-serif;
  font-size: 50px;
  color: #e2dace90;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 700;
  line-height: 105%;
  text-transform: uppercase;
  ${tablet({ fontSize: '40px' })}
`*/
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
  margin-top: 20px;
  width: 60%;
  color: #e2dace;
  font-size: 24px;
  line-height: 115%;
  font-weight: 400;
  ${tablet({ fontSize: '21px', width: '80%' })}
`
