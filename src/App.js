import React from 'react';
import Title from './components/Title';
// import Setup from './examples/FirstRequest';
import Setup from './examples/Headers';
import Post from './examples/PostRequest';
// import Global from './examples/globalDefault';
import Custom from './examples/CustomInstance'
import './Axios/global';

function App() {
  return <>
  <Title/>
  <Setup/>
  <Post/>
  {/* <Global/> */}
  <Custom/>

  </>
}

export default App;
