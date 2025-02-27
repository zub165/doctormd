# ER Wait Time Web Application

This web application provides information about ER wait times, allows patient registration, and shows directions to the hospital.

## File Structure
Sure! Here is the complete file and folder structure for your web application, along with the content for each file.

### File Structure:

```
/Users/zubairmalik/Desktop/untitled folder 2/
│
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── ambulance.png
│   └── hospital.png
└── README.md
```

### index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ER Wait Time</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">ER Wait Time</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link active" id="hospital-tab-link" data-toggle="tab" href="#hospital-tab">Hospital</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="registration-tab-link" data-toggle="tab" href="#registration-tab">Registration</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="records-tab-link" data-toggle="tab" href="#records-tab">Records</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="directions-tab-link" data-toggle="tab" href="#directions-tab">Directions</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container mt-5">
        <div class="tab-content">
            <!-- Hospital Tab -->
            <div class="tab-pane fade show active" id="hospital-tab">
                <h1 class="text-center">Hospital Information</h1>
                <p>Details about the hospital...</p>
            </div>

            <!-- Registration Tab -->
            <div class="tab-pane fade" id="registration-tab">
                <h1 class="text-center">ER Wait Time - Patient Registration</h1>
                
                <!-- Button to Open the Modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registrationModal">
                    Register Patient
                </button>

                <!-- The Modal -->
                <div class="modal" id="registrationModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">Patient Registration</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <!-- Modal Body -->
                            <div class="modal-body">
                                <form id="registration-form">
                                    <div class="form-group">
                                        <label for="first-name">First Name:</label>
                                        <input type="text" class="form-control" id="first-name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="last-name">Last Name:</label>
                                        <input type="text" class="form-control" id="last-name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="dob">Date of Birth:</label>
                                        <input type="date" class="form-control" id="dob" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="symptoms">Symptoms:</label>
                                        <textarea class="form-control" id="symptoms" required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="location">Location:</label>
                                        <input type="text" class="form-control" id="location" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="wait-time">Wait Time (mins):</label>
                                        <input type="number" class="form-control" id="wait-time" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Symptoms Severity:</label>
                                        <div>
                                            <span class="symptom-bubble symptom-yes">1</span>
                                            <span class="symptom-bubble symptom-no">2</span>
                                            <span class="symptom-bubble symptom-yes">3</span>
                                            <span class="symptom-bubble symptom-no">4</span>
                                            <span class="symptom-bubble symptom-yes">5</span>
                                            <span class="symptom-bubble symptom-no">6</span>
                                            <span class="symptom-bubble symptom-yes">7</span>
                                            <span class="symptom-bubble symptom-no">8</span>
                                            <span class="symptom-bubble symptom-yes">9</span>
                                            <span class="symptom-bubble symptom-no">10</span>
                                            <span class="symptom-bubble symptom-yes">11</span>
                                            <span class="symptom-bubble symptom-no">12</span>
                                            <span class="symptom-bubble symptom-yes">13</span>
                                            <span class="symptom-bubble symptom-no">14</span>
                                            <span class="symptom-bubble symptom-yes">15</span>
                                            <span class="symptom-bubble symptom-no">16</span>
                                            <span class="symptom-bubble symptom-yes">17</span>
                                            <span class="symptom-bubble symptom-no">18</span>
                                            <span class="symptom-bubble symptom-yes">19</span>
                                            <span class="symptom-bubble symptom-no">20</span>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="mt-5">Current ER Wait Times</h2>
                <div class="row" id="wait-times-cards">
                    <!-- Cards will be populated here -->
                </div>
            </div>

            <!-- Records Tab -->
            <div class="tab-pane fade" id="records-tab">
                <h1 class="text-center">Patient Records</h1>
                <p>Details about patient records...</p>
            </div>

            <!-- Directions Tab -->
            <div class="tab-pane fade" id="directions-tab">
                <h1 class="text-center">Directions to Hospital</h1>
                <div class="ambulance-animation">
                    <img src="images/ambulance.png" alt="Ambulance" class="ambulance">
                    <img src="images/hospital.png" alt="Hospital" class="hospital">
                </div>
                <div class="time-to-reach">
                    <h2>Time to Reach: <span id="time-to-reach">00:00</span></h2>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-light text-center text-lg-start mt-5">
        <div class="container p-4">
            <p class="text-center">&copy; 2025 ER Wait Time. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

### styles.css:

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

form {
    margin: 20px auto;
    width: 300px;
    display: flex;
    flex-direction: column;
}

label {
    margin: 5px 0;
}

button {
    margin-top: 10px;
    padding: 10px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
}

table {
    margin: 20px auto;
    width: 80%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    border: 1px solid black;
}

.symptom-bubble {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 5px;
    text-align: center;
    line-height: 20px;
    color: white;
    font-size: 12px;
}

.symptom-yes {
    background-color: red;
}

.symptom-no {
    background-color: green;
}

.ambulance-animation {
    position: relative;
    width: 100%;
    height: 100px;
    margin: 20px 0;
}

.ambulance {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    animation: moveAmbulance 5s linear infinite;
}

.hospital {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

@keyframes moveAmbulance {
    0% {
        left: 0;
    }
    100% {
        left: calc(100% - 100px);
    }
}

.time-to-reach {
    margin-top: 20px;
}
```

### script.js:

```javascript
const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbzRJbECjTSCAN7z7k5UuJv1GGICeJAAtaTcxJih8URNR3yVQmBjLCiz7YWn5NyaFBXf/exec";

// Handle Form Submission
document.getElementById("registration-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        dob: document.getElementById("dob").value,
        symptoms: document.getElementById("symptoms").value,
        location: document.getElementById("location").value,
        waitTime: document.getElementById("wait-time").value
    };

    // Send Data to Google Sheets
    try {
        await fetch(GOOGLE_SHEET_API, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
        });
        alert("Registration successful!");
        loadWaitTimes(); // Refresh table
    } catch (error) {
        console.error("Error:", error);
    }
});

// Fetch Wait Times from Google Sheets
async function loadWaitTimes() {
    try {
        const response = await fetch(GOOGLE_SHEET_API);
        const data = await response.json();
        
        let tableHTML = `<tr>
            <th>Timestamp</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Symptoms</th>
            <th>Location</th>
            <th>Wait Time</th>
        </tr>`;

        data.forEach(entry => {
            tableHTML += `<tr>
                <td>${entry.timestamp}</td>
                <td>${entry.firstName} ${entry.lastName}</td>
                <td>${entry.dob}</td>
                <td>${entry.symptoms}</td>
                <td>${entry.location}</td>
                <td>${entry.waitTime} mins</td>
            </tr>`;
        });

        document.getElementById("wait-times-table").innerHTML = tableHTML;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Load wait times on page load
document.addEventListener("DOMContentLoaded", function() {
    loadWaitTimes();

    function updateTimeToReach() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        document.getElementById('time-to-reach').textContent = `${hours}:${minutes}`;
    }

    setInterval(updateTimeToReach, 1000);
    updateTimeToReach();
});
```

### README.md:

```markdown
# ER Wait Time Web Application

This web application provides information about ER wait times, allows patient registration, and shows directions to the hospital.

## File Structure

```
/Users/zubairmalik/Desktop/untitled folder 2/
│
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── ambulance.png
│   └── hospital.png
└── README.md
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to view the application.
3. Ensure that the `styles.css` and `script.js` files are in the same directory as `index.html`.
4. Place the `ambulance.png` and `hospital.png` images in the `images` folder.

## Features

- **Hospital Tab**: Displays information about the hospital.
- **Registration Tab**: Allows patients to register and submit their information.
- **Records Tab**: Displays patient records.
- **Directions Tab**: Shows directions to the hospital, including an ambulance animation and a clock displaying the time to reach.

## Dependencies

- Bootstrap 4.5.2
- jQuery 3.5.1
- Popper.js 2.5.4

## License

This project is licensed under the MIT License.
```

### Images:

Place the `ambulance.png` and `hospital.png` images in the `images` folder within your project directory. If you don't have these images, you can download or create them and place them in the `images` folder.

This file structure and content should help you organize your web application and provide clear instructions for setting it up and running it.

Similar code found with 2 license types