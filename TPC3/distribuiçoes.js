exports.distribuicao = function(pessoas,tipo){
    let counts = {}

    for (let pessoa in pessoas){
        let x = pessoas[pessoa][tipo]
        if (typeof(x) == "string"){
                if(!counts[x]){
                    counts[x] = 1
                }else counts[x]+=1
        }else {
            for (let i = 0; i < x.length; i++) {
                if(!counts[x[i]]){
                    counts[x[i]] = 1
                }else counts[x[i]]+=1
            }
        }
    
    }

    return counts
}

exports.filter = function(pessoas, tipoGeral, tipo){
    let countsType = []

    for(let pessoa in pessoas) {
        if (typeof(pessoas[pessoa][tipoGeral]) == "string"){
            if(pessoas[pessoa][tipoGeral] == tipo){
                countsType.push(pessoas[pessoa])
            }
        } else {
            let x = pessoas[pessoa][tipoGeral]
            for (let i = 0; i < x.length; i++) {
                if(pessoas[pessoa][tipoGeral][i] == tipo){
                    countsType.push(pessoas[pessoa])
                    break
                }
            }
        }
    }
    return countsType
}
