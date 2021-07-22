import React from "react";


 function Profile({profile,handleAlert}) {
return (
    <div className="profile">
<h3>{profile.fullName}</h3>
<h4>{profile.bio}</h4>
<h6>{profile.profession}</h6>
<button onclick={() => handleAlert(profile.fullName)}>click me</button>
    </div>
);
}
 export default Profile;