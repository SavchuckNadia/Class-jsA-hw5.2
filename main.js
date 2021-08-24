class MyString {
    reverse(string) {
        let str1 = '';
        for (let i = string.length - 1; i >= 0; i--) {
            str1 += string.charAt(i);
        }
        return str1
    }
    ucFirst(string) {
        let str1 = string[0].toUpperCase();
        str1 += string.slice(1);
        return str1
    }
    ucWords(string) {
        let str1 = ''
        string = string.split(' ');
        string.forEach(element => {
            element = element[0].toUpperCase() + element.slice(1)
            str1 += element + ' '
        });
        return str1
    }
}
const str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));
