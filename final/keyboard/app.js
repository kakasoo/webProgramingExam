let KEY_ID = 1;

class Key {
    constructor(...key) {
        this.id = KEY_ID++;
        this.key = key;

        let rightKeyName;
        if (this.key[2]) {
            rightKeyName = `
					<div style="width:100%; height:50%;">${this.key[1]}</div>
					<div style="width:100%; height:50%;">${this.key[2]}</div>`;
        } else {
            rightKeyName = `
					<div style="height:100%;">${this.key[1]}</div>`;
        }

        this.buttonHTML =
            // 자판 1개를 그리는 것
            `<div id = "${this.key[0]}_button" style="display:flex; border:1px solid black; width:100px; height:100px;">
							<div style="width:50%; height:100%; text-align:center; font-size:32px;">
                                ${this.key[0]}
							</div>
							<div style="width:50%; height:100%; text-align:center; font-size:18px;">
    							${rightKeyName}
							</div>
						</div>`;
    }
}

class Keyboard {
    constructor() {
        this.keyLines = [];
        this.keyLines[0] = `<div style = "display : flex">`;
        this.keyLines[0] += new Key("1", "!", "").buttonHTML;
        this.keyLines[0] += new Key("2", "@", "").buttonHTML;
        this.keyLines[0] += new Key("3", "#", "").buttonHTML;
        this.keyLines[0] += new Key("4", "$", "").buttonHTML;
        this.keyLines[0] += new Key("5", "%", "").buttonHTML;
        this.keyLines[0] += new Key("6", "^", "").buttonHTML;
        this.keyLines[0] += new Key("7", "&", "").buttonHTML;
        this.keyLines[0] += new Key("8", "*", "").buttonHTML;
        this.keyLines[0] += new Key("9", "(", "").buttonHTML;
        this.keyLines[0] += new Key("0", ")", "").buttonHTML;
        this.keyLines[0] += new Key("-", "_", "").buttonHTML;
        this.keyLines[0] += new Key("=", "+", "").buttonHTML;
        this.keyLines[0] += `</div>`;

        this.keyLines[1] = `<div style = "display : flex">`;
        this.keyLines[1] += new Key("Q", "ㅃ", "ㅂ").buttonHTML;
        this.keyLines[1] += new Key("W", "ㅉ", "ㅈ").buttonHTML;
        this.keyLines[1] += new Key("E", "ㄸ", "ㄷ").buttonHTML;
        this.keyLines[1] += new Key("R", "ㄲ", "ㄱ").buttonHTML;
        this.keyLines[1] += new Key("T", "ㅆ", "ㅅ").buttonHTML;
        this.keyLines[1] += new Key("Y", "ㅛ", "").buttonHTML;
        this.keyLines[1] += new Key("U", "ㅕ", "").buttonHTML;
        this.keyLines[1] += new Key("I", "ㅑ", "").buttonHTML;
        this.keyLines[1] += new Key("O", "ㅐ", "ㅒ").buttonHTML;
        this.keyLines[1] += new Key("P", "ㅔ", "ㅖ").buttonHTML;
        this.keyLines[1] += new Key("[", "{", "").buttonHTML;
        this.keyLines[1] += new Key("]", "}", "").buttonHTML;
        this.keyLines[1] += `</div>`;

        this.keyLines[2] = `<div style = "display : flex; margin-left: 50px;">`;
        this.keyLines[2] += new Key("A", "ㅁ", "").buttonHTML;
        this.keyLines[2] += new Key("S", "ㄴ", "").buttonHTML;
        this.keyLines[2] += new Key("D", "ㅇ", "").buttonHTML;
        this.keyLines[2] += new Key("F", "ㄹ", "").buttonHTML;
        this.keyLines[2] += new Key("G", "ㅎ", "").buttonHTML;
        this.keyLines[2] += new Key("H", "ㅗ", "").buttonHTML;
        this.keyLines[2] += new Key("J", "ㅓ", "").buttonHTML;
        this.keyLines[2] += new Key("K", "ㅏ", "").buttonHTML;
        this.keyLines[2] += new Key("L", "ㅣ", "").buttonHTML;
        this.keyLines[2] += new Key(";", ":", "").buttonHTML;
        this.keyLines[2] += new Key("'", '"', "").buttonHTML;
        this.keyLines[2] += `</div>`;

        this.keyLines[3] = `<div style = "display : flex; margin-left:100px;">`;
        this.keyLines[3] += new Key("Z", "ㅋ", "").buttonHTML;
        this.keyLines[3] += new Key("X", "ㅌ", "").buttonHTML;
        this.keyLines[3] += new Key("C", "ㅊ", "").buttonHTML;
        this.keyLines[3] += new Key("V", "ㅍ", "").buttonHTML;
        this.keyLines[3] += new Key("B", "ㅠ", "").buttonHTML;
        this.keyLines[3] += new Key("N", "ㅜ", "").buttonHTML;
        this.keyLines[3] += new Key("M", "ㅡ", "").buttonHTML;
        this.keyLines[3] += new Key(",", "<", "").buttonHTML;
        this.keyLines[3] += new Key(".", ">", "").buttonHTML;
        this.keyLines[3] += new Key("?", ">", "").buttonHTML;
        this.keyLines[3] += `</div>`;

        const keyboard = document.createElement("div");
        keyboard.style.position = "fixed";
        keyboard.style.top = "calc(50% - 204px)";
        keyboard.style.left = "calc(50% - 612px)";

        for (let i = 0; i < this.keyLines.length; i++) {
            keyboard.innerHTML += this.keyLines[i];
        }
        document.body.appendChild(keyboard);
    }
}

window.onload = () => {
    new Keyboard();

    window.onkeydown = (event) => {
        const keyName = event.key.toUpperCase();
        const buttonID = `${keyName}_button`;
        const pushedButton = document.getElementById(buttonID);
        if (!pushedButton) {
            return;
        }

        pushedButton.className = "pushedButton";

        setTimeout(() => {
            pushedButton.className = "";
        }, 1000);
    };
};
