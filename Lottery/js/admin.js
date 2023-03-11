import { abi } from './contract_abi.js';
import { historyItems } from './historyItems.js';

let currentAccount = null;
let lotteryState = null;
let ownerAddress = null;
let contractLottery = null;
let provider = null;

const addr = "0x27Fa96C75274d77a74AfC0a688CAb84935D7553f";
const ETHERSCAN_URL = "https://sepolia.etherscan.io/";
//const historyList = [];

let historyList = new historyItems();

/*
{time: 121212121212, type: "Deposit", address : "1212kkh212", block : 781234, value : 1000}
*/

async function main(){
    
    console.log( "main start" );
    const provider = await detectEthereumProvider() // this returns the provider, or null if it wasn't detected

    
    
    if (provider) {
      startApp(provider); // Initialize your app
    } else {
      console.log('Please install MetaMask!');
      message('Please install <a href="https://metamask.io/" target = "blank">MetaMask</a>!', "is-warning");
      document.getElementById('connectButton').style.display = "none";
      document.getElementById('startLotteryButtonOwner').style.display = "none";
      document.getElementById('endLotteryButtonOwner').style.display = "none";
      document.getElementById('endCurrentLottery').style.display = "none";
      document.getElementById('containerParticipate').style.display = "none";
    }

    function startApp(provider) {
        // If the provider returned by detectEthereumProvider is not the same as
        // window.ethereum, something is overwriting it, perhaps another wallet.
        if (provider !== window.ethereum) {
          console.error('Do you have multiple wallets installed?');
          message('Do you have multiple wallets installed?', "is-warning");
        }
        // Access the decentralized web!
      }
      
      /**********************************************************/
      /* Handle chain (network) and chainChanged (per EIP-1193) */
      /**********************************************************/
      
      const chainId = await ethereum.request({ method: 'eth_chainId' });
      // Do something with the chainId
      // https://chainid.network/
      let ch = {
        1: "Ethereum Main Network (Mainnet)", 
        3 : "Ropsten Test Network", 
        4 : "Rinkeby Test Network", 
        5 : "Goerli Test Network", 
        42 : "Kovan Test Network", 
        11155111 : "Sepolia Test Network"
      }
      let intChainId = parseInt(chainId, 16);
      document.getElementById('idchain').textContent = ch[intChainId];
      if (intChainId != 11155111) {
        console.error('Please, change the network. We are working with Sepolia Test Network');
        message('Please, change the network. We are working with <b>Sepolia Test Network<b>',  "is-warning");
        $( "#dialog-message" ).dialog( "open" );
      }
      ethereum.on('chainChanged', handleChainChanged);
      
  /***********************************************************/
  /* Handle user accounts and accountsChanged (per EIP-1193) */
  /***********************************************************/
  
   ethereum
    .request({ method: 'eth_accounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });
  
  // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.
  ethereum.on('accountsChanged', handleAccountsChanged);  
}

function handleChainChanged(_chainId) {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
}
  

  
// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
    let connectButton = document.getElementById('connectButton');
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      //window.location.reload();
      console.log('Please connect to MetaMask.');
      connectButton.style.display = "block";
      message('Please connect to MetaMask.', "is-warning");
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0].toLowerCase();
      console.log('currentAccount', currentAccount);
      connectButton.style.display = "none";
      message('Current Account: ' + currentAccount, "is-success");
      // Do any other work!
    }
    //window.location.reload();
} 

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

// You should only attempt to request the user's accounts in response to user
// interaction, such as a button click.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account(s), you should encourage the user
// to initiate the attempt.
//document.getElementById('connectButton', connect);

// While you are awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can click to initiate the request.
// MetaMask will reject any additional requests while the first is still
// pending.
function connect() {
    let connectButton = document.getElementById('connectButton');
    connectButton.style.display = "none";
    message("Open MetaMask and read the promt", "is-info");
    ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
        if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log('Please connect to MetaMask.');
            message('Please connect to MetaMask.', "is-warning");
            } else {
            console.error(err);
        }
    });
    //window.location.reload();
    //message('Current Account: connect' + currentAccount, "is-success");
}

function message(msg, status){
    // is-success, is-warning, is-danger, is-info, is-link, is-primary
    const elem =  $("#message");
    elem.removeClass(["is-hidden", "is-success", "is-warning", "is-danger", "is-info", "is-link", "is-primary"] );
    const del_elem =  $('#delete');
    del_elem.siblings().empty();
    elem.addClass( status );
    elem.append("<span>"+ msg + "</span>");
}

async function state(){
    provider = new ethers.BrowserProvider(window.ethereum);
    contractLottery = new ethers.Contract(addr, abi, provider);
    ownerAddress = await contractLottery.owner();
    ownerAddress = ownerAddress.toLowerCase();
    const king = await contractLottery.king(); 
    lotteryState = await contractLottery.lottery_state();
    const kingLockTime = await contractLottery.kingLockTime();

    let stateText = { 
      0: "<span class='has-text-success'>Lottery Open!</span>", 
      1: "<span class='has-text-danger'>Lottery close!</span>", 
      2: "<span class='has-text-link'>Calculating winner!</span>"
    }
    console.log(stateText[lotteryState]);
    document.getElementById('lotteryStatus').innerHTML += stateText[lotteryState];

    if (lotteryState==1) {
      document.getElementById('containerParticipate').style.display = "none";
      document.getElementById('startLotteryButtonOwner').style.display = "block";
    }
    else {
      document.getElementById('containerParticipate').style.display = "block";
      document.getElementById('startLotteryButtonOwner').style.display = "none";
    }

    console.log("ownerAddress: ", ownerAddress);
    console.log("currentAccount: ", currentAccount);
    if (lotteryState==0 & ownerAddress==currentAccount & ethers.toNumber(kingLockTime) * 1000 < Date.now()) {
      document.getElementById('endLotteryButtonOwner').style.display = "block";
    }
    else {
      document.getElementById('endLotteryButtonOwner').style.display = "none";
    }



    contractLottery.on("Deposit", (time, from, value, event) => {
        console.log({time: time, from: from, value: value.toString(), data: event });
        window.location.reload();
      });
    contractLottery.on("Withdrawals", (time, to, value, event) => {
        console.log({time: time, to: to, value: value.toString(), data: event });
        window.location.reload();
      });
    contractLottery.on("StartLottery", (stamp, from) => {
        console.log({timestamp: stamp.toString(),  from:from});
        window.location.reload();
      });
    contractLottery.on("EndLottery", (stamp, from) => {
        console.log({timestamp: stamp.toString(), from:from});
        window.location.reload();
      });
    contractLottery.on("KingChanged", (time, from, value, event) => {
      console.log({time: time, from: from, value: value.toString(), data: event });
      window.location.reload();
    });
}

async function prizePot(){
    let prizePot = await provider.getBalance(addr);
    prizePot = ethers.formatEther(prizePot);
    console.log("Prize pot: ", prizePot);
    document.getElementById('prizePot').textContent = prizePot;
}

async function recentWinner(){
  let recentWinner = await contractLottery.recentWinner();
  recentWinner = recentWinner.toLowerCase();
  console.log("Recent winner: ", recentWinner);
  //let link = document.createElement('a');
  document.getElementById('recentWinner').innerHTML += "<a href='" + ETHERSCAN_URL + "address/" + recentWinner + "#internaltx' target='blank'>" + recentWinner + "</a>";
}

async function king(){
  let provider = new ethers.BrowserProvider(window.ethereum);
  //provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
  let contr = new ethers.Contract(addr, abi, provider);
  const king = await contr.king();
  const kingAddress =  king.addr.toLowerCase();
  console.log("Current King: ", kingAddress);

  document.getElementById('king').innerHTML += "<a href='" + ETHERSCAN_URL + "address/" + kingAddress + "' target='blank'>" + kingAddress + "</a>";
  const kingLockTime = await contr.kingLockTime();
  let strKingLockTime = new Date(ethers.toNumber(kingLockTime) * 1000).toLocaleString();
  console.log("kingLockTime: ", strKingLockTime);
  document.getElementById('kingLockTime').innerHTML += strKingLockTime;
  const globalLockTime = await contr.globalLockTime();
  let strGlobalLockTime = new Date(ethers.toNumber(globalLockTime) * 1000).toLocaleString();
  console.log("Global Lock Time: ", strGlobalLockTime);
  document.getElementById('globalLockTime').innerHTML += strGlobalLockTime;

  let signer = await provider.getSigner(); 
  let timeNow = Date.now();
  console.log("Time now: ", timeNow);
  console.log("King lock time: ", ethers.toNumber(kingLockTime) * 1000);
  if (signer.address == king.addr & ethers.toNumber(kingLockTime) * 1000 < timeNow) {
    document.getElementById('containerEndCurrentLottery').style.display = "block"; 
  }
  else {
    document.getElementById('containerEndCurrentLottery').style.display = "none"; 
  }
  
}

/*
async function prizeHistory(){
    let provider = new ethers.BrowserProvider(window.ethereum);
    //provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    let contr = new ethers.Contract(addr, abi, provider);
    const winners = await contr.winners(); 
    console.log("Winners: ", winners);
    //document.getElementById('prizePot').textContent = prizePot;
}
*/

async function playersList(){
    console.log("Players List:" );
    const players = await contractLottery.getAllPlayers(); 
    let tableTxt = document.getElementById('playersTable');
    let txtHtml = "";
    let count = 1;
    players.forEach(player => {
      //let tdAmount = document.createElement('td');
      //tdAmount.innerText(ethers.formatEther(player.ethValue));
      let tdAmount = ethers.formatEther(player.ethValue);
      const playerAddress = player.addr.toLowerCase();
      console.log(playerAddress, " : " , amount);
      txtHtml += "<tr><td>" + count + "</td><td><a href='" + ETHERSCAN_URL + "address/" + playerAddress + "' target='blank'>" + playerAddress + "</a></td><td>" + tdAmount + "</td></tr>";
      count++;
    });
    tableTxt.innerHTML += txtHtml;
    if (players.length == 0) document.getElementById('containerListOfParticipants').style.display = "none";
    else document.getElementById('containerListOfParticipants').style.display = "block"; 
}

async function participate(){
    console.log("participate" );
    let signer = await provider.getSigner();
    let contr = new ethers.Contract(addr, abi, signer);
    let amount = document.getElementById('amount').value;
    amount = ethers.parseEther(amount);
    console.log("amount: ", amount );
    try {
      const funcTx = await contr.enter({value:amount});
      await funcTx.wait();
    } catch (error) {
      console.error(error);
      message('Error.' + error, "is-warning");
    }
}


// arg[0] - timestamp
// arg[1] - from
// arg[2] - value
async function DepositEvent(){
  let provider = new ethers.BrowserProvider(window.ethereum);
  let contr = new ethers.Contract(addr, abi, provider);
  let eventFilter = contr.filters.Deposit();
  let events = await contr.queryFilter(eventFilter);
  let tableTxt = document.getElementById('DepositsTable');
  let txtHtml = "";
  let count = 1;
  events.forEach(event => {
    let amount = ethers.formatEther(event.args[2])
    console.log(event.args[1], " : ", amount);
    let cellCount = "<td>" + count + "</td>";
    let cellType = "<td>Deposit</td>";
    let cellTime = "<td>" + new Date(ethers.toNumber(event.args[0]) * 1000).toLocaleString() + "</td>";
    let cellLink = "<td><a href='" + ETHERSCAN_URL + "address/" + event.args[1].toLowerCase() + "' target='blank'>" + event.args[1].toLowerCase() + "</a></td>";
    let cellBlockNumber =  "<td><a href='" + ETHERSCAN_URL + "block/" + event.blockNumber + "' target='blank'>" + event.blockNumber + "</a></td>";
    let cellAmount = "<td>" + amount + "</td>";
    txtHtml += "<tr>" + cellCount + cellTime  + cellType + cellLink + cellBlockNumber + cellAmount + "</tr>";
    //hi = new historyItem(event.args[0], "Deposit", event.args[1], event.blockNumber, amount);
    //historyList.push({time : event.args[0], txType : "Deposit", address : event.args[1], block : event.blockNumber, value : amount});
    historyList.newItem(event.args[0], "Deposit", event.args[1], event.blockNumber, amount);
    count++;
  });
 // tableTxt.innerHTML += txtHtml;
  if (events.length == 0) document.getElementById('LotteryHistory').style.display = "none";
  else document.getElementById('LotteryHistory').style.display = "block";
}

async function StartLotteryEvents(){
  let eventFilter = contractLottery.filters.StartLottery();
  let eventsStartLottery = await contractLottery.queryFilter(eventFilter);
  await eventsStartLottery;
  eventsStartLottery.forEach(event => {
    const date = new Date(ethers.toNumber(event.args[0]) * 1000);
    console.log(date.toLocaleString(), event.blockNumber);
    historyList.newItem(event.args[0], "Start", event.args[1], event.blockNumber, 0);
    //historyList.push({time : event.args[0], txType : "Start", address : event.args[1], block : event.blockNumber, value : 0});
    //historyList.push(hi);
  });
}

async function EndLotteryEvents(){
  let eventFilter = contractLottery.filters.EndLottery();
  let eventsEndLottery = await contractLottery.queryFilter(eventFilter);
  await eventsEndLottery;
  eventsEndLottery.forEach(event => {
    const date = new Date(ethers.toNumber(event.args[0]) * 1000);
    console.log(date, event.blockNumber);
    historyList.push({time : event.args[0], txType : "End", address : event.args[1], block : event.blockNumber, value : 0});
  });
}

function sH(){
  console.log("sH!" );
  console.log("Number", historyList.numberOfItems);
  console.log(historyList.Prototype);
  console.log("s----" );
  historyList.allItems.forEach(item => {
    item.myprint();
  });
}

// {time: 121212121212, type: "Deposit", address : "1212kkh212", block : 781234, value : 1000}
function showHistory(){
  console.log("showHistory!" );
  console.log(historyList.length );
  let tableTxt = document.getElementById('DepositsTable');
  let txtHtml = "";
  let count = 1;
  historyList.forEach(event => {
    console.log(event);
    let cellCount = "<td>" + count + "</td>";
    let cellType = "<td>" + event.type + "</td>";
    let cellTime = "<td>" + new Date(event.time * 1000).toLocaleString() + "</td>";
    let cellLink = "<td><a href='" + ETHERSCAN_URL + "address/" + event.address.toLowerCase() + "' target='blank'>" + event.address.toLowerCase() + "</a></td>";
    let cellBlockNumber =  "<td><a href='" + ETHERSCAN_URL + "block/" + event.block + "' target='blank'>" + event.block + "</a></td>";
    let cellAmount = "<td>" + event.value + "</td>";
    txtHtml += "<tr>" + cellCount + cellTime  + cellType + cellLink + cellBlockNumber + cellAmount + "</tr>";
    count++;
  });
  tableTxt.innerHTML += txtHtml;
  if (historyList.length == 0) document.getElementById('LotteryHistory').style.display = "none";
  else document.getElementById('LotteryHistory').style.display = "block";
  console.log("showHistory END!" );
}

async function AllEvents(){
  console.log("AllEvents" );
  let provider = new ethers.BrowserProvider(window.ethereum);
  //provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
  let contr = new ethers.Contract(addr, abi, provider);
  let eventFilter = contr.filters.Deposit();
  let events = await contr.queryFilter(eventFilter);
  events.forEach(event => {
    console.log(event);
    console.log(event.args[0], " : ",  ethers.formatEther(event.args[1]));
  });

  let eventFilterStartLottery = contr.filters.StartLottery();
  let eventsStartLottery = await contr.queryFilter(eventFilterStartLottery);
  eventsStartLottery.forEach(event => {
    console.log(event);
    console.log(event.args[0], event.blockNumber);
  });

  let eventFilterEndLottery = contr.filters.EndLottery();
  let eventsEndLottery = await contr.queryFilter(eventFilterEndLottery);
  eventsEndLottery.forEach(event => {
    //console.log(event);
    console.log(event.args[0], event.blockNumber);
  });
}

async function startLottery(){
  console.log("Start Lottery" );
    let provider = new ethers.BrowserProvider(window.ethereum);
    let signer = await provider.getSigner(); 
    let contr = new ethers.Contract(addr, abi, signer);
    let owner = await contr.owner();
    console.log("Owner: ", owner);
    console.log("Signer: ", signer.address);
    if (signer.address == owner){
      const funcTx = await contr.startLottery();
      await funcTx.wait();
    }
    else {
      console.log("You are not contract owner! First time only owner cat start lottery!");
    }
}

async function endCurrentLotteryOwner(){
  console.log("End Lottery by owner!" );
    let provider = new ethers.BrowserProvider(window.ethereum);
    let signer = await provider.getSigner(); 
    let contr = new ethers.Contract(addr, abi, signer);
    let owner = await contr.owner();
    console.log("Owner: ", owner);
    console.log("Signer: ", signer.address);
    if (signer.address == owner){
      const funcTx = await contr.endLottery();
      await funcTx.wait();
    }
    else {
      console.log("You are not contract owner! Only owner cat end lottery now!");
    }
}

async function endCurrentLottery(){
  console.log("End Lottery" );
    let provider = new ethers.BrowserProvider(window.ethereum);
    let signer = await provider.getSigner(); 
    let contr = new ethers.Contract(addr, abi, signer);
    let timeNow = Date.now();
    const kingLockTime = await contractLottery.kingLockTime();
    let king = await contractLottery.king();
    console.log("Signer: ", signer.address);
    if (signer.address == king.addr & ethers.toNumber(kingLockTime) * 1000 < timeNow){
      const funcTx = await contr.endLottery();
      await funcTx.wait();
    }
    else {
      console.log("Error endCurrentLottery!");
    }
}



$( document ).ready(function() {

    console.log( "document loaded" );
    state();
    playersList();
    prizePot();
    recentWinner();
    king();
    //prizeHistory();
   // DepositEvent();
    StartLotteryEvents();
    //EndLotteryEvents();
    //showHistory();
    sH();
    //AllEvents();

    $('#delete').on( "click", function() {
        const elem =  $('#delete');
        elem.parent().addClass("is-hidden");
        elem.removeClass(["is-success", "is-warning", "is-danger", "is-info", "is-link", "is-primary"] );
        elem.siblings().empty();
    });

    $('#connectButton').on( "click", connect);
    $('#startLotteryButtonOwner').on( "click", startLottery);
    $('#endLotteryButtonOwner').on( "click", endCurrentLotteryOwner);
    $('#endCurrentLottery').on( "click", endCurrentLottery);
    
    $('#participate').on( "click", participate);

    $( function() {
        $( "#dialog-message" ).dialog({
          modal: true,
          autoOpen: false,
          buttons: {
            Ok: function() {
              $( this ).dialog( "close" );
            }
          }
        });
      } );


    main();
});

