let n_out;

function func1(x){
    if(x===0)x=0.1;
    let answ=3/(x**n_out);
    answ=n_out%2===0 ? answ : -1*answ;
    return answ;
  }
  function func2(x){
    return (-1)*(-((x**2+5)**0.5)+2);
  }


function seacrhExtremum(method,func,right,left,l,epsilon,n){
    let lambda=0,mu=0,alpha = 0.618;
    let ak=parseFloat(right),bk=parseFloat(left);
    let table=[];
    let optium;
    let count;
    let func_optium;
    let coef= func==='func1' ? 1 : -1;
    n_out=parseFloat(n);
    let k=0;
    l=parseFloat(l);
    epsilon=parseFloat(epsilon);
    let func_in= func==='func1' ? func1 : func2;
    let base_arr=[];
    for(let i=-12;i<=12;i++){
        base_arr.push({x:i,y:(func_in(i).toFixed(3)*coef)})
    };
    switch(method){
        case 'binary_search':{
            k=1;
            count=0;
            while (1) {
                if ((Math.abs(bk-ak) <= l)||(k===1000)) {
                    break;
                }

                lambda = (ak + bk)/ 2 - epsilon;
                mu = (ak + bk)/ 2 + epsilon;
                table.push(
                    <tr>
                        <td>{k}</td>
                        <td>{ak.toFixed(5)}</td>
                        <td>{bk.toFixed(5)}</td>
                        <td>{lambda.toFixed(5)}</td>
                        <td>{mu.toFixed(5)}</td>
                        <td>{func_in(lambda).toFixed(5)*coef}</td>
                        <td>{func_in(mu).toFixed(5)*coef}</td>
                    </tr>);
                if (func_in(lambda) > func_in(mu)){
                    ak = lambda;
                } else {
                    bk = mu;
                }
                count+=2;
                k = k + 1;
            }
            optium=((ak+bk)/2).toFixed(5);
            func_optium=func_in(optium).toFixed(5)*coef;
            base_arr.push({x:optium,y:func_optium})
            break;
        }

        case 'gold_search':{
            lambda=ak+(1-alpha)*(bk-ak);
            mu=ak+alpha*(bk-ak);
            k = 1;
            count=0;
            table.push(
                <tr>
                    <td>{k}</td>
                    <td>{ak.toFixed(5)}</td>
                    <td>{bk.toFixed(5)}</td>
                    <td>{lambda.toFixed(5)}</td>
                    <td>{mu.toFixed(5)}</td>
                    <td>{func_in(lambda).toFixed(5)*coef}</td>
                    <td>{func_in(mu).toFixed(5)*coef}</td>
                </tr>);
            while(1){
                if ((Math.abs(bk-ak) <= l) ||(k===1000)){
                    break;
                }
                if (func_in(lambda) > func_in(mu)){
                    ak = lambda;
                    lambda = mu;
                    mu = ak + alpha*(bk-ak);
                }else{
                    bk = mu;
                    mu = lambda;
                    lambda = ak + (1 - alpha)*(bk-ak);
                }
                count+=2;
                k=k+1;
                table.push(
                    <tr>
                        <td>{k}</td>
                        <td>{ak.toFixed(5)}</td>
                        <td>{bk.toFixed(5)}</td>
                        <td>{lambda.toFixed(5)}</td>
                        <td>{mu.toFixed(5)}</td>
                        <td>{func_in(lambda).toFixed(5)*coef}</td>
                        <td>{func_in(mu).toFixed(5)*coef}</td>
                    </tr>);
            }
            optium=((ak+bk)/2).toFixed(5);
            func_optium=func_in(optium).toFixed(5)*coef;
            base_arr.push({x:optium,y:func_optium})  
            break;
        }
        case 'fibonacci':{
            let F_max=(bk-ak)/l;
            let F=[];
            F[0]=1;F[1]=1;
            while(F[F.length-1]<=F_max){
                F.push(F[F.length-1]+F[F.length-2]);
            }
            console.log(F.length);
            lambda=ak+(F[F.length-1-2]/F[F.length-1])*(bk-ak);
            mu=ak+(F[F.length-1-1]/F[F.length-1])*(bk-ak);
            k = 1;
            count=0;
            table.push(
                <tr>
                    <td>{k}</td>
                    <td>{ak.toFixed(5)}</td>
                    <td>{bk.toFixed(5)}</td>
                    <td>{lambda.toFixed(5)}</td>
                    <td>{mu.toFixed(5)}</td>
                    <td>{func_in(lambda).toFixed(5)*coef}</td>
                    <td>{func_in(mu).toFixed(5)*coef}</td>
                </tr>);
            while(1){
                if (func_in(lambda) > func_in(mu)){
                    ak = lambda;
                    lambda = mu;
                    mu = ak + (F[F.length-1-k-1]/F[F.length-1-k])*(bk-ak);
                }else{
                    bk = mu;
                    mu = lambda;
                    lambda = ak + (F[F.length-1-k-2]/F[F.length-1-k])*(bk-ak);
                }
                count+=2;
                if(k===F.length-3){
                    mu = lambda+epsilon;
                    if (func_in(lambda) > func_in(mu)){
                        ak = lambda;
                    }else{
                        bk = mu;
                    }
                    count+=2;
                    break;
                }
                k=k+1;
                table.push(
                    <tr>
                        <td>{k}</td>
                        <td>{ak.toFixed(5)}</td>
                        <td>{bk.toFixed(5)}</td>
                        <td>{lambda.toFixed(5)}</td>
                        <td>{mu.toFixed(5)}</td>
                        <td>{func_in(lambda).toFixed(5)*coef}</td>
                        <td>{func_in(mu).toFixed(5)*coef}</td>
                    </tr>);
            }
            optium=((ak+bk)/2).toFixed(5);
            func_optium=func_in(optium).toFixed(5)*coef;
            base_arr.push({x:optium,y:func_optium})
            break;
        }
    }
    base_arr.sort((a,b)=>{return a.x-b.x});
    return {table:table,optium:optium,func_optium:func_optium,count:count,base:base_arr};
};

export default seacrhExtremum;