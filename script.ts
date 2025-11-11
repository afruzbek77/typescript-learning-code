//    1 =================================   nasledniki

class T_1 {
    name : string = ""
}

class T_2 extends T_1 {
    email: string = ""

}

const t2 = new T_2()
console.log(t2);


class T_3 extends T_2{
    showData() : void{
        console.log(this.name, this.email);
        
    }
}

const t3 = new T_3()
t3.name = "ali"
t3.email = "ali776@gmail.com"
t3.showData()
//  ===============  =========  oop
class T_4 extends T_1 {
    email: string = "";
    constructor(name:string , email:string){
      super();
      this.name = name,
      this.email = email
    }
        showData() : void{
        console.log(this.name, this.email);
        
    }
    showInfo(): string{
      return this.name + this.email
    }
}

const t5 = new T_4("hello", "ali8@gmail.com")

class T_5 extends T_4 {
    age : number = 0;
    constructor(name:string,email:string, age: number){
        super(name,email);
            this.age = age;
    }

            showData(): void {
            super.showData()
            console.log(this.age);
            
        }
        showInfo(): string {
            const s = super.showInfo()
            return s + this.age
        }
}

const t6 = new T_5("Sali", "jack@gmail.com", 44)
console.log(t6.showInfo());


// =====================================

class ElementHTML {
    text:string;
    tag:string = "DIV";

    constructor(a:string){
       this.text = a
    }

    render() : HTMLElement {
        const div = document.createElement(this.tag)
        div.textContent = this.text
        return div
    }
}
 const div1 = new ElementHTML("hello world")
document.body.append(div1.render())

class ElementHTMLCSS extends ElementHTML{
  cssClass:string[];
  constructor(a:string, b:string[]){
    super(a);
     this.cssClass = b

  }
  render(): HTMLElement {
      const div = super.render()
    this.cssClass.forEach(item => div.classList.add(item))
    return div
  }
}


const div3 = new ElementHTMLCSS("yobro", ["red", "redcllck"])
document.body.append(div3.render())

class ElementImg extends ElementHTMLCSS {
src : string = "";
constructor(src:string, b:string[], a:string){
    super(a,b)
    this.src = src;
    this.tag = "img"

}

    render() : HTMLElement {
       const img = document.createElement(this.tag)
       img.setAttribute("src", this.src)
       img.setAttribute("alt", this.text)
       this.cssClass.forEach(item => img.classList.add(item))
       return img
    }
}

const img = new ElementImg("./img/download (1).jfif", ["responsive-img"], "png" )
document.body.append(img.render())

class Pictures extends ElementImg {
    source : string[];
    constructor(src:string, b:string[], a:string, source:string[]){
        super(src,b,a)
        this.source = source
    }
render(): HTMLElement{
    const img = super.render();
    const pictures = document.createElement("picture");
    this.source.forEach(item=>{
        const source = document.createElement("source");
        source.setAttribute("srcset",item)
        source.setAttribute("media", "(min-width:600px)")
        pictures.append(source)
    })
    pictures.append(img)
    return pictures
}

}

const pp = new Pictures("./img/download (1).jfif", ["responsive-img",], "png", ["./img/download.jfif"])
document.body.append(pp.render())