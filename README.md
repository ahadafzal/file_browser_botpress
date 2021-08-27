# Hi, I am Afzal.

> This project is a take home assignment from botpress. 

Problem statement: [Here](https://docs.google.com/document/u/3/d/1VtZ3lMS-ZEZnRbFpZLufpQH3eCCtl1hquVmAGQOb-Mw)


## Demo
<hr>
<img src='demo/Demo.gif'/>
<br/><br>

Live File Rename Demo
<img src='demo/Rename.gif'/>


## How to Run
<hr>

Please clone this repo and make sure you have node installed.

If you don't have node, please refer [this](https://nodejs.dev/learn/how-to-install-nodejs) doc to install.

<br/>

After cloning, open the repo directory in terminal and run:

```
node install
```
<br/>

Now run: (you pass can any number of directoies)

```
node file_browser.js <dir1> <dir1> <..dirN>
```
<br/>


Examples:
```
node file_browser.js ~/Desktop . ../

node file_browser.js /home ../..

node file_browser.js

(if no dir passed, it will work with current working dir)
```




## Some implementation notes
<hr>
My initial thought of implementation was to read the entire directory tree structure of each directory and create a file watcher to watch any changes that are made in the tree structure.

But reading the entire tree was too resource expensive and also useless, as we won't open the entire tree all at once. Also creating a file watcher for the entire tree structure was also too expensive.

I optimized this by only reading the open tree structure and creating a file watcher for only opened trees.

I have implemented the backend using the node's file system module and have used web sockets to let the client know in case of any changes made in the file structure.

The frontend is implemented using reactjs and material UI.