# Speech-to-Text App

A simple **Speech-to-Text** web application using JavaScript and the Web Speech API. This app converts spoken words into text and continuously appends new sentences instead of replacing them.

## Features
- Convert speech to text in real-time
- Continuous speech recognition
- Start and stop recognition with buttons
- Appends new speech instead of replacing old text

## Technologies Used
- HTML
- CSS
- JavaScript (Web Speech API)

## How to Use
1. Clone this repository:
   ```sh
   git clone https://github.com/Doshi-Krupal/speech-to-text-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd speech-to-text-app
   ```
3. Open `index.html` in a web browser.
4. Click the **Start** button and begin speaking.
5. Click the **Stop** button to stop recognition.
6. Your speech will be converted to text and displayed on the screen.

## Code Overview
```javascript
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = false;

const output = document.getElementById("output");
let fullText = "";

recognition.onresult = (event) => {
  const newText = event.results[event.results.length - 1][0].transcript;
  fullText += newText + " ";
  output.textContent = fullText.trim();
};

// Start and stop buttons
document.getElementById("startBtn").addEventListener("click", () => recognition.start());
document.getElementById("stopBtn").addEventListener("click", () => recognition.stop());
```



## Future Improvements
- Support for multiple languages
- Dark mode UI
- Save transcriptions as text files

## License
This project is licensed under the MIT License.

## Author
Developed by **Doshi Krupal**

GitHub: [Doshi-Krupal](https://github.com/Doshi-Krupal)


