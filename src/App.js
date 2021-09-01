import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Folder name="Desktop">
      <Folder name="Music">
        <File name="All_start.mp4"/>
        <File name="Empire_State_Of_Mind.mp4"/>
      </Folder>
      <Folder name="Pictures">
        <File name="dogs.jpeg"/>
        <File name="cats.jpeg"/>
        <File name="horses.png"/>
      </Folder>
      </Folder>
      <Folder name="Application">
        <File name="Photoshop.exe"/>
        <File name="Figma.exe"/>
      </Folder>
    </div>
  );
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const {name, children } = props;
  const direction = isOpen ? 'down' : 'right'

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{marginLeft: "17px"}}>
        {isOpen ? children : null}
      </div>
    </>
  );
}

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'music',
    jpeg: 'file image',
    png: 'file image outline'
  };
  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
}


export default App;
