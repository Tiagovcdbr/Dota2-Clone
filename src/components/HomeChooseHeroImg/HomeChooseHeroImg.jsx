import React from 'react'

const HomeChooseHeroImg = ({ name, attribute }) => {
  const imgSrc =
    'https://cdn.dota2.com/apps/dota2/images/heroes/' +
    name.substring('npc_dota_hero_'.length) +
    '_full.png'
  const imgAlt = name.substring('npc_dota_hero_'.length).replace('_', ' ')

  return (
    <>
      <div className="slide">
        <div className="heroname">
          <div className="attribute">
            {attribute === 'agility' && (
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                alt="agility"
              />
            )}
            {attribute === 'strength' && (
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                alt="agility"
              />
            )}
            {attribute === 'intelligence' && (
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                alt="agility"
              />
            )}
          </div>
          <div className="name">{imgAlt}</div>
        </div>
        <div className="dark-bg"></div>
        <div className="heroCard">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </>
  )
}

export default HomeChooseHeroImg
