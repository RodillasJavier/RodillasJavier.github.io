// Hamburger Menu function
function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Open my linkedin using a new tab
function openLinkedinNewTab() {
    window.open(
        "https://www.linkedin.com/in/rodillasjavier/", 
        "_blank", 
        "noreferrer noopener"
    )
}

// Open my linkedin using a new tab
function openGitHubinNewTab() {
    window.open(
        "https://github.com/RodillasJavier", 
        "_blank", 
        "noreferrer noopener"
    )
}