const particlesConfig = {
  
    "background": {
      "color": {
        "value": "#FFC0CB"
      },
      "image": "url('https://media4.giphy.com/media/3gWIjOpHyh066G46he/giphy.gif?cid=790b7611c93ab172c230d5516847ea876a5735eefbb3a04e&rid=giphy.gif&ct=s')",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "50%"
    },
    "fullScreen": {
      "zIndex": 0
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "repulse"
        },
        "onDiv": {
          "selectors": "#repulse-div",
          "mode": "repulse"
        },
        "onHover": {
          "enable": true,
          "mode": "bubble",
          "parallax": {
            "force": 20
          }
        }
      },
      "modes": {
        "bubble": {
          "distance": 200,
          "duration": 2,
          "opacity": 0.8,
          "size": 40
        },
        "grab": {
          "distance": 400
        }
      }
    },
    "particles": {
      "color": {
        "value": "random"
      },
      "links": {
        "color": {
          "value": "#ffffff"
        },
        "distance": 150,
        "opacity": 0.4
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 1200
          }
        },
        "enable": true,
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "speed": 2
      },
      "number": {
        "density": {
          "enable": true
        },
        "limit": 500,
        "value": 300
      },
      "opacity": {
        "value": 0.5,
        "animation": {
          "speed": 1,
          "minimumValue": 0.1
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 5
        },
        "animation": {
          "speed": 80,
          "minimumValue": 0.1
        }
      }
    }
  }
  
  export default particlesConfig