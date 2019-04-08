var suallar = [

    {
        sual: "Bu meyvənin elmi adı iki latın sözünün birləşməsindən əmələ gəlmişdir. Punica - tünd qırmızı və granatus - dənə deməkdir.",
        cavab: ["nar", "üzüm", "qarağat", "şaftalı"],
        dogrucavab: "nar"
    },
    {
        sual: "Azərbaycanda bu meyvənin əti məcməilərə yayılaraq günəşdə qurudulur və ondan”lavaş” hazırlanılır.",
        cavab: ["üzüm", "armud", "nar", "alça"],
        dogrucavab: "alça"
    },
    {
        sual: "Avropalılar orta əsrlərdə Çin dövlətinin məmurlarını bu bitkinin adı ilə adlandırırdılar.",
        cavab: ["Mandarin", "Banan", "Alma", "Kivi"],
        dogrucavab: "Mandarin"
    }]
var second = 30
var correct = 0
var incorrect = 0

function timer() {
    $(".time").empty()
    second--
    $(".time").append($("<h2>" + second + "</h2>"))
    if (second == 0) {
        clearInterval(interval)
        $(".win-loose").append($("<h2>" + "VAXT BITDI :(" + "</h2>"))
        bitdi()
    }
}

var interval = setInterval(timer, 1000)
function bitdi() {
    clearInterval(interval)
    $(".btn-holder").empty()
    $(".btn-holder").append("<h2>" + "doğru cavab sayı: "+ correct + "</h2>")
    $(".btn-holder").append("<h2>" + "yanlış cavab sayı: "+ incorrect + "</h2>")
}
for (let i = 0; i < suallar.length; i++) {
    var sual = ($("<div>"))
    sual.addClass("sual")
    sual.html("<h2>" + suallar[i].sual + "</h2>");
    console.log(suallar[i].sual)
    console.log(i)
    $(".btn-holder").append(sual)
    for (let j = 0; j < suallar[i].cavab.length; j++) {
        var answer = $("<button>")
        answer.addClass("btn-light")
        answer.addClass("my-btn")
        answer.attr("data-name", suallar[i].cavab[j])
        console.log(suallar[i].cavab[j])
        console.log(j)
        console.log(answer.data("name"))
        answer.html("<h2>" + suallar[i].cavab[j] + "</h2>")

        $(".btn-holder").append(answer)
    }

}

$(".btn-holder").append("<button class='bitir'>bitir</button>")

$(".my-btn").on("click", function () {
    for (let i = 0; i < suallar.length; i++) {
        if (answer.data("name") == suallar[i].dogrucavab) {
            correct++
        }else {
            incorrect ++
        }
   } 
    
})
console.log(correct)
console.log(incorrect)

$(".bitir").on("click",function(){
    bitdi()
})
