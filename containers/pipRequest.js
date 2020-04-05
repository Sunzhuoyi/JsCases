// 有一个存有100个id的数组，先连续发送3个，其中一个回来就发送第4个，依次发送完100个，返回100个请求的结果

const pipRequest = (idsArr, callback) => {
    const len = idsArr.length;
    const result = [];
    const ajaxMax = 3;
    let ajaxNum = 0;

    const ajax = (id) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${id}的结果`)
        }, 500)
    })

    const main = (ids) => {
        while (ajaxNum < ajaxMax && ids.length > 0) {
            ajaxNum++;
            console.log(18, ajaxNum)
            let now = ids.shift();
            ajax(now).then(res => {
                result.push(res);
                console.log('ajax res')
                main(ids);
            }).catch((_) => {
                ids.push(now)
            }).finally(() => {
                ajaxNum--;
                console.log(26, ajaxNum)
                (
                    result.length === len
                    && typeof callback === "function"
                    && callback(result)
                );
            })
        }
    }

    main(idsArr);
}

pipRequest([...Array(100).keys()], function (res) {
    console.log(res)
})