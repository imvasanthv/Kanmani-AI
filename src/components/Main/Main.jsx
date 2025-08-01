import React ,{useContext} from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className='main'>
      <div className="nav">
        <h3>Kanmani AI</h3>
        <img src={assets.user_icon } alt=""/>
      </div>
      <div className="main-container">

        {!showResult
        ?<>
        <div className="greet">
          <p><span>Hello, Developer.</span></p>
          <p>How can I help you?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see in India</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefy summarize this concept: Neural Network</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        : <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
  
              :<p dangerouslySetInnerHTML={{ __html: resultData || "<i>No response found.</i>" }} />
              }      
            </div>
        </div>
        }

        

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onSent(input)} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">Kanmani AI is integrated by Gemini API. Patience, it may take a while.</p>
        </div>
      </div>
    </div>
  )
}

export default Main