/**
 * @application_name
 * BinaryBox Challenge
 * Version 1.0
 * 
 * @builder
 * Jackie V. (aka BXBJackie) 
 * AP Computer Science Principal - Mini Create Task Project
 */

class HTMLEntry {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private a: any;
    private b: Array<any>;
    private rects: any;
    private objs: any;
    private results: any[];
    private result: number;
    private inputValue: number;

    constructor(height: number, width: number) {
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
        this.canvas.height = height;
        this.canvas.width = width;
        this.ctx = this.canvas.getContext('2d');
        this.inputValue = Math.floor(Math.random() * 32764)
        this.welcomeScreen()
    }

    private collides(objects: any, x: number, y: number): any {
        let isCollision = false;
        for (let i = 0; i <= objects.length; i++) {
            const left = objects?.[i]?.[0], right = objects?.[i]?.[0] + objects?.[i]?.[2]
            const top = objects?.[i]?.[1], bottom = objects?.[i]?.[1] + objects?.[i]?.[3]
            if (right >= x && left <= x && bottom >= y && top <= y) { // ~~~~~ targeting canvas context including fillrects etc..
                isCollision = objects?.[i];
            }
        }
        return isCollision;
    }

    /**
     * @param coordinates generate a list of stroke square boxes
     */
    private clickOnContext(coordinates: any[]): void { 
        const box = new Path2D();
        let a;
        let b;
        this.b = []
        if (this.canvas && this.canvas.getContext) { // triggering the overall canvas that contains square boxes 
            this.rects = coordinates // global use
            if (this.ctx) { // triggering only the square boxes
                for (let i = 0; i < this.rects.length; i++) { 
                    box.rect(this.rects?.[i]?.[0] , this.rects?.[i]?.[1], this.rects?.[i]?.[2], this.rects?.[i]?.[3])
                    this.ctx.font = "20px Arial";
                    this.ctx.fillText(this.a = `${Math.floor(Math.random() * 2)}`, a = this.rects?.[i]?.[0] + 14, b = this.rects?.[i]?.[1] + 26);
                    this.b.push(this.a)
                    } 
            }
            console.log(this.b)
            this.ctx.stroke(box);    
            this.winCheck()
        }
    }

    private event = (e: MouseEvent) => {
            this.objs = this.collides(this.rects, e.offsetX, e.offsetY);
            for (let i = 0; i <= this.rects.length; i++) {
                if (this.objs == this.rects[i]) {
                    this.ctx.clearRect(345, 185, 60, 20); this.ctx.clearRect(605, 185, 60, 20); this.ctx.clearRect(345, 435, 60, 20); this.ctx.clearRect(605, 435, 60, 20);
                    this.ctx.clearRect(900, 40, 300, 550)
                    this.ctx.clearRect(this.rects?.[i]?.[0] + 2, this.rects?.[i]?.[1] + 2, this.rects?.[i]?.[2] - 4, this.rects?.[i]?.[3] - 4);
                    switch (this.b[i]) {
                        case '0':
                                this.b[i] = '1'
                                console.log(this.b)
                                this.ctx.fillText(this.b[i], this.rects?.[i]?.[0] + 14, this.rects?.[i]?.[1] + 26);
                                this.assignBinValues(this.b.length, 13);
                                this.winCheck();
                                break;
                        case '1':
                                this.b[i] = '0'
                                console.log(this.b)
                                this.ctx.fillText(this.b[i], this.rects?.[i]?.[0] + 14, this.rects?.[i]?.[1] + 26);
                                this.assignBinValues(this.b.length, 13);
                                this.winCheck();
                                break;
                            
                        default:
                            console.log("nothing happened.")
                            break
                    }    
                }
            }
    }


    private winCheck () {
        if (this.result !== this.inputValue) {
            // when two number values isn't matched up
            this.canvas.addEventListener("click", this.event);
        } else {
            // when two number values matched up (winning state)
            this.canvas.removeEventListener("click", this.event);
            this.endgame()
        }
        
    }

    private endgame() {
        this.ctx.clearRect(425, 265, 150, 110)
        this.ctx.font = "40px Arial"
        this.ctx.fillText(`${this.result}`, 440, 335)
        this.ctx.font = "40px Arial"
        this.ctx.fillText("LEVEL CLEAR", 920, 500)
        this.ctx.font = "15px Arial"
        this.ctx.fillText(`Base-2 Value: 0${(this.result).toString( 2)}`, 920, 530)
        this.ctx.font = "18px Arial"
        this.ctx.fillText("Hit F2 for New Game", 920, 560)
        document.addEventListener('keydown', (e) => {
            if (e.key === "F2") {
                this.load()
            }
        })
    }

    private triangularSum(a: any[], index: number, index2: number) {
        let b = [];
        for(let i = index; i <= index + index2; i ++) {
            b.push(a[i])
        }
        let _a = b.reduce((a, b) => a + b, 0)
        return _a
    }

    private assignBinValues(values: number, maxof: number) {
        let a = []
        let initial = 0;
        for (let i = 0; i < values; i++) {
            a.push(this.b[i] * Math.pow(2, initial))
                initial += 1
            if (initial == maxof) {
                initial = 0;
            } 
        }

        console.log(a)

        this.results = [this.triangularSum(a, 0, 12), this.triangularSum(a, 13, 12), this.triangularSum(a, 13 * 2, 12), this.triangularSum(a, 13 * 3, 12)]
        this.ctx.fillText(`${this.results[0]}`, 350, 200);
        this.ctx.fillText(`${this.results[1]}`, 610, 200);
        this.ctx.fillText(`${this.results[2]}`, 610, 450);
        this.ctx.fillText(`${this.results[3]}`, 350, 450);

        this.result = this.results[0] + this.results[1] + this.results[2] + this.results[3];
        this.resultBoxText()
    }

    private label() {
        let exponent = 1;
        for (let i = 0; i < this.rects.length; i++) {
            this.ctx.fillStyle = "green"
            this.ctx.fill()
            this.ctx.font = "13px Arial"
            switch (true) {
                case i < 4:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 15, this.rects?.[i]?.[1] + 53);
                    break
                case i == 4:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] - 15, this.rects?.[i]?.[1] + 20);
                    break
                case i > 4 && i <= 9:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 6, this.rects?.[i]?.[1] - 10);
                    break
                case i > 9 && i <= 12:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 45, this.rects?.[i]?.[1] + 25);
                    if (i == 12) {
                        exponent = 0;
                    }
                    break;
                case i > 12 && i <= 15:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] - 10, this.rects?.[i]?.[1] + 25);
                    break
                case i > 15 && i <= 21:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 32, this.rects?.[i]?.[1] - 10);
                    break
                case i > 21 && i <= 25:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 15, this.rects?.[i]?.[1] + 53);
                    if (i == 25) {
                        exponent = 0;
                    }
                    break

                case i > 25 && i < 30:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 15, this.rects?.[i]?.[1] - 10);
                    break;
                case i == 30:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 50, this.rects?.[i]?.[1] + 25);
                    break
                case i > 30 && i <= 35:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 20, this.rects?.[i]?.[1] + 60);
                    break;
                case i > 35 && i <= 38:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] - 20, this.rects?.[i]?.[1] + 25);
                    if (i == 38) {
                        exponent = 0;
                    }
                    break;

                case i > 38 && i <= 41:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 45, this.rects?.[i]?.[1] + 25);
                    break;
                case i > 41 && i < 47:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 20, this.rects?.[i]?.[1] + 60);
                    break;
                case i == 47:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] - 15, this.rects?.[i]?.[1] + 25);
                    break
                case i > 47:
                    this.ctx.fillText(`${exponent}`, this.rects?.[i]?.[0] + 15, this.rects?.[i]?.[1] - 10);
                    break;

                    
                default:
                    break;
            }

            exponent += 1;
        }
        

        this.ctx.font = "20px Arial"
        this.ctx.fillStyle = "black"
        this.ctx.fill();
    }

    private draw() { /** 
        @forloop needed 
        create at least 5 fillrect boxes for each triangle, and 
        */
        this.ctx.strokeRect(420, 260, 160, 120);
        this.clickOnContext(
           [    /* Each triangle will be sorted clockwise */

                // 1st triangle
                        // start positions
                    [380, 220, 40, 40],
                    [340, 220, 40, 40],
                    [300, 220, 40, 40],
                    [260, 220, 40, 40],
                    [220, 220, 40, 40],
                        // middle positions
                    [260, 180, 40, 40],
                    [300, 140, 40, 40],
                    [340, 100, 40, 40],
                    [380, 100, 40, 40],

                        // end positions 
                    [420, 100, 40, 40],
                    [420, 140, 40, 40],
                    [420, 180, 40, 40],
                    [420, 220, 40, 40],

                // 2nd triangle
                        // start
                    [540, 220, 40, 40],
                    [540, 180, 40, 40],
                    [540, 140, 40, 40],
                    [540, 100, 40, 40],
                        // middle
                    [580, 100, 40, 40],
                    [620, 100, 40, 40],
                    [660, 140, 40, 40],
                    [700, 180, 40, 40],
                        // end
                    [740, 220, 40, 40],
                    [700, 220, 40, 40],
                    [660, 220, 40, 40],
                    [620, 220, 40, 40],
                    [580, 220, 40, 40],

                // 3rd triangle
                        // start
                    [580, 380, 40, 40],
                    [620, 380, 40, 40],
                    [660, 380, 40, 40],
                    [700, 380, 40, 40],
                    [740, 380, 40, 40],
                        // middle
                    [700, 420, 40, 40],
                    [660, 460, 40, 40],
                    [620, 500, 40, 40],
                    [580, 500, 40, 40],
                        // end
                    [540, 500, 40, 40],
                    [540, 460, 40, 40],
                    [540, 420, 40, 40],
                    [540, 380, 40, 40],
                
                // 4th triangle
                // start
                [420, 380, 40, 40],
                [420, 420, 40, 40],
                [420, 460, 40, 40],
                [420, 500, 40, 40],
                // middle
                [380, 500, 40, 40],
                [340, 500, 40, 40],
                [300, 460, 40, 40],
                [260, 420, 40, 40],
                //end
                [220, 380, 40, 40],
                [260, 380, 40, 40],
                [300, 380, 40, 40],
                [340, 380, 40, 40],
                [380, 380, 40, 40],
            ]
       )
    } 

    private resultBoxText(additional?: () => void) {
        this.ctx.strokeRect(900, 40, 300, 550)
        this.ctx.font = "15px Arial"
        this.ctx.fillText(`BinaryBox Challenge`, 920, 60)
        this.ctx.fillStyle = "green"
        this.ctx.fillText("Number List (1-13 base-2 System):", 920, 80)
        this.ctx.fillText(`1: 1        2: 2        3: 4        4: 8`, 920, 100)
        this.ctx.fillText(`5: 16       6: 32       7: 64      8: 128`, 920, 120)
        this.ctx.fillText(`9: 256      10: 512     11: 1024    12: 2048`, 920, 140)
        this.ctx.fillText(`13: 4096 `, 920, 160)

        this.ctx.fillStyle = "black"
        this.ctx.fillText(`Value needed to unlock: ${this.inputValue}`, 920, 200)

        this.ctx.beginPath()
        this.ctx.moveTo(900, 250)
        this.ctx.lineTo(1200, 250)
        this.ctx.stroke()

        this.ctx.fillText(`Current Value (Total of 4 results):`, 920, 300)
        this.ctx.fillText(`${this.result}`, 920, 320)

        this.ctx.beginPath()
        this.ctx.moveTo(900, 360)
        this.ctx.lineTo(1200, 360)
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.moveTo(900, 400)
        this.ctx.lineTo(1200, 400)
        this.ctx.stroke()

        this.restoreDefault()
        additional
    }

    private resultBox() {
        let img = new Image();
        img.onerror = function() {
            alert(img.src + ' failed')
        }
        img.src = "./../images/lock.png"
        img.onload = () => {
            this.ctx.drawImage(img, 470, 285, 60, 65)
        }
    }

    private restoreDefault() {
        this.ctx.fillStyle = "black"
        this.ctx.font = "20px Arial"
    }

    private welcomeScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        document.addEventListener('keydown', (e) => {
            if (e.key === "F2") {
                this.load()
            }
        })
        this.ctx.strokeRect(900, 40, 300, 550)
        this.ctx.font = '25px Arial'
        this.ctx.fillText(`BinaryBox Challenge`, 920, 80)
        this.ctx.font = "13px Arial"
        this.ctx.fillText('Press F2 to start', 920, 130)

        this.restoreDefault()
    }

    public load() {
        this.inputValue = Math.floor(Math.random() * 32764)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.draw();
        this.assignBinValues(this.b.length, 13);
        this.label();
        this.resultBox();
        this.restoreDefault()
    }
}

let a = new HTMLEntry(600, 1250);
