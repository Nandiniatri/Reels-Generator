import { useEffect, useRef, useState } from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTempleteData } from './features/templates/templateSlice';


function App() {
  const dispatch = useDispatch();
  // console.log(dispatch);

  const { templates } = useSelector((state) => state.
    templates.templates
  );
  // console.log(templates);
  const [selected, setSelected] = useState(null);
  // const canvasRef = useRef(null);

  useEffect(() => {
    dispatch(fetchTempleteData())
  }, [dispatch])

  const handleImageClick = (src) => {
    setSelected(src);
  }

  return (
    <>
      <h1>Reels-Generator</h1>
      <div className='template-main-div'>

        <div className='div-first-image'>
          {templates && templates.map((item) => {
            return (
              <>
                {item.type === 'video' ? (
                  <video
                    controls
                    onClick={() => handleImageClick(item)}
                    className="template-video">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt="Template Thumbnail"
                    onClick={() => handleImageClick(item)}
                    className="template-thumbnail"
                  />
                )}
              </>
            )
          })}
        </div>

        <div className='div-second-canvas'>
          
          <div className="selected-image-div">
            {selected && 
              selected.type === 'video' ? (
                <video controls autoPlay>
                <source src={selected} type="video/mp4" />
              </video>
              ) : (
                <img src={selected} />
              )
            }
          </div>

          hello
        </div>


      </div>
    </>
  )
}

export default App
