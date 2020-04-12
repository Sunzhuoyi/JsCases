const log = console.log;

// search
let re = "doubledare".search(/le/);
log(3, re)

// "[" "]"有着特殊的意义,包含一个字符列表，只要其中一个字符被找到即可被匹配上

let notABC = /[^ABC]/
let re2 = "ABCBCADA".search(notABC)
log(9, re2);

// test
let a = /a/.test("blah")
log(14, a);
let b = /^a$/.test("blah")
log(17, b)

//match
let e = "No".match(/yes/i);
let c = "... yes".match(/yes/i)
let d = "Giant Ape".match(/giant (\w+)/i);
log(23, e)
log(23, c)
log(23, d)

// replace
let f = "Borobudur".replace(/[ou]/g, "a");
log(29, f)
