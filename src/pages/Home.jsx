import React from 'react'
import HomepageHeader from '../components/HomePageHeader/HomePageHeader'
import HomepageNews from '../components/HomePageNews/HomePageNews'
import NavbarMain from '../components/NavBarMain/NavBarMain'
import HomepageBattleSection from '../components/HomePageBattleSection/HomePageBattleSection'
import HomepageChooseSection from '../components/HomePageChooseSection/HomePageChooseSection'
import HomeProCircuitSection from '../components/HomeProCircuitSection/HomeProCircuitSection'
import HomeJoinBattleSection from '../components/HomeJoinBattleSelection/HomeJoinBattleSection'
import Footer from '../components/Footer/Footer'
import { mobile } from '../responsive'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <NavbarMain />
      <HomepageHeader />
      <HomepageNews />
      <HomepageBattleSection />
      <HomepageChooseSection />
      <HomeProCircuitSection />
      <HomeJoinBattleSection />
      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  ${mobile({ width: '100%', overflow: 'hidden' })}
`
