/* eslint-disable no-unused-vars */
import { ArrowDropDown, Language, PinDropSharp } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { language } from '../../data'
import MobileHomeNav from '../MobileHomeNav/MobileHomeNav'

const NavbarMain = () => {
  const [hoverDropDown, setHoverDropDown] = useState(0)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo />
        </Left>
        <Middle>
          <MiddleWrapper>
            <DropDownWrapper onMouseLeave={() => setHoverDropDown(0)}>
              <MenuDropTitle onMouseEnter={() => setHoverDropDown(1)}>
                Jogo
                <ArrowDropDown style={{ opacity: '0.9' }} />
              </MenuDropTitle>
              <MenuDropDownList opacity={hoverDropDown}>
                <DropDownItem>Loja</DropDownItem>
                <DropDownItem>Patches</DropDownItem>
                <DropDownItem>Atualizações</DropDownItem>
                <DropDownItem>Atualizações Anteriores</DropDownItem>
              </MenuDropDownList>
            </DropDownWrapper>
            <MenuItem>Heróis</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Esports</MenuItem>
          </MiddleWrapper>
        </Middle>
        <Right>
          <RightWrapper>
            <LoginLanguage>
              <Login>Iniciar Sessão</Login>
              <LanguageContainer>
                <Language
                  style={{
                    width: '14px',
                    height: '14px',
                    marginRight: '8px',
                    Opacity: '0.8',
                    marginBottom: '1px',
                  }}
                />
                <SelectLanguage>Selecionar Idioma</SelectLanguage>
                <ArrowDropDown
                  style={{
                    Opacity: '0.9',
                  }}
                />
                <LanguageOptions>
                  {language.map((languageName) => (
                    <Option key={languageName.id}>{languageName.name}</Option>
                  ))}
                </LanguageOptions>
              </LanguageContainer>
            </LoginLanguage>
            <PlayForFree>
              <SteamIcon src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/steam_icon.svg" />
              <Content>Joga Grátis</Content>
            </PlayForFree>
          </RightWrapper>
        </Right>
      </Wrapper>
      <MobileNavContainer>
        <MobileHomeNav />
      </MobileNavContainer>
    </Container>
  )
}

export default NavbarMain

const Container = styled.div`
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  height: 80px;
  padding: 0 30px;
  position: absolute;
  z-index: 9999;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`
// Left
const Left = styled.div``
const Logo = styled.div`
  width: 200px;
  min-width: 200px;
  height: 50px;
  min-height: 50px;
  margin-right: 40px;
  opacity: 0.8;
  cursor: pointer;
  background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 1280px) {
    background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png');
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    margin-right: 0;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
// Middle
const Middle = styled.div`
  flex-grow: 1;
  height: 80px;
`
const MiddleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Lora', sans-serif;
`
const DropDownWrapper = styled.div``
const MenuDropTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #fff;
  padding: 12px 20px;
  border: 2px solid transparent;
  opacity: 0.8;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    opacity: 1;
  }
`

const DropDownItem = styled.div`
  font-family: 'Urbanist', sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  opacity: 0.8;
  margin-top: 5px;
  margin-bottom: 4px;
  padding: 0 10px;
  pointer-events: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(5px);
  }
`
const MenuDropDownList = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 64px;
  transition: opacity 0.2s;
  z-index: 10000;
  padding-top: 10px;
  padding-bottom: 5px;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(255, 255, 255, 0.6);
  background-color: rgba(244, 244, 244, 0.2);
  opacity: ${(props) => props.opacity};

  &:hover {
    &:hover ${DropDownItem} {
      pointer-events: fill;
      cursor: pointer;
    }
  }
`
const MenuItem = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #fff;
  padding: 3px 0;
  margin: 0 20px;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`
// Right
const Right = styled.div`
  font-family: 'Urbanist', sans-serif;
`
const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const LoginLanguage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
const Login = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ffffff90;
  transition: color 0.2s;
  text-align: right;

  &:hover {
    color: #fff;
  }
`

const SelectLanguage = styled.div`
  font-size: 14px;
  letter-spacing: 2px;
  color: #ffffff90;
`
const LanguageOptions = styled.div`
  position: absolute;
  z-index: 9999;
  padding: 12px 0;
  border: 1px solid #888;
  background-color: #222;
  width: 310px;
  text-align: left;
  top: 43px;
  display: none;
  flex-direction: column;
`
const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    &:hover ${LanguageOptions} {
      display: flex;
    }
  }
`
const Option = styled.div`
  color: #999;
  font-size: 10px;
  padding: 0 12px;
  line-height: 18px;
  white-space: nowrap;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #888;
    color: #222;
  }
`
const PlayForFree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffffff50;
  padding: 15px 25px;
  width: fit-content;
  border-radius: 5px;
  margin: 10px 0px 10px 20px;
  cursor: pointer;
  transition-duration: 0.2s;
  white-space: nowrap;

  &:hover {
    border: 3px solid #ff6046;
    transform: translateY(-2px);
  }
  @media only screen and (max-width: 1120px) {
    display: none;
  }
`
const SteamIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
const Content = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
`
const MobileNavContainer = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
`
