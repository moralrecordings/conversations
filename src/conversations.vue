<template>
  <div id="conversations">
    <email></email>
  </div>
</template>


<style>
html, body {
    height: 100%;
    margin: 0px;
    overflow: hidden;
    font-size: 14px;
    font-family: "Ubuntu", sans-serif;
    line-height: 1.5em;
}

.window {
    position: absolute;
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    flex-direction: column; 
    box-sizing: border-box;
    min-width: 200px;
    min-height: 200px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.titlebar {
    display: flex;
    padding: 0.5em;
    font-weight: bold;
    line-height: 1.8em;
    border: 1px solid;
    border-top-left-radius: 2px; 
    border-top-right-radius: 2px;
    cursor: default;
    user-select: none;
    -moz-user-select: none;
}

.titlebar button {
    font-weight: bold;
    font-size: 16px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 2px;
}

.titlebar button {
    color: inherit;
}

.titlebar button:hover {
    border: 1px solid white;
}

.titlebar-text {
    flex: 1; 
    width: 0; 
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
}



.theme-blue .active {
    border-color: #216778;
    background-color: #37abc8; 
    color: white;
}

.theme-blue .active.titlebar {
    border-top-color: #5fbcd3;
    border-left-color: #5fbcd3; 
    border-right-color: #2c89a0; 
    border-bottom-color: #2c89a0;
}

.overflow {
    overflow: auto;
}

.body-container {
    flex: 1 0 auto;
    height: 1%; 
    box-sizing: border-box;
    border: 1px solid;
    border-top-color: #f0fefe;
    border-left-color: #f0fefe;
    border-bottom-color: #dbe2e3;
    border-right-color: #dbe2e3;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
}

.body {
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
}


</style>


<script>
import email from './components/email';

export default {
  name: 'conversations',
  components: {
    email,
  },
};
</script>

