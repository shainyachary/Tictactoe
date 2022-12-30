var flag = true;
var values = [1,0,1,0,1,0,0,1,0];
var player1,player2;
var player1Count =player2Count = 0;
document.querySelector('.container').addEventListener('click',function(e)
{
    var index = e.target.id;
    if(values[index]==1 || values[index]==0)
    {
        e.target.innerHTML = setValue();
        values[index] = setValue(); 
        flag = !flag;
        getWinner();
    }
    else
    {
        alert('Not Allowed');
    }
})

function setValue()
{
    return (flag)?'X':'O';
}
// Winner Declaration
function getWinner()
{
    let winnerIndex = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i=0;i<winnerIndex.length;i++)
    {
        let [a, b, c] = winnerIndex[i];
        if(values[a]==values[b] && values[b]==values[c])
        {
            getScore(a,b,c);
            break;
        }
    }
}
function getScore(x,y,z)
{
    if(flag)
    {
        // console.log(player2,'Winner');
        document.getElementById('winner').innerHTML = player2+" has Won";
        player2Count++;
    }
    else
    {
        // console.log(player1,'Winner');
        document.getElementById('winner').innerHTML = player1+" has Won";
        player1Count++;
    }
    document.querySelector("#score1").innerHTML ="<strong>"+player1Count+"</strong>";
    document.querySelector("#score2").innerHTML ="<strong>"+player2Count+"</strong>";
    document.getElementById('winner').style.display = 'block';
    document.getElementById(x).style.backgroundColor = '#444';
    document.getElementById(y).style.backgroundColor = '#444';
    document.getElementById(z).style.backgroundColor = '#444';
    document.getElementById(x).style.color = 'black';
    document.getElementById(y).style.color = 'black';
    document.getElementById(z).style.color = 'black';
    values = [null,null,null,null,null,null,null,null,null];
}

//Start Game Function
document.querySelector('#start').addEventListener('click',function()
{
    player1 = document.querySelector("#user1").value;
    player2 = document.querySelector("#user2").value;

    if(player1=="" || player2=="")
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
    var cells = document.querySelectorAll(".cell");
    for(let i=0;i<cells.length;i++)
    {
        cells[i].innerHTML ="";
        cells[i].style.backgroundColor ='transparent';
        cells[i].style.color ='#fff';
    }
    values = [1,0,1,0,1,0,0,1,0];
    flag = true;
    document.getElementById('winner').innerHTML = "";
})

