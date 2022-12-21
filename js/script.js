// var flag;
// var values = [0,0,0,0,0,0,0,0,0];
// console.log(values);
// document.querySelector('.container').addEventListener('click',function(e)
// {
//     var index = e.target.id;
//     if(values[index]==0)
//     {
//         values[index] = setVal();
//         e.target.innerHTML = setVal();
//         flag = !flag;
//     }
//     else
//         alert('Not allowed');
//     console.log(values);
// })
// function setVal()
// {
//     return (flag)?'X':'O';
// }

var flag = true;
var values = [1,0,1,0,1,0,0,1,0];
var player1,player2;
var player1Count=0;
var player2Count=0;
document.querySelector('.container').addEventListener('click',function(e)
{
    index = e.target.id;
    if(values[index]==1 || values[index]==0)
    {
        if(flag)
        {            
            e.target.innerHTML = 'X';
            values[index] = 'X';    
        }
        else
        {            
            e.target.innerHTML = 'O';
            values[index] = 'O';
        }
        flag = !flag;
        getWinner();
    }
    else
    {
        alert('Not Allowed');
    }
})

// Winner Declaration
function getWinner()
{
    if((values[0]==values[1]&&values[1]==values[2])||(values[3]==values[4]&&values[4]==values[5])||(values[6]==values[7]&&values[7]==values[8]))
    {
       getScore();
    }
    else if((values[0]==values[3]&&values[3]==values[6])||(values[1]==values[4]&&values[4]==values[7])||(values[2]==values[5]&&values[5]==values[8]))
    {
       getScore();
    }
    else if((values[0]==values[4]&&values[4]==values[8])||(values[2]==values[4]&&values[4]==values[6]))
    {
       getScore();
    }
}
function getScore()
{
    if(flag)
    {
        console.log(player2,'Winner');
        player2Count++;
    }
    else
    {
        console.log(player1,'Winner');
        player1Count++;
    }
    document.querySelector("#score1").innerHTML ="<strong>"+player1Count+"</strong>";
    document.querySelector("#score2").innerHTML ="<strong>"+player2Count+"</strong>";
}

//Start Game Function
document.querySelector('#start').addEventListener('click',function()
{
    player1 = document.querySelector("#user1").value;
    player2 = document.querySelector("#user2").value;

    if(player1==""||player2=="")
    {
        alert("Please enter the Players Name");
    }
    else
    {
        document.querySelector(".gameDiv").style.visibility = 'visible';
        document.querySelector(".form").style.visibility = 'hidden';
        document.querySelector("#name1").innerHTML ="<strong>"+player1+"</strong>";
        document.querySelector("#name2").innerHTML ="<strong>"+player2+"</strong>";
    }
})


document.querySelector("#reset").addEventListener('click' ,function()
{
    var divs = document.querySelectorAll(".cell");
    for(let i=0;i<divs.length;i++)
    {
        divs[i].innerHTML ="";
    }
    values = [1,0,1,0,1,0,0,1,0];
    flag = true;
})

