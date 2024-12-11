document.getElementById('file').addEventListener('change', function(event) {
  const file = event.target.files[0]; // Get the selected file
  const preview = document.getElementById('preview');

  if (file) {
      const reader = new FileReader();
      
      // When file is loaded
      reader.onload = function(e) {
          preview.src = e.target.result; // Set the image source
          preview.style.display = 'block'; // Make sure the image is visible
      };
      document.getElementById('banner').classList.add("btn","h-12")
      document.getElementById('banner').innerHTML="Re-upload"
      reader.readAsDataURL(file); // Read the file as a data URL
  } else {
      preview.style.display = 'none'; // Hide the preview if no file is selected
  }
});


function styleForm() {
  // Select the form and its elements
  const form = document.querySelector('form[action="/upload"]');
  const label = form.querySelector('label[for="file"]');
  const input = form.querySelector('input[type="file"]');
  const button = form.querySelector('button[type="submit"]');

  // Create a wrapper for the form
  const wrapper = document.createElement("div");
  wrapper.className =
    "max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4";
  form.parentNode.insertBefore(wrapper, form);
  wrapper.appendChild(form);

  // Apply Tailwind classes to the form
  form.className = "p-8 space-y-6";

  // Style the label and create a custom file input appearance
  label.innerHTML = `
      <span class="block text-sm font-medium text-gray-700 mb-2">Choose a file</span>
      <div class="flex items-center justify-center w-full">
        <label id='banner' for="file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500" id="file-name">No file selected</p>
          </div>
        </label>
      </div>
    `;

  // Hide the original file input
  input.className = "hidden";

  // Update file name display when a file is selected
  input.addEventListener("change", function (e) {
    const fileName = e.target.files[0]
      ? e.target.files[0].name
      : "No file selected";
    document.getElementById("file-name").textContent = fileName;
  });

  // Style the submit button
  button.className =
    "w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200";
}

// Call the function to apply styles when the DOM is loaded
document.addEventListener("DOMContentLoaded", styleForm);

