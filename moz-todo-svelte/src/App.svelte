
<script>
	import { onMount } from "svelte";
  
	// Show mobile icon and display menu
	let showMobileMenu = false;
  
	// List of navigation items
	const navItems = [
	  { label: "Home", href: "#" },
	  { label: "Details", href: "#" },
	  { label: "RSVP", href: "#" },
	  { label: "Photo Upload", href: "#" },
	  { label: "Photo Gallery", href: "#" },
	];
  
	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
  
	// Media match query handler
	const mediaQueryHandler = e => {
	  // Reset mobile state
	  if (!e.matches) {
		showMobileMenu = false;
	  }
	};
  
	// Attach media query listener on mount hook
	onMount(() => {
	  const mediaListener = window.matchMedia("(max-width: 767px)");
  
	  mediaListener.addListener(mediaQueryHandler);
	});
  </script>
  

  <nav>
	<div class="inner">
	  <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
		<div class="middle-line"></div>
	  </div>
	  <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
		{#each navItems as item}
		  <li>
			<a href={item.href}>{item.label}</a>
		  </li>
		{/each}
	  </ul>
	</div>
  </nav>

<main>
	<img src="/resources/Top sparkle.png" alt="Top of page sparkle" width="200"/>
	<h1> Caitríona and Cian's Wedding! </h1>
	<p>Hello! Please see the links to RSVP, check the wedding details and upload any photos you have of the happy couple!</p>
</main>

<footer>
	<img src="/resources/bottom sparkle.png" alt="Bottom of page sparkle" width="200"/>
</footer>

<style>

@font-face{
  font-family: 'Euphoria';
  src: url('/resources/euphoria/EuphoriaScript-Regular.ttf') format('truetype');
}

	main {
		
		width: auto;
		height: 100%;
		/* padding: 1em; */
		margin: 0 auto;
		background-attachment: fixed;
	}

	* {
		background-color: #011e31;
		color: #f9cc66;
		text-align: center;
}

nav {
  background-color:#011e31;
  font-family: sans-serif;
  height: 45px;
}

	h1 {
		font-family: 'Euphoria';
		background-color: #011e31;
		color: #f9cc66;
		font-size: 4em;
		font-weight: 100;
	}

	p{
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.inner {
  max-width: 980px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 100%;
}

.mobile-icon {
  width: 25px;
  height: 14px;
  position: relative;
  cursor: pointer;
}

.mobile-icon:after,
.mobile-icon:before,
.middle-line {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.4s;
  transform-origin: center;
}

.mobile-icon:before,
.middle-line {
  top: 0;
}

.mobile-icon:after,
.middle-line {
  bottom: 0;
}

.mobile-icon:before {
  width: 66%;
}

.mobile-icon:after {
  width: 33%;
}

.middle-line {
  margin: auto;
}

.mobile-icon:hover:before,
.mobile-icon:hover:after,
.mobile-icon.active:before,
.mobile-icon.active:after,
.mobile-icon.active .middle-line {
  width: 100%;
}

.mobile-icon.active:before,
.mobile-icon.active:after {
  top: 50%;
  transform: rotate(-45deg);
}

.mobile-icon.active .middle-line {
  transform: rotate(45deg);
}

.navbar-list {
	color: #f9cc66;
  display: none;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0 40px;
}

.navbar-list.mobile {
	color: #f9cc66;
	background-color: #011e31;
  position: fixed;
  display: block;
  height: calc(100% - 45px);
  bottom: 0;
  left: 0;
}

.navbar-list li {
	
  list-style-type: none;
  position: relative;
}

.navbar-list li:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #424245;
}

.navbar-list a {
	color: #f9cc66;
  text-decoration: none;
  display: flex;
  height: 45px;
  align-items: center;
  padding: 0 10px;
  font-size: 13px;
}

@media only screen and (min-width: 767px) {
  .mobile-icon {
    display: none;
  }

  .navbar-list {
    display: flex;
    padding: 0;
  }

  .navbar-list a {
    display: inline-flex;
  }
}
</style>