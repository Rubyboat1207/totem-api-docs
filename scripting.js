//add a listener to on dom loaded
const content_names = ["Getting Started", "Workspace Setup", "Your First Totem", "Totem Effect List"]; 
const content_urls = ["index.html", "workspace-setup.html", "create-totem.html", "totem-effect-list.html"];


window.addEventListener('DOMContentLoaded', function() {
    //grab the element with id of content
    const content = document.getElementById('contents');
    //for content_name add a new link to the content url with the inner html of the content_name
    for (let i = 0; i < content_names.length; i++) {
        const link = document.createElement('a');
        link.href = content_urls[i];
        link.innerHTML = content_names[i];
        //link class="contents"
        link.className = "contents";
        content.appendChild(link);
    }
    //get all elements with the id of totem-version and set the inner html to the latest release version from the github repository https://github.com/Rubyboat1207/totem-api
    document.getElementById('totem-version').innerHTML = "Totem API " + getLatestReleaseVersion();
});

//return the latest release version from the github repository
function getLatestReleaseVersion() {
    const url = "https://api.github.com/repos/Rubyboat1207/totem-api/releases/latest";
    const request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);
    const response = JSON.parse(request.responseText);
    return response.tag_name;
}