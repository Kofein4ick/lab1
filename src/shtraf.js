function f(x){
    return (((x[0]-1)**2)+((x[1]+5)**2));
}

function alfa(x){
    //return ((x[0]**2- x[1])**2);
    let temp =x[0]**2-x[1];
    return Math.max(temp,0);
}

function func_in(x,mu_o){
    //return (((x[0]-2)**4) + (( x[0]-2*x[1])**2) + mu_o*((x[0]**2- x[1])**2))
    let temp =x[0]**2-x[1];
    let temp_x = Math.max(temp,0);
    return (((x[0]-1)**2)+((x[1]+5)**2)+temp_x*mu_o);
}

function gold_search(ak,bk,l,x,i,mu_o){
    let alpha = 0.618;
    let lambda=ak+(1-alpha)*(bk-ak);
    let mu=ak+alpha*(bk-ak);
    let k = 0;
    while(1){
        if ((Math.abs(bk-ak) <= l) ||(k===1000)){
            break;
        }
        let f_lambda= i===0 ? func_in([x[i],lambda],mu_o) : func_in([lambda,x[i]],mu_o);
        let f_mu= i===0 ? func_in([x[i],mu],mu_o) : func_in([mu,x[i]],mu_o);
        if (f_lambda > f_mu){
            ak = lambda;
            lambda = mu;
            mu = ak + alpha*(bk-ak);
        }else{
            bk = mu;
            mu = lambda;
            lambda = ak + (1 - alpha)*(bk-ak);
        }
        k=k+1;
    }
    let optium=((ak+bk)/2);
    return optium;
}

function minimize_func(x, mu,epsilon){
    let temp_x=new Array(...x);
    for(let i=0;i < temp_x.length-1;i++){
        temp_x[i+1]=gold_search(-1000,1000,epsilon,temp_x,i,mu);
    }
    temp_x[0] = gold_search(-1000,1000,epsilon,temp_x,temp_x.length-1,mu);
    return temp_x;
}

function shtraf(beta,epsilon,x1,x2,mu){
    mu=parseFloat(mu);
    let x=[parseFloat(x1),parseFloat(x2)];
    let k=1;
    let table=[];
    let str_x='';
    while(1){
        x=minimize_func(x, mu,epsilon);
        let bo=mu*alfa(x);
        let x_temp=new Array(...x);
        for(let q=0;q<x.length;q++){
            x_temp[q]=x_temp[q].toFixed(5);
        }
        str_x=str_x+'('+x_temp.toString()+'); ';
        table.push(
        <tr>
                <td>{k}</td>
                <td>{mu.toFixed(5)}</td>
                <td>{str_x}</td>
                <td>{f(x).toFixed(5)}</td>
                <td>{alfa(x).toFixed(5)}</td>
                <td>{(f(x)+bo).toFixed(5)}</td>
                <td>{bo.toFixed(5)}</td>
            </tr>)
        str_x='';
        if(bo<epsilon) 
            break;
        else {
            mu=mu*beta;
            k++;
        }
    }
    console.log(table)
    return table;
}
 export default shtraf;
