let n_out;
function func1(x){
    let answ=3/(x**n_out);
    answ=n_out%2===0 ? answ : -1*answ;
    return answ;
  }
  function func2(x){
    return -((x**2+5)**0.5)+2;
    //return 3*x-x*x*x-1;
  }


function seacrhExtremum(method,func,right,left,l,epsilon,n){
    let lambda=0,mu=0;
    let ak=parseFloat(right),bk=parseFloat(left);
    let table=[];
    let optium;
    let func_optium;
    n_out=parseFloat(n);
    let k=0;
    l=parseFloat(l);
    epsilon=parseFloat(epsilon);
    let func_in= func==='func1' ? func1 : func2;
    switch(method){
        case 'binary_search':{
            while (1) {
                if (Math.abs(bk-ak) < l) {
                    break;
                }

                lambda = (ak + bk)/ 2 - epsilon;
                mu = (ak + bk)/ 2 + epsilon;

                if (func_in(lambda) > func_in(mu)){
                    ak = lambda;
                } else {
                    bk = mu;
                }
                k = k + 1;
                table.push(
                <tr>
                    <td>{k}</td>
                    <td>{ak.toFixed(5)}</td>
                    <td>{bk.toFixed(5)}</td>
                    <td>{lambda.toFixed(5)}</td>
                    <td>{mu.toFixed(5)}</td>
                    <td>{func_in(lambda).toFixed(5)}</td>
                    <td>{func_in(mu).toFixed(5)}</td>
                </tr>);
            }
            optium=((ak+bk)/2).toFixed(5);
            func_optium=func_in(optium).toFixed(5);
            break;}
        case 'gold_search':{

            break;}
        case 'fibonacci':{

            break;}
    }
    return {table:table,optium:optium,func_optium:func_optium};
};

export default seacrhExtremum;