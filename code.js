window.onload = function () {
  // Run this once the page has loaded.
  // search
  document
    .querySelector("#searchButton")
    .addEventListener("click", searchGithub);
  function searchGithub() {
    const url = "https://api.github.com/search/users?q=";
    const searchUserText = document.querySelector("#searchUser").value;
    fetch(url + searchUserText)
      .then((response) => response.json())
      .then((result) => {
        let users = result.items;
        renderUserList(users);
      });
    // Obtain a list of users from the Github API that match searchUserText
    //  The final result will contain an array under the key 'items'
    // Pass this array to `renderUserList`
  }

  function renderUserList(githubUsers) {
    let html = "";
    html += "<ul>";
    for (let i = 0; i < githubUsers.length; i++) {
      let githubUser = githubUsers[i];
      html += "<li>";
      html += `<img src=${githubUser.avatar_url} class="user_avatar">`;
      html += `<a target="_blank" href="${githubUser.html_url}"><strong>${githubUser.login}</strong></a>`;

      html += "</li>";
    }
    html += "</ul>";

    document.querySelector("#resultsContainer").innerHTML = html;
  }
};
