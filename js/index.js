function carregar(){
        var clique = window.document.querySelector("button#butao1"); 
        clique.addEventListener("click", clicou);
        function clicou(){
            document.body.style.background = "hsl(31, 77%, 52%)"
            document.body.style.transition ="2s"

        }

        var clique2 = window.document.querySelector("button#butao2");
        clique2.addEventListener("click", clicou2);
        function clicou2(){
            document.body.style.background = "hsl(184, 100%, 22%)"
            document.body.style.transition ="2s"
        }

        var clique3 = window.document.querySelector("button#butao3");
        clique3.addEventListener("click", clicou3);
        function clicou3(){
            document.body.style.background = "hsl(179, 100%, 13%)"
            document.body.style.transition ="2s"
        }
}