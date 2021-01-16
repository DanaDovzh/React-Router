import React from 'react';

function Chat({ firstName, photo }) {
    return (
        <div className="messenger">
            <div className="top">
                <div className="photo">
                    <img src={photo} />
                </div>
                <h2>{firstName}</h2>
                <div></div>
            </div>
            <div className="messages-container">
                <div className="left">
                    <div>Hello!</div>
                    <div></div>
                </div>
                <div className="left">
                    <div>I have super news!</div>
                    <div></div>
                </div>
                <div className="right">
                    <div>&#128515;</div>
                    <div></div>
                </div>
                <div className="right">
                    <div>TELL IT!!!</div>
                    <div></div>
                </div>
                <div className="left">
                    <div>Ohhh, no...</div>
                    <div></div>
                </div>
                <div className="left">
                    <div>Sorry...&#128542;</div>
                    <div></div>
                </div>
                <div className="right">
                    <div>Pleeeeease&#128546;</div>
                    <div></div>
                </div>
                <div className="right">
                    <div>I wanna know it</div>
                    <div></div>
                </div>
                <div className="left">
                    <div>Okey.. But you must promise not to tell anyone. Ok? It is a BIIIG secret </div>
                    <div></div>
                </div>
                <div className="right">
                    <div>Ok! Tell me soon. I cant wait</div>
                    <div></div>
                </div>
                <div className="left">
                    <div>Listen me</div>
                    <div></div>
                </div>
                <div className="left">
                    <div className='secret'>YOU ARE SO CUTE!&#128150;</div>
                    <div></div>
                </div>
            </div>
            <form noValidate>
                <input className='inp-chat' type="text" placeholder="Type..." />
            </form>
        </div>
    )
}

export default Chat;