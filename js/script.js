const icons = document.querySelectorAll(".rotate");

icons.forEach(function (icon) {
	icon.addEventListener("mouseenter", function () {
		gsap.to(icon, {
			rotation: 180,
			duration: 0.3,
			ease: "power2.out",
		});
	});

	icon.addEventListener("mouseleave", function () {
		gsap.to(icon, {
			rotation: 0,
			duration: 0.3,
			ease: "power2.out",
		});
	});
});
