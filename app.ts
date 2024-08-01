type Account = [string, string]
type Primitive = number | string | boolean | undefined | null | symbol

const user: Account = ['Gertrude Bennett', 'fa@bonkudcah.cz']

enum HTTP {
  StatusOk = 200,
  StatusCreated = 201,
  StatusNoContent = 204,
  StatusNotfound = 404,
  StatusServerError = 500
}

enum Keyboard {
  Shift = 'shift',
  Ctrl = 'ctrl',
  Alt = 'alt',
}

function setup() {
  while(true) {

  }
}

function type(obj:unknown) {
  if(typeof obj !== 'object') {
    return typeof obj
  } 
  return (Object.prototype.toString.call(obj) as string).replace(
    /^\[object (\w+)\]$/, (_, v:string)=>v.toLowerCase())
}

interface Post {
  readonly userId:number
  readonly id:number
  title:string
  body:string
  created?:Date
}

interface Comparator<T=unknown> {
  (first:T, second:T): boolean
}

const post: Post = {
  userId:1,
  id:1,
  title:'',
  body:'',
}

const eq: Comparator = (x, y) => x === y

type ReduceHandler<T> = (x:T, y:T)=>T

function reduce<T extends number|string>(target:T[], handler:ReduceHandler<T>, initial:T):T {
  for(let i = 0; i < target.length; i++) {
    
  }
  return initial
}

class CGIHTTPServer {
  protected host: string
  private port: number

  constructor(host:string, port:number) {
    this.host = host
    this.port = port
  }
}

class Dict {
  constructor(obj:object) {

  }
}

function store(...args:unknown[]) {}

function readable(_:unknown, descriptor:unknown) {}
function writable() {}
function derived() {}

@store
class UserStore {
  @readable
  public token:string = ''

}

interface AjaxResult {}
interface AjaxOptions {}

function ajax(url:string): Promise<AjaxResult>
function ajax(url:string, method:'GET'|'POST'): Promise<AjaxResult>
function ajax(url:string, options:AjaxOptions): Promise<AjaxResult>
function ajax(...args:unknown[]) {
  return new Promise(()=>{

  })
}

abstract class Component {
  abstract render():void
}

class Card extends Component {
  render(): void {
    throw new Error("Method not implemented.")
  }
}

console.log(user, HTTP.StatusNotfound, type(/\./))
console.log(eq('0', 0))
console.log(Keyboard)
