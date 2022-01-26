import '../slideStyle/slideStyle.css'
import { heroes } from  '../../data'
import HomeChooseHeroImg from '../HomeChooseHeroImg/HomeChooseHeroImg'

const HomeChooseHeroes = () => {
  const firstRowHeros = heroes.filter((x) => x.id > 0 && x.id < 40)
  const secondRowHeros = heroes.filter((x) => x.id > 40 && x.id < 80)
  const thirdRowHeros = heroes.filter((x) => x.id > 80 && x.id < 137)
  const fourthRowHeros = heroes.filter((x) => x.id > 60 && x.id < 100)
  const fifthRowHeros = heroes.filter((x) => x.id > 20 && x.id < 60)
  return (
    <>
      <div className="slider odd">
        {/* first row */}
        <div className="slide-track normal">
          {firstRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
          {firstRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
        </div>
      </div>
      {/* second row */}
      <div className="slider even">
        <div className="slide-track reverse">
          {secondRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
          {secondRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
        </div>
      </div>
      {/* third row */}
      <div className="slider odd">
        <div className="slide-track normal">
          {thirdRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
          {thirdRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
        </div>
      </div>
      {/* fourth row */}
      <div className="slider even">
        <div className="slide-track reverse">
          {fourthRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
          {fourthRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
        </div>
      </div>
      {/* fifth row */}
      <div className="slider odd">
        <div className="slide-track normal">
          {fifthRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
          {fifthRowHeros.map((hero) => {
            return <HomeChooseHeroImg key={hero.id} {...hero} />
          })}
        </div>
      </div>
    </>
  )
}

export default HomeChooseHeroes;
