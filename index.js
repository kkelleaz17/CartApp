
var Cart = [];
var CartObj = document.getElementById('Items');



class BuyObject {
    constructor(Plan1,Cost){
        this.cost = Cost;
        this.name = Plan1;
        const Plan = {
        name:this.name,
        cost:this.cost
        }
    }
}

function Add(plan,cost){
Cart.push(new BuyObject(plan,cost));
console.log(Cart);
CartObj.innerHTML = '';
ShowCart();
}

function ShowCart(){
    var item =(n,c)=>{
        return `<div class="Item" style="background-color:${(n==='Unlimited')?'#53ac4f':(n==='Personal')?'#545b65':(n==='Company')?'#ea4f6d':'#fffff'}"><h2>${n}</h2><h2>${c}</h2></div>`
    }
    var Fullitems = '';
    var Amount = 0;
    Cart.forEach(e=>{
        Fullitems+=(item(e.name,e.cost));
        Amount+=  e.cost
    }
    )
    var Bottom = `<h3 class="Cost">${Amount}$</h3><button>Check out</button>`;
    CartObj.innerHTML += Fullitems;
    CartObj.innerHTML += Bottom
}
CartObj.innerHTML = '<h3 class="Cost">0.00$</h3><button>Check out</button>'