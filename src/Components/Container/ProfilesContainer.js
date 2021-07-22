import React from "react";

import { Container} from "react-bootstrap";
import "./styles.css";
import Profiles from "./../Profile/Profiles";
const ProfilesContainer = () => {
    var imgsrc="./../../logo512.png";
    const HandleAlert = (profile) =>{
        alert(profile);
      };
    const data = [
        {fullName:"najla",
        bio:"sss",
        profession:"nnnn",
    },
    {fullName:"najla2",
    bio:"sss",
    profession:"nnnn",
},
];
return (
    <Container>
        {data.map((profile)=> (
            <Profiles profile={profile} handleAlert={profile.fullName}/> 
        )
        )}
    </Container>
);
};
export default ProfilesContainer;