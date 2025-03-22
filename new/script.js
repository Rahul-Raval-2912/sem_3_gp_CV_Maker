document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from refreshing the page

        const fileInput = document.getElementById("fileInput"); // Fix the ID
        const file = fileInput.files[0]; // Get the selected file

        // Function to store text-based data
        function saveTextData() {
            const names = document.getElementById("name").value;
            const intros = document.getElementById("intro").value;
            const educations = document.getElementById("education").value;
            const skills1 = document.getElementById("skill1").value;
            const skills2 = document.getElementById("skill2").value;
            const skills3 = document.getElementById("skill3").value;
            const skills4 = document.getElementById("skill4").value;
            const skills5 = document.getElementById("skill5").value;
            const detail1 = document.getElementById("address").value;
            const detail2 = document.getElementById("contact").value;
            const detail3 = document.getElementById("email").value;
            const detail4 = document.getElementById("dob").value;
            const references = document.getElementById("refference").value; // Fixed ID mismatch
            const hobbies = document.getElementById("hobbie").value;

            localStorage.setItem("name", names);
            localStorage.setItem("intro", intros);
            localStorage.setItem("education", educations);
            localStorage.setItem("skill1", skills1);
            localStorage.setItem("skill2", skills2);
            localStorage.setItem("skill3", skills3);
            localStorage.setItem("skill4", skills4);
            localStorage.setItem("skill5", skills5);
            localStorage.setItem("address", detail1);
            localStorage.setItem("contact", detail2);
            localStorage.setItem("email", detail3);
            localStorage.setItem("dob", detail4);
            localStorage.setItem("refference", references); // Fixed ID mismatch
            localStorage.setItem("hobbie", hobbies);
        }

        // Handle Profile Picture Upload
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                localStorage.setItem("propic", event.target.result);
                saveTextData(); // Save other form data after image issaved 
                alert("Profile Saved Successfully!");
                window.location.href = "cvpage.html"; // Redirect after saving everything
            };
            reader.readAsDataURL(file);
        } else {
            saveTextData();
            alert("Profile Saved Successfully!");
            window.location.href = "cvpage.html";
        }
    });

    // Reset Button to Clear LocalStorage
    const reset = document.getElementById("reset");
    reset.addEventListener("click", function () {
        localStorage.clear();
        window.location.reload();
    });
    
});
