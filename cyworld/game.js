let suggestedWord

const wordChain = () => {
    if(suggestedWord === undefined){
        suggestedWord = document.getElementById("word").innerText
    }
    let inputWord = document.getElementById("myword").value
    
    if((suggestedWord.charAt(suggestedWord.length-1)) === inputWord.charAt(0)){
        document.getElementById("result").innerText = "정답입니다!"
        suggestedWord = inputWord
        document.getElementById("word").innerText = suggestedWord
    } else{
        document.getElementById("result").innerText = "땡!"
    }
    document.getElementById("myword").value = ""
}