const recordBtn = document.querySelector(".record");
const inputLanguage = document.getElementById("language");
const result = document.querySelector(".result");
const clearBtn = document.querySelector(".clear");
const downloadBtn = document.querySelector(".download");

let recognition;
let recording = false;
let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function populateLanguages() {
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.innerText = lang.name;
    inputLanguage.appendChild(option);
  });
}

populateLanguages();

function speechToText() {
  try {
    recognition = new SpeechRecognition();
    recognition.lang = inputLanguage.value;
    recognition.interimResults = true;
    recordBtn.classList.add("recording");

    recordBtn.querySelector("p").innerText = "Listening...";

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;

      if (event.results[0].isFinal) {
        result.innerHTML += " " + speechResult;
        result.querySelector("p").remove();
      } else {
        if (!document.querySelector(".interim")) {
          const interim = document.createElement("p");
          interim.classList.add("interim");
          result.appendChild(interim);
        }

        document.querySelector(".interim").innerText = " " + speechResult;
      }
      downloadBtn.disabled = false;
    };

    recognition.onspeechend = () => {
      speechToText();
    };

    recognition.onerror = (event) => {
      stopRecording();
      if (event.error == "no-speech") {
        alert("No speech was detected. Stopping...");
      } else if (event.error == "audio-capture") {
        alert(
          "No microphone was detected. Ensure that a microphone is installed!"
        );
      } else if (event.error == "not-allowed") {
        alert("Permission to use microphone is blocked!");
      } else if (event.error == "aborted") {
        alert("Listening stopped!");
      } else {
        alert("Error occured in recognition: " + event.error);
      }
    };
  } catch (error) {
    recording = false;
    console.log(error);
  }
}

recordBtn.addEventListener("click", () => {
  if (!recording) {
    speechToText();
    recording = true;
  } else {
    stopRecording();
  }
});

function stopRecording() {
  recognition.stop();
  recordBtn.querySelector("p").innerText = "Start Listening";
  recordBtn.classList.remove("recording");
  recording = false;
}

function download() {
  const text = result.innerText;
  const fileName = "speech.txt";

  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/pain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", fileName);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

downloadBtn.addEventListener("click", download);

clearBtn.addEventListener("click", () => {
  result.innerText = "";
  downloadBtn.disabled = true;
});

//for text to speech
let voices = [];
const synth = window.speechSynthesis;

const setSpeech = new Promise((resolve, reject) => {
  let id;

  id = setTimeout(() => {
    if (synth.getVoices().length < 0) {
      resolve(synth.getVoices());
      clearInterval(id);
    }
  }, 10);
});

setSpeech.then((voices) => {
  let utterance = new SpeechSynthesisUtterance(
    "Hi! My name is Hazel and for your today's remainder I need to remind you to write S O P for one student name Deepak"
  ).catch(error => {
    console.error(error);
    
  });
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.voice = voices[1];
  synth.speak(utterance);
  result.blur();
});
