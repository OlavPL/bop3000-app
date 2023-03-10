/** @type {import('tailwindcss').Config} */
const { gray } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

const brandy = {
  '50': '#fbf6f1',
  '100': '#f5e9df',
  '200': '#ead0be',
  '300': '#ddaf94',
  '400': '#ce8869',
  '500': '#c46c4b',
  '600': '#b65740',
  '700': '#974537',
  '800': '#7a3a32',
  '900': '#63312b',
}
doubleSpanishWhite = {
  '50': '#faf5f2',
  '100': '#f4e8e0',
  '200': '#e8cebf',
  '300': '#daae97',
  '400': '#ca876d',
  '500': '#be6b51',
  '600': '#b15845',
  '700': '#93463b',
  '800': '#773b35',
  '900': '#61312d',
}

const plantation = {
  '50': '#f1f8f5',
  '100': '#dcefe5',
  '200': '#bbdfce',
  '300': '#8ec7b0',
  '400': '#5ea98e',
  '500': '#3d8c72',
  '600': '#2c6f5a',
  '700': '#266150',
  '800': '#1e473c',
  '900': '#193b32',
}

const linen = {
  '50': '#fdf8f5',
  '100': '#fbede5',
  '200': '#f8dfd0',
  '300': '#f2c8af',
  '400': '#e9a780',
  '500': '#dc8957',
  '600': '#c86f3a',
  '700': '#a85b2d',
  '800': '#8b4e29',
  '900': '#744428',
}

const masala = {
  '50': '#f7f6f6',
  '100': '#e6e2e1',
  '200': '#ccc5c3',
  '300': '#aba19d',
  '400': '#897e78',
  '500': '#6e635e',
  '600': '#574f4a',
  '700': '#4f4844',
  '800': '#3b3734',
  '900': '#33302e',
}



const muesli = {
  '50': '#f7f4ef',
  '100': '#eae4d7',
  '200': '#d7c9b1',
  '300': '#bfa885',
  '400': '#aa895e',
  '500': '#9d7b55',
  '600': '#876347',
  '700': '#6d4d3b',
  '800': '#5d4236',
  '900': '#513a32',
}
vTangerine= {
  '50': '#fff1f1',
  '100': '#ffe1e1',
  '200': '#ffc7c7',
  '300': '#ffa0a0',
  '400': '#ff8080',
  '500': '#f83b3b',
  '600': '#e51d1d',
  '700': '#c11414',
  '800': '#a01414',
  '900': '#841818',
}
eggBlue= {
  '50': '#eefffb',
  '100': '#c6fff4',
  '200': '#8effeb',
  '300': '#4dfbe0',
  '400': '#19e8ce',
  '500': '#00e2c9',
  '600': '#00a496',
  '700': '#028379',
  '800': '#086761',
  '900': '#0c5550',
}
persianGreen= {
  '50': '#effefa',
  '100': '#c7fff2',
  '200': '#90ffe5',
  '300': '#51f7d7',
  '400': '#1de4c4',
  '500': '#04c8ab',
  '600': '#00a893',
  '700': '#058072',
  '800': '#0a655c',
  '900': '#0d544c',
}
botticelli = {
  '50': '#f5f8fa',
  '100': '#e9eff5',
  '200': '#c9dae6',
  '300': '#a4c2d5',
  '400': '#73a1bd',
  '500': '#5186a6',
  '600': '#3e6c8b',
  '700': '#335771',
  '800': '#2d495f',
  '900': '#2a3f50',
}
oxfordBlue = {
  '50': '#f6f7f9',
  '100': '#ebeef3',
  '200': '#d3dae4',
  '300': '#adbbcc',
  '400': '#8096b0',
  '500': '#607997',
  '600': '#4c607d',
  '700': '#3e4e66',
  '800': '#3b495d',
  '900': '#313a49',
}
tallPoppy = {
  '50': '#fdf4f3',
  '100': '#fce6e4',
  '200': '#fad2ce',
  '300': '#f5b3ac',
  '400': '#ee867b',
  '500': '#e25f51',
  '600': '#ce4334',
  '700': '#ac3528',
  '800': '#8f2f25',
  '900': '#772d25',
}
tussock = {
  '50': '#f9f6ed',
  '100': '#f1e8d0',
  '200': '#e4d1a4',
  '300': '#d5b26f',
  '400': '#ca9c51',
  '500': '#b8823a',
  '600': '#9e6630',
  '700': '#7f4d29',
  '800': '#6b3f28',
  '900': '#5c3627',
},
corvette = {
  '50': '#fef6ee',
  '100': '#fde9d7',
  '200': '#f9c398',
  '300': '#f7ae7a',
  '400': '#f38344',
  '500': '#ef6220',
  '600': '#e04816',
  '700': '#ba3514',
  '800': '#942c18',
  '900': '#772617',
},

aquaIsland = {
  '50': '#f1faf9',
  '100': '#dbf2f0',
  '200': '#bce5e1',
  '300': '#9fd9d5',
  '400': '#58b8b3',
  '500': '#3d9d99',
  '600': '#358485',
  '700': '#316b6d',
  '800': '#2f595b',
  '900': '#2a4c4f',
},
nandor = {
  '50': '#f6f7f7',
  '100': '#e1e6e3',
  '200': '#c3ccc6',
  '300': '#9daba3',
  '400': '#78897f',
  '500': '#5e6e65',
  '600': '#47544d',
  '700': '#3d4842',
  '800': '#343b38',
  '900': '#2e3331',
}
brownRust = {
  '50': '#faf6f0',
  '100': '#f1e5d4',
  '200': '#e1c9a6',
  '300': '#d2ab77',
  '400': '#c79258',
  '500': '#bd7844',
  '600': '#a65d39',
  '700': '#8b4732',
  '800': '#723b2e',
  '900': '#5f3128',
},
coral = {
  '50': '#fff4ed',
  '100': '#ffe6d4',
  '200': '#ffc9a8',
  '300': '#ffa471',
  '400': '#ff8552',
  '500': '#fe4d11',
  '600': '#ef3307',
  '700': '#c62108',
  '800': '#9d1d0f',
  '900': '#7e1b10',
},



module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '33%': {
            transform: 'translate3d(-1%, -1%, 0)',
          },          
          '66%': {
            transform: 'translate3d(-1%, 1%, 0)',
          },
        },
      },
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
      },

      backgroundImage:{
        'waves':"url(https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0)",
        'oldScroll':"url(https://www.poewiki.net/w/images/9/98/Bg.jpg)",
        'coralGrain':`/frontend/resources/coralGrain64.jpg`,
      },

      width:{
        'rounded-bar':'99%'
      },
      colors: {
        primary: aquaIsland,
        secondary: nandor,
        emphasis: coral,
        textColor: gray[800],
        plantation : {
          '50': '#f1f8f5',
          '100': '#dcefe5',
          '200': '#bbdfce',
          '300': '#8ec7b0',
          '400': '#5ea98e',
          '500': '#3d8c72',
          '600': '#2c6f5a',
          '700': '#266150',
          '800': '#1e473c',
          '900': '#193b32',
        },
        tallPoppy : {
          '50': '#fdf4f3',
          '100': '#fce6e4',
          '200': '#fad2ce',
          '300': '#f5b3ac',
          '400': '#ee867b',
          '500': '#e25f51',
          '600': '#ce4334',
          '700': '#ac3528',
          '800': '#8f2f25',
          '900': '#772d25',
        },
        eggBlue : {
          '50': '#f6f7f9',
          '100': '#ebeef3',
          '200': '#d3dae4',
          '300': '#adbbcc',
          '400': '#8096b0',
          '500': '#607997',
          '600': '#4c607d',
          '700': '#3e4e66',
          '800': '#3b495d',
          '900': '#313a49',
        },

      
      },
    },
  variants:{
    extend:{

    }
  },
  },
  plugins: [require("@tailwindcss/line-clamp", '@headlessui/tailwindcss')],
}
