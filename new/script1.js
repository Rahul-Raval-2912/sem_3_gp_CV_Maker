document.addEventListener("DOMContentLoaded", function() {
    const profileLinks = document.querySelectorAll("a[id^='profile']");

    profileLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            const profileId = this.id; // Get clicked profile ID
            localStorage.setItem("selectedProfile", profileId); // Store profile ID in localStorage

            // Dynamically determine the correct index file
            const profileNumber = profileId.replace("profile", ""); // Extract profile number
            const targetPage = `index${profileNumber}.html`; // Create dynamic filename

            window.location.href = targetPage; // Redirect to the correct index file
        });
    });
});
