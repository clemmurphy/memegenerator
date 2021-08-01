let topTextInput, topTextSizeInput, bottomTextInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;



function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
	let fontSize;

	canvas.width = img.width;
	canvas.height = img.height;

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0);


//font style

	ctx.fillStyle = 'white';
	ctx.strokeStyle = 'black';
	ctx.textAlign = 'center';

//top text font size

	fontSize = canvas.width * topTextSize;
	ctx.font = fontSize + 'px Impact';
	ctx.lineWidth = fontSize / 20;

//draw top text
	ctx.textBaseline = 'top';
	topText.split('\n').forEach(function(t, i){
		ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
		ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
	});

//bottom text font size

	fontSize = canvas.width * bottomTextSize;
	ctx.font = fontSize + 'px Impact';
	ctx.lineWidth = fontSize / 20;

//draw bottom text
	ctx.textBaseline = 'bottom';
	bottomText.split('\n').reverse().forEach(function(t, i){
		ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
		ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
	});

}

//assigns variables to html elements
function init() {
	topTextInput = document.getElementById('top-text');
	bottomTextInput = document.getElementById('bottom-text');
	topTextSizeInput = document.getElementById('top-text-size-input');
	bottomTextSizeInput = document.getElementById('bottom-text-size-input');
	imageInput = document.getElementById('image-input');
	generateBtn = document.getElementById('generate-btn');
	canvas = document.getElementById('meme-canvas');

	ctx = canvas.getContext('2d');

//establishes our canvas size (zero to start with)
	canvas.width = canvas.height = 0;


//button click listener and result generation
	generateBtn.addEventListener('click', function(){
		let reader = new FileReader();
		reader.onload = function (){
			let img = new Image;
			img.src = reader.result;
			img.onload = () => {generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value)};
		};
		reader.readAsDataURL(imageInput.files[0]);
	});
}

init();