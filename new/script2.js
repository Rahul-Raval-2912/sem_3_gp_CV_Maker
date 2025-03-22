document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from localStorage
    const name = localStorage.getItem("name") || "No Name Set";
    const address = localStorage.getItem("address") || "No Address Set";
    const contact = localStorage.getItem("contact") || "No Contact Set";
    const email = localStorage.getItem("email") || "No Email Set";
    const dob = localStorage.getItem("dob") || "No DOB Set";
    const workExp = localStorage.getItem("intro") || "No Work Experience Set";
    const education = localStorage.getItem("education") || "No Education Set";
    // const reference = localStorage.getItem("reference") || "No Reference Set";
    // const hobbies = localStorage.getItem("hobbie") || "No Hobbies Set";



    // Set values in the HTML page
    document.getElementById("navpara").innerText = name;
    document.getElementById("addresspara").innerText = address;
    document.getElementById("phonepara").innerText = contact;
    document.getElementById("emailpara").innerText = email;
    document.getElementById("dobpara").innerText = dob;
    document.getElementById("profilepara").innerText = workExp;
    document.getElementById("educationpara").innerText = education;
    document.getElementById("referencepara").innerText = localStorage.getItem("refference") || "No Reference Set";
    document.getElementById("hobbiepara").innerText = localStorage.getItem("hobbie") || "No Hobbies Set";


    // Set skills
    const skillElements = ["list1", "list2", "list3", "list4", "list5"];
    skillElements.forEach((id, index) => {
        const skill = localStorage.getItem(`skill${index + 1}`) || `No Skill ${index + 1}`;
        document.getElementById(id).innerText = skill;
    });
    

    // Function to update profile picture
    function updateProfilePicture() {
        const profilePic = localStorage.getItem("propic"); // Get stored image
        if (profilePic) {
            document.querySelector(".pic img").src = profilePic;
        }
    }

    // Call function on page load to update the image
    updateProfilePicture();

    // Handle profile picture upload when the submit button is clicked
    document.getElementById("submit-btn").addEventListener("click", function () {
        const fileInput = document.getElementById("fileInput");
        const file = fileInput.files[0]; // Get selected file

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                localStorage.setItem("propic", e.target.result); // Save Base64 image
                updateProfilePicture(); // Update UI immediately
                alert("Profile picture updated successfully!");
            };
            reader.readAsDataURL(file); // Convert image to Base64
        } else {
            alert("Please select an image first.");
        }
    });
    
});
