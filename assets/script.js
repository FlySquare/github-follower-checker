let apiUrl = 'https://api.github.com/users/';
let userName = 'f';
fetch(apiUrl+userName).then(function(response) {
    response.json().then((user)=>{
        var followerPages = Math.ceil(user['followers'] / 100);
        console.log(followerPages);
    })
}).catch(function(err) {console.log('Fetch Error :-S', err);});