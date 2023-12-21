var siteName = document.getElementById("siteName");
var siteLink = document.getElementById("siteLink");


var allsites = [];

if(localStorage.getItem("allsites") != null){
    allsites = JSON.parse(localStorage.getItem("allsites"));
    displayItems(allsites);
}

function addsite() {
    var siteNameValue = siteName.value.trim();
    var siteLinkValue = normalizeLink(siteLink.value.trim());

  
    if (siteNameValue.length < 3) {
        alert("Site name must be at least 3 characters.");
        return;
    }

    if (!/\..{2,}/.test(siteLinkValue)) {
        alert("Site link formtat is incorrect");
        return;
    }

    var site = {
        name: siteNameValue,
        link: siteLinkValue,
    };

    allsites.push(site);
    localStorage.setItem("allsites", JSON.stringify(allsites));
    displayItems(allsites);
    clearForm();
}

function normalizeLink(link) {
    if (!/^https?:\/\//i.test(link)) {
        link = 'http://' + link;
    }
    return link;
}


function normalizeLink(link) {
    if (!/^https?:\/\//i.test(link)) {
        link = 'http://' + link;
    }
    return link;
}



function displayItems(arr) {
    var box = "";

    for (var i = 0; i < arr.length; i++) {
        box += `<tr>
            <td>${i + 1}</td>
            <td>${arr[i].name}</td>
            <td><button class="btn btn-success" onclick="visitSite('${arr[i].link}')">Visit</button></td>
            <td><button class="btn btn-danger" onclick="deletesite(${i})">Delete</button></td>
        </tr>`;
    }

    document.getElementById("DataLocation").innerHTML = box;
}

function visitSite(link) {
    window.open(link, '_blank');
}


function deletesite(idx){
    allsites.splice(idx, 1);
    localStorage.setItem("allsites" , JSON.stringify(allsites));
    
    displayItems(allsites);
}

function clearForm() {
    siteName.value = "";
    siteLink.value = "";

}






