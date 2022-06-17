import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//     return element;
//   }

// function render() {
//     document.body.appendChild(component());
// }
//   document.body.appendChild(component());



//======================HEADER ELEMENTS============================//
  const header = document.createElement('header')
  const homeBtn = document.createElement('button')
  homeBtn.textContent = 'Home'
  const aboutBtn = document.createElement('button')
  aboutBtn.textContent = 'About'
  const contactBtn = document.createElement('button')
  contactBtn.textContent = 'Contact'

//======================SECTION 1 ELEMENTS============================//


  const firstSection = document.createElement('div')
  firstSection.classList.add('first-section')
  const firstSectionWrapper = document.createElement('div')
  firstSectionWrapper.classList.add('first-section-wrapper')
  const firstSectionTitle = document.createElement('h1')
  firstSectionTitle.textContent = 'Welcome to my website'
  const firstSectionText = document.createElement('p')
  firstSectionText.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
  const video = document.createElement('video')
  const source = document.createElement('source')
  video.setAttribute('autoplay', 'true')
  source.setAttribute('src', 'src/video.mp4')


//======================SECTION 2 ELEMENTS============================//


  const secondSection = document.createElement('div')
  secondSection.classList.add('second-section')
  const secondSectionWrapper = document.createElement('div')
  secondSectionWrapper.classList.add('second-section-wrapper')
  const secondSectionTitle = document.createElement('h1')
  secondSectionTitle.textContent = 'Menu'
  const secondSectionText = document.createElement('p')
  secondSectionText.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."


//======================SECTION 3 ELEMENTS============================//

  
  const thirdSection = document.createElement('div')
  thirdSection.classList.add('third-section')
  const thirdSectionWrapper = document.createElement('div')
  thirdSectionWrapper.classList.add('third-section-wrapper')
  const thirdSectionTitle = document.createElement('h1')
  thirdSectionTitle.textContent = 'Contact'
  const thirdSectionText = document.createElement('p')
  thirdSectionText.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
  const thirdSectionImage = document.createElement('img')
  thirdSectionImage.setAttribute('src', 'src/image.jpg')

//======================FOOTER ELEMENTS============================//

 const footer = document.createElement('footer')
  const footerText = document.createElement('p')
  footerText.textContent = 'Copyright © 2020'





//======================APPENDING ELEMENTS HEADER============================//

  header.appendChild(homeBtn)
  header.appendChild(aboutBtn)
  header.appendChild(contactBtn)
  document.body.appendChild(header)


//======================APPENDING ELEMENTS SECTION 1============================//

  firstSection.appendChild(firstSectionWrapper)
  firstSectionWrapper.appendChild(firstSectionTitle)
  firstSectionWrapper.appendChild(firstSectionText)
  firstSection.appendChild(video)
  video.appendChild(source)
  document.body.appendChild(firstSection)


//======================APPENDING ELEMENTS SECTION 2============================//

  secondSection.appendChild(secondSectionWrapper)
  secondSectionWrapper.appendChild(secondSectionTitle)
  secondSectionWrapper.appendChild(secondSectionText)
  document.body.appendChild(secondSection)


//======================APPENDING ELEMENTS SECTION 3============================//

  thirdSection.appendChild(thirdSectionWrapper)
  thirdSectionWrapper.appendChild(thirdSectionTitle)
  thirdSectionWrapper.appendChild(thirdSectionText)
  thirdSectionWrapper.appendChild(thirdSectionImage)
  document.body.appendChild(thirdSection)

//======================APPENDING ELEMENTS FOOTER============================//

  footer.appendChild(Icon)
  document.body.appendChild(footer)

//======================HEADER BUTTONS============================//







  // const div = document.createElement('div');
  // const footer = document.createElement('footer')
  // const container = document.createElement('div').classList.add('container')
  // const wrapper = document.createElement('div').classList.add('wrapper')





  // div.appendChild(header)
  



  // body.appendChild(container)
