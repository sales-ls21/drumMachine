
function playSound(e) {
	var audio = document.querySelector(`audio[id=sound${e.keyCode}]`);
	if(!audio)return;
	audio.currentTime = 0;
	audio.play();
	var key = document.querySelector(`div[id="${e.keyCode}"]`);
	key.classList.add("playing");
}

var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e){
	if (e.propertyName !== 'transform') return
		this.classList.remove("playing");
};

window.addEventListener("keydown", playSound);
