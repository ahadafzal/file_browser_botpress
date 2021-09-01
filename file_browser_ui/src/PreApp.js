import React, { useState,useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import RecursiveTreeView2 from './PreAppp';
import { getIconForFile } from 'vscode-icons-js';


const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function RecursiveTreeView({dir,execute,isd}) {
  const [ data, setData ] = useState({path:'root',name:dir});
  
  


  useEffect( () => {
    if (isd){
      setData({path:'root',name:dir,children:[{path:dir,name:'loading..'}]})
    }
    if (execute === false){
      return 
    }
    const client = new W3CWebSocket('ws://127.0.0.1:3000');
    client.onmessage = (message) => {
      setData({path:"root",name:dir,children:JSON.parse(message.data)});
    };
    client.onopen = () => {
      client.send(JSON.stringify({dir:dir}))
    };
    
    
    
 }, []);
 
  const classes = useStyles();
  



  const renderTree = (nodes) => {
    if (nodes.hasOwnProperty('isDir') && nodes.isDir === true){
      return <RecursiveTreeView2 dir={nodes.path} Name={nodes.name} execute={false} onClick={()=>{}} isd={true}></RecursiveTreeView2>
    }
    
    let fileicon = './icons/' + getIconForFile(nodes.name)
    if (fileicon !== './icons/default_file.svg'){
      fileicon = <div><img src={fileicon} width='20px'/>{nodes.name}</div>
    }
    else{
        fileicon = nodes.name
    }

    return (
      
      <TreeItem key={nodes.path} nodeId={nodes.path} label={fileicon}>
        
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    )
  };

  return (
    <TreeView
      className={classes.rooot}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
    </TreeView>
  );
}
