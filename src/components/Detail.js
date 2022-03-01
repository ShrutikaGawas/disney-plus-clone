import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
       <Background>
           <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5558/665558-h"/>
       </Background>
       <ImageTitle>
           <img src="/images/simp.png"/>
       </ImageTitle>
       <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png"/>
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png"/>
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png"/>
          </GroupWatchButton>
       </Controls>
       <SubTitle>
         1 hr 23 min • 2007 • Animation • U/A 13+ • English
       </SubTitle>
       <Description>
          After Homer accidently pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons family are declared fugitives.
       </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
   min-height: calc(100vh - 70px);
   padding: 0 calc(3.5vw + 5px);
   position: relative;

`
const Background = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index:-1;
   opacity:0.4;
   
   img{
       width: 100%;
       height: 100%;
       object-fit:cover;
   }

`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 26vw;
  min-width: 200px;
  margin-top: 60px;

  img{
    width:100%;
    height:100%;
    object-fit:contain;

  }
`

const Controls = styled.div`
  display:flex;
  align-items:center;

`
const PlayButton = styled.button`
   border-radius: 4px;
   font-size:15px;
   padding: 0px 24px;
   margin-right: 22px;
   display:flex;
   align-items:center;
   height: 56px;
   background: rgb (249, 249, 249);
   border:none;
   cursor:pointer;
   letter-spacing: 1.8px;

   &:hover{
     background: rgb(198, 198, 198);
   }

`
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249,249);
  text-transform:uppercase;
`
const AddButton = styled.button`
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content: center;
  border-radius:50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor:pointer;
  margin-right:16px;
  span{
    font-size:30px;
    color:white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background:  rgb(0, 0, 0);
`
const SubTitle = styled.div`
  color: rgb(249, 249,249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size:20px;
  margin-top:16px;
  color: rgb(249, 249,249);
  max-width:5700px;

`