import Student from "./Student/Student.jsx";
import EdwardChiaProfilePhoto from "./assets/EdwardChiaProfilePhoto.jpg";
import TonyStarkProfilePhoto from "./assets/TonyStarkProfilePhoto.jpg";
import BruceBannerProfilePhoto from "./assets/BruceBannerProfilePhoto.jpg";
import SteveRogersProfilePhoto from "./assets/SteveRogersProfilePhoto.jpeg";

function App() {
  return (
    <>
      <Student
        profilePhotoSrc={EdwardChiaProfilePhoto}
        name="Edward Chia"
        age={28}
        membershipValidity={true}
      ></Student>
      <Student
        profilePhotoSrc={TonyStarkProfilePhoto}
        name="Tony Stark"
        age={35}
        membershipValidity={true}
      ></Student>
      <Student
        profilePhotoSrc={SteveRogersProfilePhoto}
        name="Steve Rogers"
        age={120}
        membershipValidity={false}
      ></Student>
      <Student
        profilePhotoSrc={BruceBannerProfilePhoto}
        name="Bruce Banner"
        age={42}
        membershipValidity={true}
      ></Student>
    </>
  );
}

export default App;
