window.onload = function() {
	Particles.init({
		selector: '.background'
	});
};

var particles = Particles.init(
	{
		// options
	}
);
// E.g. gets called on a button click
function pause() {
	particles.pauseAnimation();
}
// E.g. gets called on a button click
function resume() {
	particles.resumeAnimation();
}
