(function () {
	"use strict";

	// Page cursors
	var t = document.getElementById("cursor");
	var e = document.getElementById("cursor2");
	var i = document.getElementById("cursor3");

	if (t && e && i) {
		document.body.addEventListener("mousemove", function (n) {
			t.style.left = n.clientX + "px";
			t.style.top = n.clientY + "px";
			e.style.left = n.clientX + "px";
			e.style.top = n.clientY + "px";
			i.style.left = n.clientX + "px";
			i.style.top = n.clientY + "px";
		});

		function addHover() {
			e.classList.add("hover");
			i.classList.add("hover");
		}

		function removeHover() {
			e.classList.remove("hover");
			i.classList.remove("hover");
		}

		removeHover();

		var hoverTargets = document.querySelectorAll(".hover-target");
		for (var a = hoverTargets.length - 1; a >= 0; a--) {
			hoverTargets[a].addEventListener("mouseover", addHover);
			hoverTargets[a].addEventListener("mouseout", removeHover);
		}
	}

	// Navigation
	var body = document.querySelector("body");
	var menu = document.querySelector(".menu-icon");

	if (body && menu) {
		menu.addEventListener("click", function () {
			body.classList.toggle("nav-active");
		});
	}
})();
