function createXMLHttRequest(method, url, cbfunction ,sendData = null){

    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send(sendData)
    xhr.onreadystatechange = verificaAjax

    function verificaAjax(){
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 304){
                if(typeof cbfunction === "function"){
                    const json = JSON.parse(xhr.responseText)
                    cbfunction(json)
                }
            }else if(typeof cbfunction === "function"){
                cbfunction({"message":"algo deu errado: ", "status": xhr.status})
            }
        }
    }
}