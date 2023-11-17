const slideImg = document.getElementById("slide-img");

// const images = [
// 	"images/start2.png",
// 	"images/start3.jpg",
// 	"images/start4.jpg",
// 	"images/start5.jpg",
// ];

// const lenGTH = images.length;
// const i = 0;

// function slider() {
// 	if (i > lenGTH - 1) {
// 		i = 0;
// 	}

// 	slideImg.src = images[i];

// 	setTimeout(() => {
// 		slider();
// 	}, 3000);
// }

// window.addEventListener("load", () => {
// 	slider();
// });

const images = [
	"images/start2.png",
	"images/start3.jpg",
	"images/start4.jpg",
	"images/start5.jpg",
];

let i = 0;

// images.forEach((image) => {
// 	if (i < image.length) {
// 		i++;
// 		slideImg.onload = () => {
// 			slideImg.src = image[i];
// 		};

// 		console.log(image);
// 	}
// });

const changeImage = images.map((image1) => {
	slideImg.onload = () => {
		slideImg = image1;
		i++;
		console.log();
	};
});
