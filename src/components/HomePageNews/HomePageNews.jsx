import styled from 'styled-components'
import { ArrowForward } from '@material-ui/icons'
import { newsBlogs } from '../../data'
import { mobile, tablet } from '../../responsive'

const HomepageNews = () => {
  const threeLatestBlog = newsBlogs.filter((x) => x.id > newsBlogs.length - 3)
  return (
    <Container>
      <Wrapper>
        <NewsTopContainer>
          <NewsTop>Ultimas Notícias</NewsTop>
          <NewsTopLink>
            Ver Tudo
            <ArrowForward />
          </NewsTopLink>
        </NewsTopContainer>
        <NewsContentContainer>
          {threeLatestBlog.map((item) => (
            <NewsContentWrapper key={item.id}>
              <NewsContent bgImg={item.img}>
                <NewsFadeContainer>
                  <NewsFade />
                </NewsFadeContainer>
                <NewsDesc>{item.desc}</NewsDesc>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsDate>{item.date}</NewsDate>
              </NewsContent>
            </NewsContentWrapper>
          ))}
        </NewsContentContainer>
      </Wrapper>
    </Container>
  )
}

export default HomepageNews

const Container = styled.div`
  width: 100%;
  font-family: 'Urbanist', sans-serif;
  width: 1200px;
  margin: 0 auto;
  min-height: 308px;
  margin-bottom: -150px;
  z-index: 100;
  position: relative;
  ${tablet({ width: '100%', overflow: 'hidden' })}
  ${mobile({ width: '100%' })}
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const NewsTopContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  align-items: center;

  ${tablet({ marginLeft: '15px' })}
`
const NewsTop = styled.div`
  color: #fff;
  letter-spacing: 3px;
  font-weight: bold;
  margin: 2px 0;
  margin-right: 20px;
`
const NewsTopLink = styled.a`
  color: #d0d1d3;
  letter-spacing: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    letter-spacing: 5px;
    transition: all 0.1s ease-in-out;
  }
`
const NewsContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`
const NewsContentWrapper = styled.a`
  width: 400px;
  height: 245px;
  margin: 15px;
  position: relative;
  cursor: pointer;
  ${mobile({ width: '90%' })}
`
// const NewsContent = styled.div

const NewsFadeContainer = styled.div``
const NewsFade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0)
    linear-gradient(
      rgba(19, 23, 28, 0) 60%,
      rgba(19, 23, 28, 0.733) 70%,
      rgb(19, 23, 28) 90%
    )
    repeat scroll 0% 0%;
  bottom: 0;
`
const NewsDate = styled.div`
  color: rgba(225, 255, 255, 0.7);
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 20px;
  margin-bottom: 8px;
  z-index: 2;
`
const NewsTitle = styled.div`
  font-family: 'Lora', sans-serif;
  margin: 0 10px 8px 20px;
  text-shadow: 0 0 10px #000;
  font-weight: bold;
  text-transform: none;
  font-size: 25px;
  line-height: 115%;
  color: #fff;
  z-index: 2;
`
const NewsDesc = styled.div`
  font-style: 18px;
  color: rgba(255, 255, 255, 0.7);
  z-index: 2;
  margin-left: 20px;
  opacity: 0;
  height: 0px;
  transform: translateY(20px);
  transition: all 0.5s;
`
const NewsContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: url('${(prop) => prop.bgImg}');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  border-color: #333;
  border-bottom: 2px solid #555;
  box-shadow: 0px 0px 10px #000;
  display: flex;
  flex-direction: column-reverse;
  transition: all 0.3s;

  &:hover {
    border-bottom: 2px solid #ff6046;
  }
  &:hover ${NewsDesc} {
    height: 120px;
    transform: translateY(0px);
    opacity: 1;
  }
  ::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  &:hover::after {
    opacity: 1;
  }
`
