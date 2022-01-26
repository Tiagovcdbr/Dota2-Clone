import { makeStyles } from '@material-ui/core'
import {
  ArrowDropDown,
  ArrowForwardIos,
  CloseOutlined,
  Language,
  MenuOutlined,
} from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { language } from '../../data'

const useStyles = makeStyles({
  arrowforwardSmall: {
    width: '18px',
    height: '15px',
    marginLeft: '4px',
    marginTop: '1px',
  },
  arrowforwardBig: {
    width: '20px',
    height: '24px',
    marginRight: '18px',
  },
})

const MobileHomeNav = () => {
  const [collapse, setCollapse] = useState('block')
  const [close, setClose] = useState('none')
  const handleClickCollapse = () => {
    setCollapse('none')
    setClose('flex')
  }
  const handleClickClose = () => {
    setClose('none')
    setCollapse('block')
  }

  const classes = useStyles()

  return (
    <Container>
      <CollapseBefore display={collapse}>
        <CollapseBeforeContent>
          <Logo src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png" />
          <CollapseBtn onClick={() => handleClickCollapse()}>
            <MenuOutlined style={{ width: '50px', height: '50px' }} />
          </CollapseBtn>
        </CollapseBeforeContent>
      </CollapseBefore>
      <CollapseAfter display={close}>
        <Top>
          <LogoFull />
          <CloseBtn onClick={() => handleClickClose()}>
            <CloseOutlined style={{ width: '50px', height: '50px' }} />
          </CloseBtn>
        </Top>
        <Middle>
          <Game>Jogo</Game>
          <GameList>
            <GameListItem>
              <List>Builds</List>
              <ArrowForwardIos
                style={{
                  width: '18px',
                  height: '15px',
                  marginLeft: '4px',
                  marginTop: '1px',
                }}
              />
            </GameListItem>
            <GameListItem>
              <List>Guias Steam</List>
              <ArrowForwardIos className={classes.arrowforwardSmall} />
            </GameListItem>
            <GameListItem>
              <List>Patches</List>
              <ArrowForwardIos className={classes.arrowforwardSmall} />
            </GameListItem>
            <GameListItem>
              <List>Atualizações</List>
              <ArrowForwardIos className={classes.arrowforwardSmall} />
            </GameListItem>
            <GameListItem>
              <List>Loja</List>
              <ArrowForwardIos className={classes.arrowforwardSmall} />
            </GameListItem>
          </GameList>
        </Middle>
        <Bottom>
          <Hr />
          <ManuList>
            Heróis
            <ArrowForwardIos className={classes.arrowforwardBig} />
          </ManuList>
          <Hr />
          <ManuList>
            Blog
            <ArrowForwardIos className={classes.arrowforwardBig} />
          </ManuList>
          <Hr />
          <ManuList>
            Esports
            <ArrowForwardIos className={classes.arrowforwardBig} />
          </ManuList>
          <Hr />
        </Bottom>
        <BottomEnd>
          <LoginLanguage>
            <Login>Iniciar Sessão</Login>
            <LanguageContainer>
              <Language
                style={{
                  width: '15px',
                  height: '15px',
                  marginRight: '8px',
                  opacity: '0.8',
                }}
              />
              <LanguageSelect>
                {language.map((item) => (
                  <LanguageOption key={item.id}>{item.name}</LanguageOption>
                ))}
              </LanguageSelect>
              <ArrowDropDown />
            </LanguageContainer>
          </LoginLanguage>
          <PlayForFreeContainer>
            <SteamIcon src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam_icon.svg" />
            <PlayForFree>Joga Grátis</PlayForFree>
          </PlayForFreeContainer>
        </BottomEnd>
      </CollapseAfter>
    </Container>
  )
}

export default MobileHomeNav

const Container = styled.div`
  width: 100%;
  height: 100%;

  text-transform: uppercase;
  color: #fff;
`
const CollapseBefore = styled.div`
  width: 100%;
  height: 100%;

  display: ${(props) => props.display};
`
const CollapseBeforeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
  opacity: 0.8;
  cursor: pointer;
  margin: 15px 0 0 30px;
  &:hover {
    opacity: 1;
  }
`
const CollapseBtn = styled.div`
  opacity: 0.8;
  cursor: pointer;
  margin: 15px 30px 0 0;
  &:hover {
    opacity: 1;
  }
`
const CollapseAfter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: ${(props) => props.display};

  flex-direction: column;
`
const Top = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const LogoFull = styled.div`
  width: 200px;
  min-width: 200px;
  height: 50px;
  min-height: 50px;
  margin: 15px 0 0 20px;
  background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`
const CloseBtn = styled.div`
  width: 50px;
  height: 50px;
  margin: 15px 30px 0 0;
  cursor: pointer;
`
const Middle = styled.div``
const Game = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1b1b1b;
  color: #fff;
  font-family: 'Lora', sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`
const GameList = styled.div`
  width: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 4px 0;
`
const GameListItem = styled.div`
  width: 100%;
  height: 30px;
  background-color: #0f0f0f;
  color: #cacaca;
  font-family: 'Urbanist', sans-serif;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`
const List = styled.div`
  cursor: pointer;
`
const Bottom = styled.div``
const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #494949;
  border: none;
`
const ManuList = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1b1b1b;
  color: #fff;
  font-family: 'Lora', sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  cursor: pointer;
`
const BottomEnd = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  background-color: #1b1b1b;
  flex-direction: column;
  justify-content: flex-end;
  font-family: 'Urbanist', sans-serif;
`
const LoginLanguage = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Login = styled.div`
  font-size: 18px;
  margin-left: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff90;
  cursor: pointer;
`
const LanguageContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`
const LanguageSelect = styled.select`
  width: 80px;
  appearance: none;
  background-color: #1b1b1b;
  border: none;
  color: #fff;
  font-size: 18px;
`
const LanguageOption = styled.option``
const PlayForFreeContainer = styled.div`
  width: calc(100%-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffffff50;
  padding: 15px 25px;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    border: 3px solid #ff6046;
    transform: translateY(-2px);
  }
`
const SteamIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
const PlayForFree = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
`
