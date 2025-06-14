import React, { useState, useEffect, useRef } from 'react';

const HomePage = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [flyoutVisible, setFlyoutVisible] = useState(false);
  const flyoutMenuRef = useRef(null);
  const flyoutButtonRef = useRef(null);

  // Effect to apply theme class to html element and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Effect to handle clicks outside flyout menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        flyoutMenuRef.current &&
        !flyoutMenuRef.current.contains(event.target) &&
        flyoutButtonRef.current &&
        !flyoutButtonRef.current.contains(event.target)
      ) {
        setFlyoutVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Google Tag Manager script injection
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P853XZ9R');`;
    document.head.appendChild(script);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P853XZ9R"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleFlyout = () => {
    setFlyoutVisible(!flyoutVisible);
  };

  return (
    <div
      className="m-0 font-sans flex justify-center items-center min-h-screen bg-page-light box-border transition-colors duration-300 ease-in-out dark:bg-text-dark-blue"
    >
      <div className="relative flex justify-center items-center w-full h-auto min-h-screen p-[10px] md:p-0">
        <div
          className="bg-card-light rounded-[50px] shadow-card-light p-[30px] text-center relative overflow-hidden border-[5px] border-yellow-border transition-all duration-300 ease-in-out
                    w-[98%] md:w-[80%] lg:w-[60%] p-5 md:p-[30px] dark:bg-card-dark dark:shadow-card-dark dark:border-yellow-border"
        >
          <div
            className="box-border w-[120px] h-[120px] mx-auto mt-5 mb-[15px] rounded-full border-[5px] border-yellow-border flex justify-center items-center overflow-hidden transition-colors duration-300 ease-in-out dark:border-yellow-border"
          >
            <img
              src="shafayat.jpg"
              alt="Shafayat Hossain"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1
            className="text-1-8em mb-[5px] text-text-dark-blue transition-colors duration-300 ease-in-out dark:text-text-white-dark"
          >
            Shafayat Hossain
          </h1>
          <p
            className="text-1-1em text-white inline-block bg-text-dark-blue px-[25px] py-[12px] rounded-[25px] mb-[30px] transition-colors duration-300 ease-in-out dark:bg-yellow-border dark:text-button-yellow-dark-text"
          >
            AI Prompt Engineer
          </p>
          <p
            className="text-0-95em text-text-dark-blue leading-[1.6] mb-[30px] px-[15px] transition-colors duration-300 ease-in-out dark:text-text-grey-dark"
          >
            AI Prompt Engineer Crafting precise prompts for optimized AI interactions Exploring Bootstrap, Laravel & Figma in web development
          </p>

          <div className="flex justify-center gap-5 mt-5 flex-wrap">
            <a
              href="https://wa.me/8801616332313"
              className="social-icon text-text-dark-green text-1-5em transition-colors duration-300 ease-in-out no-underline hover:text-social-icon-hover-light dark:text-yellow-border dark:hover:text-button-yellow-dark-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a
              href="call:+8801616332313"
              className="social-icon text-text-dark-green text-1-5em transition-colors duration-300 ease-in-out no-underline hover:text-social-icon-hover-light dark:text-yellow-border dark:hover:text-button-yellow-dark-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-phone"></i>
            </a>

            <a
              href="mailto:shafayat@engineer.com"
              className="social-icon text-text-dark-blue text-1-5em transition-colors duration-300 ease-in-out no-underline hover:text-social-icon-hover-light dark:text-yellow-border dark:hover:text-button-yellow-dark-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://twitter.com/jqsafi1313"
              className="social-icon text-text-dark-blue text-1-5em transition-colors duration-300 ease-in-out no-underline hover:text-social-icon-hover-light dark:text-yellow-border dark:hover:text-button-yellow-dark-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://instagram.com/jqsafi"
              className="social-icon text-text-dark-blue text-1-5em transition-colors duration-300 ease-in-out no-underline hover:text-social-icon-hover-light dark:text-yellow-border dark:hover:text-button-yellow-dark-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://linkedin.com/in/jqsafi"
              className="social-icon text-text-dark-blue text-1-5em transition-colors duration-300 ease-in-out no-underline hover:text-social-icon-hover-light dark:text-yellow-border dark:hover:text-button-yellow-dark-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/jqsafi"
              className="social-icon text-text-dark-blue text-1-5em transition-colors duration-300 ease-in-out no-underline hover:text-social-icon-hover-light dark:text-yellow-border dark:hover:text-button-yellow-dark-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://dev.to/jqsafi"
              className="social-icon text-text-dark-blue text-1-5em transition-colors duration-300 ease-in-out no-underline hover:text-social-icon-hover-light dark:text-yellow-border dark:hover:text-button-yellow-dark-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-dev"></i>
            </a>
          </div>
        </div>
        {/* Theme toggle button with icon */}
        <button
          onClick={toggleTheme}
          className="fixed top-[10px] right-[10px] p-2 w-[35px] h-[35px] text-base border-none rounded-full cursor-pointer text-white flex justify-center items-center transition-colors duration-300 ease-in-out z-[100] shadow-button-custom bg-button-dark-blue hover:bg-button-dark-hover
                       md:top-10 md:right-10 md:p-2.5 md:w-[45px] md:h-[45px] md:text-1-2em dark:bg-button-yellow-dark dark:text-button-yellow-dark-text dark:hover:bg-button-yellow-dark-hover"
          id="themeToggleButton"
        >
          <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
        </button>

        {/* Flyout Button (FAB) */}
        <button
          ref={flyoutButtonRef}
          onClick={toggleFlyout}
          className="fixed top-4 left-4 bg-button-dark-blue text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-300 ease-in-out
                       hover:bg-button-dark-hover dark:bg-button-yellow-dark dark:text-button-yellow-dark-text dark:hover:bg-button-yellow-dark-hover
                       md:top-10 md:left-10
                       w-[56px] h-[56px] flex justify-center items-center"
          id="flyoutButton"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>

        {/* Flyout Menu Container */}
        <div
          ref={flyoutMenuRef}
          id="flyoutMenu"
          className={`fixed top-20 left-4 bg-flyout-menu-bg-light rounded-lg shadow-xl p-4 w-64 z-40 flex-col transition-opacity duration-300 ease-in-out ${
            flyoutVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } md:w-[256px] md:top-24 md:left-10 dark:bg-flyout-menu-bg-dark`}
        >
          <h3 className="text-lg font-semibold mb-2 text-flyout-menu-text-light dark:text-flyout-menu-text-dark">
            Explore Projects:
          </h3>
          <ul className="list-none p-0 mb-4">
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/index.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Home
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/emoji.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Emoji World
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/css-3d-box.html"
                className="block w-full h-full text-inherit no-underline"
              >
                3D CSS Box
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/flag.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Animated Bangladesh Flag(SVG)
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/alphabet.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Alphabets(A-Z) using DIV tag only
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/clock.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Analog Clock
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/css-percentage-circle.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Pure CSS Percentage Circle
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/css-circle-clock.html"
                className="block w-full h-full text-inherit no-underline"
              >
                CSS Circle Clock
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/equalizer.html"
                className="block w-full h-full text-inherit no-underline"
              >
                CSS Equalizer
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/canvas.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Virtual Canvas
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/gradient_font.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Gradient Font Color
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/victory_day.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Victory Day
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/puzzle.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Puzzle Game
              </a>
            </li>
            <li className="py-2 px-2 text-flyout-menu-text-light hover:bg-flyout-menu-hover-light cursor-pointer rounded transition-colors duration-150 ease-in-out dark:text-flyout-menu-text-dark dark:hover:bg-flyout-menu-hover-dark">
              <a
                href="https://jqsafi.github.io/memory_game.html"
                className="block w-full h-full text-inherit no-underline"
              >
                Memory Game
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
