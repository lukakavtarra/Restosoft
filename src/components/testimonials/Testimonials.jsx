import React, { useState } from 'react';
import {GoPrimitiveDot} from 'react-icons/go'
import {FcNext, FcPrevious} from 'react-icons/fc'
import './testimonials.css';
import CTA from '../header/CTA';
import IMAGE1 from '../../assets/Carousel/FrontOfficeScreen.png'
import IMAGE2 from '../../assets/Carousel/BackOfficeScreen.png'
import IMAGE3 from '../../assets/Carousel/avatar3.jpg'
import IMAGE4 from '../../assets/Carousel/WarehouseScreen.png'

function TextSlider() {
  
  const words=[
    {
      id:0,
      header: "Syrve Front",
      value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate enim nulla aliquet porttitor. Enim ut sem viverra aliquet. Blandit massa enim nec dui nunc mattis. Tincidunt tortor aliquam nulla facilisi. Ultricies mi eget mauris pharetra et. Et malesuada fames ac turpis egestas. Diam quis enim lobortis scelerisque. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Vulputate mi sit amet mauris commodo quis. " , 
      img:IMAGE1
    },
    {
      id:1,
      header: "Syrve Back",
      value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc scelerisque viverra mauris in aliquam. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Enim praesent elementum facilisis leo vel. Ut placerat orci nulla pellentesque dignissim. Orci nulla pellentesque dignissim enim. Sed faucibus turpis in eu mi bibendum neque egestas congue. Egestas diam in arcu cursus euismod quis viverra. Sed arcu non odio euismod lacinia at quis risus sed. Pellentesque massa placerat duis ultricies lacus sed turpis.", 
      img:IMAGE2
  },
    {
      id:2,
      header: "Syrve Chain",
      value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Sodales ut eu sem integer vitae justo eget magna. Consequat ac felis donec et odio. Etiam dignissim diam quis enim lobortis scelerisque. Et tortor consequat id porta. In dictum non consectetur a erat nam at. Nunc eget lorem dolor sed viverra ipsum nunc. Pharetra sit amet aliquam id diam maecenas.", 
      img:IMAGE3
  },
    {
      id:3,
      header: "Syrve Warehouse",
      value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci dapibus ultrices in iaculis nunc. Nunc consequat interdum varius sit amet mattis vulputate enim. Rhoncus dolor purus non enim. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Adipiscing enim eu turpis egestas pretium aenean pharetra. Consequat semper viverra nam libero justo laoreet sit. Congue quisque egestas diam in arcu. Sagittis orci a scelerisque purus semper eget. Nunc sed augue lacus viverra vitae congue eu.", 
      img:IMAGE4
  },
  ];
  const [wordData,setWordData]=useState(words[0].value)
  const [image, setImage] = useState(words[0].img)
  const [id, setId] = useState(words[0].id)
  const [header, setHeader] = useState(words[0].header)

  const handleClick = (index) => {
  const dot = [...document.querySelectorAll('.dot')]
    dot.map(item =>  {
      item.style.color = "white"
    })

    dot[index].style.color = 'var(--color-bg)'
    const wordSlider=words[index].value;
    const img = words[index].img;
    const indx = words[index].id;
    const header = words[index].header;
    setWordData(wordSlider);
    setImage(img);
    setId(indx);
    setHeader(header);
  }

  const nextItem = (index) => {
    const dot = [...document.getElementsByName(id)][0]
    if(id < words.length-1) {
      setId(index+1)
      const wordSlider=words[id+1].value;
      const img = words[id+1].img;
      const indx = words[id+1].id;
      const header = words[id+1].header;
      setWordData(wordSlider);
      setImage(img);
      setId(indx);
      setHeader(header);

      [...document.getElementsByName(id+1)][0].style.color = "var(--color-bg)"

    }else {
      const wordSlider=words[0].value;
      const img = words[0].img;
      const indx = words[0].id;
      const header = words[0].header;

      setWordData(wordSlider);
      setImage(img);
      setId(indx);
      setHeader(header);
      [...document.getElementsByName(0)][0].style.color = "var(--color-bg)";
    }
    dot.style.color = "white"

  }
  const previousItem = (index) => {
    const dot = [...document.getElementsByName(id)][0]
    if(id > 0) {
      setId(index-1)
      const wordSlider=words[id-1].value;
      const img = words[id-1].img;
      const indx = words[id-1].id;
      const header = words[id-1].header;

      setWordData(wordSlider);
      setImage(img);
      setId(indx);
      setHeader(header);

      [...document.getElementsByName(id-1)][0].style.color = "var(--color-bg)"

    }else {
      const wordSlider=words[words.length-1].value;
      const img = words[words.length-1].img;
      const indx = words[words.length-1].id;
      const header = words[words.length-1].header;

      setWordData(wordSlider);
      setImage(img);
      setId(indx);
      setHeader(header);
      [...document.getElementsByName(words.length-1)][0].style.color = "var(--color-bg)"
    }
    dot.style.color = "white"

  }
  return (
    <section className="main" id='system'>
    <h3>რა არის Syrve?</h3>
    <h1>{header}</h1>
    <div className="flexbox">
    <div className='flex_row'>
    <h2 className='next'  onClick={()=>previousItem()}><FcPrevious /></h2>
    </div>
      <div className='carousel'>
        <div className='carousel_image'> <img src={image} alt="" /> </div>
        <p className='carousel_paragraph'>{wordData} 
        <CTA />
        </p>

        </div>
        <div className='flex_row'>
        <h2 className='next'  onClick={()=>nextItem()}><FcNext /></h2>
        </div>
      </div>
      <div className='flex_row'>
        {words.map((data,i)=>
          <h2 className='dot' key={i} name={i} onClick={()=>handleClick(i)}><GoPrimitiveDot /></h2>
        )}
      </div>
          
    </section>
  );
}

export default TextSlider;