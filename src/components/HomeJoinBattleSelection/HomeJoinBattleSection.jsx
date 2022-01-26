import React from 'react'
import styled from 'styled-components'
import { tablet } from '../../responsive'

const HomeJoinBattleSection = () => {
  return (
    <Container
      bgImg={
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/background4.png'
      }
    >
      <Wrapper>
        <Content>
          <JoinThe>Junta- te À</JoinThe>
          <Title>Batalha</Title>
        </Content>
        <Hr />
        <LinkBtn>
          <PlayFreeNow>JOGA GRÁTIS JÁ</PlayFreeNow>
        </LinkBtn>
      </Wrapper>
    </Container>
  )
}

export default HomeJoinBattleSection

const Container = styled.div`
  background-image: url('${(props) => props.bgImg}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: 40px auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 50px 150px;
  text-transform: uppercase;
  ${tablet({ padding: '30px 50px' })}
`
const Wrapper = styled.div``
const Content = styled.div`
  text-align: left;
  margin-bottom: 20px;
`
const JoinThe = styled.div`
  font-size: 50px;
  color: #e2dace90;
  letter-spacing: 2px;
  font-weight: 700;
  line-height: 105%;
  ${tablet({ fontSize: '40px' })}
`
const Title = styled.div`
  font-size: 100px;
  font-weight: 700;
  color: #e2dace;
  letter-spacing: 2px;
  line-height: 105%;
  ${tablet({ fontSize: '60px' })}
`
const Hr = styled.hr`
  width: 80px;
  height: 3px;
  min-height: 3px;
  background-color: #ff6046;
  border-radius: 1px;
  border: none;
`
const LinkBtn = styled.a`
  color: inherit;
  text-align: center;
  margin-top: 30px;
`
const PlayFreeNow = styled.div`
  border: 3px solid #ffffff50;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
    border: 3px solid #ff6046;
  }
`
