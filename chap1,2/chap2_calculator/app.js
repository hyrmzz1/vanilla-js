const calculator = {
    plus: function(a,b) {
        console.log(a+b);
    },

    minus: function(a,b) {
        console.log(a-b);
    },

    multi: function(a,b) {
        console.log(a*b);
    },

    div: function(a,b) {
        console.log(a/b);
    }
};
// object 사용시 꼴 잘보기. const 이름 = {property1: ~~, property2: ~~, ... , property: ~~};

calculator.plus(3,2);
calculator.plus(3,2,1); // 인수 더 많아봤자 앞 2개만 사용된다.
calculator.div(832,34);
calculator.minus(482973,3);
calculator.multi(986,2);