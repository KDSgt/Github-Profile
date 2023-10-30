document.addEventListener("DOMContentLoaded", function(){
    const usernameInput = document.getElementById("username");
    const submitbtn = document.getElementById("userData");
    const userInfo = document.getElementById("userInfo");
    const usernameSpan = document.getElementById("userName");
    const fullnameSpan = document.getElementById("fullname");
    const bioSpan = document.getElementById("bio");
    const locationSpan = document.getElementById("location");
    const repoSpan = document.getElementById("repo");
    const followerSpan = document.getElementById("follower");
    const followingSpan = document.getElementById("following");
    const avatarImg = document.getElementById("avatar");
    const profileLink = document.getElementById("profileLink");
    
    
    submitbtn.addEventListener("click", function(){
        const username = usernameInput.value;
        const apiUrl = `https://api.github.com/users/${username}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                avatarImg.src = data.avatar_url;
                usernameSpan.textContent = data.login;
                fullnameSpan.textContent = data.name;
                bioSpan.textContent = data.bio;
                locationSpan.textContent = data.location;
                repoSpan.textContent = data.public_repos;
                followerSpan.textContent = data.followers;
                followingSpan.textContent = data.following;
                profileLink.href = data.html_url;
                userInfo.style.display = "block";
            })
            .catch((error)=>{
                console.error("Error fetrching data: "+error);
            });
    });
    

});