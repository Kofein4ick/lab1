let n_out;
function func1(x){
    let answ=3/(x**n_out);
    answ=n_out%2===0 ? answ : -1*answ;
    return answ;
  }
  function func2(x){
    return (-1)*(-((x**2+5)**0.5)+2);
    //return 3*x-x*x*x-1;
  }


function seacrhExtremum(method,func,right,left,l,epsilon,n){
    let lambda=0,mu=0,alpha = 0.618;
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
            k=1;
            while (1) {
                if ((Math.abs(bk-ak) <= l)||(k==1000)) {
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
                        <td>{func_in(lambda).toFixed(5)}</td>
                        <td>{func_in(mu).toFixed(5)}</td>
                    </tr>);
                if (func_in(lambda) > func_in(mu)){
                    ak = lambda;
                } else {
                    bk = mu;
                }
                k = k + 1;
            }
            optium=((ak+bk)/2).toFixed(5);
            func_optium=func_in(optium).toFixed(5);
            break;
        }

        case 'gold_search':{
            lambda=ak+(1-alpha)*(bk-ak);
            mu=ak+alpha*(bk-ak);
            k = 1;
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
            while(1){
                if ((Math.abs(bk-ak) <= l) ||(k==1000)){
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
                k=k+1;
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
            break;
        }
        case 'fibonacci':{
            let F_max=(bk-ak)/l;
            let F=[];
            F[0]=1;F[1]=1;
            while(F[F.length-1]<=F_max){
                F.push(F[F.length-1]+F[F.length-2]);
            }
            lambda=ak+(F[F.length-1-2]/F[F.length-1])*(bk-ak);
            mu=ak+(F[F.length-1-1]/F[F.length-1])*(bk-ak);
            k = 1;
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
            while(1){
                if (func_in(lambda) > func_in(mu)){
                    ak = lambda;
                    lambda = mu;
                    mu = ak + (F[F.length-1-k-1]/F[F.length-1-k])*(bk-ak);

                }else{
                    bk = mu;
                    mu = lambda;
                    lambda = ak + (F[F.length-1-k]/F[F.length-1-k+1])*(bk-ak);
                }
                if(k===F.length-3){
                    mu = lambda+epsilon;
                    if (func_in(lambda) > func_in(mu)){
                        ak = lambda;
                    }else{
                        bk = mu;
                    }
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
                        <td>{func_in(lambda).toFixed(5)}</td>
                        <td>{func_in(mu).toFixed(5)}</td>
                    </tr>);
            }
            optium=((ak+bk)/2).toFixed(5);
            func_optium=func_in(optium).toFixed(5);
            break;
        }
    }
    return {table:table,optium:optium,func_optium:func_optium};
};

export default seacrhExtremum;