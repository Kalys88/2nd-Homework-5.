function init() {
            let questions = container.querySelectorAll(".question");

            for (let i = 0; i < questions.length; i++) {
                let question = questions[i];
                let btn = document.createElement("button");
                btn.textContent = "Посмотреть ответ";
                question.firstChild.after(btn, " ");
                btn.onclick = btn_click;
            }
        }
        function btn_click() {
            let prev = container.querySelector(".answer.active"),
                current = this.nextElementSibling;
                console.log(this);
                console.log(this.nextElementSibling);
            if (prev && prev !== current) {
                prev.classList.remove('active');
            }

            current.classList.toggle('active');
        }
        let container = document.body;
        init();