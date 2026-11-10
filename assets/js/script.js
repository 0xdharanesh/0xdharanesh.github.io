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
		function toggleNav() {
			body.classList.toggle("nav-active");
			var open = body.classList.contains("nav-active");
			menu.setAttribute("aria-expanded", open ? "true" : "false");
		}

		menu.setAttribute("aria-expanded", "false");
		menu.addEventListener("click", toggleNav);
		menu.addEventListener("keydown", function (ev) {
			if (ev.key === "Enter" || ev.key === " ") {
				ev.preventDefault();
				toggleNav();
			}
			if (ev.key === "Escape" && body.classList.contains("nav-active")) {
				body.classList.remove("nav-active");
				menu.setAttribute("aria-expanded", "false");
			}
		});
	}
})();
