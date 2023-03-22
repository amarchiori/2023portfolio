import { 
    ProfileWithCircles,
    CirclesContainer,
    Circle1,
    ProfilePicture,
    ProfilePic 
  } from './ProfileWithMotion-styles';
  import ProfileImage from '../../assets/image-profile.jpg'

function ProfileWithMotion() {
  return (
    <ProfileWithCircles>
        <CirclesContainer>
            <Circle1 />
        </CirclesContainer>
        <ProfilePicture>
            <ProfilePic src={ProfileImage} alt="ProfileImage" />
        </ProfilePicture>
    </ProfileWithCircles>
  )
}

export default ProfileWithMotion